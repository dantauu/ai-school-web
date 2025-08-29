import kidImage from "@/assets/images/course-3.png"

export const KidsTop = () => {
  return (
    <div className="830:flex-row flex flex-col justify-between items-center p-4 rounded-[10px] bg-[#ffffff14]">
      <div className="w-full flex flex-col gap-2">
        <div className="830:w-fit w-full p-3 bg-blur-bg rounded-[10px]">
          <p>
            Учись работать с нейросетями и создавай свои первые IT-проекты уже в
            школе.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="1155:text-[52px] 1155:leading-normal leading-7 text-[32px]">
            Курс «AI для подростков и детей»
          </h3>
          <p className="max-w-[935px] text-[18px] pb-4">
            Это увлекательное и доступное обучение искусственному интеллекту и
            цифровым навыкам для школьников 10–18 лет, которое поможет детям не
            просто понять, что такое AI, но и сделать свои собственные цифровые
            проекты — чат-ботов, генераторы мемов, распознаватели эмоций, и
            многое другое.
          </p>
        </div>
      </div>
      <img className="830:w-[260px] 830:h-[274px] w-full h-full" src={kidImage.src} />
    </div>
  )
}
