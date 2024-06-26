import * as React from "react";

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={3.429}
      viewBox="0 0 16 3.429"
      {...props}
    >
      <path
        d="M14.857 208H1.143A1.143 1.143 0 000 209.143v1.143a1.143 1.143 0 001.143 1.143h13.714A1.143 1.143 0 0016 210.286v-1.143A1.143 1.143 0 0014.857 208z"
        transform="translate(0 -208)"
        fill="#777"
      />
    </svg>
  );
}

export default React.memo(MinusIcon);
