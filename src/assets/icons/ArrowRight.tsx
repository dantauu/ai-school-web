import type { SVGProps } from "react"
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.293.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 .25.414l.015.062q.027.111.028.231-.001.125-.031.24l-.013.051a1 1 0 0 1-.165.317 1 1 0 0 1-.084.099l-7 7a1 1 0 1 1-1.414-1.414L12.586 9H1a1 1 0 0 1 0-2h11.586L7.293 1.707a1 1 0 0 1 0-1.414"
    />
  </svg>
)
export default SvgArrowRight
