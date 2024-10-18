"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCirclePlay, faClock, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { ImportantNews } from "@/components/ImportantNews";
import { Loading } from "@/components/Loading";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";

const NewsPage = () => {
	const [now, setNow] = useState(new Date());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/event';
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
					setData(data['event']);
					setNow(new Date(data['now']));
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
					<FontAwesomeIcon icon={faCalendar} /> Event
					</h2>
					<p className="text-sm mb-4">
					イベント情報
					</p>
				</div>
				<div className="container mx-auto text-xl md:w-6/12 w-full">
				{loading && <Loading />}
				{data.map((event) => (	
					<Link key={event['id']} href={`/event/${event['id']}`}>
						<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
							<p className="text-xs my-1.5 text-gray-700">
								{new Date(event['start']).toLocaleDateString('ja-JP')} {new Date(event['start']).toLocaleTimeString('ja-JP', {hour: '2-digit', minute:'2-digit'})} ~ {new Date(event['end']).toLocaleTimeString('ja-JP', {hour: '2-digit', minute:'2-digit'})}
								{new Date(event['start']) < now && now < new Date(event['end']) && <span className="text-green-600">　<FontAwesomeIcon icon={faCirclePlay} /> 進行中</span>}
								{now < new Date(event['start']) && now < new Date(event['end']) && <span className="text-gray-600">　<FontAwesomeIcon icon={faClock} /> 開始前</span>}
								{new Date(event['start']) < now && new Date(event['end']) < now && <span className="text-red-600">　<FontAwesomeIcon icon={faCircleStop} /> 終了済み</span>}
							</p>
							<h3 className="text-base">{event['title']}</h3>
							<p className="text-xs my-1.5 text-gray-700">@{event['place']}</p>
						</div>
					</Link>
				))}
				</div>
			</div>
		</main>
	);
}

export default NewsPage;
