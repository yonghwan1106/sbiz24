'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { RiseOutlined, TeamOutlined, ShoppingOutlined, GlobalOutlined } from '@ant-design/icons';
import Navigation from '../components/layout/Navigation';
import PageNavigation from '../components/layout/PageNavigation';
import SalesGrowthChart from '../components/charts/SalesGrowthChart';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Outcomes() {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
            V. 기대 효과 및 결론
          </h1>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">1. 정량적 효과</h2>
            <div className="mb-8">
              <SalesGrowthChart />
            </div>

            <Row gutter={[24, 24]} className="mt-8" ref={statsRef}>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                    <Statistic
                      title={<span className="text-base font-bold">매출 증가율</span>}
                      value={statsInView ? 471 : 0}
                      suffix="%"
                      prefix={<RiseOutlined />}
                      valueStyle={{ color: '#1890ff', fontSize: '2rem', fontWeight: 'bold' }}
                      formatter={(value) => <CountUp end={Number(value)} duration={2.5} separator="," />}
                    />
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                    <Statistic
                      title={<span className="text-base font-bold">온라인 매출</span>}
                      value={statsInView ? 1900 : 0}
                      suffix="% ↑"
                      prefix={<ShoppingOutlined />}
                      valueStyle={{ color: '#52c41a', fontSize: '2rem', fontWeight: 'bold' }}
                      formatter={(value) => <CountUp end={Number(value)} duration={2.5} separator="," />}
                    />
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                    <Statistic
                      title={<span className="text-base font-bold">총 고객 수</span>}
                      value={statsInView ? 500 : 0}
                      suffix="명"
                      prefix={<TeamOutlined />}
                      valueStyle={{ color: '#fa8c16', fontSize: '2rem', fontWeight: 'bold' }}
                      formatter={(value) => <CountUp end={Number(value)} duration={2.5} separator="," />}
                    />
                  </Card>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                    <Statistic
                      title={<span className="text-base font-bold">SNS 팔로워</span>}
                      value={statsInView ? 10000 : 0}
                      prefix={<GlobalOutlined />}
                      valueStyle={{ color: '#722ed1', fontSize: '2rem', fontWeight: 'bold' }}
                      formatter={(value) => <CountUp end={Number(value)} duration={2.5} separator="," />}
                    />
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">2. 정성적 가치</h2>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <Card className="h-full bg-blue-50 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">브랜드 가치</h3>
                  <ul className="space-y-3 text-gray-700 text-base">
                    <li>• 용인 대표 전통공예 브랜드 구축</li>
                    <li>• MZ세대와의 연결 고리 형성</li>
                    <li>• 전통 기술 보존 및 계승</li>
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="h-full bg-green-50 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-900">사회적 가치</h3>
                  <ul className="space-y-3 text-gray-700 text-base">
                    <li>• 지역 경제 발전 기여</li>
                    <li>• 전통 산업 혁신 모델 제시</li>
                    <li>• K-Culture 확산</li>
                  </ul>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="h-full bg-orange-50 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-900">환경적 가치</h3>
                  <ul className="space-y-3 text-gray-700 text-base">
                    <li>• 지속 가능성 (천연 재료)</li>
                    <li>• 슬로우 패션</li>
                    <li>• 업사이클링</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card className="mb-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 border-l-4 border-amber-500 pl-6">3. 지역사회 기여</h2>
            <div className="space-y-6">
              <Card className="bg-yellow-50 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3">GTX 용인역 & 플랫폼시티 연계</h3>
                <p className="text-base mb-2">• 용인 플랫폼시티 대표 문화 콘텐츠로 성장</p>
                <p className="text-base mb-2">• 지역 정체성 강화 및 관광객 유치</p>
                <p className="text-base">• 3년 내 직원 2-3명 고용 (지역 일자리 창출)</p>
              </Card>
              <Card className="bg-blue-50 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3">소상공인 지원 정책 기여</h3>
                <p className="text-base mb-2">• 타 소상공인을 위한 모범 사례 제공</p>
                <p className="text-base">• 전통공예 업체 지원 및 노하우 전파</p>
              </Card>
            </div>
          </Card>

          <Card className="mb-10 shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-8 text-center">
              결론: "천년의 기술, 백년의 브랜드로"
            </h2>
            <div className="space-y-6 text-lg text-gray-800">
              <p className="text-center font-bold text-2xl md:text-3xl">
                AI는 도구일 뿐, 사람이 중심입니다.
              </p>
              <p className="leading-relaxed text-base md:text-lg">
                이 컨설팅 전략의 본질은 최신 기술이 아닌, 40년 장인의 손길과 전통의 가치입니다.
                AI·데이터는 그 가치를 더 많은 사람에게, 더 효율적으로 전달하기 위한 수단입니다.
              </p>

              <div className="mt-8 p-8 bg-white rounded-lg shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">3년 후 경선칠기의 모습</h3>
                <ul className="space-y-4 text-base md:text-lg">
                  <li>✅ 용인 플랫폼시티의 대표 전통공예 브랜드</li>
                  <li>✅ MZ세대가 선택하는 라이프스타일 브랜드</li>
                  <li>✅ AI·데이터로 무장한 스마트 공방</li>
                  <li>✅ 전통과 혁신이 공존하는 문화 공간</li>
                  <li>✅ 해외 시장으로 뻗어나가는 K-Craft 대표주자</li>
                </ul>
              </div>

              <div className="mt-8 text-center p-8 bg-amber-50 rounded-lg shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-amber-900 leading-relaxed">
                  천년을 이어온 기술이, 백년을 내다보는 브랜드로,<br/>
                  다음 세대와 함께 걸어갑니다.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <PageNavigation />
      </div>
    </div>
  );
}
