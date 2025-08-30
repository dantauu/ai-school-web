"use client"

import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

export const FirstStepSection = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col gap-4 gradient-purple rounded-[12px] px-5 py-6 975:pb-6 pb-10">
      <h3 className="975:text-[38px] text-[24px] 975:leading-10 leading-8 text-center">
        Пока другие думают, вы можете{" "}
        <span className="text-gradient-white">
          сделать первый шаг
          <br /> к карьере будущего
        </span>{" "}
        своего ребёнка.
      </h3>
      <ButtonGradientBlue
        onClick={() => dispatch(openFormModal())}
        className="h-[50px]"
      >
        Записаться на курс
      </ButtonGradientBlue>
    </div>
  )
}
