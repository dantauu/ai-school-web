export const Radio = ({
                        id,
                        name,
                        checked,
                        onChange,
                      }: {
  id?: string
  name: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <label htmlFor={id} className="relative w-5.5 h-5.5 cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer absolute opacity-0 w-0 h-0"
      />
      <div
        className={`
          w-full h-full rounded-full border border-[#808080]
          transition-all duration-200 ease-in-out
          ${checked ? "bg-[#0062FF]" : "bg-[#ffffff21]"}
          relative
        `}
      >
        <div
          className={`
            absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-white
            -translate-x-1/2 -translate-y-1/2
            transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </label>
  )
}
