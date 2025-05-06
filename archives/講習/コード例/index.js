// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <section>
        <h2>自己紹介</h2>
        <p>はじめまして！Next.jsを学んでいます。</p>
        <p>このサイトはNext.jsの学習の一環として作成しました。</p>
      </section>
      <style jsx>{`
        div {
          font-family: sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #0070f3;
          text-align: center;
        }
        section {
          margin-top: 40px;
          padding: 20px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
} 