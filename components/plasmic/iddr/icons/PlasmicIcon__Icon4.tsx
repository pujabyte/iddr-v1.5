// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-80.5 0 417 417"}
      version={"1.1"}
      preserveAspectRatio={"xMidYMid"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#343434"}
        d={"M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"}
      ></path>

      <path
        fill={"#8C8C8C"}
        d={"M127.962 0L0 212.32l127.962 75.639V154.158z"}
      ></path>

      <path
        fill={"#3C3C3B"}
        d={"M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"}
      ></path>

      <path fill={"#8C8C8C"} d={"M127.962 416.905v-104.72L0 236.585z"}></path>

      <path
        fill={"#141414"}
        d={"M127.961 287.958l127.96-75.637-127.96-58.162z"}
      ></path>

      <path fill={"#393939"} d={"M0 212.32l127.96 75.638v-133.8z"}></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
