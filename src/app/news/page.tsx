"use client";

import { ImportantNews } from "@/components/ImportantNews";
import { Loading } from "@/components/Loading";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";

const NewsPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/news';
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
				<div className="container mx-auto text-xl md:w-6/12 w-full">
				{loading && <Loading />}
				{data.map((news) => (	
					<Link key={news['id']} href={`/news/${news['id']}`}>
						<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
							<p className="text-xs my-1.5 text-gray-700">{new Date(news['created_at']).toLocaleDateString('ja-JP')}</p>
							<h3 className="text-base">{news['title']}</h3>
							<p className="text-xs my-1.5 text-gray-700">{news['user__username']} ({news['organization__name']})</p>
						</div>
					</Link>
				))}
				</div>
			</div>
		</main>
	);
}

export default NewsPage;
