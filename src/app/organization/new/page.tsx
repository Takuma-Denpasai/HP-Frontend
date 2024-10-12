"use client";

import { ImportantNews } from "@/components/ImportantNews";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from '@/utils/api';

export default function Top() {
  const [organization, setOrganization] = useState('');
	const url = process.env.NEXT_PUBLIC_API_URL + '/organization/new';
  const router = useRouter();

  const fetchData = async () => {
      try {
          const data = await fetchWithAuth(url, 'POST', { 'name': organization });
      } catch (error) {
          
      } finally {
        router.push('/organization');
      }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  }

	const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <main>
      <div className="mx-3.5 my-10">
        <div className="container mx-auto text-white text-center m-12">
          <h2 className="text-3xl font-light text-shadow-md m-3">
            New Organization
          </h2>
          <p className="text-sm mb-4">
            オーガナイゼーションを新規作成
          </p>
        </div>
        <div className="container mx-auto text-xl md:w-6/12 w-full">
          <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100 text-center">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Organization"
                  onChange={handleInputChange}
                  className='w-11/12 m-4 p-4 border-2 rounded-lg'
                />
              </div>
              <button type="submit" className='m-6 p-4 border rounded-lg bg-gray-600 text-white'>作成</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}