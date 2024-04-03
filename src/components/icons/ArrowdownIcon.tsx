import { SVGProps } from "react";

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 1e3 1e3"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="m752.45 296.22-252.45 251.9-252.45-251.9-77.55 77.55 330 330 330-330z" />
    </svg>
  );
};

export default ArrowDownIcon;
