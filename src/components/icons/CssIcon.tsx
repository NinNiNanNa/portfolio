import { SVGProps } from "react";

const CssIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <polygon
        points="29.18 4 25.61 22.36 25.28 24 20.54 25.57 17.26 26.66 13.21 28 2.87 24.05 4.05 18 8.25 18 7.81 20.85 14.15 23.27 14.93 23.01 21.45 20.85 21.62 20.02 22.41 16 4.44 16 5.18 12.24 5.23 12 23.19 12 23.97 8 6 8 6.78 4 29.18 4"
        fill="#42a5f5"
      />
    </svg>
  );
};

export default CssIcon;
