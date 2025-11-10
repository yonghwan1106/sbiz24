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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            IV. 실행 계획 (Implementation)
          </h1>

          <Card className="mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">1. 예산 및 투자 계획</h2>

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

            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ROI 분석</h3>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <div className="bg-white p-4 rounded shadow">
                    <h4 className="font-bold mb-2">1년 차</h4>
                    <p>투자: 820만원</p>
                    <p>매출 증가: 4,500만원</p>
                    <p className="text-green-600 font-bold">ROI: 65%</p>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className="bg-white p-4 rounded shadow">
                    <h4 className="font-bold mb-2">3년 차 누적</h4>
                    <p>총 투자: 2,000만원</p>
                    <p>매출 증가: 1억 6,500만원</p>
                    <p className="text-green-600 font-bold">ROI: 148%</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>

          <Card className="mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">2. KPI 및 성과 측정</h2>

            {kpiData.map((phaseData, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-700">{phaseData.phase}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">KPI</th>
                        <th className="border p-2 text-center">현재</th>
                        <th className="border p-2 text-center">3개월</th>
                        <th className="border p-2 text-center">6개월</th>
                        <th className="border p-2 text-center">12개월</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phaseData.kpis.map((kpi, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border p-2">{kpi.name}</td>
                          <td className="border p-2 text-center">{kpi.current}</td>
                          <td className="border p-2 text-center">{kpi.month3}</td>
                          <td className="border p-2 text-center">{kpi.month6}</td>
                          <td className="border p-2 text-center">{kpi.month12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </Card>

          <Card className="mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">3. 리스크 관리</h2>
            <Table
              columns={riskColumns}
              dataSource={riskData}
              pagination={false}
              rowKey="risk"
            />
          </Card>

          <Card className="mb-8 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-2xl font-bold text-green-900 mb-4">실행 일정 요약</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">1분기 (1-3월)</h3>
                <p>AI 도구 도입, 스마트스토어 오픈, SNS 마케팅 시작</p>
                <p className="text-red-600 font-semibold mt-2">투자: 130만원</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">2분기 (4-6월)</h3>
                <p>신제품 개발, 인플루언서 협업, 데이터 분석</p>
                <p className="text-red-600 font-semibold mt-2">투자: 180만원</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg mb-2">3-4분기 (7-12월)</h3>
                <p>체험 프로그램, B2B 영업, 자사몰 고도화</p>
                <p className="text-red-600 font-semibold mt-2">투자: 230만원</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
