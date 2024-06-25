import { CourseMenu, CustomerRating, RateForm, Video } from "@/components";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";
import { ratingOptions } from "../rating";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(ratingOptions);

  return (
    <main className={`flex min-h-screen`}>
      <CourseMenu />
      <div className="px-4 pt-[30px] flex-[3] md:px-[54px] md:pe-20 md:max-w-[1366px] mx-auto">
        <Video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          thumbnail="https://peach.blender.org/wp-content/uploads/bbb-splash.png"
        />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <div className="shadow-card rounded-[20px] py-[18px] px-[24px] mt-[25px] mb-[21px] flex flex-col gap-[10px]">
            <p className="text-[22px] font-extrabold">آراء العملاء</p>
            <div className="flex flex-col gap-[30px] md:gap-[100px] md:me-24 md:flex-row md:items-center">
              <CustomerRating />
            </div>
          </div>
        </HydrationBoundary>

        <RateForm />
      </div>
    </main>
  );
}
