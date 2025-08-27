import startImage from "@/assets/images/course-1.png"

export const StartTop = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-[10px] bg-[#ffffff14]">
      <div className="w-full flex flex-col gap-2">
        <div className="w-fit p-3 bg-blur-bg rounded-[10px]">
          <p>
            Полный цикл от «не знаю ничего» до готового портфолио и своих
            проектов.
          </p>
        </div>
        <h3 className="text-[52px]">Карьерный старт в AI</h3>
        <p className="max-w-[935px]">
          — это практическая программа для новичков без технического
          бэкграунда.{" "}
        </p>
        <p>
          Всего за 3 месяца ты соберёшь портфолио из 3 собственных AI-проектов,
          разберёшься в направлениях и инструментах искусственного интеллекта,
          научишься применять нейросети и Python на реальных задачах и
          подготовишься к своему первому шагу в AI-карьеру.
        </p>
      </div>
      <img className="w-[260px] h-[274px]" src={startImage.src} />
    </div>
  )
}
