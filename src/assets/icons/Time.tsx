import type { SVGProps } from "react"
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M12.334 1c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 2a1 1 0 0 1 1 1v5.382l3.447 1.723a1 1 0 0 1-.894 1.79l-4-2a1 1 0 0 1-.553-.895V6a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgTime
