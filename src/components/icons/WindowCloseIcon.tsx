import { SVGProps } from "react";

const WindowCloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      version="1.1"
      viewBox="0 0 1e3 1e3"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="m572.79 500 276.21 276.21v72.791h-72.791l-276.21-276.21-276.21 276.21h-72.791v-72.791l276.21-276.21-276.21-276.21v-72.791h72.791l276.21 276.21 276.21-276.21h72.791v72.791z"
        strokeWidth="49.857"
      />
    </svg>
  );
};

export default WindowCloseIcon;
