'use client';

import Weather from './components/Weather';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        リアルタイムお天気アプリ
      </h1>
      <Weather />
    </div>
  );
}
