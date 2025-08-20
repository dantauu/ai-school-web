import type { SVGProps } from "react"
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#145A96"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 9.5a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6v-2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM13 5.5v2M13 17.5v2M13 11.5v2"
    />
  </svg>
)
export default SvgTicket
