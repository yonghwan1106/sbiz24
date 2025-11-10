'use client';

import { Card, Table, Row, Col } from 'antd';
import Navigation from '../components/layout/Navigation';
import { budgetData, getTotalBudget, kpiData, riskData } from '../data/proposalData';
import { motion } from 'framer-motion';

export default function Implementation() {
  const budgetColumns = [
    { title: '구분', dataIndex: 'category', key: 'category' },
    { title: '금액', dataIndex: 'subtotal', key: 'subtotal', render: (val: number) => `${(val / 10000).toFixed(0)}만원` },
  ];

  const riskColumns = [
    { title: '리스크', dataIndex: 'risk', key: 'risk', width: '25%' },
    { title: '확률', dataIndex: 'probability', key: 'probability', width: '10%' },
    { title: '영향', dataIndex: 'impact', key: 'impact', width: '10%' },
    {
      title: '대응 방안',
      dataIndex: 'mitigation',
      key: 'mitigation',
      width: '55%',
      render: (items: string[]) => (
        <ul className="space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      )
    },
  ];

  const totalBudget = getTotalBudget();

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
            IV. 실행 계획 (Implementation)
          </h1>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">1. 예산 및 투자 계획</h2>

            <Table
              columns={budgetColumns}
              dataSource={budgetData}
              pagination={false}
              rowKey="category"
              summary={() => (
                <Table.Summary.Row className="bg-amber-50">
                  <Table.Summary.Cell index={0}>
                    <strong>총 투자</strong>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    <strong className="text-lg text-red-600">{(totalBudget / 10000).toFixed(0)}만원</strong>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />

            <div className="mt-8 p-8 bg-blue-50 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">ROI 분석</h3>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <div className="bg-white p-6 rounded shadow-lg">
                    <h4 className="font-bold mb-3 text-xl">1년 차</h4>
                    <p className="text-base mb-2">투자: 820만원</p>
                    <p className="text-base mb-2">매출 증가: 4,500만원</p>
                    <p className="text-green-600 font-bold text-xl">ROI: 65%</p>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className="bg-white p-6 rounded shadow-lg">
                    <h4 className="font-bold mb-3 text-xl">3년 차 누적</h4>
                    <p className="text-base mb-2">총 투자: 2,000만원</p>
                    <p className="text-base mb-2">매출 증가: 1억 6,500만원</p>
                    <p className="text-green-600 font-bold text-xl">ROI: 148%</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">2. KPI 및 성과 측정</h2>

            {kpiData.map((phaseData, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">{phaseData.phase}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse shadow-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left text-base">KPI</th>
                        <th className="border p-3 text-center text-base">현재</th>
                        <th className="border p-3 text-center text-base">3개월</th>
                        <th className="border p-3 text-center text-base">6개월</th>
                        <th className="border p-3 text-center text-base">12개월</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phaseData.kpis.map((kpi, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border p-3 text-base">{kpi.name}</td>
                          <td className="border p-3 text-center text-base">{kpi.current}</td>
                          <td className="border p-3 text-center text-base">{kpi.month3}</td>
                          <td className="border p-3 text-center text-base">{kpi.month6}</td>
                          <td className="border p-3 text-center text-base">{kpi.month12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">3. 리스크 관리</h2>
            <Table
              columns={riskColumns}
              dataSource={riskData}
              pagination={false}
              rowKey="risk"
            />
          </Card>

          <Card className="mb-10 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 border-l-4 border-green-500 pl-6">실행 일정 요약</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="font-bold text-2xl mb-3">1분기 (1-3월)</h3>
                <p className="text-base mb-2">AI 도구 도입, 스마트스토어 오픈, SNS 마케팅 시작</p>
                <p className="text-red-600 font-bold text-xl mt-3">투자: 130만원</p>
              </div>
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="font-bold text-2xl mb-3">2분기 (4-6월)</h3>
                <p className="text-base mb-2">신제품 개발, 인플루언서 협업, 데이터 분석</p>
                <p className="text-red-600 font-bold text-xl mt-3">투자: 180만원</p>
              </div>
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="font-bold text-2xl mb-3">3-4분기 (7-12월)</h3>
                <p className="text-base mb-2">체험 프로그램, B2B 영업, 자사몰 고도화</p>
                <p className="text-red-600 font-bold text-xl mt-3">투자: 230만원</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
