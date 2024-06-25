import * as React from "react";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M14.857 38.286H9.714v-5.143A1.143 1.143 0 008.571 32H7.429a1.143 1.143 0 00-1.143 1.143v5.143H1.143A1.143 1.143 0 000 39.429v1.143a1.143 1.143 0 001.143 1.143h5.143v5.143A1.143 1.143 0 007.429 48h1.142a1.143 1.143 0 001.143-1.143v-5.143h5.143A1.143 1.143 0 0016 40.571v-1.142a1.143 1.143 0 00-1.143-1.143z"
        transform="translate(0 -32)"
        fill="#777"
      />
    </svg>
  );
}

export default React.memo(PlusIcon);
