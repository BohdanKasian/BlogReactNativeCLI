import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const DoneIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path stroke="#1D1C20" strokeLinecap="round" strokeWidth={1.4} d="M12.917 10H7.083M10 7.083v5.834" />
    <Rect width={16.667} height={16.667} x={1.667} y={1.667} stroke="#1D1C20" strokeWidth={1.4} rx={6} />
  </Svg>
);
