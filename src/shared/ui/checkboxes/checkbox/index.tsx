export const Checkbox = ({
  id,
  checked,
  onChange,
}: {
  id?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <label
      htmlFor={id}
      className="relative 975:w-5.5 975:h-5.5 w-[32px] h-[32px] cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer absolute opacity-0 w-0 h-0"
      />
      <div
        className={`
          w-full h-full rounded border-1 border-[#808080]
          transition-all duration-200 ease-in-out ${checked ? "bg-[#0062FF]" : "bg-[#ffffff21]"}
        `}
      />
      <svg
        className={`
          absolute left-1/2 top-1/2 975:w-4 975:h-4 w-[32px] h-[32px] text-[#fff]
          -translate-x-1/2 -translate-y-1/2
          opacity-0 peer-checked:opacity-100
          transition-opacity duration-200
          pointer-events-none
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </label>
  )
}
