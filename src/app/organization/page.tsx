"use client";

import { ImportantNews } from "@/components/ImportantNews";
import { useState, useEffect } from "react";
import { Loading } from "@/components/Loading";
import Link from "next/link";
import { fetchWithAuth } from '@/utils/api';

export default function Top() {
	const [organizationData, setOrganizationData] = useState([]);
	const [organizationLoading, setOrganizationLoading] = useState(true);
	const url = process.env.NEXT_PUBLIC_API_URL + '/organization';

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
				<div className="container mx-auto text-white text-center m-12">
					<h2 className="text-3xl font-light text-shadow-md m-3">
					Organization
					</h2>
					<p className="text-sm mb-4">
					オーガナイゼーション
					</p>
				</div>
				<div className="container mx-auto text-xl md:w-6/12 w-full">
				{organizationLoading && <Loading />}
				{organizationData.map((organization) => (	
					<Link key={organization['id']} href={`/organization/${organization['id']}`}>
						<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
							<h3 className="text-base">{organization['name']}</h3>
						</div>
					</Link>
				))}
					<Link href={"/organization/new"}>
							<p className="text-center text-white hover:text-gray-200 transition duration-100 text-base">新規作成</p>
					</Link>
				</div>
			</div>
			</main>
	);
}
