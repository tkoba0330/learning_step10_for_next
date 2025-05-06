export default function CatchAllRoutesExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">キャッチオールルート</h1>
      
      <div className="prose lg:prose-xl">
        <p className="lead text-xl mb-6">
          キャッチオールルートは、複数のパスセグメントを一度にキャプチャできる強力な機能です。
          これを使うと、ドキュメントサイトやブログなど、階層的なURLに対応するページを柔軟に作成できます。
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">キャッチオールルートの作成方法</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <code className="font-mono text-sm">
            /src/app/docs/[...slug]/page.tsx
          </code>
        </div>
        
        <p>
          上記のファイル構造では、<code className="bg-gray-100 px-2 py-1 rounded">[...slug]</code> が「キャッチオール」セグメントになります。
          これにより、<code className="bg-gray-100 px-2 py-1 rounded">/docs/a</code>、<code className="bg-gray-100 px-2 py-1 rounded">/docs/a/b</code>、<code className="bg-gray-100 px-2 py-1 rounded">/docs/a/b/c</code> などの
          任意の長さのパスをすべて同じページコンポーネントで処理できます。
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
          <p className="text-yellow-800">
            <strong>注意点:</strong> 通常のキャッチオールルートでは、最低でも1つのパスセグメントが必要です。
            つまり、<code className="bg-gray-100 px-1">/docs</code> 自体にはマッチしません。
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">パラメータの取得方法</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-auto">
          <pre className="language-tsx">
            <code>{`export default function DocsPage({ params }: { params: { slug: string[] } }) {
  // slugは配列として取得される
  console.log(params.slug); // 例: ['a', 'b', 'c']
  
  // 配列を連結してパス文字列を作成
  const slugPath = params.slug.join('/');
  console.log(slugPath); // 例: 'a/b/c'
  
  return (
    <div>
      <h1>ドキュメントページ</h1>
      <p>現在のパス: {slugPath}</p>
    </div>
  );
}`}</code>
          </pre>
        </div>
        
        <p>
          キャッチオールルートの最大の特徴は、<code className="bg-gray-100 px-2 py-1 rounded">params.slug</code> が<strong>配列</strong>として受け取れることです。
          各配列要素はURLパスの各セグメントに対応します。例えば、<code className="bg-gray-100 px-2 py-1 rounded">/docs/getting-started/installation</code> にアクセスした場合、
          <code className="bg-gray-100 px-2 py-1 rounded">params.slug</code> は <code className="bg-gray-100 px-2 py-1 rounded">['getting-started', 'installation']</code> となります。
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">オプショナルキャッチオールルート</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <code className="font-mono text-sm">
            /src/app/docs/[[...slug]]/page.tsx
          </code>
        </div>
        
        <p>
          二重の角括弧 <code className="bg-gray-100 px-2 py-1 rounded">[[...slug]]</code> を使うと、「オプショナルキャッチオールルート」になります。
          これは通常のキャッチオールルートと同様ですが、ルートパス（この例では <code className="bg-gray-100 px-2 py-1 rounded">/docs</code>）にもマッチするようになります。
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-auto">
          <pre className="language-tsx">
            <code>{`export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  // オプショナルキャッチオールルートではslugがundefinedになる可能性がある
  if (!params.slug) {
    return (
      <div>
        <h1>ドキュメントトップページ</h1>
        <p>ここは /docs にアクセスした場合に表示されます</p>
      </div>
    );
  }
  
  // 以降は通常のキャッチオールルートと同じ処理
  const slugPath = params.slug.join('/');
  
  return (
    <div>
      <h1>ドキュメントページ</h1>
      <p>現在のパス: {slugPath}</p>
    </div>
  );
}`}</code>
          </pre>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
          <h3 className="font-bold text-blue-800">キャッチオールルートの活用例</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>ドキュメントサイト（複数の階層を持つナレッジベース）</li>
            <li>階層的なカテゴリを持つブログや商品ページ</li>
            <li>ファイルシステムのような構造を持つアプリケーション</li>
            <li>多言語対応サイト（例: <code className="bg-gray-100 px-1">/[lang]/[...slug]</code>）</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">関連トピック</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/examples/dynamic-routing" className="text-blue-600 hover:underline">
              動的ルーティング ([id])
            </a>
          </li>
          <li>
            <a href="/docs/features/routing" className="text-blue-600 hover:underline">
              Next.jsのルーティング
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 