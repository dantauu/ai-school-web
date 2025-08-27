import { cn } from "@/lib/utils/cn"
import SvgLike from "@/assets/icons/Like"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

type items = {
  id: number
  text: string
}

type skillsType = {
  titleLeft: string
  skillsItems: items[]
  resultItems: items[]
  className?: string
  likeText: string
}

export const Skills = ({
  titleLeft,
  skillsItems,
  resultItems,
  likeText,
  className,
}: skillsType) => {
  return (
    <div className="flex justify-between">
      <div
        className={cn(
          `flex flex-col gradient-white-reverse p-4 rounded-[12px]`,
          className
        )}
      >
        <p className="text-[32px]">{titleLeft}</p>
        <ul className="pl-4">
          {skillsItems.map((item) => (
            <li className="list-disc text-[17px]" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-[12px] text-black p-5">
        <p className="text-[32px]">Результат:</p>
        <ul className="pl-4">
          {resultItems.map((item) => (
            <li className="list-disc text-[17px]" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 w-full bg-[#0062FF] p-4 rounded-[10px]">
          <SvgLike />
          <p className="text-white max-w-[595px]">{likeText}</p>
        </div>
        <ButtonGradientBlue className="w-full h-[45px] text-white">
          Записаться на курс
        </ButtonGradientBlue>
      </div>
    </div>
  )
}
