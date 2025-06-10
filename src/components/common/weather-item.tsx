import React from 'react'

export default function WeatherItem({ Icon, label, value }: { Icon: any; label: string; value: string }) {
 
  return (
    <div className="flex flex-col w-[50%] p-4">
      <div className="flex space-x-4 items-center">
        <Icon size={30} className="text-zinc-500 dark:text-blue-3 " />
        <p className="text-lg dark:text-blue-3 text-zinc-600 mt-1">{label}</p>
      </div>
      <p className="mt-4 ms-5 text-2xl font-bold text-zinc-500 dark:text-blue-4">{value}</p>
    </div>
  );
}


