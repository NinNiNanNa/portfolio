import { SVGProps } from "react";

const RemoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m21.314 5.402 1.767 1.767 -5.303 5.304 5.303 5.303 -1.767 1.767 -7.071 -7.07z" />
      <path d="m8.685 24.598 -1.767 -1.767 5.304 -5.303 -5.304 -5.304 1.767 -1.767 7.071 7.07z" />
    </svg>
  );
};

export default RemoteIcon;
