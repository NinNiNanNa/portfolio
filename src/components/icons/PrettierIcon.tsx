import { SVGProps } from "react";

const PrettierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1000 1000"
      fill="currentColor"
      {...props}
    >
      <path d="M 14.865001,546.73989 248.14714,780.022 306.98931,720.76251 74.124506,487.8977 M 925.8755,219.978 484.35049,661.92032 310.74518,487.8977 251.06837,546.73989 484.35049,780.022 985.135,279.23749 m -236.20336,0 -58.84217,-59.25949 -264.99848,264.99847 59.2595,58.84218 z" />
    </svg>
  );
};

export default PrettierIcon;
