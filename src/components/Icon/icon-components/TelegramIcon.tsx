import Icon, { TIconProps } from "../Icon"

const TelegramIcon = (props: TIconProps) => {
  return (
    <Icon iconName="telegram-icon" { ...props }>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1165_441"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <rect
            width="40"
            height="40"
            fill="#05070F"
          />
        </mask>
        <g mask="url(#mask0_1165_441)">
          {/* eslint-disable-next-line max-len */}
          <path d="M39.886 6.25806L33.8496 34.7718C33.3939 36.7838 32.2066 37.2847 30.5193 36.3373L21.3212 29.5484L16.8836 33.8244C16.3921 34.3167 15.982 34.7274 15.0348 34.7274L15.6963 25.3454L32.7424 9.91726C33.4839 9.25611 32.5809 8.88833 31.5908 9.55091L10.5172 22.8425L1.44478 19.9976C-0.528288 19.3808 -0.564006 18.0213 1.85625 17.0725L37.3414 3.37878C38.9845 2.76199 40.4218 3.74513 39.886 6.25949V6.25806Z" fill="#FBFBFF"/>
        </g>
      </svg>
    </Icon>
  )
}

export default TelegramIcon
