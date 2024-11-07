import React, { FC } from "react";

interface propsType {
  width?: number;
  height?: number;
  className?: string;
}

const AddIcon: FC<propsType> = ({ width, height, className }): JSX.Element => {
  return (
    <svg width={width || 50} height={height || 50} className={className} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 640 640" fill="currentcolor">
      <path
        fillOpacity=".1"
        d="M160.9 146.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m320.6 3.3c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m8 8c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
      />
      <path
        fillOpacity=".2"
        d="M485.5 154c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m-336 328c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m340.4-.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3M157.5 490c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
      />
      <path
        fillOpacity=".3"
        d="m153.5 154.2-4 4.3 4.3-4c3.9-3.6 4.7-4.5 3.9-4.5-.2 0-2.1 1.9-4.2 4.2m331.4 332.5-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4m-331.4-.7c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
      />
      <path
        fillOpacity=".4"
        d="M328.8 85.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6M85.1 310.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m469 0c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m-469 19c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m224.7 225.1c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m19 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"
      />
      <path
        fillOpacity=".5"
        d="M311.8 85.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m242.3 227.9c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m.1 12.9c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8m-469.1.1c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3m227.7 228.1c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"
      />
      <path
        fillOpacity=".6"
        d="M317.8 85.7c1.8.2 4.5.2 6 0s0-.4-3.3-.4-4.5.2-2.7.4m-19.6 169.5L298 298l-42.7.3-42.8.2 42.8.3c33.5.1 42.9-.1 43.2-1.1.3-.6.4-20.1.2-43.2l-.2-42zm43.3.8v42.5H427l-42.5-.2-42.5-.3-.3-42.3-.2-42.2zM85.3 319.5c0 3.3.2 4.5.4 2.7s.2-4.5 0-6-.4 0-.4 3.3m469 0c0 2.7.2 3.8.4 2.2.2-1.5.2-3.7 0-5-.2-1.2-.4 0-.4 2.8m-299.1 22.2 42.8.3.3 42.5.2 42.5v-85.5h-86zm86.3.6c-.3.6-.4 20.1-.2 43.2l.2 42 .3-42.7.2-42.8 42.8-.3 42.7-.2-42.8-.3c-33.5-.1-42.9.1-43.2 1.1m-23.7 212.4c1.8.2 4.5.2 6 0s0-.4-3.3-.4-4.5.2-2.7.4"
      />
      <path
        fillOpacity=".8"
        d="M161.9 146.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m317.6 2.3c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m11 11c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m2.4 317.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3"
      />
      <path
        fillOpacity=".9"
        d="M167.9 141.7c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m303.1-.3c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m-317.5 13.8-7 7.3 7.3-7c6.7-6.4 7.7-7.5 6.9-7.5-.1 0-3.4 3.3-7.2 7.2m331.5-.7c1.9 1.9 3.6 3.5 3.9 3.5s-1-1.6-2.9-3.5-3.6-3.5-3.9-3.5 1 1.6 2.9 3.5m-344.1 14.2c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m357 303c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7M154 485.5c3.5 3.6 6.7 6.5 6.9 6.5.3 0-2.4-2.9-5.9-6.5s-6.7-6.5-6.9-6.5c-.3 0 2.4 2.9 5.9 6.5m331 .2-6.5 6.8 6.8-6.5c6.2-6 7.2-7 6.4-7-.1 0-3.2 3-6.7 6.7m-14.1 13c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7"
      />
      <path d="M299 86.6c-57.3 6.9-102.7 27.9-141.4 65.4-48.4 47-73.5 108.8-71.3 176 2 61.2 26.8 116.8 71.4 160 42.2 40.9 95.8 63.8 154.3 65.7 67.1 2.2 129.1-22.9 176-71.3 34.3-35.5 55.9-78.9 63.7-128.4 2.5-16 2.5-51.9 0-67.8C539.5 209 491.5 143.5 422.5 110c-22.3-10.8-40.5-16.7-65-21.1-9.2-1.6-17-2.2-33.5-2.4-11.8-.2-23.1-.1-25 .1M329.9 194c4.8 2.4 9.5 7.9 11 12.9.7 2.6 1.1 17.7 1.1 47.5V298h43.9c47.9 0 49.5.2 55.4 5.8 4.6 4.4 6.7 9.4 6.7 16.2 0 7.3-2.3 12.5-7.5 16.8-6.2 5-7.9 5.2-54.9 5.2H342v43.6c0 47-.2 48.7-5.2 54.9-8.2 9.9-24 10.3-33 .8-5.6-5.9-5.8-7.5-5.8-55.4V342h-43.6c-47 0-48.7-.2-54.9-5.2-9.9-8.2-10.3-24-.8-33 5.9-5.6 7.5-5.8 55.4-5.8H298v-43.9c0-36.9.2-44.5 1.5-48.2 1.8-5.1 5.5-9.3 10.5-11.9 4.9-2.6 14.8-2.6 19.9 0" />
    </svg>
  );
};

export default AddIcon;