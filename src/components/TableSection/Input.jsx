import { FloatingLabel } from "flowbite-react";
import React from "react";

export default function Input({ search, setSearch }) {
  const customInputTheme = {
    input: {
      default: {
        outlined: {
          md: "peer block w-full appearance-none rounded-[4px] border border-[#FFFFFF3B] bg-transparent px-[14px] pb-4 pt-4 text-sm text-gray-900 focus:border-secondary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 text-white",
        },
      },
    },
    label: {
      default: {
        outlined: {
          md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-primary px-2 text-sm text-[#FFFFFFB3] transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-secondary dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        },
      },
    },
    helperText: {
      default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
    },
  };
  return (
    <div className="mb-5">
      <FloatingLabel
        theme={customInputTheme}
        variant="outlined"
        label="Search For a Crypto Currency.."
        size="md"
        value={search}
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
