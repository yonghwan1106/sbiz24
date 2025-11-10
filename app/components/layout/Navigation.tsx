'use client';

import { Menu, Button, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined, HomeOutlined, FileTextOutlined, BarChartOutlined, RocketOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { key: '/', label: '표지', icon: <HomeOutlined />, step: 1 },
  { key: '/executive-summary', label: '요약', icon: <FileTextOutlined />, step: 2 },
  { key: '/analysis', label: '현황 분석', icon: <BarChartOutlined />, step: 3 },
  { key: '/strategy', label: '컨설팅 전략', icon: <RocketOutlined />, step: 4 },
  { key: '/implementation', label: '실행 계획', icon: <CalendarOutlined />, step: 5 },
  { key: '/outcomes', label: '기대 효과', icon: <TrophyOutlined />, step: 6 },
];

export default function Navigation() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();

  // Calculate progress
  const currentPageIndex = menuItems.findIndex(item => item.key === pathname);
  const progress = ((currentPageIndex + 1) / menuItems.length) * 100;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-md z-50 no-print">
        <div className="max-w-7xl mx-auto px-4">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            items={menuItems.map(item => ({
              ...item,
              label: <Link href={item.key}>{item.label}</Link>
            }))}
            className="border-0"
          />
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-lacquer-brown via-lacquer-red to-lacquer-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Page Counter */}
        <div className="absolute top-2 right-4 text-xs text-lacquer-warm/60 font-semibold">
          {currentPageIndex >= 0 ? `${currentPageIndex + 1} / ${menuItems.length}` : ''}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 no-print">
        <div className="flex items-center justify-between p-4">
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            size="large"
          >
            메뉴
          </Button>
          <div className="text-xs text-lacquer-warm/60 font-semibold">
            {currentPageIndex >= 0 ? `${currentPageIndex + 1} / ${menuItems.length}` : ''}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-lacquer-brown via-lacquer-red to-lacquer-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Drawer
        title="메뉴"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems.map(item => ({
            ...item,
            label: <Link href={item.key} onClick={() => setDrawerVisible(false)}>{item.label}</Link>
          }))}
        />
      </Drawer>

      {/* Spacer for fixed navigation */}
      <div className="h-20 md:h-16" />
    </>
  );
}
