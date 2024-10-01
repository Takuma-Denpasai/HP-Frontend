import { ImportantNews } from "@/components/ImportantNews";
import Link from "next/link";

export default function Top() {

	const images: string[] = [ "/next.svg", "/vercel.svg" ];

	return (
		<>
			<ImportantNews />
			<main>
				<h1 className="text-white font-bold text-center my-20 text-xl text-shadow-md mb-32 h-96f">
					<p className="my-5">香川高等専門学校</p>
					<p className="my-5">詫間キャンパス</p>
					<p className="my-20 text-6xl">電波祭</p>
					<p className="my-5">2024年11月2日-3日</p>
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 container mx-auto">
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-2xl font-bold text-shadow-md">
							Theme
							</h2>
							<p className="text-sm mb-4">
							今年のテーマ
							</p>
						</div>
						<div className="container mx-auto text-xl">
							<div className="w-full p-4 bg-white flex justify-between rounded-lg">
								<p>電波事変</p>
							</div>
						</div>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-2xl font-bold text-shadow-md">
							News
							</h2>
							<p className="text-sm mb-4">
							運営からのお知らせ
							</p>
						</div>
						<div className="container mx-auto text-xl">	
							<Link href={"/news/2"}>
								<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100">
									<p className="text-xs my-1.5">2024年10月26日</p>
									<h3 className="">催し物プログラムを公開しました</h3>
								</div>
							</Link>
							<Link href={"/news/2"}>
								<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100">
									<p className="text-xs my-1.5">2024年10月25日</p>
									<h3 className="">公式Webサイトを公開しました</h3>
								</div>
							</Link>
						</div>
						<Link href={"/news"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">お知らせ一覧 ></p>
						</Link>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-2xl font-bold text-shadow-md">
							Shop
							</h2>
							<p className="text-sm mb-4">
							模擬店情報
							</p>
						</div>
						<div className="container mx-auto text-xl">	
							<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100">
								<p className="">模擬店情報は<br />下記リンクよりご覧ください</p>
							</div>
						</div>
						<Link href={"/shop"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">模擬店一覧 ></p>
						</Link>
					</div>
					<div className="mx-3.5 my-10">
						<div className="container mx-auto text-white">
							<h2 className="text-2xl font-bold text-shadow-md">
							Event
							</h2>
							<p className="text-sm mb-4">
							イベント情報
							</p>
						</div>
						<div className="container mx-auto text-xl">	
							<Link href={"/event/2"}>
								<div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100">
									<p className="text-xs my-1.5">2024年11月1日 午後6時00分~　<span className="text-green-500">● 進行中</span></p>
									<h3 className="">ビンゴ大会 <span className="text-gray-700">@第2体育館</span></h3>
								</div>
							</Link>
						</div>
						<Link href={"/event"}>
							<p className="text-center text-white hover:text-gray-200 transition dulation-100">イベント一覧 ></p>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
