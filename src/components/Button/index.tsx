import "./index.scss"
import { classNames } from "@knownout/lib"

import { ButtonSizes, ButtonColors } from "../types"

interface ButtonProps {
  children: any
  size: ButtonSizes
  color: ButtonColors
  onClick: () => void
}

const Button = ({
  children,
  size,
  color,
  onClick
}: ButtonProps) => {
  return (
    <button
      id={size}
      className={classNames(
        "button",
        color && color
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button