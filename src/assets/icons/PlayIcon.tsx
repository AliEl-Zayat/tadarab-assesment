import * as React from "react";

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.1}
      height={24.1}
      viewBox="0 0 24.1 24.1"
      {...props}
    >
      <path
        d="M20.05 8A12.05 12.05 0 1032.1 20.05 12.048 12.048 0 0020.05 8zm5.622 13.216l-8.552 4.908a1.168 1.168 0 01-1.735-1.02V15a1.169 1.169 0 011.735-1.02l8.552 5.2a1.17 1.17 0 010 2.036z"
        transform="translate(-8 -8)"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(PlayIcon);
