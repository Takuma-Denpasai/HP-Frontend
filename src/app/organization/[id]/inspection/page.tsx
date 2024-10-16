"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { fetchWithAuth } from '@/utils/api';

interface News {
  news__id: number;
  news__title: string;
  news__detail: string;
  news__user__username: string;
  news__organization__name: string;
  news__updated_at: string;
}

interface OrganizationPermission {
  organization__id: number;
  organization__permission_type: string;
  organization__organization__name: string;
  organization__updated_at: string;
}

interface Post {
  post__id: number;
  post__title: string;
  post__detail: string;
  post__user__username: string;
  post__organization__name: string;
  post__updated_at: string;
}

interface Shop {
  shop__id: number;
  shop__name: string;
  shop__detail: string;
  shop__user__username: string;
  shop__organization__name: string;
  shop__updated_at: string;
}

interface Menu {
  menu__id: number;
  menu__name: string;
  menu__shop__name: string;
  menu__updated_at: string;
}

interface Event {
  event__id: number;
  event__title: string;
  event__detail: string;
  event__user__username: string;
  event__organization__name: string;
  event__updated_at: string;
} 

interface Karaoke {
  karaoke__id: number;
  karaoke__name: string;
  karaoke__user__username: string;
  karaoke__organization__name: string;
  karaoke__updated_at: string;
}

interface Band {
  band__id: number;
  band__name: string;
  band__user__username: string;
  band__organization__name: string;
  band__updated_at: string;
}

interface BandSong {
  song__id: number;
  song__name: number;
  song__band__name: string;
}

export default function News({ params }: { params: { id: string }}) {

  const [news, setNews] = useState<News[]>([]);
  const [organizationPermission, setOrganizationPermission] = useState<OrganizationPermission[]>([]);
  const [post, setPost] = useState<Post[]>([]);
  const [shop, setShop] = useState<Shop[]>([]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [event, setEvent] = useState<Event[]>([]);
  const [karaoke, setKaraoke] = useState<Karaoke[]>([]);
  const [band, setBand] = useState<Band[]>([]);
  const [bandSong, setBandSong] = useState<BandSong[]>([]);
  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL + `/organization/${params.id}/inspection`;
    
  useEffect(() => {
		const fetchData = async () => {
				try {
						const data = await fetchWithAuth(url, 'GET');
            setNews(data['news']);
            setOrganizationPermission(data['organization_permission']);
            setPost(data['post']);
            setShop(data['shop']);
            setMenu(data['menu']);
            setEvent(data['event']);
            setKaraoke(data['karaoke']);
            setBand(data['band']);
            setBandSong(data['band_song']);
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
          <div className="mx-3.5 my-10">
            <div className="container mx-auto text-white text-center m-12">
                <h2 className="text-3xl font-light text-shadow-md m-3">
                    Inspection
                </h2>
                <p className="text-sm mb-4">
                    検証待機リスト
                </p>
            </div>
            {loading && (<Loading />)}
            <div className="container mx-auto text-xl md:w-6/12 w-full">
              {news && news.map((news) => (
                <Link key={news['news__id']} href={`/organization/${params.id}/inspection/news/${news['news__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">News {new Date(news['news__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{news['news__title']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{news['news__user__username']} / {news['news__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {organizationPermission && organizationPermission.map((permission) => (
                <Link key={permission['organization__id']} href={`/organization/${params.id}/inspection/permission/${permission['organization__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Organization Permission {new Date(permission['organization__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{permission['organization__permission_type']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{permission['organization__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {post && post.map((post) => (
                <Link key={post['post__id']} href={`/organization/${params.id}/inspection/post/${post['post__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Post {new Date(post['post__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{post['post__title']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{post['post__user__username']} / {post['post__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {shop && shop.map((shop) => (
                <Link key={shop['shop__id']} href={`/organization/${params.id}/inspection/shop/${shop['shop__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Shop {new Date(shop['shop__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{shop['shop__name']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{shop['shop__user__username']} / {shop['shop__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {menu && menu.map((menu) => (
                <Link key={menu['menu__id']} href={`/organization/${params.id}/inspection/menu/${menu['menu__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Menu {new Date(menu['menu__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{menu['menu__name']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{menu['menu__shop__name']}</p>
                  </div>
                </Link>
              ))}
              {event && event.map((event) => (
                <Link key={event['event__id']} href={`/organization/${params.id}/inspection/event/${event['event__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Event {new Date(event['event__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{event['event__title']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{event['event__user__username']} / {event['event__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {karaoke && karaoke.map((karaoke) => (
                <Link key={karaoke['karaoke__id']} href={`/organization/${params.id}/inspection/karaoke/${karaoke['karaoke__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Karaoke {new Date(karaoke['karaoke__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{karaoke['karaoke__name']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{karaoke['karaoke__user__username']} / {karaoke['karaoke__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {band && band.map((band) => (
                <Link key={band['band__id']} href={`/organization/${params.id}/inspection/band/${band['band__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <p className="text-xs my-1.5 text-gray-700">Band {new Date(band['band__updated_at']).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-base">{band['band__name']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{band['band__user__username']} / {band['band__organization__name']}</p>
                  </div>
                </Link>
              ))}
              {bandSong && bandSong.map((bandSong) => (
                <Link key={bandSong['song__id']} href={`/organization/${params.id}/inspection/band_song/${bandSong['song__id']}`}>
                  <div className="w-full p-4 bg-white rounded-lg py-6 my-4 hover:text-gray-600 transition duration-100">
                    <h3 className="text-base">{bandSong['song__name']}</h3>
                    <p className="text-xs my-1.5 text-gray-700">{bandSong['song__band__name']}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href={`/organization/${params.id}`} className='text-center'>
              <p className='text-white'>オーガナイゼーションメニューへ戻る</p>
            </Link>
          </div>
        </main>
    );
}