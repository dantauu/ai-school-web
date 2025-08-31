"use client"

import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import Link from "next/link"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"
import purpleLeft from "@/assets/backgrounds/purple-left.svg"

export const SchoolBlocksSection = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="relative flex flex-col gap-5">
      <h3 className="530:text-[45px] text-[32px]">О школе</h3>
      <div className="1510:flex-row flex flex-col justify-between gap-5">
        <div className="flex flex-col justify-center gap-4 530:p-8 p-5 gradient-dark-blue rounded-[15px]">
          <p className="max-w-[500px] 530:leading-10 leading-7 530:text-[34px] text-[24px]">
            Забудь «как раньше» — учись по‑новому
          </p>
          <p className="max-w-[637px] text-[18px]">
            Платформа, где обучение подстроено под реальность: быстро, понятно,
            по делу
          </p>
          <ButtonGradientWhite
            onClick={() => dispatch(openFormModal())}
            className="w-full h-[50px] text-black"
          >
            Записаться на курс
          </ButtonGradientWhite>
        </div>
        <div className="flex flex-col justify-center gap-4 530:p-8 p-5  gradient-purple-reverse rounded-[15px]">
          <p className="530:leading-normal leading-7 530:text-[34px] text-[24px]">
            Быстрый апгрейд твоих скиллов
          </p>
          <p className="max-w-[637px] text-[18px]">
            Нейросети, no-code, AI-ассистенты — максимум пользы за минимум
            времени
          </p>
          <Link href={"/about-school"}>
            <ButtonGradientBlue className="w-full h-[50px] 530:mt-4.5 mt-0 text-white">
              О школе и подходе
            </ButtonGradientBlue>
          </Link>
        </div>
      </div>
      <div className="absolute 1070:-top-50 top-130 -z-5">
        <img src={purpleLeft.src} />
      </div>
    </div>
  )
}
