import Text from "@/app/components/ui/typography/Typography";
import React from "react";

const Grid = () => {
  return (
    <div>
      <Text variant="super-title" tag="h2">
        Grids
      </Text>
      {/* Usage of grids */}
      {/* 12 Cols */}
      <div className="grid grid-cols-12 gap-5 mt-12 p-10">
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
      </div>
      {/* 8 Cols */}
      <div className="grid grid-cols-8 gap-5 mt-12 p-10 ">
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
      </div>
      {/* 6 Cols */}
      <div className="grid grid-cols-6 gap-5 mt-12 p-10">
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
      </div>
      {/* 4 Cols */}
      <div className="grid grid-cols-4 gap-5 mt-12 p-10">
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
      </div>

      {/* 2 Cols */}
      <div className="grid grid-cols-2 gap-5 mt-12 p-10">
        <div className="w-full h-16 bg-red-600"></div>
        <div className="w-full h-16 bg-red-600"></div>
      </div>
      <Text variant="super-title" tag="h2">
        Flex Box
      </Text>
      {/* 0 */}
      <div className="flex gap-5 mt-12 p-10  ">
        <div className="w-full h-28 bg-green-400 basis-1/4 "></div>
        <div className="w-full h-28 bg-green-400 col-span-2 basis-1/2"></div>
        <div className="w-full h-28 bg-green-400 basis-1/4"></div>
      </div>
      {/* 1 */}
      <div className="flex gap-5 mt-12 p-10 basis-1/4  ">
        <div className="w-full h-28 bg-green-400 "></div>
        <div className="w-full h-28 bg-green-400 col-span-2 basis-1/2"></div>
        <div className="w-full h-28 bg-green-400 basis-1/4"></div>
      </div>
      {/* 2 */}
      <div className="flex gap-5 mt-12 p-10   ">
        <div className="w-full h-28 bg-green-400 basis-1/4"></div>
        <div className="w-full h-28 bg-green-400 col-span-2 basis-1/2"></div>
        <div className="w-full h-28 bg-green-400 basis-1/4"></div>
      </div>
      {/* 3 */}
      <div className="flex gap-5 mt-12 p-10   ">
        <div className="w-full h-28 bg-green-400 basis-1/5"></div>
        <div className="w-full h-28 bg-green-400 col-span-2 basis-1/2"></div>
        <div className="w-full h-28 bg-green-400 basis-1/4 ml-auto"></div>
      </div>
      {/* 4 */}
      <div className="flex gap-5 mt-12 p-10   ">
        <div className="w-full h-28 bg-green-400 basis-1/5"></div>
        <div className="w-full h-28 bg-green-400 col-span-2 basis-1/3"></div>
        <div className="w-full h-28 bg-green-400 basis-1/4 ml-auto"></div>
      </div>
      {/* 5 */}
      <div className="flex gap-5 mt-12 p-10   ">
        <div className="w-full h-60 bg-green-400 flex-1"></div>

        <div className="w-full h-60 bg-green-400 flex-1"></div>
      </div>
      {/* 7 */}
      <div className="flex gap-5 mt-12 p-10   ">
        <div className="w-full h-60 bg-green-400 basis-1/4"></div>
        <div className="w-full h-60 bg-green-400 col-span-2 basis-1/2"></div>
        <div className="w-full h-60 bg-green-400 basis-1/4 ml-auto"></div>
      </div>
      {/* =================================== */}
      <div className="flex  flex-col mb-50">
        {/* Top */}
        <div className="h-20 w-full bg-orange-300"></div>
        {/* Bottom */}
        <div className="h-[400px] w-full flex bg-blue-600">
          {/* Left  */}
          <div className="h-[400px] flex-1 bg-indigo-500"></div>
          {/* Right  */}
          <div className="h-[400px] flex-1 flex flex-col gap-3 bg-pink-300">
            <div className="h-40 bg-slate-500 w-full"></div>
            <div className="h-40 bg-slate-500 w-full"></div>
            <div className="h-40 bg-slate-500 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
