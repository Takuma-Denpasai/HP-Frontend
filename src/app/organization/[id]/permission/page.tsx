"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { fetchWithAuth } from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function News({ params }: { params: { id: string }}) {

  const [permission, setPermission] = useState('');
  const [havePermission, setHavePermission] = useState<string[]>([]);
  const [organizationLoading, setOrganizationLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}/permission`;
  const router = useRouter();
    
  useEffect(() => {
		const fetchData = async () => {
				try {
						const data = await fetchWithAuth(url, 'GET');
            setHavePermission(data['permissions']);
				} catch (error) {
						console.error('データ取得エラー:', error);
				} finally {
						setOrganizationLoading(false);
				}
		};

		fetchData();
  }, []);

  const fetchData = async () => {
    try {
        if (permission !== '') {
          const data = await fetchWithAuth(url, 'POST', { 'permission': permission });
        }
    } catch (error) {
        console.error('データ取得エラー:', error);
    } finally {
      router.push(`/organization/${params.id}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPermission(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

    return (
        <main>
            <div className="mx-3.5 my-10">
								{organizationLoading ? (<Loading />) : (
                  <>
                    <div className="container mx-auto text-white text-center m-12">
                        <h2 className="text-3xl font-light text-shadow-md m-3">
                            Request Organization Permission
                        </h2>
                        <p className="text-sm mb-4">
                            オーガナイゼーション権限の申請
                        </p>
                    </div>
                    <div className="container mx-auto text-xl md:w-6/12 w-full text-center">
                      <form onSubmit={handleSubmit}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100 text-base">
                          <select name='permission' onChange={handleInputChange}>
                            <option value={""} hidden>-- 選択してください --</option>
                            {!havePermission.includes('news') && <option value={"news"}>news</option>}
                            {!havePermission.includes('shop') && <option value={"shop"}>shop</option>}
                            {!havePermission.includes('event') && <option value={"event"}>event</option>}
                            {!havePermission.includes('band') && <option value={"band"}>band</option>}
                            {!havePermission.includes('karaoke') && <option value={"karaoke"}>karaoke</option>}
                            {!havePermission.includes('inspection') && <option value={"inspection"}>inspection</option>}
                          </select>
                        </div>
                        <button type="submit" className='m-6 p-4 border rounded-lg bg-gray-600 text-white'>申請</button>
                      </form>
                    </div>
                  </>
                )}
            </div>
            <Link href={`/organization/${params.id}`} className='text-center'>
              <p className='text-white'>オーガナイゼーションメニューへ戻る</p>
            </Link>
        </main>
    );
}