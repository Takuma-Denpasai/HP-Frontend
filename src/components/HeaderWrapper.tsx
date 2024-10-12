'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header'; // 既存の Header コンポーネントをインポート

const HeaderWrapper = () => {
  const pathname = usePathname();

  return <Header key={pathname} />;
};

export default HeaderWrapper;