// オプショナルキャッチオールルートのデモページ
export default function DocPage({ params }: { params: { slug?: string[] } }) {
  // slugが存在しない場合（トップレベルの/docsにアクセスした場合）はトップページを表示
  if (!params.slug) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Next.js ドキュメント</h1>
        <p className="mb-6">Next.jsの公式ドキュメントへようこそ。以下のセクションから詳細を確認できます。</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="/docs/getting-started" 
            className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">はじめに</h2>
            <p className="text-gray-600">Next.jsをはじめるための基本的な情報</p>
          </a>
          
          <a 
            href="/docs/features/routing" 
            className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">機能</h2>
            <p className="text-gray-600">Next.jsの主要機能についての解説</p>
          </a>
        </div>
      </div>
    );
  }
  
  // 以下は通常のキャッチオールルートと同じ処理
  const slugPath = params.slug.join('/');
  
  // ドキュメントの構造（実際のアプリではデータベースやAPIから取得する）
  const docs = {
    'getting-started': {
      title: 'はじめに',
      content: 'Next.jsへようこそ！このガイドではNext.jsの基本を学びます。'
    },
    'getting-started/installation': {
      title: 'インストール方法',
      content: 'Next.jsをインストールするには、次のコマンドを実行します: `npx create-next-app@latest`'
    },
    'getting-started/project-structure': {
      title: 'プロジェクト構造',
      content: 'Next.jsのプロジェクトは、app/ ディレクトリを中心に構成されています。'
    },
    'features/routing': {
      title: 'ルーティング',
      content: 'Next.jsのApp Routerは、ディレクトリ構造に基づいたファイルシステムルーティングを採用しています。'
    },
    'features/data-fetching': {
      title: 'データフェッチング',
      content: 'Next.jsでは、React Server ComponentsとfetchAPIを使用してデータを取得できます。'
    }
  };
  
  // slugPathに一致するドキュメントを取得
  const doc = docs[slugPath as keyof typeof docs];
  
  // ドキュメントが見つからない場合
  if (!doc) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
          <h1 className="font-bold text-xl mb-2">ドキュメントが見つかりません</h1>
          <p>申し訳ありませんが、リクエストされたパス "{slugPath}" に一致するドキュメントはありません。</p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">利用可能なドキュメント:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {Object.keys(docs).map(path => (
              <li key={path}>
                <a href={`/docs/${path}`} className="text-blue-500 hover:underline">
                  {docs[path as keyof typeof docs].title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  // パンくずリストの生成
  const breadcrumbs = [
    { name: 'ドキュメント', path: '/docs' },
    ...params.slug.map((segment, index) => {
      const path = params.slug.slice(0, index + 1).join('/');
      return {
        name: segment,
        path: `/docs/${path}`
      };
    })
  ];
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path}>
            {index > 0 && <span className="mx-2">/</span>}
            <a href={crumb.path} className="hover:text-blue-500">
              {crumb.name}
            </a>
          </span>
        ))}
      </nav>
      
      <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>
      
      <div className="prose lg:prose-xl">
        <p>{doc.content}</p>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="font-semibold">
          現在のパス: <code className="bg-gray-200 px-2 py-1 rounded">{slugPath}</code>
        </p>
        <p className="mt-2">
          slug配列: <code className="bg-gray-200 px-2 py-1 rounded">[{params.slug.map(s => `"${s}"`).join(', ')}]</code>
        </p>
        <p className="mt-2 text-gray-500">
          このページはオプショナルキャッチオールルート (<code>[[...slug]]</code>) を使用しています
        </p>
      </div>
    </div>
  );
} 