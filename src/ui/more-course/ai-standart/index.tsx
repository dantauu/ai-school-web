import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

export const AiStandardSection = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-5 rounded-[12px] gradient-purple">
      <h3 className="text-[42px] text-center leading-12">Этот курс — <span className="text-gradient-white">для тех, кто не хочет «выпасть» из реальности</span>,<br/> где AI уже стал стандартом.</h3>
      <ButtonGradientBlue className="w-full h-[50px]">Посмотреть подробную программу</ButtonGradientBlue>
    </div>
  )
}