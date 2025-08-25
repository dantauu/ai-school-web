import { JSX } from "react"
import { cn } from "@/lib/utils/cn"

type CardItem = {
  id: number
  icon: JSX.Element
  text: string
  description?: string
}

type CardBlurProps = {
  items: CardItem[]
  className?: string
  classItem?: string
  classText?: string
}

export const CardBlur = ({
  items,
  className,
  classItem,
  classText,
}: CardBlurProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "w-[410px] h-[220px] flex flex-col justify-center gap-3 border bg-blur-bg border-white rounded-[15px] p-5",
            classItem
          )}
        >
          <span className="min-w-[30px] min-h-[30px]">{item.icon}</span>
          <p className={cn("text-[28px]", classText)}>{item.text}</p>
          <p className="text-[18px]">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
