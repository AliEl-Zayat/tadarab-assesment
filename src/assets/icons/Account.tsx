import * as React from "react";

function Account(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36.246}
      height={36.246}
      viewBox="0 0 36.246 36.246"
      {...props}
    >
      <g data-name="Layer 2" fill="#222">
        <path
          data-name="Path 15238"
          d="M21.123 39.246a18.123 18.123 0 1118.123-18.123 18.123 18.123 0 01-18.123 18.123zm0-33.458a15.335 15.335 0 1015.335 15.335A15.335 15.335 0 0021.123 5.788z"
          transform="translate(-3 -3)"
        />
        <path
          data-name="Path 15239"
          d="M17.97 20.941a6.97 6.97 0 116.97-6.97 6.97 6.97 0 01-6.97 6.97zm0-11.153a4.182 4.182 0 104.182 4.182 4.182 4.182 0 00-4.182-4.182z"
          transform="translate(.153 -1.424)"
        />
        <path
          data-name="Path 15240"
          d="M33.233 26.364a1.394 1.394 0 01-1.032-.446 15.823 15.823 0 00-11.641-5.13h-1.282a15.711 15.711 0 00-10.943 4.405 1.394 1.394 0 01-1.924-2.007A18.458 18.458 0 0119.278 18h1.283a18.667 18.667 0 0113.69 6.022 1.394 1.394 0 01-1.018 2.342z"
          transform="translate(-1.797 2.911)"
        />
      </g>
    </svg>
  );
}

export default React.memo(Account);
