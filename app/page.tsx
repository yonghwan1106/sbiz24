'use client';

import { Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { coverData } from './data/proposalData';
import { motion } from 'framer-motion';

export default function CoverPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-lacquer-mother-pearl via-traditional-cream to-amber-50 p-8 relative overflow-hidden">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-lacquer-brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-lacquer-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lacquer-red rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl w-full relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="inline-block px-6 py-3 mb-12 border-2 border-lacquer-gold bg-gradient-to-r from-lacquer-gold/10 to-traditional-amber/10 rounded-full shadow-lg">
            <h3 className="text-xl md:text-2xl text-lacquer-brown font-bold tracking-wide">
              {coverData.title}
            </h3>
          </div>

          <div className="my-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-lacquer-brown via-lacquer-red to-lacquer-brown bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm">
              {coverData.subtitle}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-lacquer-warm font-medium mt-6">
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
          <div className="bg-gradient-to-br from-white to-lacquer-mother-pearl p-10 rounded-2xl shadow-2xl border-2 border-lacquer-gold/20 hover:border-lacquer-gold/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-lacquer-brown mb-6">컨설팅 대상 업체</h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-lacquer-brown to-lacquer-red bg-clip-text text-transparent mb-3">{coverData.company.name}</p>
            <p className="text-lg text-lacquer-warm/80">{coverData.company.address}</p>
          </div>

          <div className="bg-gradient-to-br from-white to-lacquer-mother-pearl p-10 rounded-2xl shadow-2xl border-2 border-lacquer-gold/20 hover:border-lacquer-gold/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-lacquer-brown mb-6">신청자</h3>
            <div className="text-lacquer-warm space-y-3 text-lg">
              <p className="text-2xl font-semibold text-lacquer-brown">
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
          <p className="text-2xl text-lacquer-warm/80 mb-16 font-medium">{coverData.date}</p>

          <Link href="/executive-summary">
            <Button
              type="primary"
              size="large"
              icon={<FileTextOutlined />}
              className="px-16 py-8 h-auto text-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300"
              style={{
                fontSize: '1.25rem',
                height: 'auto',
                background: 'linear-gradient(135deg, #4a2c1f 0%, #8b3a3a 100%)',
                border: 'none'
              }}
            >
              제안서 보기
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
