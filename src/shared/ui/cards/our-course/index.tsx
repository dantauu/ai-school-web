import Button from "@/shared/ui/buttons"

export type ListItem = {
  id: number
  text: string
}

export type OurCourseProps = {
  id: number
  countCourse: number
  title: string
  list: ListItem[]
  price: string
  titleAbout: string
  descriptionAbout: string
  img: string
  description: string
}

export const OurCourseLayout = ({
  countCourse,
  title,
  list,
  price,
  titleAbout,
  descriptionAbout,
  img,
  description,
}: OurCourseProps) => {
  return (
    <div className="w-full 1510:flex-row flex flex-col-reverse items-center">
      <div className="w-full h-full flex justify-center flex-col bg-blur-bg p-5 border border-white rounded-[20px]">
        <div className="flex flex-col pb-4">
          <p>Курс №{countCourse}</p>
          <p className="text-[50px]">{title}</p>
          <p>{description}</p>
        </div>
        <ul className="list-disc pb-5 pl-3">
          {list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <div className="1510:flex-row flex flex-col items-center gap-10 p-5 rounded-[20px] bg-[#ffffff1c]">
          <div className="flex flex-col gap-2">
            <p className="text-[20px]">Полный курс*</p>
            <p className="text-[40px]">От {price} Р</p>
            <div className="flex gap-4">
              <Button
                className="w-[160px] h-[50px] gradient-blue"
                variant="gradient"
              >
                Подробнее
              </Button>
              <Button
                className="w-[240px] h-[50px] text-black gradient-white"
                variant="gradient"
              >
                Записаться на курс
              </Button>
            </div>
          </div>
          <div className="p-4 rounded-[20px] bg-blur-bg">
            <p>{titleAbout}</p>
            <p>{descriptionAbout}</p>
          </div>
        </div>
      </div>
      <div className="">
        <img className="h-full object-cover -ml-[13.8px]" src={img} />
      </div>
    </div>
  )
}
