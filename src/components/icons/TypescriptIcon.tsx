import { SVGProps } from "react";

const TypescriptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g>
        <path
          d="M28,4V28H4V4H28m0-2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"
          fill="#0288d1"
        />
        <path d="M14,26H12V18H8V16H18v2H14Z" fill="#0288d1" />
      </g>
      <path
        d="M26,18V16H22a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h2v2H20v2h4a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2H22V18Z"
        fill="#0288d1"
      />
    </svg>
  );
};

export default TypescriptIcon;
