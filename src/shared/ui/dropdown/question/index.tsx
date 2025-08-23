import SvgPlus from "@/assets/icons/Plus"

type DropdownProps = {
  id: number
  title: string
  description: string
  isOpen: boolean
  onToggle: (id: number) => void
}

export const DropdownQuestion = ({
  id,
  title,
  description,
  isOpen,
  onToggle,
}: DropdownProps) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className="w-full cursor-pointer select-none p-5 rounded-2xl mb-3 transition-all border border-white bg-blur-bg duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <SvgPlus className={`w-5 h-5 duration-200 ${isOpen && "rotate-45"}`} />
      </div>
      {isOpen && (
        <p className="w-[570px] mt-3 text-sm text-gray-200 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  )
}
