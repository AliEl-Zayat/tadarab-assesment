import { CustomerRating, Video } from "@/components";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";
import { ratingOptions } from "./rating";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(ratingOptions);

  return (
    <main className={`flex min-h-screen`}>
      <div className="flex-[1] hidden md:block" />
      <div className="px-4 pt-[30px] flex-[3] md:pe-20">
        <div className="rounded-[20px] overflow-hidden shadow-video">
          <Video
            width={425}
            height={240}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            thumbnail="https://peach.blender.org/wp-content/uploads/bbb-splash.png"
          />
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <div className="shadow-card rounded-[20px] py-[18px] px-[24px] mt-[25px] mb-[21px] flex flex-col gap-[10px]">
            <p className="text-[22px] font-extrabold">آراء العملاء</p>
            <div className="flex flex-col gap-[30px] md:gap-[100px] md:me-24 md:flex-row md:items-center">
              <CustomerRating />
            </div>
          </div>
        </HydrationBoundary>

        <div className="shadow-card rounded-[20px] py-[18px] px-[24px] mt-[25px] mb-[21px] flex flex-col gap-[10px]">
          <p className="text-[22px] font-extrabold">تقييم الدورة</p>
          <p className="text-[16px] font-normal text-[#777777]">
            رأيك يهمنا.. تقييمك يساعدنا علي تحسين جودة الدورات
          </p>
          <textarea
            id="message"
            rows={4}
            className="resize-none block py-[18px] px-[20px] w-full rounded-[12px] border border-[#2222221A] placeholder:text-[#33333380] placeholder:text-[17px] placeholder:font-normal focus:outline-none focus:ring-0 focus:border-primary-dark"
            placeholder="اكتب تقييمك أو ملاحظاتك على الدورة ..."
          />
          <div className="mt-[16px] flex gap-[20px]">
            <button className="bg-primary-light transition-colors hover:bg-primary-dark text-white rounded-[12px] py-[12px] max-w-[215px] w-full shadow-mainButton">
              إرسال التقييم
            </button>
            <button className="bg-[#7777771a] transition-colors hover:bg-[#77777733] text-black rounded-[12px] py-[12px] max-w-[215px] w-full shadow-ghostedButton">
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
