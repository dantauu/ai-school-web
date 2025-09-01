import SvgPlus from "@/assets/icons/Plus"
import { cn } from "@/lib/utils/cn"

type DropdownProps = {
  id: number
  title: string
  description: string
  isOpen: boolean
  onToggle: (id: number) => void
  classDescription?: string
}

export const DropdownQuestion = ({
  id,
  title,
  description,
  isOpen,
  onToggle,
  classDescription,
}: DropdownProps) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className={`w-full flex flex-col 830:justify-normal justify-center cursor-pointer select-none 830:p-5 p-4 rounded-2xl mb-3 transition-all border border-white bg-blur-bg duration-300 ${isOpen ? "h-fit" : "min-h-[70px]"}`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="830:text-[20px] text-[18px] 830:leading-normal leading-5.5">
          {title}
        </h3>
        <SvgPlus
          className={`min-w-5 min-h-5 duration-200 ${isOpen && "rotate-45"}`}
        />
      </div>
      {isOpen && (
        <p
          className={cn(
            `1295:w-[530px] w-full mt-3 830:text-[20px] text-[16px] 830: 830:leading-normal leading-5 text-gray-200`,
            classDescription
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
