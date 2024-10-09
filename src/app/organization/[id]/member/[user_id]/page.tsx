"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { fetchWithAuth } from '@/utils/api';


export default function News({ params }: { params: { id: string, user_id: string }}) {

  const [addData, setAddData] = useState(false);
  const [memberData, setMemberData] = useState([]);
  const [permissionData, setPermissionData] = useState<string[]>([]);
  const [organizationLoading, setOrganizationLoading] = useState(true);
  const [permissions, setPermissions] = useState<string[]>([]);
  const url = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}/member/${params.user_id}`;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setPermissions(prev => {
      const updatedPermissions = checked 
          ? [...prev, id]
          : prev.filter(permission => permission !== id);
      console.log(updatedPermissions);
      return updatedPermissions;
    });
  }

  const fetchData = async () => {
    try {
        const data = await fetchWithAuth(url, 'POST', { 'permissions': permissions });
    } catch (error) {
        console.error('データ取得エラー:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };
    
  useEffect(() => {
		const fetchData = async () => {
				try {
						const data = await fetchWithAuth(url, 'GET');
            setAddData(data['add']);
            setMemberData(data['users']);
						setPermissionData(data['permissions']);
				} catch (error) {
						console.error('データ取得エラー:', error);
				} finally {
						setOrganizationLoading(false);
				}
		};

		fetchData();
}, []);

  useEffect(() => {
  //   console.log(permissionData.includes('news'));
  //   console.log(permissionData.includes('shop'));
  }, [permissionData]);

    return (
        <main>
            <div className="mx-3.5 my-10">
								{organizationLoading ? (<Loading />) : (
                  <>
                    <div className="container mx-auto text-white text-center m-12">
                        <h2 className="text-3xl font-light text-shadow-md m-3">
                            {memberData[0]['username']}
                        </h2>
                        <p className="text-sm mb-4">
                            メンバー管理
                        </p>
                    </div>
                  </>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="news"
                      checked={permissionData.includes('news')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> News</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="shop"
                      defaultChecked={permissionData.includes('shop')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Shop</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="menu"
                      defaultChecked={permissionData.includes('menu')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Menu</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="event"
                      defaultChecked={permissionData.includes('event')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Event</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="band"
                      defaultChecked={permissionData.includes('band')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Band</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="karaoke"
                      defaultChecked={permissionData.includes('karaoke')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Karaoke</label>
                  </div>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <input 
                      type="checkbox"
                      id="inspection"
                      defaultChecked={permissionData.includes('inspection')}
                      onChange={handleInputChange}
                      disabled={!addData}
                    />
                    <label> Inspection</label>
                  </div>
                  {addData && (
                    <div className='text-center'>
                      <button type="submit" className='m-6 p-4 border rounded-lg bg-gray-600 text-white'>更新</button>
                    </div>
                  )}
                </form>
            </div>
        </main>
    );
}
