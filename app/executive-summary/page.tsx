'use client';

import { Card, Table, Tag, Row, Col } from 'antd';
import { CheckCircleOutlined, RocketOutlined, TrophyOutlined, StarOutlined } from '@ant-design/icons';
import Navigation from '../components/layout/Navigation';
import { goalsData } from '../data/proposalData';
import { motion } from 'framer-motion';

export default function ExecutiveSummary() {
  const columns = [
    { 
      title: '지표', 
      dataIndex: 'metric', 
      key: 'metric', 
      width: '25%',
      render: (text: string) => <span className="font-semibold text-base">{text}</span>
    },
    { 
      title: '현재', 
      dataIndex: 'current', 
      key: 'current', 
      width: '25%',
      render: (text: string) => <span className="text-base">{text}</span>
    },
    { 
      title: '1년 후', 
      dataIndex: 'year1', 
      key: 'year1', 
      width: '25%',
      render: (text: string) => <span className="text-base font-medium text-blue-600">{text}</span>
    },
    { 
      title: '3년 후', 
      dataIndex: 'year3', 
      key: 'year3', 
      width: '25%',
      render: (text: string) => <span className="text-base font-bold text-green-600">{text}</span>
    },
  ];

  const differentiators = [
    {
      title: '전통공예 × AI 융합',
      description: '국내 최초급 사례, 블루오션',
      icon: <RocketOutlined className="text-5xl text-blue-500" />
    },
    {
      title: '지리적 강점',
      description: '컨설턴트 거주지(용인시) = 업체 소재지(용인시 기흥구)',
      icon: <CheckCircleOutlined className="text-5xl text-green-500" />
    },
    {
      title: '완벽한 타이밍',
      description: 'GTX 개발 (2025-2030) 연계',
      icon: <TrophyOutlined className="text-5xl text-orange-500" />
    },
    {
      title: '실현 가능성',
      description: '저비용(월 68만원) 고효율 전략',
      icon: <StarOutlined className="text-5xl text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-12 pb-6 border-b-4 border-amber-500">
            I. Executive Summary
          </h1>

          <Card className="mb-10 shadow-xl border-l-4 border-l-amber-500" bodyStyle={{ padding: '2rem' }}>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">컨설팅 배경</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              경선칠기는 경기도 용인시 기흥구에서 전통 칠기 제조업을 영위하는 소상공인으로, 
              <strong className="text-amber-800"> 40년 이상의 장인 기술</strong>을 보유하고 있습니다. 
              그러나 디지털 마케팅 부재, MZ세대와의 접점 부족, 온라인 채널 미비로 인해 성장에 한계를 겪고 있습니다.
            </p>
          </Card>

          <Card className="mb-10 shadow-xl border-l-4 border-l-blue-500" bodyStyle={{ padding: '2rem' }}>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              핵심 전략: "천년의 기술, 백년의 브랜드로"
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              전통 칠기의 가치를 AI·데이터 기술로 현대화하여:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Tag color="blue" className="text-base px-4 py-2 mr-3 font-semibold">디지털 전환</Tag>
                <span className="text-lg pt-1">저비용 AI 도구로 마케팅 자동화</span>
              </li>
              <li className="flex items-start">
                <Tag color="green" className="text-base px-4 py-2 mr-3 font-semibold">세대 연결</Tag>
                <span className="text-lg pt-1">MZ세대 뉴트로 트렌드 활용</span>
              </li>
              <li className="flex items-start">
                <Tag color="orange" className="text-base px-4 py-2 mr-3 font-semibold">지역 브랜딩</Tag>
                <span className="text-lg pt-1">GTX 플랫폼시티 개발 연계</span>
              </li>
            </ul>
          </Card>

          <Card 
            className="mb-10 shadow-xl" 
            title={<h2 className="text-3xl font-bold text-gray-800 m-0">주요 목표</h2>}
            bodyStyle={{ padding: '2rem' }}
          >
            <Table 
              columns={columns} 
              dataSource={goalsData} 
              pagination={false}
              rowKey="metric"
              className="overflow-x-auto"
              size="large"
            />
          </Card>

          <Card className="mb-10 shadow-xl" bodyStyle={{ padding: '2rem' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">4대 차별화 포인트</h2>
            <Row gutter={[24, 24]}>
              {differentiators.map((item, index) => (
                <Col xs={24} md={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
                      bodyStyle={{ padding: '2rem' }}
                    >
                      <div className="text-center mb-6">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
