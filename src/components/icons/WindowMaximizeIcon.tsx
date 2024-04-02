import { SVGProps } from "react";

const WindowMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 1e3 1e3"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m104 302h198v-198h594v594h-198v198h-594v-594m594 0v297h99v-396h-396v99h297m-495 198v297h396v-297z"
        stroke-width="49.5"
      />
    </svg>
  );
};

export default WindowMaximizeIcon;
