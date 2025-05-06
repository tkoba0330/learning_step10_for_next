export default function DynamicRoutingExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">動的ルーティング</h1>
      
      <div className="prose lg:prose-xl">
        <p className="lead text-xl mb-6">
          Next.jsの動的ルーティングを使うと、URLパスの一部をパラメータとして扱い、1つのページコンポーネントで複数のURLパターンに対応できます。
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">基本的な動的ルーティング</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <code className="font-mono text-sm">
            /src/app/blog/[id]/page.tsx
          </code>
        </div>
        
        <p>
          上記のファイル構造では、<code className="bg-gray-100 px-2 py-1 rounded">[id]</code> が動的パラメータになります。
          これにより、<code className="bg-gray-100 px-2 py-1 rounded">/blog/1</code>、<code className="bg-gray-100 px-2 py-1 rounded">/blog/2</code> などのURLは
          すべて同じページコンポーネントにルーティングされます。
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">パラメータの取得方法</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-auto">
          <pre className="language-tsx">
            <code>{`export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>ブログ記事 {params.id}</h1>
      <p>URLのパラメータ: {params.id}</p>
    </div>
  );
}`}</code>
          </pre>
        </div>
        
        <p>
          ページコンポーネントは自動的に <code className="bg-gray-100 px-2 py-1 rounded">params</code> プロパティを受け取り、
          この中に動的セグメントの値が含まれています。TypeScriptを使用する場合は、
          <code className="bg-gray-100 px-2 py-1 rounded">{ params: { id: string } }</code> のようにパラメータの型を指定できます。
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">実用例: ブログ記事の表示</h2>
        
        <p>
          実際のアプリケーションでは、通常は動的パラメータを使用してデータベースやAPIからデータを取得します。
          例えば、ブログ記事のIDに基づいて、対応する記事データを取得し表示するといった使い方が一般的です。
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-auto">
          <pre className="language-tsx">
            <code>{`async function getPostData(id: string) {
  // APIからデータを取得する例
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);
  
  if (!post) {
    return <div>記事が見つかりません</div>;
  }
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>著者: {post.author}</p>
      <div>{post.content}</div>
    </div>
  );
}`}</code>
          </pre>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
          <h3 className="font-bold text-blue-800">ポイント</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>動的ルーティングはデータベースのレコードIDや、ブログのスラグ、製品IDなどに最適です。</li>
            <li>TypeScriptを使うことで、パラメータの型安全性を確保できます。</li>
            <li>パラメータのバリデーションを行うことで、無効なパラメータに対する処理を追加できます。</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">関連トピック</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/examples/catch-all-routes" className="text-blue-600 hover:underline">
              キャッチオールルート ([...slug])
            </a>
          </li>
          <li>
            <a href="/docs/features/data-fetching" className="text-blue-600 hover:underline">
              データフェッチング
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 