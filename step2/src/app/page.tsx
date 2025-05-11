import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl font-bold">Next.jsアプリへようこそ！</h1>
        <p className="mt-4 text-xl">これはステップ2のサンプルアプリです</p>
        
        <div className="mt-8 flex space-x-4">
          <Link href="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ブログページへ
          </Link>
          
          <Link href="/docs" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ドキュメントへ
          </Link>
        </div>
        
        <div className="mt-12 w-full">
          <h2 className="text-2xl font-bold mb-4">このアプリの機能：</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>動的ルーティング</strong> - <code>/blog/[id]</code> パターンを使用したブログ記事ページ
            </li>
            <li>
              <strong>キャッチオールルート</strong> - <code>/docs/[...slug]</code> パターンを使用したドキュメントページ
            </li>
            <li>
              <strong>オプショナルキャッチオールルート</strong> - <code>/docs/[[...slug]]</code> パターンの実装例
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
} 