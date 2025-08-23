import type { SVGProps } from "react"
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={14}
    fill="none"
    viewBox="0 0 20 14"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M19 12a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2z"
    />
  </svg>
)
export default SvgMenu
