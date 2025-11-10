'use client';

import { Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { coverData } from './data/proposalData';
import { motion } from 'framer-motion';

export default function CoverPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
            {coverData.title}
          </h3>
          
          <div className="my-16">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              {coverData.subtitle}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              {coverData.description}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 mb-12 space-y-8"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">컨설팅 대상 업체</h3>
            <p className="text-2xl font-bold text-gray-800">{coverData.company.name}</p>
            <p className="text-gray-600 mt-2">{coverData.company.address}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">신청자</h3>
            <div className="text-gray-700 space-y-2">
              <p>성명: {coverData.applicant.name}</p>
              <p>연락처: {coverData.applicant.phone}</p>
              <p>이메일: {coverData.applicant.email}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-2xl text-gray-600 mb-12">{coverData.date}</p>
          
          <Link href="/executive-summary">
            <Button 
              type="primary" 
              size="large"
              icon={<FileTextOutlined />}
              className="px-12 py-6 h-auto text-xl font-semibold"
            >
              제안서 보기
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
