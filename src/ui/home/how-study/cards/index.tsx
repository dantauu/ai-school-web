import SvgVideoStudy from "@/assets/icons/VideoStudy"
import SvgPractice from "@/assets/icons/Practice"
import SvgMaster from "@/assets/icons/Master"
import SvgPeoples from "@/assets/icons/Peoples"
import SvgPencil from "@/assets/icons/Pencil"
import SvgRobot from "@/assets/icons/Robot"
import SvgDoubleChat from "@/assets/icons/DoubleChat"
import SvgBook from "@/assets/icons/Book"
import { CardBlur } from "@/shared/ui/cards/card-blur"
import Marquee from "react-fast-marquee"
import { useMediaQuery } from "@/lib/hooks/use-media-query"

const dataCardsOne = [
  { id: 1, icon: <SvgVideoStudy />, text: "Видеоуроки" },
  { id: 2, icon: <SvgPractice />, text: "Практика в каждом модуле" },
  { id: 3, icon: <SvgMaster />, text: "Мастер-классы" },
  {
    id: 4,
    icon: <SvgPeoples />,
    text: "Хакатоны и командные проекты под руководством экспертов",
  },
]

const dataCardsTwo = [
  {
    id: 1,
    icon: <SvgPencil />,
    text: "Лаборатории по созданию собственных AI-проектов",
  },
  { id: 2, icon: <SvgRobot />, text: "Личный AI-ассистент" },
  { id: 3, icon: <SvgDoubleChat />, text: "Чат с кураторами" },
  { id: 4, icon: <SvgBook />, text: "Проекты и обратная связь" },
]

export const CardsHowStudy = () => {
  const isMedia = useMediaQuery("(max-width: 1400px)")
  return (
    <>
      {isMedia ? (
        <CardsHowStudyMobile />
      ) : (
        <div className="less-desctop:gap-3 flex flex-col gap-3">
          <CardBlur
            className="flex justify-between gap-3 shrink-0 overflow-x-auto"
            classItem="less-desctop:w-full less-desctop:min-w-fit min-w-[300px] less-desctop:h-[180px] h-[145px]"
            classText="max-w-[453px] less-desctop:text-[25px] text-[20px] less-desctop:leading-7 leading-5"
            items={dataCardsOne}
          />
          <CardBlur
            className="flex justify-between gap-3 shrink-0 overflow-x-auto"
            classItem="less-desctop:w-full min-w-[300px] less-desctop:h-[180px] h-[145px]"
            classText="max-w-[453px] less-desctop:text-[25px] text-[20px] less-desctop:leading-7 leading-5"
            items={dataCardsTwo}
          />
        </div>
      )}
    </>
  )
}

const CardsHowStudyMobile = () => {
  return (
        <div className="flex flex-col gap-2">
          <Marquee
            autoFill={true}
            pauseOnHover={false}
            pauseOnClick={true}
            speed={100}
            direction={"right"}
          >
            <CardBlur
              items={dataCardsOne}
              classItem="ml-2 h-[145px] w-[270px]"
              className="flex justify-between"
              classText="text-[20px] leading-5"
            />
          </Marquee>
          <Marquee
            autoFill={true}
            pauseOnHover={false}
            pauseOnClick={true}
            speed={100}
            direction={"left"}
          >
          <CardBlur
            items={dataCardsTwo}
            classItem="ml-2 h-[145px] w-[270px]"
            className="flex flex-row"
            classText="text-[20px] leading-5"
          />
          </Marquee>
        </div>
  )
}
