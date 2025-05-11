import Link from 'next/link';

// データフェッチング関数
async function getBlogPosts() {
  // 実際のアプリではここでAPIを呼び出す
  // 今回はモックデータを返す
  return [
    { id: '1', title: '初めてのNext.js', excerpt: 'Next.jsは素晴らしいReactフレームワークです。' },
    { id: '2', title: '動的ルーティングについて', excerpt: '動的ルーティングを使うと、一つのページコンポーネントで複数のURLを処理できます。' },
    { id: '3', title: 'Reactの基本', excerpt: 'Reactはコンポーネントベースのライブラリです。' },
    { id: '4', title: 'TailwindCSSの使い方', excerpt: 'TailwindCSSはユーティリティファーストのCSSフレームワークです。' },
    { id: '5', title: 'TypeScriptとは', excerpt: 'TypeScriptはJavaScriptに型を追加した言語です。' },
  ];
}

export default async function BlogList() {
  // ブログ記事データを取得
  const blogPosts = await getBlogPosts();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="mt-4">
                <Link href={`/blog/${post.id}`} className="text-sm text-blue-500 hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 