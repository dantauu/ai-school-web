import SvgMuscule from "@/assets/icons/Muscule"
import SvgSuiteCase from "@/assets/icons/SuiteCase"
import SvgMoney from "@/assets/icons/Money"
import SvgHeart from "@/assets/icons/Heart"
import SvgBage from "@/assets/icons/Bage"
import { CardBlur } from "@/shared/ui/cards/card-blur"
import Button from "@/shared/ui/buttons"

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
    <>
      <h3 className="w-[605px] leading-12 text-[45px]">
        Не просто знания. Результат, который можно показывать
      </h3>
      <p className="py-4 text-[20px]">
        Вот что ты получишь после прохождения курса
      </p>
      <div className="flex flex-col gap-5">
        <CardBlur
          items={topResultData}
          classItem="w-full"
          className="flex gap-5 justify-between"
        />
        <CardBlur
          items={bottomResultData}
          classItem="w-full"
          className="flex gap-5 justify-between"
        />
      </div>
      <div className="mt-[112px] w-full h-[240px] flex flex-col justify-center px-7 rounded-[15px] gradient-purple">
        <p className="text-[25px] text-center">главное:</p>
        <h3 className="text-[32px] text-center">
          Ты выйдешь с готовым результатом, а не с голой теорией
        </h3>
        <Button
          className="w-full h-[50px] mt-4 gradient-blue"
          variant="gradient"
        >
          Подобрать курс под себя
        </Button>
      </div>
    </>
  )
}
