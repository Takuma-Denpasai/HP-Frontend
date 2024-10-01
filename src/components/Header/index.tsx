'use client'

import Link from "next/link";
import { useState } from "react";

export const Header: React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const switchMenuOpen = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className="container my-4 mx-auto px-3 top-0 sticky">
            <header className="w-full p-4 bg-white flex justify-between rounded-lg border-gray-300 border">
                <Link href={"/"}>
                    <h1>香川高専 電波祭</h1>
                </Link>

                <button 
                    onClick={switchMenuOpen} 
                    type="button" 
                    className="z-10 space-y-2"
                >
                    <div 
                        className={
                            openMenu 
                                ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' 
                                : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                        } 
                    />
                    <div 
                        className={
                            openMenu 
                                ? 'opacity-0 transition duration-500 ease-in-out' 
                                : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                        } 
                    />
                    <div 
                        className={
                            openMenu 
                                ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out' 
                                : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
                        } 
                    />
                </button>

                <nav
                    className={
                    openMenu
                        ? 'text-left fixed bg-slate-50 right-0 top-0 w-64 h-screen flex flex-col justify-start pt-8 px-3 duration-300 ease-linear'
                        : 'fixed right-[-100%] duration-300 ease-linear'
                    }
                >
                    <ul className="mt-6 px-5">
                        <li className="my-4">
                            <Link href={"/"}>
                                <p className="text-3xl font-thin my-1">Top</p>
                                <p className="text-xs text-gray-500">トップページ</p>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href={"/news"}>
                                <p className="text-3xl font-thin my-1">News</p>
                                <p className="text-xs text-gray-500">運営からのお知らせ</p>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href={"/shop"}>
                                <p className="text-3xl font-thin my-1">Shop</p>
                                <p className="text-xs text-gray-500">模擬店情報</p>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href={"/event"}>
                                <p className="text-3xl font-thin my-1">Event</p>
                                <p className="text-xs text-gray-500">イベント情報</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};