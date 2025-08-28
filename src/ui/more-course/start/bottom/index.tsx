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
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex items-center gap-2 p-4 w-full bg-white rounded-[10px]">
          <SvgPeoples className="text-[#145A96]" />
          <p className="text-black">
            Для кого: новичков без опыта в IT, кто хочет войти в digital и
            построить карьеру в AI-сфере.
          </p>
        </div>
        <div className="flex p-3 gap-2 bg-[#38FCFE4D] rounded-[10px]">
          <SvgBook />
          <p>Формат: 3 занятия в неделю + работа над проектами</p>
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        {itemsBottom.map((item) => (
          <div
            key={item.id}
            className={`flex w-full gap-3 p-3 rounded-[10px] ${item.id === 3 ? "gradient-purple" : "bg-[#0062FF]"}`}
          >
            {item.icon}
            <div className="flex gap-2">
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
