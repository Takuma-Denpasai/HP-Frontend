"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/utils/api';

export default function News({ params }: { params: { id: string, news_id: string }}) {

  const [status, setStatus] = useState(0);
  const url = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}/news/${params.news_id}/delete`;
  const router = useRouter();

  const fetchData = async () => {
    try {
        const data = await fetchWithAuth(url, 'POST', { 'delete': true });
    } catch (error) {
        console.error('データ取得エラー:', error);
    } finally {
      if (status === 201) {
        alert('削除しました');
      } else if (status === 403) {
        alert('権限がありません');
      }
      router.push(`/organization/${params.id}/news`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

    return (
      <main>
      <div className="mx-3.5 my-10">
        <div className="container mx-auto text-white text-center m-12">
          <h2 className="text-3xl font-light text-shadow-md m-3">
            Delete News
          </h2>
          <p className="text-sm mb-4">
            お知らせを削除
          </p>
        </div>
        <div className="container mx-auto text-xl md:w-6/12 w-full">
          <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100 text-center">
            <form onSubmit={handleSubmit}>
              <p>お知らせを削除しますか？</p>
              <button type="submit" className='m-6 p-4 border rounded-lg bg-gray-600 text-white'>削除</button><br />
              <Link href={`/organization/${params.id}/news/${params.news_id}`}><p className='text-base'>キャンセル</p></Link>
            </form>
          </div>
        </div>
      </div>
    </main>
    );
}
