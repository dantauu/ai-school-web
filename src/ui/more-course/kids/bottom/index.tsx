import SvgPeoples from "@/assets/icons/Peoples"
import SvgBook from "@/assets/icons/Book"
import SvgCount from "@/assets/icons/Count"
import SvgTime from "@/assets/icons/Time"

const itemsBottom = [
  {
    id: 1,
    title: "Количество:",
    text: "24 занятия по 90 минут",
    icon: <SvgCount />,
  },
  {
    id: 2,
    title: "Продолжительность:",
    text: "2 месяца",
    icon: <SvgTime />,
  },
  {
    id: 3,
    title: "Итог:",
    text: "личный AI-набор для работы + 2–3 проекта в портфолио",
    icon: <SvgPeoples />,
  },
]

export const KidsBottom = () => {
  return (
    <div className="flex flex-col 1070:gap-5 gap-2">
      <div className="1070:flex-row flex flex-col 1070:gap-5 gap-2">
        <div className="flex items-center gap-2 p-4 w-full bg-white rounded-[10px]">
          <SvgPeoples className="text-[#145A96] min-w-[28px] min-h-[26px]" />
          <div className="1070:flex-row flex flex-col gap-1">
            <p className="min-w-fit text-black">Для кого:</p>
            <p className="text-black">
              новичков без опыта в IT, кто хочет войти в digital и построить
              карьеру в AI-сфере.
            </p>
          </div>
        </div>
        <div className="flex p-3 gap-2 bg-[#38FCFE4D] rounded-[10px]">
          <SvgBook />
          <div className="1070:flex-row flex flex-col">
            <p>Формат:</p>
            <p>3 занятия в неделю + работа над проектами</p>
          </div>
        </div>
      </div>
      <div className="1070:flex-row flex flex-col 1070:gap-5 gap-2 justify-between">
        {itemsBottom.map((item) => (
          <div
            key={item.id}
            className={`flex w-full gap-3 p-3 rounded-[10px] ${item.id === 3 ? "gradient-purple" : "bg-[#0062FF]"}`}
          >
            {item.icon}
            <div className="1070:flex-row flex flex-col gap-2">
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
