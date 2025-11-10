// 컨설팅 제안서 데이터

export const coverData = {
  title: "2025년 소상공인 역량강화 컨설팅 공모전",
  subtitle: "천년의 기술, 백년의 브랜드로",
  description: "경선칠기 AI·데이터 활용 점포경영 혁신 전략",
  company: {
    name: "경선칠기",
    address: "경기도 용인시 기흥구 마북로247번길 74"
  },
  applicant: {
    name: "박용환 (크리에이티브 넥서스)",
    phone: "010-7939-3123",
    email: ""
  },
  date: "2025년 11월"
};

export const goalsData = [
  { metric: "총 매출", current: "3,500만원", year1: "8,000만원", year3: "2억원" },
  { metric: "온라인 비중", current: "5%", year1: "50%", year3: "50%" },
  { metric: "SNS 팔로워", current: "0명", year1: "5,000명", year3: "10,000명" },
  { metric: "MZ세대 비중", current: "5%", year1: "30%", year3: "50%" }
];

export const companyInfo = [
  { label: "업체명", value: "경선칠기" },
  { label: "대표자", value: "이수자" },
  { label: "소재지", value: "경기도 용인시 기흥구 마북로247번길 74" },
  { label: "업종", value: "전통 칠기 제조업 / 가구수리" },
  { label: "주요 제품", value: "나전칠기, 옻칠 공예품" }
];

export const swotData = {
  strengths: [
    "전통 장인 기술 보유 (40년+)",
    "GTX 플랫폼시티 수혜 입지",
    "수공예 프리미엄 가치",
    "경쟁 낮은 틈새 시장",
    "컨설턴트 거주지 인접 (용인시)"
  ],
  weaknesses: [
    "온라인 마케팅 부재",
    "브랜드 인지도 부족",
    "디지털 역량 제한적",
    "MZ세대 접점 없음"
  ],
  opportunities: [
    "GTX + 플랫폼시티 개발 (2025-2030)",
    "MZ세대 뉴트로 열풍",
    "AI·디지털 전환 미개척 (선도 기회)",
    "정부 소상공인 지원 정책",
    "전통공예 프리미엄 소비 증가"
  ],
  threats: [
    "현재 고령 인구 중심 상권",
    "대형 브랜드 전통공예 진입",
    "수입 저가 제품 경쟁",
    "후계자 문제"
  ]
};

export const aiToolsData = [
  {
    tool: "ChatGPT Plus",
    purpose: "콘텐츠 작성, 고객 응대",
    cost: "2만원",
    effect: "작업 시간 70% 단축"
  },
  {
    tool: "Canva Pro",
    purpose: "디자인, SNS 콘텐츠",
    cost: "1.5만원",
    effect: "전문 디자이너 대체"
  },
  {
    tool: "Google Analytics",
    purpose: "고객 분석",
    cost: "무료",
    effect: "데이터 기반 의사결정"
  },
  {
    tool: "Meta Pixel",
    purpose: "광고 최적화",
    cost: "무료",
    effect: "광고 ROI 30% 향상"
  }
];

export const budgetData = [
  {
    category: "AI 도구",
    items: [
      { name: "ChatGPT Plus (월 2만원 × 12)", amount: 240000 },
      { name: "Canva Pro (월 1.5만원 × 12)", amount: 180000 },
      { name: "기타 도구", amount: 180000 }
    ],
    subtotal: 600000
  },
  {
    category: "온라인 채널",
    items: [
      { name: "스마트스토어 수수료", amount: 300000 },
      { name: "카페24 호스팅 (월 5만원 × 12)", amount: 600000 },
      { name: "도메인/서버", amount: 100000 },
      { name: "개발 지원", amount: 200000 }
    ],
    subtotal: 1200000
  },
  {
    category: "마케팅",
    items: [
      { name: "SNS 광고 (월 20만원 × 12)", amount: 2400000 },
      { name: "인플루언서 협업 (10건)", amount: 2000000 }
    ],
    subtotal: 4400000
  },
  {
    category: "콘텐츠 제작",
    items: [
      { name: "사진 촬영 (분기별)", amount: 1000000 }
    ],
    subtotal: 1000000
  },
  {
    category: "교육/기타",
    items: [
      { name: "디지털 마케팅 교육", amount: 500000 },
      { name: "컨설팅 비용", amount: 500000 }
    ],
    subtotal: 1000000
  }
];

export const getTotalBudget = () => {
  return budgetData.reduce((sum, category) => sum + category.subtotal, 0);
};

export const salesGrowthData = [
  { year: "현재", total: 3500, offline: 3000, online: 500, b2b: 0, experience: 0 },
  { year: "1년 후", total: 8000, offline: 3500, online: 4000, b2b: 500, experience: 0 },
  { year: "2년 후", total: 13000, offline: 4000, online: 7000, b2b: 2000, experience: 0 },
  { year: "3년 후", total: 20000, offline: 5000, online: 10000, b2b: 3000, experience: 2000 }
];

export const kpiData = [
  {
    phase: "Phase 1",
    kpis: [
      { name: "온라인 쇼핑몰 구축", current: "X", month3: "✓", month6: "✓", month12: "✓" },
      { name: "SNS 팔로워 (명)", current: "0", month3: "1,000", month6: "3,000", month12: "5,000" },
      { name: "월 웹사이트 방문 (명)", current: "0", month3: "500", month6: "1,500", month12: "3,000" },
      { name: "온라인 매출 비중 (%)", current: "5", month3: "20", month6: "35", month12: "50" }
    ]
  },
  {
    phase: "Phase 2",
    kpis: [
      { name: "신제품 출시 (종)", current: "0", month3: "0", month6: "3", month12: "5" },
      { name: "인플루언서 협업 (건)", current: "0", month3: "0", month6: "5", month12: "10" },
      { name: "월 평균 게시물 수", current: "0", month3: "12", month6: "16", month12: "20" }
    ]
  },
  {
    phase: "Phase 3",
    kpis: [
      { name: "체험 프로그램 참가 (명)", current: "0", month3: "0", month6: "0", month12: "100" },
      { name: "B2B 거래처 (개)", current: "0", month3: "0", month6: "2", month12: "5" }
    ]
  },
  {
    phase: "전체",
    kpis: [
      { name: "총 매출 (만원)", current: "3,500", month3: "4,500", month6: "6,000", month12: "8,000" },
      { name: "MZ세대 고객 비중 (%)", current: "5", month3: "15", month6: "25", month12: "30" }
    ]
  }
];

export const phaseTimeline = [
  {
    phase: "Phase 1",
    title: "디지털 기반 구축",
    period: "1-3개월",
    tasks: [
      "AI 도구 도입",
      "쇼핑몰 구축",
      "SNS 마케팅"
    ]
  },
  {
    phase: "Phase 2",
    title: "브랜드 혁신",
    period: "4-6개월",
    tasks: [
      "신제품 라인",
      "스토리텔링",
      "인플루언서 협업"
    ]
  },
  {
    phase: "Phase 3",
    title: "사업 확장",
    period: "7-12개월",
    tasks: [
      "체험 프로그램",
      "B2B 확대",
      "해외 진출 준비"
    ]
  }
];

export const riskData = [
  {
    risk: "디지털 역량 부족",
    probability: "중",
    impact: "고",
    mitigation: [
      "단계적 교육 프로그램",
      "외부 전문가 지원",
      "쉬운 도구부터 시작"
    ]
  },
  {
    risk: "초기 투자 부담",
    probability: "중",
    impact: "중",
    mitigation: [
      "정부 지원 사업 활용",
      "단계적 투자",
      "무료 도구 우선 활용"
    ]
  },
  {
    risk: "AI 도구 의존도",
    probability: "저",
    impact: "중",
    mitigation: [
      "최종 검토 인간 담당",
      "장인 정신 유지",
      "도구는 보조 수단"
    ]
  },
  {
    risk: "온라인 경쟁 심화",
    probability: "고",
    impact: "중",
    mitigation: [
      "장인 스토리 차별화",
      "로컬 브랜딩",
      "프리미엄 포지셔닝"
    ]
  },
  {
    risk: "GTX 개발 지연",
    probability: "중",
    impact: "저",
    mitigation: [
      "온라인 중심 전략",
      "상권 의존도 낮춤"
    ]
  }
];

export const gtxPlatformData = {
  scale: "83만평 (2.72 million ㎡)",
  investment: "8조 2,680억원",
  location: "보정동, 마북동, 신갈동 일대",
  constructionStart: "2025년 상반기",
  landSupply: "2027년 하반기",
  completion: "2029-2030년",
  housing: "13.8% (10,105세대, 27,283명)",
  industrial: "16.4% (반도체 R&D 기업 유치)",
  infrastructure: "GTX-A 구성역, 수인분당선, 경부고속도로 지하화"
};
