"use client"

import { IMaskInput } from "react-imask"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

export const FormRequest = () => {
  return (
    <form>
      <div className="w-full max-w-[540px] flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="form:flex-row flex flex-col gap-3">
            <input
              className="w-full 830:h-[64px] h-[48px] pl-5 rounded-[10px] text-black placeholder:text-[#031C52] bg-white"
              placeholder={"Введите имя"}
              required
            />
            <IMaskInput
              mask="+7 (000) 000-00-00"
              placeholder="+7 (___) ___-__-__"
              className="w-full 830:h-[64px] h-[48px] pl-5 rounded-[10px] text-black placeholder:text-[#031C52] bg-white"
              required
            />
          </div>
          <input
            className="w-full 830:h-[64px] h-[48px] pl-5 rounded-[10px] text-black placeholder:text-[#031C52] bg-white"
            placeholder={"Вставьте ссылку на Telegram/Whatsapp"}
            required
          />
          <input
            className="w-full 830:h-[64px] h-[48px] pl-5 rounded-[10px] text-black placeholder:text-[#031C52] bg-white"
            placeholder={"E-mail"}
            required
          />
        </div>
        <div className="520:flex-row flex flex-col 520:items-center gap-3">
          <ButtonGradientBlue className="520:w-[260px] w-full h-[50px]">
            Отправить
          </ButtonGradientBlue>
          <p className="text-[14px]">
            Нажимая на кнопку «Отправить», вы даёте согласие на{" "}
            <span className="cursor-pointer underline">
              обработку своих персональных данных
            </span>
          </p>
        </div>
      </div>
    </form>
  )
}
