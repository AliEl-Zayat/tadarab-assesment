import * as React from "react";

function QnAIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <g data-name="Q&amp;A" fill="currentColor">
        <path
          data-name="Path 15473"
          d="M19 2H5a2.946 2.946 0 00-3 3v17a1.05 1.05 0 00.5.9.9.9 0 00.5.1.764.764 0 00.5-.2L11 18h8a2.946 2.946 0 003-3V5a2.946 2.946 0 00-3-3zm-6 11H8a1 1 0 010-2h5a1 1 0 010 2zm3-4H8a.945.945 0 01-1-1 .945.945 0 011-1h8a.945.945 0 011 1 .945.945 0 01-1 1z"
          transform="translate(-2 -2)"
        />
        <path
          data-name="Path 15474"
          d="M27 9h-3v6a4.951 4.951 0 01-5 5h-7.4L10 21v1a2.946 2.946 0 003 3h8l7.5 4.8a1.689 1.689 0 00.5.2.9.9 0 00.5-.1 1.05 1.05 0 00.5-.9V12a2.946 2.946 0 00-3-3z"
          transform="translate(-2 -2)"
        />
      </g>
    </svg>
  );
}

export default React.memo(QnAIcon);
