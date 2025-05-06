import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js 入門</title>
        <meta name="description" content="Next.js 学習ステップ1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>

        <div className={styles.introduction}>
          <h2>自己紹介</h2>
          <p>はじめまして！Next.jsを学んでいる初心者です。</p>
          <p>このページはNext.jsの学習の一環として作成しました。</p>
          <p>これからプログラミングについて一緒に学んでいきましょう！</p>
          <p>hogehoge</p>
          <p>hogehoge</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Next.js 学習ステップ1</p>
      </footer>
    </div>
  );
};

export default Home; 
