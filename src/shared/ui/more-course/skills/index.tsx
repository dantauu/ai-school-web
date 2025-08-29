"use client"
import { cn } from "@/lib/utils/cn"
import SvgLike from "@/assets/icons/Like"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

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
  const dispatch = useAppDispatch()
  return (
    <div className="1155:flex-row flex flex-col justify-between 1155:gap-10 gap-4">
      <div className={cn(`flex flex-col w-full p-4 rounded-[12px]`, className)}>
        <p className="530:text-[32px] text-[24px] pb-2">{titleLeft}</p>
        <ul className="pl-4">
          {skillsItems.map((item) => (
            <li className="list-disc text-[17px]" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full gap-3 bg-white rounded-[12px] text-black p-5">
        <p className="530:text-[32px] text-[24px]">Результат:</p>
        <ul className="pl-4">
          {resultItems.map((item) => (
            <li className="list-disc text-[17px]" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 w-full bg-[#0062FF] p-4 rounded-[10px]">
          <SvgLike className="min-w-[24px] min-h-[24px]" />
          <p className="text-white max-w-[595px]">{likeText}</p>
        </div>
        <ButtonGradientBlue onClick={() => dispatch(openFormModal())} className="w-full h-[45px] text-white">
          Записаться на курс
        </ButtonGradientBlue>
      </div>
    </div>
  )
}
