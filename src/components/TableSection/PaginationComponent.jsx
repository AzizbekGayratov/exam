import { Pagination } from "flowbite-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Component({ page, setPage, totalPages }) {
  const onPageChange = (page) => setPage(page);

  const customPaginationTheme = {
    base: "",
    layout: {
      table: {
        base: "text-[14px] leading-[20px] text-gray-700 dark:text-gray-400",
        span: "",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center gap-x-2 -space-x-px",
      showIcon: "",
      previous: {
        base: "mr-[15px]",
        icon: "none",
      },
      next: {
        base: "ml-[15px]",
        icon: "none",
      },
      selector: {
        base: "text-[14px] leading-[20px] px-3 py-[6px] rounded-[16px] text-secondary hover:bg-fontColor hover:text-white transition-colors",
        active: "text-secondary bg-[#FFFFFF29] hover:bg-[#FFFFFF39]",
        disabled: "opacity-50",
      },
    },
  };
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        theme={customPaginationTheme}
        currentPage={page}
        totalPages={totalPages}
        previousLabel={<FaAngleLeft className="text-secondary" />}
        nextLabel={<FaAngleRight className="text-secondary" />}
        onPageChange={onPageChange}
      />
    </div>
  );
}
