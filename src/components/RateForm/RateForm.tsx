"use client";

import { StarIcon } from "@/assets";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const RateForm = (props: Props) => {
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [ratingText, setRatingText] = useState("");

  const onStarClick = (index: number) => {
    setRating(index);
  };

  const resetForm = () => {
    setRating(0);
    setRatingText("");
  };

  const submitForm = () => {
    if (!ratingText) return toast.error("يرجى كتابة تعليقك");
    if (!rating) return toast.error("يرجى تقييم الدورة");
    setSubmitting("loading");
    setTimeout(() => {
      setSubmitting("success");
      resetForm();
      toast.success("تم التقييم بنجاح");
    }, 1000);
  };

  return (
    <div className="shadow-card rounded-[20px] py-[18px] px-[24px] mt-[25px] mb-[21px] flex flex-col gap-[10px]">
      <p className="text-[22px] font-extrabold">تقييم الدورة</p>
      <p className="text-[16px] font-normal text-[#777777]">
        رأيك يهمنا.. تقييمك يساعدنا علي تحسين جودة الدورات
      </p>
      <div className="flex gap-3">
        {Array.from(Array(5).keys()).map((item, index) => (
          <button key={item} onClick={() => onStarClick(index + 1)}>
            <StarIcon
              width={36}
              height={36}
              color={rating > index ? "#BE1722" : "#4C4C4C"}
            />
          </button>
        ))}
      </div>
      <textarea
        id="message"
        rows={4}
        className="resize-none block py-[18px] px-[20px] w-full rounded-[12px] border border-[#2222221A] placeholder:text-[#33333380] placeholder:text-[17px] placeholder:font-normal focus:outline-none focus:ring-0 focus:border-primary-dark"
        placeholder="اكتب تقييمك أو ملاحظاتك على الدورة ..."
        value={ratingText}
        onChange={(e) => setRatingText(e.target.value)}
      />
      <div className="mt-[16px] flex gap-[20px]">
        <button
          onClick={submitForm}
          disabled={submitting === "loading"}
          className="bg-primary-light transition-colors hover:bg-primary-dark text-white rounded-[12px] py-[12px] max-w-[215px] w-full shadow-mainButton disabled:opacity-70"
        >
          إرسال التقييم
        </button>
        <button
          onClick={resetForm}
          disabled={submitting === "loading"}
          className="bg-[#7777771a] transition-colors hover:bg-[#77777733] text-black rounded-[12px] py-[12px] max-w-[215px] w-full shadow-ghostedButton disabled:opacity-70"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default RateForm;
