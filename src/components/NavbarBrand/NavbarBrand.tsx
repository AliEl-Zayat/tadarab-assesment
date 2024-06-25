import { NAVBAR_LOGO } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import Divider from "../Divider";

type Props = {};

const NavbarBrand = ({}: Props) => {
  return (
    <div className="flex items-center gap-[20px] px-4 md:px-0">
      <Link href="/">
        <Image src={NAVBAR_LOGO} alt="Tadarab Logo" width={88.52} height={30} />
      </Link>
      <Divider className="bg-grey opacity-[0.3]" width="2px" height="40px" />
      <p
        className="text-[17px] text-[#222222] font-extrabold text-ellipsis line-clamp-1 md:text-[14px]"
        title="دورة التسويق الفعال للمشروعات الصغيرة"
      >
        دورة التسويق الفعال للمشروعات الصغيرة
      </p>
    </div>
  );
};

export default NavbarBrand;
