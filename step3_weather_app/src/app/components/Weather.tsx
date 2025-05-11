'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Weather.module.css';

// 天気データの型定義
interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
}

// 位置情報の型定義
interface Location {
  latitude: number;
  longitude: number;
}

// 天気アイコンのマッピング
const weatherIcons: { [key: string]: string } = {
  'Clear': '☀️',
  'Clouds': '☁️',
  'Rain': '🌧️',
  'Snow': '❄️',
  'Drizzle': '🌦️',
  'Thunderstorm': '⛈️',
  'Mist': '🌫️',
  'Fog': '🌫️',
};

// 天気の日本語訳マッピング
const weatherTranslations: { [key: string]: string } = {
  'Clear': '晴れ',
  'Clouds': '曇り',
  'Rain': '雨',
  'Snow': '雪',
  'Drizzle': '小雨',
  'Thunderstorm': '雷雨',
  'Mist': '霧',
  'Fog': '霧',
};

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  // 温度に基づく表示メッセージの決定
  const getTemperatureMessage = (temp: number): string => {
    if (temp >= 30) return '暑い！熱中症に注意！';
    if (temp >= 25) return '暖かいね！';
    if (temp >= 15) return '過ごしやすい気温！';
    return '寒いから上着が必要かも！';
  };

  // 位置情報を取得
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('お使いのブラウザは位置情報をサポートしていません😢');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLocationError(null);
      },
      (error) => {
        console.error('位置情報の取得に失敗:', error);
        setLocationError('位置情報の取得に失敗しました。東京の天気を表示します。');
      }
    );
  }, []);

  // 天気データを取得
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?`;
        
        // 位置情報があればその場所の天気を、なければ東京の天気を取得
        if (location) {
          url += `lat=${location.latitude}&lon=${location.longitude}`;
        } else {
          url += `q=Tokyo,jp`;
        }
        
        url += `&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&lang=ja`;
        
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('天気データの取得に失敗しました。しばらく待ってから再試行してください。');
        setLoading(false);
        console.error('Error fetching weather data:', err);
      }
    };

    fetchWeatherData();

    // 5分ごとに天気データを更新
    const interval = setInterval(fetchWeatherData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [location]); // locationが変更されたら再取得

  if (loading) {
    return (
      <div className={styles['weather-card']}>
        <p className={styles.message}>読み込み中...⏳</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles['weather-card']}>
        <p className={styles.message}>エラー: {error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className={styles['weather-card']}>
        <p className={styles.message}>天気データがありません</p>
      </div>
    );
  }

  return (
    <div className={styles['weather-card']}>
      <h2 className={styles.location}>
        {weatherData.name}の天気
        {locationError && (
          <span className={styles.message}>
            {locationError}
          </span>
        )}
      </h2>
      <div className={styles['weather-icon']}>
        {weatherIcons[weatherData.weather[0].main] || '🌈'}
      </div>
      <div className={styles['weather-info']}>
        <p className={styles.temperature}>
          気温: {Math.round(weatherData.main.temp)}°C
          <span className={styles.message}>
            {getTemperatureMessage(weatherData.main.temp)}
          </span>
        </p>
        <p className={styles.temperature}>
          体感温度: {Math.round(weatherData.main.feels_like)}°C
        </p>
        <p className={styles.humidity}>湿度: {weatherData.main.humidity}%</p>
        <p className={styles.condition}>
          天気: {weatherTranslations[weatherData.weather[0].main] || weatherData.weather[0].description}
        </p>
      </div>
    </div>
  );
} 