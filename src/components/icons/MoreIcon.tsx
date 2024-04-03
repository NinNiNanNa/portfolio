import { SVGProps } from "react";

const MoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      version="1.1"
      viewBox="0 0 1e3 1e3"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="m704 500a102 102 0 0 1 102-102 102 102 0 0 1 102 102 102 102 0 0 1-102 102 102 102 0 0 1-102-102m-306 0a102 102 0 0 1 102-102 102 102 0 0 1 102 102 102 102 0 0 1-102 102 102 102 0 0 1-102-102m-306 0a102 102 0 0 1 102-102 102 102 0 0 1 102 102 102 102 0 0 1-102 102 102 102 0 0 1-102-102z" />
    </svg>
  );
};

export default MoreIcon;
