import Link from "next/link";

export const ImportantNews: React.FC = () => {

    return (
        <div className="container mx-auto px-3">
            <div className="w-full m-auto px-4 py-4 bg-yellow-50 rounded-lg inline-block">
                <p className="text-red-500 py-1 font-bold">重要なお知らせ</p>
                <Link href={"/news/" + 1}>
                    <p className="py-1 text-lg">当日は公共交通機関でお越しください</p>
                </Link>
            </div>
        </div>
    );
};