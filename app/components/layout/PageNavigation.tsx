'use client';

import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { path: '/', label: '표지' },
  { path: '/executive-summary', label: 'Executive Summary' },
  { path: '/analysis', label: '현황 분석' },
  { path: '/strategy', label: '컨설팅 전략' },
  { path: '/implementation', label: '실행 계획' },
  { path: '/outcomes', label: '기대 효과' },
];

export default function PageNavigation() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex(page => page.path === pathname);

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-8 mt-12 border-t-2 border-lacquer-gold/20">
      <div className="flex-1">
        {prevPage && (
          <Link href={prevPage.path}>
            <Button
              size="large"
              icon={<LeftOutlined />}
              className="hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #4a2c1f 0%, #8b3a3a 50%)',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
              }}
            >
              <span className="ml-2">{prevPage.label}</span>
            </Button>
          </Link>
        )}
      </div>

      <div className="flex-1 text-center">
        <div className="text-lacquer-warm/60 text-sm font-semibold">
          {currentIndex >= 0 ? `${currentIndex + 1} / ${pages.length}` : ''}
        </div>
      </div>

      <div className="flex-1 text-right">
        {nextPage && (
          <Link href={nextPage.path}>
            <Button
              size="large"
              icon={<RightOutlined />}
              iconPosition="end"
              className="hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #8b3a3a 50%, #d4af37 100%)',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
              }}
            >
              <span className="mr-2">{nextPage.label}</span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
