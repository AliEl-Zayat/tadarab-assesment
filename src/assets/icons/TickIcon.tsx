import * as React from "react";

function TickIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.78 7.7l-5.67 5.67a.75.75 0 01-1.06 0l-2.83-2.83a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(TickIcon);
