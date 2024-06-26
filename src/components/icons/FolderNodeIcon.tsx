import { SVGProps } from "react";

const FolderNodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M13.84376,7.53645l-1.28749-1.0729A2,2,0,0,0,11.27591,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H15.12412A2,2,0,0,1,13.84376,7.53645Z"
        fill="#8bc34a"
      />
      <path
        d="M25,12l-7,4.07154V23.926L25,28l7-4.074V16.07154Z"
        fill="#dcedc8"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default FolderNodeIcon;
