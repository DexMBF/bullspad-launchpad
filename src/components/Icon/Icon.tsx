import React, { memo } from "react"

interface IBaseIconProps {
  children: JSX.Element;
  iconName: string;
}

export interface TIconProps {
  onClick? (event: React.MouseEvent<HTMLDivElement>): void;
}

const Icon = (props: IBaseIconProps & TIconProps) => {
  return (
    <div className={`icon ${props.iconName}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default memo(Icon)
