"use client";
import animationData from "@/assets/error-404.json";
import { NAVBAR_HEIGHT } from "@/constants/constants";
import { lazy } from "react";
const Lottie = lazy(() => import("lottie-react"));

export default function Custom404() {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center`}
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
      />
      <h1 className="text-2xl font-bold">404 - لم يتم العثور على الصفحة</h1>
    </div>
  );
}
