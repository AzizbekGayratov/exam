import React from "react";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { useSelector } from "react-redux";
import CryptoCoin from "./CryptoCoin";
import { ThreeDots } from "react-loader-spinner";
import Error from "../Error";

export default function TableComponent() {
  const { data, error, isLoading } = useSelector((state) => state.project);

  const customTableTheme = {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "p-4 text-right text-fontColor border-b border-b-[#424242] group-last/body:group-last/row:first:rounded-bl-[4px] group-last/body:group-last/row:last:rounded-br-[4px]",
      },
    },
    head: {
      base: "group/head text-sm font-Montserrat text-black font-bold leading-6",
      cell: {
        base: "bg-secondary px-4 text-right group-first/head:first:text-left py-[18px] group-first/head:first:rounded-tl-[4px] group-first/head:last:rounded-tr-[4px] dark:bg-gray-700 border-b border-b-[#515151]",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  };
  return (
    <div className="overflow-x-auto table w-full">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#87CEEB"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {error ? (
            <Error error={error} />
          ) : (
            <>
              {data.length !== 0 ? (
                <Table theme={customTableTheme}>
                  <TableHead>
                    <TableHeadCell>Coin</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>24h Change</TableHeadCell>
                    <TableHeadCell>Market Cap</TableHeadCell>
                  </TableHead>
                  <TableBody className="divide-y">
                    {data.map((project) => (
                      <CryptoCoin data={project} key={project.id} />
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center">
                  <p className="text-secondary text-2xl py-6">
                    The coin you are looking for does not exist
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
