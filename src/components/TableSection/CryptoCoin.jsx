import React, { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { TableRow, TableCell } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCommaToString } from "../../utils";
import { addCoin, removeCoin } from "../../store/watchlistSlice";
import { setIsDrawerOpen } from "../../store/projectSlice";

export default function CryptoCoin({ data, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    currency: { symbol },
  } = useSelector((state) => state.project);
  const { watchlist } = useSelector((state) => state.watchlist);

  const coinStatus = watchlist.some((coin) => coin.id === data.id);
  return (
    <TableRow className="bg-[#16171A]">
      <TableCell className="text-left">
        <div className="flex gap-[15px]">
          <img
            src={data.image}
            alt={data.name}
            className="w-[50px]"
            onClick={() => {
              navigate(`/coin/${data.id}`);
            }}
          />
          <div className="flex flex-col justify-between">
            <p className="uppercase text-white font-Roboto text-[22px] leading-8">
              <Link to={`/coin/${data.id}`}>{data.symbol}</Link>
            </p>
            <span className="font-Roboto text-sm">
              <Link to={`/coin/${data.id}`}>{data.name}</Link>
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <p className="text-sm font-Roboto">
          {symbol} {addCommaToString(data.current_price, false)}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-[19px] justify-end">
          <AiFillEye
            className={`inline-block ${
              coinStatus ? "text-[#75F94C]" : ""
            } cursor-pointer`}
            size={25}
            onClick={() => {
              if (coinStatus) {
                dispatch(removeCoin(data.id));
              } else {
                dispatch(addCoin(data));
                dispatch(setIsDrawerOpen(true));
              }
            }}
          />
          <p
            className={`${
              data.price_change_percentage_24h < 0
                ? "text-[#FF0000]"
                : "text-[#0ECB81]"
            } font-Roboto font-medium text-sm leading-5`}
          >
            {data.price_change_percentage_24h < 0 ? "" : "+"}
            {data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </TableCell>
      <TableCell>
        <p className="text-sm font-Roboto">
          {symbol} {addCommaToString(data.market_cap, true)}
        </p>
      </TableCell>
    </TableRow>
  );
}
