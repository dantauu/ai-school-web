import type { SVGProps } from "react"
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M17 13a4 4 0 1 1-3.874 5H5a1 1 0 1 1 0-2h8.126c.444-1.725 2.01-3 3.874-3m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7 3a4 4 0 0 1 3.874 3H19a1 1 0 1 1 0 2h-8.126A4.002 4.002 0 0 1 3 7a4 4 0 0 1 4-4m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
)
export default SvgFilter
