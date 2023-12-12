import Pagination from "@/app/components/ui/pagination/Pagination";
import React from "react";

const pagination = () => {
  return (
    <div className="p-9 container">
      <Pagination page={1} totalPages={8} />
    </div>
  );
};

export default pagination;
