"use client"
import { DropdownQuestion } from "@/shared/ui/dropdown/question"
import { useState } from "react"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { questionsData } from "@/lib/data/more-course/for-kids"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

export const QuestionsKids = () => {
  const [open, setOpen] = useState<number | null>()
  const dispatch = useAppDispatch()
  const handleToggle = (id: number) => {
    setOpen(open === id ? null : id)
  }
  return (
    <div>
      <div className="1295:flex-row 1295:items-stretch  flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="530:text-[47px] text-[32px] leading-10">
              Остались вопросы?
            </h3>
            <p className="text-[18px]">Напишите нам</p>
          </div>
          <ButtonGradientBlue onClick={() => dispatch(openFormModal())} className="1295:w-[248px] w-full h-[50px] gradient-blue">
            Задать свой вопрос
          </ButtonGradientBlue>
        </div>
        <div className="1295:max-w-[850px] w-full">
          {questionsData.map((item) => (
            <DropdownQuestion
              key={item.id}
              {...item}
              isOpen={open === item.id}
              onToggle={handleToggle}
              classDescription={"1295:w-full"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
