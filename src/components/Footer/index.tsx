import Link from "next/link";

export const Footer: React.FC = () => {

    return (
        <div className="container mx-auto px-3">
            <footer className="w-full p-4 bg-white rounded-lg md:text-center my-4">
                <h2 className="text-3xl font-light">
                Menu
                </h2>
                <p className="text-xs mb-4 mt-1">
                メニュー
                </p>
                <div className="">	
                    <Link href={"/"}>
                        <p className="text-base text-gray-700 hover:text-gray-600 my-2 ml-4 md:ml-0">トップ</p>
                    </Link>
                    <Link href={"/news"}>
                        <p className="text-base text-gray-700 hover:text-gray-600 my-2 ml-4 md:ml-0">お知らせ</p>
                    </Link>
                    <Link href={"/shop"}>
                        <p className="text-base text-gray-700 hover:text-gray-600 my-2 ml-4 md:ml-0">模擬店</p>
                    </Link>
                    <Link href={"/event"}>
                        <p className="text-base text-gray-700 hover:text-gray-600 my-2 ml-4 md:ml-0">イベント</p>
                    </Link>
                </div>
                <p className="text-gray-500 text-xs my-4 text-center">©︎2024 電波祭実行委員会. All Right Reserved.</p>
            </footer>
        </div>
    );
};