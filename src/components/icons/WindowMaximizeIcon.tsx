import { SVGProps } from "react";

const WindowMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="2 1.9 10 10"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="M4 6v6h6V6zm1 1h4v4H5z" overflow="visible"></path>
        <path d="M6 4v1h5v5h1V4z" overflow="visible" opacity="1"></path>
      </g>
    </svg>
  );
};

export default WindowMaximizeIcon;
