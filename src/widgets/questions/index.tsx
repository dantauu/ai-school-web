"use client"
import { DropdownQuestion } from "@/shared/ui/dropdown/question"
import { useState } from "react"
import { faqData } from "@/lib/data/questions"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

export const QuestionsSection = () => {
  const [open, setOpen] = useState<number | null>()
  const handleToggle = (id: number) => {
    setOpen(open === id ? null : id)
  }
  const dispatch = useAppDispatch()
  return (
    <div>
      <div className="1295:flex-row 1295:items-stretch items-center flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="530:text-[47px] text-[30px] 530:leading-10 leading-8">
              <span className="text-gradient-white 530:leading-10 leading-8">
                Давайте честно
              </span>
              ,
            </h3>
            <h3 className="530:text-[47px] max-w-[540px] text-[30px] 530:leading-10 leading-8">
              мы понимаем что курсов много и довериться сложно
            </h3>
          </div>
          <p className="text-[18px]">Мы попробуем развеять твои сомнения</p>
          <ButtonGradientBlue
            onClick={() => dispatch(openFormModal())}
            className="1295:w-[248px] w-full h-[50px] gradient-blue"
          >
            Задать свой вопрос
          </ButtonGradientBlue>
        </div>
        <div className="1295:w-fit w-full">
          {faqData.map((item) => (
            <DropdownQuestion
              key={item.id}
              {...item}
              isOpen={open === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
