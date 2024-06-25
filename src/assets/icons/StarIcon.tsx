import * as React from "react";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.03}
      height={23}
      viewBox="0 0 24.03 23"
      {...props}
    >
      <path
        d="M31.226.787l-2.933 5.947-6.562.957a1.438 1.438 0 00-.8 2.452l4.748 4.626-1.119 6.536a1.436 1.436 0 002.084 1.514l5.871-3.086 5.871 3.086a1.438 1.438 0 002.084-1.514l-1.124-6.535 4.748-4.626a1.438 1.438 0 00-.8-2.452l-6.562-.957L33.8.787a1.439 1.439 0 00-2.574 0z"
        transform="translate(-20.5 .013)"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(StarIcon);
