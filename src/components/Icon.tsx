import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Icons from "/icons.svg";

interface Props {
  className?: string;
  id?: string;
  href?: string;
  name: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: string;
  style?: string;
}

const Icon = (props: Props) => {

  return (<a className={props.className} href={props.href} target="_blank">
    <svg
      className={twMerge(
        "fill-primary origin-center " + (props.onClick ? "cursor-pointer " : "") + props.style
      )}
      height={props.size}
      width={props.size}
      onClick={props.onClick}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <use className="pointer-events-none" href={`${Icons}#${props.name}`}></use>
    </svg>
  </a>)
}
export default Icon;
