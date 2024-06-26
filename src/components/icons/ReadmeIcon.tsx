import { SVGProps } from "react";

const ReadmeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm2,22H14V14h4Zm0-12H14V8h4Z"
        fill="#42a5f5"
      />
    </svg>
  );
};

export default ReadmeIcon;
