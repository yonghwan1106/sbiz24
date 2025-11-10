'use client';

import { Card, Table, Row, Col, Tag } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, FireOutlined, WarningOutlined } from '@ant-design/icons';
import Navigation from '../components/layout/Navigation';
import { companyInfo, swotData, gtxPlatformData } from '../data/proposalData';
import { motion } from 'framer-motion';

export default function Analysis() {
  const companyColumns = [
    { title: '항목', dataIndex: 'label', key: 'label', width: '30%' },
    { title: '내용', dataIndex: 'value', key: 'value', width: '70%' },
  ];

  const gtxData = [
    { label: '규모', value: gtxPlatformData.scale },
    { label: '투자액', value: gtxPlatformData.investment },
    { label: '위치', value: gtxPlatformData.location },
    { label: '착공', value: gtxPlatformData.constructionStart },
    { label: '토지공급', value: gtxPlatformData.landSupply },
    { label: '완공', value: gtxPlatformData.completion },
    { label: '주거용지', value: gtxPlatformData.housing },
    { label: '산업용지', value: gtxPlatformData.industrial },
    { label: '교통 인프라', value: gtxPlatformData.infrastructure },
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            II. 현황 분석 (Situation Analysis)
          </h1>

          <Card className="mb-8 shadow-lg" title={<h2 className="text-2xl font-bold text-amber-900">1. 대상 업체 분석</h2>}>
            <Table
              columns={companyColumns}
              dataSource={companyInfo}
              pagination={false}
              rowKey="label"
              className="mb-6"
            />

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">현황 분석</h3>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card title="강점 (Strengths)" className="h-full">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        <span>전통 장인 기술 보유 (40년 이상 추정)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        <span>용인시 기흥구 입지 (GTX 플랫폼시티 개발 수혜 예정)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        <span>수공예 프리미엄 가치</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        <span>경쟁이 낮은 틈새 시장</span>
                      </li>
                    </ul>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="현재 과제" className="h-full">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-2" />
                        <span>온라인 마케팅 미비</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-2" />
                        <span>브랜드 인지도 부족</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-2" />
                        <span>MZ세대 접점 없음</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-2" />
                        <span>디지털 역량 제한적</span>
                      </li>
                    </ul>
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="mb-8 shadow-lg" title={<h2 className="text-2xl font-bold text-amber-900">2. 시장 및 트렌드 분석</h2>}>
            <h3 className="text-xl font-bold mb-4">MZ세대 뉴트로 열풍</h3>
            <Row gutter={[16, 16]} className="mb-6">
              <Col xs={24} md={8}>
                <Card className="bg-blue-50 h-full">
                  <h4 className="font-bold mb-2">전통 굿즈 품절 사태</h4>
                  <p className="text-sm">다이소 한글 시리즈: 전국 품절</p>
                  <p className="text-sm">국립중앙박물관 반가사유상: 6차 완판</p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="bg-green-50 h-full">
                  <h4 className="font-bold mb-2">온라인 검색량 폭증</h4>
                  <p className="text-sm">아이디스 플랫폼 호작도 검색: <span className="font-bold text-red-500">32배 증가</span></p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="bg-orange-50 h-full">
                  <h4 className="font-bold mb-2">2024 공예트렌드페어</h4>
                  <p className="text-sm">280여 개사 참여 (코엑스)</p>
                  <p className="text-sm">나전칠기 선(線) 미학 주목</p>
                </Card>
              </Col>
            </Row>

            <h3 className="text-xl font-bold mb-4 mt-6">MZ세대 소비 특성</h3>
            <ul className="space-y-2">
              <li>• SNS 후기, 인플루언서 추천 중시</li>
              <li>• 감성적이고 자연스러운 이미지 선호</li>
              <li>• 스토리텔링 기반 구매 결정</li>
              <li>• 윤리적 소비 (장인 지원, 전통 보존)</li>
            </ul>
          </Card>

          <Card className="mb-8 shadow-lg" title={<h2 className="text-2xl font-bold text-amber-900">3. GTX + 용인 플랫폼시티 개발</h2>}>
            <Tag color="gold" className="mb-4 text-lg px-4 py-2">⭐⭐⭐⭐⭐ 핵심 기회</Tag>
            <Table
              columns={companyColumns}
              dataSource={gtxData}
              pagination={false}
              rowKey="label"
              className="mb-6"
            />

            <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">상권 변화 예측</h3>
              <div className="space-y-3">
                <div>
                  <Tag color="blue">2025-2027</Tag>
                  <span className="ml-2">개발 착공, 교통 개선 → 초기 브랜드 구축</span>
                </div>
                <div>
                  <Tag color="green">2027-2030</Tag>
                  <span className="ml-2">젊은 인구 유입 → MZ세대 고객 확보</span>
                </div>
                <div>
                  <Tag color="orange">2030 이후</Tag>
                  <span className="ml-2">첨단 복합도시 → B2B 확장 (반도체 기업 선물)</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-8 shadow-lg" title={<h2 className="text-2xl font-bold text-amber-900">4. SWOT 분석</h2>}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card title="Strengths (강점)" className="h-full bg-green-50">
                  <ul className="space-y-2">
                    {swotData.strengths.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleOutlined className="text-green-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Weaknesses (약점)" className="h-full bg-red-50">
                  <ul className="space-y-2">
                    {swotData.weaknesses.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CloseCircleOutlined className="text-red-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Opportunities (기회)" className="h-full bg-blue-50">
                  <ul className="space-y-2">
                    {swotData.opportunities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FireOutlined className="text-orange-600 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Threats (위협)" className="h-full bg-yellow-50">
                  <ul className="space-y-2">
                    {swotData.threats.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <WarningOutlined className="text-yellow-700 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
