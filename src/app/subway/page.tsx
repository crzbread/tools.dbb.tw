"use client";

import { allMenuItems } from "../data/subwayNutrition";
import { MenuItem } from "@/app/types/menu";

export default function Subway() {
  // console.log(allMenuItems.filter((item) => item.Type === "Sandwiches"));
  const types: string[] = [...new Set(allMenuItems.map((item) => item.Type))];

  const groupedByType: Record<string, MenuItem[]> = allMenuItems.reduce(
    (acc, item) => {
      if (!acc[item.Type]) acc[item.Type] = [];
      acc[item.Type].push(item);
      return acc;
    },
    {} as Record<string, MenuItem[]>,
  );

  console.log(types);
  console.log(groupedByType);
  return <div>123</div>;
}
