import type { SVGProps } from "react"
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M8 .253a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0v-6H1a1 1 0 0 1 0-2h6v-6a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgPlus
