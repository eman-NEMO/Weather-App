import React from "react";
import type { LucideIcon } from "lucide-react";

type ItemType = {
  Icon: LucideIcon;
  label: string;
  value: string;
};

function WeatherItem({ Icon, label, value }: ItemType) {
  return (
    <div className="flex flex-col w-[50%] p-4">
      <div className="flex items-center gap-3">
        <Icon size={30} className="text-zinc-500 dark:text-blue-3" />
        <p className="text-lg text-zinc-600 dark:text-blue-3">{label}</p>
      </div>
      <p className="mt-4 ms-8 text-2xl font-bold text-zinc-500 dark:text-blue-4">{value}</p>
    </div>
  );
}

export default React.memo(WeatherItem);
