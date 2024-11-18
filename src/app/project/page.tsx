"use client";

import { Dock } from "@/components/dock/dock";
import { Cover } from "@/components/slider/cover";
import { Slider } from "@/components/slider/slider";
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react'
import Loader from '@/components/Loader';


export default function Project() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  return isClient ? (
    <div className="bg-black">
        <Suspense fallback={<Loader />}>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Exceptional Websites at <Cover>Lightning Speed</Cover>
      </h1>
        <Slider/>
        </Suspense>
        <Dock/>
    </div>
  ): null;
}