import { SVGProps } from "react";

const FolderComponentsOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M28.96692,12H9.44152a2,2,0,0,0-1.89737,1.36754L4,24V10H28a2,2,0,0,0-2-2H15.1241a2,2,0,0,1-1.28038-.46357L12.5563,6.46357A2,2,0,0,0,11.27592,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H26l4.80523-11.21213A2,2,0,0,0,28.96692,12Z"
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

export default FolderComponentsOpenIcon;
