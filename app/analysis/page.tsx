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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-12 pb-6 border-b-4 border-amber-500">
            II. 현황 분석 (Situation Analysis)
          </h1>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">1. 대상 업체 분석</h2>
            <Table
              columns={companyColumns}
              dataSource={companyInfo}
              pagination={false}
              rowKey="label"
              className="mb-8 text-base"
            />

            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">현황 분석</h3>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card title={<span className="text-xl font-bold">강점 (Strengths)</span>} className="h-full shadow-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">전통 장인 기술 보유 (40년 이상 추정)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">용인시 기흥구 입지 (GTX 플랫폼시티 개발 수혜 예정)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">수공예 프리미엄 가치</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">경쟁이 낮은 틈새 시장</span>
                      </li>
                    </ul>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title={<span className="text-xl font-bold">현재 과제</span>} className="h-full shadow-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">온라인 마케팅 미비</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">브랜드 인지도 부족</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">MZ세대 접점 없음</span>
                      </li>
                      <li className="flex items-start">
                        <CloseCircleOutlined className="text-red-500 mt-1 mr-3 text-lg" />
                        <span className="text-base">디지털 역량 제한적</span>
                      </li>
                    </ul>
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">2. 시장 및 트렌드 분석</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">MZ세대 뉴트로 열풍</h3>
            <Row gutter={[24, 24]} className="mb-8">
              <Col xs={24} md={8}>
                <Card className="bg-blue-50 h-full shadow-lg">
                  <h4 className="font-bold mb-3 text-lg">전통 굿즈 품절 사태</h4>
                  <p className="text-base mb-2">다이소 한글 시리즈: 전국 품절</p>
                  <p className="text-base">국립중앙박물관 반가사유상: 6차 완판</p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="bg-green-50 h-full shadow-lg">
                  <h4 className="font-bold mb-3 text-lg">온라인 검색량 폭증</h4>
                  <p className="text-base">아이디스 플랫폼 호작도 검색: <span className="font-bold text-red-500 text-lg">32배 증가</span></p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="bg-orange-50 h-full shadow-lg">
                  <h4 className="font-bold mb-3 text-lg">2024 공예트렌드페어</h4>
                  <p className="text-base mb-2">280여 개사 참여 (코엑스)</p>
                  <p className="text-base">나전칠기 선(線) 미학 주목</p>
                </Card>
              </Col>
            </Row>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 mt-8">MZ세대 소비 특성</h3>
            <ul className="space-y-3 text-base">
              <li>• SNS 후기, 인플루언서 추천 중시</li>
              <li>• 감성적이고 자연스러운 이미지 선호</li>
              <li>• 스토리텔링 기반 구매 결정</li>
              <li>• 윤리적 소비 (장인 지원, 전통 보존)</li>
            </ul>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">3. GTX + 용인 플랫폼시티 개발</h2>
            <Tag color="gold" className="mb-6 text-lg px-6 py-3 font-bold">⭐⭐⭐⭐⭐ 핵심 기회</Tag>
            <Table
              columns={companyColumns}
              dataSource={gtxData}
              pagination={false}
              rowKey="label"
              className="mb-8 text-base"
            />

            <div className="mt-8 bg-yellow-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">상권 변화 예측</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Tag color="blue" className="text-base px-4 py-1">2025-2027</Tag>
                  <span className="ml-3 text-base">개발 착공, 교통 개선 → 초기 브랜드 구축</span>
                </div>
                <div className="flex items-start">
                  <Tag color="green" className="text-base px-4 py-1">2027-2030</Tag>
                  <span className="ml-3 text-base">젊은 인구 유입 → MZ세대 고객 확보</span>
                </div>
                <div className="flex items-start">
                  <Tag color="orange" className="text-base px-4 py-1">2030 이후</Tag>
                  <span className="ml-3 text-base">첨단 복합도시 → B2B 확장 (반도체 기업 선물)</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">4. SWOT 분석</h2>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card title={<span className="text-xl font-bold">Strengths (강점)</span>} className="h-full bg-green-50 shadow-lg">
                  <ul className="space-y-3">
                    {swotData.strengths.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleOutlined className="text-green-600 mt-1 mr-3 text-lg" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title={<span className="text-xl font-bold">Weaknesses (약점)</span>} className="h-full bg-red-50 shadow-lg">
                  <ul className="space-y-3">
                    {swotData.weaknesses.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CloseCircleOutlined className="text-red-600 mt-1 mr-3 text-lg" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title={<span className="text-xl font-bold">Opportunities (기회)</span>} className="h-full bg-blue-50 shadow-lg">
                  <ul className="space-y-3">
                    {swotData.opportunities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FireOutlined className="text-orange-600 mt-1 mr-3 text-lg" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title={<span className="text-xl font-bold">Threats (위협)</span>} className="h-full bg-yellow-50 shadow-lg">
                  <ul className="space-y-3">
                    {swotData.threats.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <WarningOutlined className="text-yellow-700 mt-1 mr-3 text-lg" />
                        <span className="text-base">{item}</span>
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
