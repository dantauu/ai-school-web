import type { SVGProps } from "react"
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={24}
    fill="none"
    viewBox="0 0 21 24"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M20 10.268c1.333.77 1.333 2.694 0 3.464L3.5 23.258c-1.333.77-3-.192-3-1.732V2.474C.5.934 2.167-.028 3.5.742z"
    />
  </svg>
)
export default SvgPlay
