import { SVGProps } from "react";

const FolderCssIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M13.84376,7.53645l-1.28749-1.0729A2,2,0,0,0,11.27591,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.53645Z"
        fill="#42a5f5"
      />
      <polygon
        points="13.19 9.95 12.4 13.95 27.73 13.95 27.24 15.95 12.01 15.95 11.22 19.95 26.52 19.95 25.68 23.94 18 26.31 14 23.94 14.46 21.95 10.83 21.95 10 26.15 18 29.95 28.75 26.31 30.06 19.74 30.32 18.42 32 9.95 13.19 9.95"
        fill="#bbdefb"
      />
    </svg>
  );
};

export default FolderCssIcon;
