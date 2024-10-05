"use client";

import { useState, useEffect } from "react";
import { Loading } from "@/components/Loading";

export default function Login() {
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/logout/';

  const fetchAuth = async () => {
      await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      setLoading(false);
  };

  useEffect(() => {
      fetchAuth(); // 関数を呼び出す
  }, []); // コンポーネントのマウント時に実行

  return (
    <main className="mx-3.5 my-10">
      <div className="container mx-auto text-white text-center m-12">
        <h2 className="text-3xl font-light text-shadow-md m-3">
        Logout
        </h2>
        <p className="text-sm mb-4">
        ログアウト
        </p>
      </div>
      <div className="container mx-auto text-xl md:w-6/12 w-full">
          <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100 text-center">
              {loading ? (
                <Loading /> // Loadingコンポーネントを表示
              ) : (
                <p>ログアウトが完了しました</p>
              )}
          </div>
      </div>
    </main>
  );
}