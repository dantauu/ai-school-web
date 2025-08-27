import type { SVGProps } from "react"
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.013 1a4.13 4.13 0 0 1 3.958 5.115v.001L15.272 9h4.56a3 3 0 0 1 2.923 3.67l-.044.17-2.33 8A3 3 0 0 1 17.5 23H4a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h2.76l.138-.01a1 1 0 0 0 .756-.545l.002-.003 3.45-6.89c.171-.342.524-.557.907-.552M9.444 9.338v-.001A3 3 0 0 1 8 10.729V21h9.5a1 1 0 0 0 .96-.719l2.33-8 .026-.113A1 1 0 0 0 19.83 11H14a1 1 0 0 1-.972-1.236l1-4.12.001-.003a2.13 2.13 0 0 0-1.118-2.417 2 2 0 0 0-.34-.132zM4 11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V11z"
    />
  </svg>
)
export default SvgLike
