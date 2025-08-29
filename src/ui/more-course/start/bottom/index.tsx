import SvgPeoples from "@/assets/icons/Peoples"
import SvgBook from "@/assets/icons/Book"
import SvgCount from "@/assets/icons/Count"
import SvgTime from "@/assets/icons/Time"

const itemsBottom = [
  {
    id: 1,
    title: "Количество:",
    text: "36 занятий по 90 минут",
    icon: <SvgCount />,
  },
  {
    id: 2,
    title: "Продолжительность:",
    text: "36 занятий по 90 минут",
    icon: <SvgTime />,
  },
  {
    id: 3,
    title: "Итог:",
    text: "минимум 3 реальных проекта в резюме",
    icon: <SvgPeoples />,
  },
]

export const StartBottom = () => {
  return (
    <div className="flex flex-col 1070:gap-5 gap-2">
      <div className="1070:flex-row flex flex-col 1070:gap-5 gap-2">
        <div className="830:flex-row 830:items-center items-stretch flex flex-col gap-2 p-4 w-full bg-white rounded-[10px]">
          <div className="flex items-center gap-3">
            <SvgPeoples className="text-[#145A96] min-w-[28px] min-h-[26px]" />
            <p className="min-w-fit text-black">Для кого:</p>
          </div>
          <div className="1070:flex-row flex flex-col gap-1">
            <p className="text-black leading-5">
              новичков без опыта в IT, кто хочет войти в digital и построить
              карьеру в AI-сфере.
            </p>
          </div>
        </div>
        <div className="830:flex-row flex flex-col p-3 gap-2 bg-[#38FCFE4D] rounded-[10px]">
          <div className="flex gap-3">
            <SvgBook />
            <p>Формат:</p>
          </div>
          <div className="1070:flex-row flex flex-col">
            <p>3 занятия в неделю + работа над проектами</p>
          </div>
        </div>
      </div>
      <div className="1070:flex-row flex flex-col 1070:gap-5 gap-2 justify-between">
        {itemsBottom.map((item) => (
          <div
            key={item.id}
            className={`830:flex-row flex flex-col w-full gap-2 p-3 rounded-[10px] ${item.id === 3 ? "gradient-purple" : "bg-[#0062FF]"}`}
          >
            <div className="flex gap-3">
              {item.icon}
              <p>{item.title}</p>
            </div>
            <div className="1070:flex-row flex flex-col gap-2">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
