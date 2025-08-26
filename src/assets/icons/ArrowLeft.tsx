import type { SVGProps } from "react"
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#F5F5F5"
      d="M7.293.293a1 1 0 1 1 1.414 1.414L3.414 7H15a1 1 0 1 1 0 2H3.414l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7A1 1 0 0 1 .1 8.433a1 1 0 0 1-.057-.142l-.013-.05a1 1 0 0 1-.003-.472l.016-.062a1 1 0 0 1 .122-.257q.056-.085.128-.157z"
    />
  </svg>
)
export default SvgArrowLeft
