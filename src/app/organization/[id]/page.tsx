"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ImportantNews } from '@/components/ImportantNews';
import { Loading } from '@/components/Loading';
import { fetchWithAuth } from '@/utils/api';

export default function News({ params }: { params: { id: string }}) {

  const [organizationData, setOrganizationData] = useState([]);
  const [organizationLoading, setOrganizationLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}`;
    
  useEffect(() => {
		const fetchData = async () => {
				try {
						const data = await fetchWithAuth(url, 'GET');
						setOrganizationData(data['organizations']);
				} catch (error) {
						console.error('データ取得エラー:', error);
				} finally {
						setOrganizationLoading(false);
				}
		};

		fetchData();
}, []);

    return (
        <main>
            <div className="mx-3.5 my-10">
								{organizationLoading ? (<Loading />) : (
                  <>
                    <div className="container mx-auto text-white text-center m-12">
                        <h2 className="text-3xl font-light text-shadow-md m-3">
                            {organizationData[0]['name']}
                        </h2>
                        <p className="text-sm mb-4">
                            オーガナイゼーションメニュー
                        </p>
                    </div>
                    <div className="container mx-auto text-xl md:w-6/12 w-full">
                      <Link href={`/organization/${params.id}/news`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">お知らせ</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/shop`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">模擬店</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/event`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">イベント</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/band`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">軽音楽</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/karaoke`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">カラオケ大会</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/member`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">オーガナイゼーションメンバー</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/inspection`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base">検証</h3>
                        </div>
                      </Link>
                      <Link href={`/organization/${params.id}/delete`}>
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                          <h3 className="text-base text-red-500">削除</h3>
                        </div>
                      </Link>
                    </div>
                  </>
                )}
                
            </div>
        </main>
    );
}