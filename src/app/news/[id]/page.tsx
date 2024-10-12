"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ImportantNews } from '@/components/ImportantNews';
import { Loading } from '@/components/Loading';

export default function News({ params }: { params: { id: string }}) {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0);
	const [loading, setLoading] = useState(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/news/' + params.id;
    const csrftoken = Cookies.get('csrftoken') || '';

    const fetchNews = async () => {
        const response = await fetch(apiUrl, {
            method: 'GET',
						credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
        });
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            setData(data['news']);
            setStatus(response.status);
        }
		setLoading(false);
    };

    useEffect(() => {
        fetchNews(); // 関数を呼び出す
    }, []); // コンポーネントのマウント時に実行

    return (
        <main>
            <ImportantNews />
            <div className="mx-3.5 my-10">
                <div className="container mx-auto text-white text-center m-12">
                    <h2 className="text-3xl font-light text-shadow-md m-3">
                        News
                    </h2>
                    <p className="text-sm mb-4">
                        運営からのお知らせ
                    </p>
                </div>
								{loading ? (<Loading />) : (
                <div className="container mx-auto text-xl md:w-6/12 w-full">
                        <div className="w-full p-4 bg-white rounded-lg py-6 my-4 transition duration-100">
                            {status === 200 ? ( // dataが空でないことを確認
                                <>
                                    <p className="text-xs my-1.5 text-gray-700">{new Date(data[0]['created_at']).toLocaleDateString('ja-JP')}</p>
                                    <h3 className="text-base mb-4">{data[0]['title']}</h3>
                                    <p className='text-sm'>{data[0]['detail']}</p>
                                </>
                            ) : (
                                <p className="text-xs my-1.5 text-gray-700">指定されたニュースが見つかりませんでした</p> // デフォルトメッセージ
                            )}
                        </div>
                    </div>
								)}
                                <Link href={"/news"}>
                                    <p className="text-center text-white hover:text-gray-200 transition duration-100">お知らせ一覧</p>
                                </Link>
            </div>
        </main>
    );
}