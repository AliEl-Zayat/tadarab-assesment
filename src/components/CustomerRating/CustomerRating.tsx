"use client";

import { ratingOptions } from "@/app/rating";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";

interface Rate {
  rating: 1 | 2 | 3 | 4 | 5;
}

const CustomerRating = () => {
  const { data } = useSuspenseQuery(ratingOptions);
  const [rates, setRates] = useState<Rate[]>([]);
  const [renderRates, setRenderRates] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [totalRatesCount, setTotalRatesCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);

  useEffect(() => {
    if (rates.length > 0) {
      const ratesCount = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };

      rates.forEach((rate: Rate) => {
        ratesCount[rate.rating] += 1;
      });
      console.log(ratesCount);
      setRenderRates(ratesCount);
    }
  }, [rates]);

  //   simulate max rating by 5 so we get rates from data response to get rating from 0-5
  useEffect(() => {
    if (data) {
      const normalizedRatings = data.map((item: any) => {
        // Clamp rating to be between 0 and 5
        const normalizedRating = Math.max(0, Math.min(5, item.rating));
        return { ...item, rating: normalizedRating };
      });
      setRates(normalizedRatings);
      setTotalRatesCount(normalizedRatings.length);
      setAverageRating(
        normalizedRatings.reduce(
          (acc: number, item: any) => acc + item.rating,
          0
        ) / normalizedRatings.length
      );
      setFiveStarCount(
        normalizedRatings.filter((item: any) => item.rating === 5).length
      );
    }
  }, [data]);

  const ratingPercentage = (rating: number, returnSize: boolean = false) => {
    if (returnSize) {
      return `${Number((rating / data.length) * 100)}%`;
    }
    return `${Number((rating / data.length) * 100).toLocaleString("ar")} %`;
  };

  const RatingRow = useCallback(
    ({ stars, rating }: { stars: number; rating: number }) => {
      return (
        <div className="flex items-center gap-2 justify-between">
          <p className="flex-shrink-0 text-gray-500">{stars} نجوم</p>
          <div className="h-[10px] bg-gray-200 w-full rounded-lg">
            <div
              style={{
                width: ratingPercentage(rating, true),
              }}
              className={`h-[10px] bg-primary-dark rounded-lg`}
            />
          </div>
          <p className="flex-shrink-0 min-w-[55px] text-left text-gray-500">
            {ratingPercentage(rating)}
          </p>
        </div>
      );
    },
    []
  );

  return (
    <>
      <div className="">
        <div className="flex items-center gap-[18px]">
          <div className="h-full">
            <h2 className="text-[68px]">
              {Number(averageRating.toFixed(1)).toLocaleString("ar")}
            </h2>
          </div>
          <div>
            <StarRating rating={averageRating} />
            <p className="text-[16px] text-grey">
              {totalRatesCount.toLocaleString("ar")} تقييم
            </p>
          </div>
        </div>
        <p className="text-[16px] font-normal text-grey mt-[5px] flex items-start gap-2">
          <span className="text-black text-[30px]">
            {ratingPercentage(fiveStarCount)}
          </span>{" "}
          يرشحون هذه الدورة
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-[10px]">
        {Object.keys(renderRates)
          .reverse()
          .map((key) => (
            <RatingRow
              key={key}
              stars={Number(key)}
              rating={Number(renderRates[Number(key)])}
            />
          ))}
      </div>
    </>
  );
};

export default CustomerRating;
