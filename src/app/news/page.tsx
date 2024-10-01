import { ImportantNews } from "@/components/ImportantNews";
import Link from "next/link";

export default function Top() {

	const images: string[] = [ "/next.svg", "/vercel.svg" ];

	return (
		<div>
			<ImportantNews />
			<div className="mx-3.5 my-10">
				<div className="container mx-auto text-white text-center m-12">
					<h2 className="text-2xl font-bold text-shadow-md m-3">
					News
					</h2>
					<p className="text-sm mb-4">
					運営からのお知らせ
					</p>
				</div>
				<div className="container mx-auto text-xl md:w-6/12 w-full">	
					<Link href={"/news/3"}>
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
			</div>
		</div>
	);
}
