'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common/Button';
import { MotionWrapper } from '@/components/animations/MotionWrapper';

export default function HomePage() {
  return (
    <div className="bg-main flex min-h-screen flex-col items-center justify-center">
      <MotionWrapper className="w-full max-w-4xl px-4 text-center">
        <section className="flex w-full flex-col items-center justify-center">
          <div className="w-full sm:w-4/5 md:w-4/5 mx-auto">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src="/images/logo.png"
                alt="Caishen Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="mb-4 text-center font-inter text-5xl text-primary md:text-6xl">
              Ask Caishen 
            </h1>
            <p className="mb-10 text-center font-inter text-xl text-secondary">
              Logical suggestion for you next move in DeFi
            </p>
          </div>
          
          <Link href="/portfolio" className="block w-full max-w-xs mx-auto">
            <Button variant="cta" className="w-full px-16 py-5 text-xl font-inter" size="lg">
              Get Started
            </Button>
          </Link>
        </section>
      </MotionWrapper>
    </div>
  );
}
