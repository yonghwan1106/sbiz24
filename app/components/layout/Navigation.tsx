'use client';

import { Menu, Button, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined, HomeOutlined, FileTextOutlined, BarChartOutlined, RocketOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { key: '/', label: '표지', icon: <HomeOutlined /> },
  { key: '/executive-summary', label: '요약', icon: <FileTextOutlined /> },
  { key: '/analysis', label: '현황 분석', icon: <BarChartOutlined /> },
  { key: '/strategy', label: '컨설팅 전략', icon: <RocketOutlined /> },
  { key: '/implementation', label: '실행 계획', icon: <CalendarOutlined /> },
  { key: '/outcomes', label: '기대 효과', icon: <TrophyOutlined /> },
];

export default function Navigation() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();

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
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 no-print">
        <Button 
          icon={<MenuOutlined />} 
          onClick={() => setDrawerVisible(true)}
          size="large"
        >
          메뉴
        </Button>
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
      <div className="h-16 md:h-14" />
    </>
  );
}
