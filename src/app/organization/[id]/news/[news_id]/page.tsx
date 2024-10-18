"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faPaperPlane, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { fetchWithAuth } from '@/utils/api';
import { Loading } from '@/components/Loading';
import Link from 'next/link';

interface News {
  id: number;
  title: string;
  detail: string;
  show_top: boolean;
  important: boolean;
  organization__name: string;
  user__username: string;
  created_at: string;
  updated_at: string;
}

export default function News({ params }: { params: { id: string, news_id: string }}) {

  const [sendLoading, setSendLoading] = useState(false);
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}/news/${params.news_id}`;

  type LoginDataType = {
    title: string;
    detail: string;
    show_top: boolean;
    important: boolean;
  };

  const router = useRouter();

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    reValidateMode: 'onSubmit',
  });

  let count: number = 0;

  const onSubmit = async (data: any) => {
    setSendLoading(true);
    const csrftoken = Cookies.get('csrftoken') || '';
    
    try {
      const response = await fetchWithAuth(apiUrl, 'POST', data);
    } catch (error) {
      console.error('エラー:', error);
      alert('エラー:' + error);
    } finally {
      router.push(`/organization/${params.id}/news`);
    }
  };

  useEffect(() => {
		const fetchData = async () => {
				try {
						const data = await fetchWithAuth(apiUrl, 'GET');
            setNewsData(data['news']);
				} catch (error) {
						console.error('データ取得エラー:', error);
				} finally {
						setLoading(false);
				}
		};

		fetchData();
}, []);

  return (
    <main>
      {sendLoading && <Loading />}
      <div className="mx-3.5 my-10">
        <div className="container mx-auto text-white text-center m-12">
          <h2 className="text-3xl font-light text-shadow-md m-3">
          <FontAwesomeIcon icon={faNewspaper} /> Edit News
          </h2>
          <p className="text-sm mb-4">
          お知らせ編集
          </p>
        </div>
          {loading ? <Loading /> : (
          <div className="container mx-auto text-xl md:w-6/12 w-full">
            <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition dulation-100 text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    placeholder="タイトル"
                    defaultValue={newsData[0]['title']}
                    {...register('title', {
                      required: {
                        value: true, 
                        message: 'タイトルを入力してください',
                      },
                    })} 
                    className='w-11/12 m-4 p-4 border-2 rounded-lg'
                  />
                  {errors.title?.message && <div>{errors.title.message}</div>}
                </div>
                <div>
                  <textarea
                    placeholder="本文"
                    defaultValue={newsData[0]['detail']}
                    {...register('detail', {
                      required: {
                        value: true, 
                        message: '本文を入力してください',
                      },
                    })} 
                    className='w-11/12 m-4 p-4 border-2 rounded-lg h-64'
                  />
                  {errors.detail?.message && <div>{errors.detail.message}</div>}
                </div>
                <div className='text-left inline-block w-full'>
                  <input
                    type="checkbox"
                    defaultChecked={newsData[0]['show_top']}
                    {...register('show_top')} 
                    className='m-4 p-4 border-2 rounded-lg'
                  />
                  <label className='text-base'>トップページへ表示</label>
                  {errors.show_top?.message && <div>{errors.show_top.message}</div>}
                </div>
                <div className='text-left inline-block w-full'>
                  <input
                    type="checkbox"
                    defaultChecked={newsData[0]['important']}
                    {...register('important')} 
                    className='m-4 p-4 border-2 rounded-lg'
                  />
                  <label className='text-base'>重要なお知らせへ表示</label>
                  {errors.show_top?.message && <div>{errors.show_top.message}</div>}
                </div>
                <button type="submit" className='m-6 p-4 border rounded-lg bg-gray-600 text-white'><FontAwesomeIcon icon={faPaperPlane} /> 編集</button>
              </form>
            </div>
          </div>
          )}
          <Link href={`/organization/${params.id}/news/${params.news_id}/delete`} className='bg-white-100'>
            <p className='text-center text-red-400 text-lg my-4'><FontAwesomeIcon icon={faTrashCan} /> お知らせを削除</p>
          </Link>
        </div>
      </main>
  );
}