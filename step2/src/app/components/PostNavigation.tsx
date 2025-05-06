import Link from 'next/link';

interface PostNavigationProps {
  currentId: string;
  maxId: number;
}

export default function PostNavigation({ currentId, maxId }: PostNavigationProps) {
  const id = parseInt(currentId);
  const hasPrevious = id > 1;
  const hasNext = id < maxId;
  
  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
      {hasPrevious ? (
        <Link href={`/blog/${id - 1}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          ← 前の記事
        </Link>
      ) : (
        <div></div>
      )}
      
      <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        一覧に戻る
      </Link>
      
      {hasNext ? (
        <Link href={`/blog/${id + 1}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          次の記事 →
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
} 