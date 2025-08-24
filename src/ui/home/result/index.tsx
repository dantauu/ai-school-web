"use client"

import SvgMuscule from "@/assets/icons/Muscule"
import SvgSuiteCase from "@/assets/icons/SuiteCase"
import SvgMoney from "@/assets/icons/Money"
import SvgHeart from "@/assets/icons/Heart"
import SvgBage from "@/assets/icons/Bage"
import { CardBlur } from "@/shared/ui/cards/card-blur"
import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"

const topResultData = [
  {
    id: 1,
    text: "Практический навык, а не теорию",
    description:
      "Ты будешь не учить, а делать — и видеть результат уже в процессе",
    icon: <SvgMuscule />,
  },
  {
    id: 2,
    text: "Проекты в портфолио",
    description: "Создашь 2–3 реальных проекта",
    icon: <SvgSuiteCase />,
  },
  {
    id: 3,
    text: "Готовый способ зарабатывать",
    description:
      "Фриланс, автоматизация бизнеса или карьерный рост — выбирай своё",
    icon: <SvgMoney />,
  },
]

const bottomResultData = [
  {
    id: 1,
    text: "Доступ к сообществу и поддержке",
    description: "Закрытый чат, помощь кураторов, коллаборации и обмен опытом",
    icon: <SvgHeart />,
  },
  {
    id: 2,
    text: "Сертификат + рекомендации",
    description:
      "Сертификат о прохождении + советы по трудоустройству и выходу на фриланс",
    icon: <SvgBage />,
  },
]

export const ResultSection = () => {
  return (
    <div>
      <h3 className="max-w-[605px] leading-12 text-[45px]">
        Не просто знания.{" "}
        <span className="text-gradient-white">
          Результат, который можно показывать
        </span>
      </h3>
      <p className="py-4 text-[20px]">
        Вот что ты получишь после прохождения курса
      </p>
      <div className="1070:flex-col flex flex-row gap-5 overflow-x-auto">
        <CardBlur
          items={topResultData}
          classItem="w-fit"
          className="flex shrink-0 gap-5 justify-between"
        />
        <CardBlur
          items={bottomResultData}
          classItem="w-full "
          className="flex gap-5 shrink-0 justify-between"
        />
      </div>
      <div className="1070:mt-[112px] mt-[60px] w-full h-[240px] flex flex-col justify-center px-7 rounded-[15px] gradient-purple">
        <p className="text-[25px] text-center">главное:</p>
        <h3 className="530:text-[32px] text-[23px] text-center">
          Ты выйдешь{" "}
          <span className="text-gradient-white">с готовым результатом</span>, а
          не с голой теорией
        </h3>
        <ButtonGradientBlue
          className="w-full h-[50px] mt-4"
        >
          Подобрать курс под себя
        </ButtonGradientBlue>
      </div>
    </div>
  )
}
