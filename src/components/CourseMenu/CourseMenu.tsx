import { ArrowRightDoubleIcon } from "@/assets";

const CourseMenu = () => {
  return (
    <div>
      <button
        type="button"
        aria-label="course menu"
        className="text-[25px] bg-white w-[40px] h-[40px] centered-child rounded-[10px] shadow-navbar mt-[30px]"
      >
        <ArrowRightDoubleIcon color="#777" width={20} height={20} />
      </button>
    </div>
  );
};

export default CourseMenu;
