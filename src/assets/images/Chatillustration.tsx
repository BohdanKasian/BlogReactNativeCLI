/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

export const Chatillustration = (props: any) => (
  <Svg
    width={123}
    height={108}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M.998 0h121.004v108H.998z" />
    <Defs>
      <Pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <Use xlinkHref="#b" transform="scale(.0005)" />
      </Pattern>
      <Image
        id="b"
        width={1982}
        height={1769}
        // @ts-ignore
      />
    </Defs>
  </Svg>
);