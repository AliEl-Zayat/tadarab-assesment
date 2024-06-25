import { CourseCertificateIcon, PlayIcon, QnAIcon, StarIcon } from "@/assets";

export const API_URL = "https://api.themoviedb.org/3";
export const NAVBAR_HEIGHT = 80;
export const NAVBAR_LINKS = [
  { id: "1", title: "المنهج", href: "/schedule", icon: <PlayIcon /> },
  {
    id: "2",
    title: "الاسئلة و الأجوبة",
    href: "/schedule",
    icon: <QnAIcon />,
  },
  {
    id: "3",
    title: "تقييم الدورة",
    href: "/course-rating",
    icon: <StarIcon />,
  },
  {
    id: "4",
    title: "شهادة الدورة",
    href: "/schedule",
    icon: <CourseCertificateIcon />,
  },
];
export const NAVBAR_LOGO = "/logo.svg";
export const COURSE_CONTENT = {
  "المجموعة الآولي": [
    {
      title: "المقدمة",
      duration: "01:34",
      completed: true,
    },
    {
      title: "الدرس الأول - التعريف",
      duration: "15:34",
      completed: true,
    },
    {
      title: "الدرس الثاني - التسويق",
      duration: "09:21",
      completed: true,
    },
    {
      title: "الدرس الثالث - طرق التسويق في المستعمره الكبيره هناك",
      duration: "01:34",
      completed: true,
    },
    {
      title: "الملخص",
      duration: "15:34",
    },
  ],
};
