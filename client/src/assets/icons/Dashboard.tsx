import React, { FC } from "react";

interface propsType {
  width?: number;
  height?: number;
  className?: string;
}

const Dashboard: FC<propsType> = ({
  width,
  height,
  className,
}): JSX.Element => {
  return (
    <svg
      height={width || 50}
      width={height || 50}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 640 640"
      fill="currentcolor"
    >
      <path
        fillOpacity=".1"
        d="M484 150.3c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m-66.7 190.4c25.1.2 66.3.2 91.5 0 25.1-.1 4.5-.2-45.8-.2s-70.9.1-45.7.2"
      />
      <path
        fillOpacity=".2"
        d="M85.1 309.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3M307 336.3c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m68.5 8.7c2.1 2.2 4.1 4 4.4 4s-1.3-1.8-3.4-4-4.1-4-4.4-4 1.3 1.8 3.4 4m-61.5-1.7c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m7 7c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9M440.5 410c33 33 60.2 60 60.5 60s-26.5-27-59.5-60-60.2-60-60.5-60 26.5 27 59.5 60M328 357.3c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m9 9.2c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5m4 3.8c0 .2 1.5 1.6 3.3 3.3l3.2 2.9-2.9-3.3c-2.8-3-3.6-3.7-3.6-2.9m68 68.2c33.8 33.8 61.7 61.5 62 61.5s-27.2-27.7-61-61.5-61.7-61.5-62-61.5 27.2 27.7 61 61.5"
      />
      <path
        fillOpacity=".3"
        d="M85.1 312.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m.1 13.4c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3"
      />
      <path
        fillOpacity=".4"
        d="M85.3 319c0 3 .2 4.3.4 2.7.2-1.5.2-3.9 0-5.5-.2-1.5-.4-.2-.4 2.8m225.5 235.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m18 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"
      />
      <path
        fillOpacity=".6"
        d="M318.3 554.7c1.5.2 3.9.2 5.5 0 1.5-.2.2-.4-2.8-.4s-4.3.2-2.7.4"
      />
      <path
        fillOpacity=".5"
        d="M313.8 554.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"
      />
      <path
        fillOpacity=".7"
        d="m155.9 151.7-2.4 2.8 2.8-2.4c2.5-2.3 3.2-3.1 2.4-3.1-.2 0-1.4 1.2-2.8 2.7m-5 5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m340.1 1.7c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M154 485.2c4.1 4.5 5 5.3 5 4.5 0-.2-2.1-2.3-4.7-4.7l-4.8-4.5z"
      />
      <path
        fillOpacity=".8"
        d="M485.5 153c2.7 2.7 5.1 5 5.4 5s-1.7-2.3-4.4-5c-2.7-2.8-5.1-5-5.4-5s1.7 2.2 4.4 5"
      />
      <path
        fillOpacity=".9"
        d="M473 141.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-308.1 2.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m-20 20c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m351.1.7c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M386 416.5c45.9 45.9 83.7 83.5 84 83.5s-37.1-37.6-83-83.5-83.7-83.5-84-83.5 37.1 37.6 83 83.5m50.5-11.5c35.2 35.2 64.2 64 64.5 64s-28.3-28.8-63.5-64-64.2-64-64.5-64 28.3 28.8 63.5 64m-292 70c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m18.5 18.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
      />
      <g strokeWidth="0">
        <path d="M283 88c-48.9 8.2-92.8 30.8-127.6 65.4-6.1 6.1-13.9 14.7-17.4 19.1-52.6 66.4-66.2 153.8-36.1 231.1 12.2 31.4 30.1 58.7 54 82.4 35.3 35 79.4 57.2 130.6 65.6 15.5 2.6 52.3 2.6 68.5 0 39.1-6.2 74.7-21.1 106.7-44.9l8.3-6.1-83.9-84.1c-59-58.9-84.5-85.1-85.6-87.7-1.3-3.3-1.5-18-1.5-123.3V86l-2.7.1c-1.6 0-7.5.9-13.3 1.9" />
        <path d="M342 192v106h212.1l-.6-5.8c-10.7-90.5-74-167.7-160.6-195.7-15.3-4.9-41.4-10.5-49.3-10.5-1.5 0-1.6 8.7-1.6 106m95.4 212.9 64 64 4.4-5.7c18.7-23.8 33.9-54.7 41.8-85.2 2.3-8.9 6.4-31.4 6.4-35.3 0-1.6-5-1.7-90.2-1.7h-90.3z" />
      </g>
    </svg>
  );
};

export default Dashboard;