'use client';

import { Card, Table, Timeline, Row, Col } from 'antd';
import { RocketOutlined, ThunderboltOutlined, TeamOutlined } from '@ant-design/icons';
import Navigation from '../components/layout/Navigation';
import { aiToolsData, phaseTimeline } from '../data/proposalData';
import { motion } from 'framer-motion';

export default function Strategy() {
  const columns = [
    { title: 'AI 도구', dataIndex: 'tool', key: 'tool', width: '25%' },
    { title: '용도', dataIndex: 'purpose', key: 'purpose', width: '30%' },
    { title: '비용(월)', dataIndex: 'cost', key: 'cost', width: '15%' },
    { title: '기대 효과', dataIndex: 'effect', key: 'effect', width: '30%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-16 pb-8 border-b-4 border-amber-500">
            III. 컨설팅 전략 (Strategy)
          </h1>

          <Card className="mb-20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 border-l-4 border-amber-500 pl-6">
              전략 프레임워크: "천년의 기술, 백년의 브랜드로"
            </h2>

            <Timeline
              mode="alternate"
              items={phaseTimeline.map((phase, index) => ({
                children: (
                  <Card className="shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                      {phase.phase}: {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{phase.period}</p>
                    <ul className="space-y-3">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="text-gray-700 text-base leading-relaxed">• {task}</li>
                      ))}
                    </ul>
                  </Card>
                ),
                color: index === 0 ? 'blue' : index === 1 ? 'green' : 'orange'
              }))}
            />
          </Card>

          <Card className="mb-20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 border-l-4 border-amber-500 pl-6">AI 도구 포트폴리오</h2>
            <Table
              columns={columns}
              dataSource={aiToolsData}
              pagination={false}
              rowKey="tool"
              className="text-base"
            />
            <div className="mt-8 p-8 bg-blue-50 rounded-lg shadow-lg">
              <p className="text-xl font-bold leading-relaxed">
                월 투자: 3.5만원 / 연간: 42만원
              </p>
            </div>
          </Card>

          <Card className="mb-20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 border-l-4 border-amber-500 pl-6">3대 목표</h2>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="text-center h-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                  <RocketOutlined className="text-6xl text-blue-500 mb-8" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">1년 매출 2배</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">3,500만원 → 8,000만원</p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="text-center h-full bg-gradient-to-br from-green-50 to-green-100 shadow-lg">
                  <ThunderboltOutlined className="text-6xl text-green-500 mb-8" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">온라인 비중 50%</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">현재 5% → 50%</p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="text-center h-full bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
                  <TeamOutlined className="text-6xl text-orange-500 mb-8" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">MZ세대 고객 30%</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">현재 5% → 30%</p>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card className="mb-20 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">Phase 1: 디지털 기반 구축 (1-3개월)</h2>
            <ul className="space-y-5 text-lg">
              <li className="leading-relaxed">• AI 도구 도입 및 교육</li>
              <li className="leading-relaxed">• 네이버 스마트스토어 오픈</li>
              <li className="leading-relaxed">• 인스타그램 계정 개설 및 SNS 마케팅 시작</li>
              <li className="leading-relaxed">• 제품 촬영 및 온라인 상품 등록</li>
              <li className="leading-relaxed">• 데이터 수집 체계 구축</li>
            </ul>
          </Card>

          <Card className="mb-20 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 border-l-4 border-green-500 pl-6">Phase 2: 브랜드 혁신 (4-6개월)</h2>
            <ul className="space-y-5 text-lg">
              <li className="leading-relaxed">• MZ세대 타겟 신제품 개발 (스마트폰 케이스, 키링, 트레이)</li>
              <li className="leading-relaxed">• 장인 스토리텔링 콘텐츠 제작</li>
              <li className="leading-relaxed">• 인플루언서 협업 (5건)</li>
              <li className="leading-relaxed">• 브랜드 정체성 강화</li>
              <li className="leading-relaxed">• 카페24 자사몰 구축</li>
            </ul>
          </Card>

          <Card className="mb-20 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 border-l-4 border-purple-500 pl-6">Phase 3: 사업 확장 (7-12개월)</h2>
            <ul className="space-y-5 text-lg">
              <li className="leading-relaxed">• 체험 프로그램 런칭 (공방 투어, 제작 클래스)</li>
              <li className="leading-relaxed">• B2B 채널 확대 (삼성반도체, 플랫폼시티 입주 기업)</li>
              <li className="leading-relaxed">• AI 수요 예측 시스템 구축</li>
              <li className="leading-relaxed">• 해외 시장 진출 준비 (Etsy, Amazon)</li>
              <li className="leading-relaxed">• 데이터 기반 운영 최적화</li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
