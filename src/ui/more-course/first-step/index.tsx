import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

export const FirstStepSection = () => {
  return (
    <div className="flex flex-col gap-4 gradient-purple rounded-[12px] p-4">
      <h3 className="975:text-[38px] text-[24px] 975:leading-10 leading-8 text-center">
        Пока другие думают, вы можете{" "}
        <span className="text-gradient-white">
          сделать первый шаг
          <br /> к карьере будущего
        </span>{" "}
        своего ребёнка.
      </h3>
      <ButtonGradientBlue className="h-[50px]">
        Записаться на курс
      </ButtonGradientBlue>
    </div>
  )
}
