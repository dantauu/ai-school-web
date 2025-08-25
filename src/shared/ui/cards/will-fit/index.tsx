import willFitOne from "@/assets/images/will-fit-1.png"
import willFitTwo from "@/assets/images/will-fit-2.png"
import willFitThree from "@/assets/images/will-fit-3.png"

const data = [
  {
    id: 1,
    image: willFitOne.src,
    title: "Эксперт в своей сфере",
    description:
      "Маркетинг, образование, бизнес, IT, креатив — хочешь ускорить работу и стать продуктивнее с AI",
  },
  {
    id: 2,
    image: willFitTwo.src,
    title: "Взрослый без опыта в IT",
    description:
      "Планируешь перейти в digital и начать зарабатывать с помощью нейросетей",
  },
  {
    id: 3,
    image: willFitThree.src,
    title: "Подросток или ребёнок",
    description:
      "Мечтаешь создавать мультики, видео, ассистентов, ботов и собственные проекты — от развлечений до первых заработков",
  },
]

export const WillFitCard = () => {
  return (
    <div className="975:flex-row flex flex-col justify-between gap-7">
      {data.map((item) => (
        <div
          key={item.id}
          className={`w-full h-auto flex flex-col gap-1 rounded-[12px] p-3 border ${
            item.id === 1
              ? "border-[#0062ff] bg-[rgb(20,97,135)]"
              : item.id === 2
                ? "border-[#FD08B0] bg-[rgb(53,26,81)]"
                : "border-white bg-[rgb(39,61,106)]"
          }`}
        >
          <img className="w-[112px] h-[112px]" src={item.image} />
          <p className="text-[23px]">{item.title}</p>
          <p className="max-w-[470px] text-[17px]">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
