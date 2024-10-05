"use client";

import { ImportantNews } from "@/components/ImportantNews";
import { useState, useEffect } from "react";
import { Loading } from "@/components/Loading";
import Link from "next/link";
import Cookies from 'js-cookie';

export default function Top() {

	return (
			<main>
				<ImportantNews />
				<h1 className="text-white font-bold text-center my-20 text-xl text-shadow-md mb-32 h-96f">
					<p className="my-5">香川高等専門学校</p>
					<p className="my-5">詫間キャンパス</p>
					<p className="my-20 text-6xl">電波祭</p>
					<p className="my-5">2024年11月2日-3日</p>
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 container mx-auto">
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-3xl font-light text-shadow-md">
							Theme
							</h2>
							<p className="text-xs mb-4 mt-1">
							今年のテーマ
							</p>
						</div>
						<div className="container mx-auto text-base">
							<div className="w-full p-4 bg-white flex justify-between rounded-lg">
								<p>電波事変</p>
							</div>
						</div>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-3xl font-light text-shadow-md">
							News
							</h2>
							<p className="text-xs mb-4 mt-1">
							運営からのお知らせ
							</p>
						</div>
						<div className="container mx-auto text-xl">
						</div>
						<Link href={"/news"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">お知らせ一覧</p>
						</Link>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-3xl font-light text-shadow-md">
							Shop
							</h2>
							<p className="text-xs mb-4 mt-1">
							模擬店情報
							</p>
						</div>
						<div className="container mx-auto text-xl">	
							<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100">
								<p className="text-base">模擬店情報は下記リンクよりご覧ください</p>
							</div>
						</div>
						<Link href={"/shop"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">模擬店一覧</p>
						</Link>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-3xl font-light text-shadow-md">
							Event
							</h2>
							<p className="text-xs mb-4 mt-1">
							イベント情報
							</p>
						</div>
						<div className="container mx-auto text-xl">	
						</div>
						<Link href={"/event"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">イベント一覧</p>
						</Link>
					</div>
				</div>
			</main>
	);
}
