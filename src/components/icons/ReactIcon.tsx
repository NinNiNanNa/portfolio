import { SVGProps } from "react";

const ReactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g>
        <path
          d="M16,12c7.44405,0,12,2.58981,12,4s-4.55595,4-12,4S4,17.41019,4,16,8.556,12,16,12m0-2C8.268,10,2,12.68629,2,16s6.268,6,14,6,14-2.68629,14-6-6.268-6-14-6Z"
          fill="#0288d1"
        />
        <path d="M16,14a2,2,0,1,0,2,2,2,2,0,0,0-2-2Z" fill="#0288d1" />
        <path
          d="M10.45764,5.50706C12.47472,5.50746,16.395,8.68416,19.4641,14,23.18613,20.44672,23.22125,25.68721,22,26.3923a.90009.90009,0,0,1-.45691.10064c-2.01725,0-5.93792-3.17678-9.00721-8.49294C8.81387,11.55328,8.77875,6.31279,10,5.6077a.90278.90278,0,0,1,.45766-.10064m-.00076-2A2.87113,2.87113,0,0,0,9,3.87564C6.13025,5.5325,6.93785,12.30391,10.80385,19c3.28459,5.68906,7.71948,9.49292,10.73927,9.49292A2.87033,2.87033,0,0,0,23,28.12436C25.86975,26.4675,25.06215,19.69609,21.19615,13c-3.28459-5.68906-7.71948-9.49342-10.73927-9.49292Z"
          fill="#0288d1"
        />
        <path
          d="M21.54311,5.50706A.9.9,0,0,1,22,5.6077c1.22125.70509,1.18613,5.94558-2.5359,12.3923-3.06929,5.31616-6.99,8.49294-9.00721,8.49294A.9.9,0,0,1,10,26.3923C8.77875,25.68721,8.81387,20.44672,12.5359,14c3.06929-5.31616,6.99-8.49294,9.00721-8.49294m0-2c-3.01979,0-7.45468,3.80386-10.73927,9.49292C6.93785,19.69609,6.13025,26.4675,9,28.12436a2.87033,2.87033,0,0,0,1.45688.36856c3.01979,0,7.45468-3.80386,10.73927-9.49292C25.06215,12.30391,25.86975,5.5325,23,3.87564a2.87033,2.87033,0,0,0-1.45688-.36856Z"
          fill="#0288d1"
        />
      </g>
    </svg>
  );
};

export default ReactIcon;
