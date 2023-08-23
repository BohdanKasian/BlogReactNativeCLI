import * as React from "react";
import Svg, { Defs, Stop, Path, LinearGradient } from "react-native-svg";

export const LoadingIcon = (props: any) => (
  <Svg width={props.size || 40} height={props.size || 40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0Zm0 3C10.611 3 3 10.611 3 20s7.611 17 17 17 17-7.611 17-17S29.389 3 20 3Z"
      fill="url(#a)"
    />
    <Path
      d="M0 20C0 8.954 8.954 0 20 0v3C10.611 3 3 10.611 3 20s7.611 17 17 17v3C8.954 40 0 31.046 0 20Z"
      fill="#0FB99A"
    />
    <Defs>
      <LinearGradient id="a" x1={20} y1={0} x2={20} y2={40} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
