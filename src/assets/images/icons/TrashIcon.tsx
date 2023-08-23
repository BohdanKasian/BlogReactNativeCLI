import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const TrashIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 128 128" {...props}>
    <Path d="M49 1c-1.66 0-3 1.34-3 3s1.34 3 3 3h30c1.66 0 3-1.34 3-3s-1.34-3-3-3H49zM24 15c-7.17 0-13 5.83-13 13s5.83 13 13 13h77v63c0 9.37-7.63 17-17 17H44c-9.37 0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3 1.34-3 3v52c0 12.68 10.32 23 23 23h40c12.68 0 23-10.32 23-23V40.64c5.72-1.36 10-6.5 10-12.64 0-7.17-5.83-13-13-13H24zm0 6h80c3.86 0 7 3.14 7 7s-3.14 7-7 7H24c-3.86 0-7-3.14-7-7s3.14-7 7-7zm26 34c-1.66 0-3 1.34-3 3v46c0 1.66 1.34 3 3 3s3-1.34 3-3V58c0-1.66-1.34-3-3-3zm28 0c-1.66 0-3 1.34-3 3v46c0 1.66 1.34 3 3 3s3-1.34 3-3V58c0-1.66-1.34-3-3-3z" />
  </Svg>
);