import kidImage from "@/assets/images/course-3.png"

export const KidsTop = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-[10px] bg-[#ffffff14]">
      <div className="w-full flex flex-col gap-2">
        <div className="w-fit p-3 bg-blur-bg rounded-[10px]">
          <p>
            Учись работать с нейросетями и создавай свои первые IT-проекты уже в школе.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="leading-12 text-[52px]">Курс «AI для подростков и детей»</h3>
          <p className="max-w-[935px] text-[18px]">
            Это увлекательное и доступное обучение искусственному интеллекту и цифровым навыкам для школьников 10–18 лет, которое поможет детям не просто понять, что такое AI, но и сделать свои собственные цифровые проекты — чат-ботов, генераторы мемов, распознаватели эмоций, и многое другое.
          </p>
        </div>
      </div>
      <img className="w-[280px] h-[290px]" src={kidImage.src} />
    </div>
  )
}
