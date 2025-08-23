"use client"

import Button from "@/shared/ui/buttons"
import { IMaskInput } from "react-imask"

export const FormRequest = () => {
  return (
    <div className="w-[540px] flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="form:flex-row flex flex-col gap-3">
          <input
            className="form:w-[270px] w-full h-[64px] pl-5 rounded-[10px] text-black placeholder:text-black bg-white"
            placeholder={"Введите имя"}
          />
          <IMaskInput
            mask="+7 (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            className="form:w-[270px] w-full h-[64px] pl-5 rounded-[10px] text-black placeholder:text-black bg-white"
          />
        </div>
        <input
          className="w-full h-[64px] pl-5 rounded-[10px] text-black placeholder:text-black bg-white"
          placeholder={"Вставьте ссылку на телеграм"}
        />
      </div>
      <div className="flex items-center gap-3">
        <Button className="w-[160px] h-[50px] gradient-blue" variant="gradient">
          Отправить
        </Button>
        <p className="text-[14px]">
          Нажимая на кнопку «Отправить», вы даёте согласие на{" "}
          <span className="cursor-pointer underline">
            обработку своих персональных данных
          </span>
        </p>
      </div>
    </div>
  )
}
