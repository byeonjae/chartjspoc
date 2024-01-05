'use client';

import { BarChart } from './Components';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-[512px]'>
        <BarChart />
      </div>
    </div>
  );
}
