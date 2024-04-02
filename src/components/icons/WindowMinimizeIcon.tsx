import { SVGProps } from "react";

const WindowMinimizeIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m766 566.5h-532v-133h532" strokeWidth="33.25" />
    </svg>
  );
};

export default WindowMinimizeIcon;
