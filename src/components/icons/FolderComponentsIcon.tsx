import { SVGProps } from "react";

const FolderComponentsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M13.84376,7.53645l-1.28749-1.0729A2,2,0,0,0,11.27591,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.53645Z"
        fill="#c0ca33"
      />
      <g>
        <rect x="12" y="20" width="8" height="8" fill="#f0f4c3" />
        <rect x="22" y="20" width="8" height="8" fill="#f0f4c3" />
        <rect x="12" y="10" width="8" height="8" fill="#f0f4c3" />
        <rect
          x="22"
          y="10"
          width="8"
          height="8"
          transform="translate(-2.28427 22.48528) rotate(-45)"
          fill="#f0f4c3"
        />
      </g>
    </svg>
  );
};

export default FolderComponentsIcon;
