import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      transform="matrix(-1,0,0,1,0,0)"
      {...props}
    >
      <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"></path>
    </svg>
  );
};

export default SearchIcon;
