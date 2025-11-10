'use client';

import { Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { coverData } from './data/proposalData';
import { motion } from 'framer-motion';

export default function CoverPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl w-full"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl text-gray-600 mb-12 font-medium tracking-wide">
            {coverData.title}
          </h3>
          
          <div className="my-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-8 leading-tight tracking-tight">
              {coverData.subtitle}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium mt-6">
              {coverData.description}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 mb-16 space-y-6"
        >
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">컨설팅 대상 업체</h3>
            <p className="text-3xl font-bold text-gray-800 mb-3">{coverData.company.name}</p>
            <p className="text-lg text-gray-600">{coverData.company.address}</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">신청자</h3>
            <div className="text-gray-700 space-y-3 text-lg">
              <p className="text-2xl font-semibold text-gray-800">
                {coverData.applicant.name}
              </p>
              <p className="text-xl">연락처: {coverData.applicant.phone}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-2xl text-gray-600 mb-16 font-medium">{coverData.date}</p>
          
          <Link href="/executive-summary">
            <Button 
              type="primary" 
              size="large"
              icon={<FileTextOutlined />}
              className="px-16 py-8 h-auto text-2xl font-bold shadow-xl hover:shadow-2xl transition-all"
              style={{ fontSize: '1.25rem', height: 'auto' }}
            >
              제안서 보기
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
