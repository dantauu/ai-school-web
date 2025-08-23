"use client"
import { DropdownQuestion } from "@/shared/ui/dropdown/question"
import { useState } from "react"
import { faqData } from "@/lib/data/questions"
import Button from "@/shared/ui/buttons"

export const QuestionsSection = () => {
  const [open, setOpen] = useState<number | null>()
  const handleToggle = (id: number) => {
    setOpen(open === id ? null : id)
  }
  return (
    <div>
      <div className="1295:flex-row 1295:items-stretch items-center flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="530:text-[47px] text-[32px] leading-10">
              <span className="text-gradient-white">Давайте честно</span>,
            </h3>
            <h3 className="530:text-[47px] text-[32px] leading-10">
              мы понимаем что курсов много и довериться сложно
            </h3>
          </div>
          <p className="text-[18px]">Мы попробуем развеять твои сомнения</p>
          <Button
            className="w-[248px] h-[50px] gradient-blue"
            variant="gradient"
          >
            Задать свой вопрос
          </Button>
        </div>
        <div>
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
