'use client';
import { BarChart, DoughnutChart } from './Components';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-[512px]'>
        <BarChart />
      </div>
      <div className='w-[512px]'>
        <DoughnutChart />
      </div>
    </div>
  );
}
