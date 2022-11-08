import * as React from 'react'

import library from './lib'

export interface IconProps extends React.AllHTMLAttributes<HTMLElement> {
  component?: React.ElementType;
  lib?: Record<string, React.ElementType>;
  icon: string;
  ratio?: number;
}

export function camelify(string: string): string {
  return string.replace(/[-_/](\w)/g, (_, str) =>
    str ? str.toUpperCase() : '',
  )
}

function Icon(props: IconProps): JSX.Element | null {
  const {
    className,
    component: Component = 'div',
    lib = library,
    icon,
    ratio = 1,
    ...restProps
  } = props

  if (!icon) {
    return null
  }
  const Ico = lib[camelify(icon)]

  return (
    <Component className={`icon ${className ? className : ''}`} {...restProps}>
      {Ico && <Ico ratio={ratio} />}
    </Component>
  )
}
export default Icon
