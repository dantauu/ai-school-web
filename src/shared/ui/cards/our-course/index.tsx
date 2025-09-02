"use client"

import { ButtonGradientBlue } from "@/shared/ui/buttons/gradient-blue"
import { ButtonGradientWhite } from "@/shared/ui/buttons/gradient-white"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { openFormModal } from "@/redux/slices/modal-form"

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
  path: string
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
  path,
}: OurCourseProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  return (
    <div className="w-full h-full 975:flex-row flex flex-col-reverse">
      <div className="w-full h-full flex justify-center flex-col bg-blur-bg p-5 border border-white rounded-[20px]">
        <div className="flex flex-col pb-4">
          <p>Курс №{countCourse}</p>
          <p className="530:text-[50px] 530:leading-normal leading-7.5 text-[27px] pb-3 ">
            {title}
          </p>
          <p>{description}</p>
        </div>
        <ul className="list-disc pb-5 pl-3">
          {list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <div className="1510:flex-row flex flex-col items-center gap-10 p-5 rounded-[20px] bg-[#ffffff1c]">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-[20px] leading-3">Полный курс*</p>
            <p className="530:text-[40px] text-[27px]">От {price} Р</p>
            <div className="530:flex-row flex flex-col gap-4">
              <ButtonGradientBlue
                onClick={() => router.push(path)}
                className="530:w-[160px] w-full h-[50px]"
              >
                Подробнее
              </ButtonGradientBlue>
              <ButtonGradientWhite
                onClick={() => dispatch(openFormModal())}
                className="530:w-[240px] w-full h-[50px] text-black"
              >
                Записаться на курс
              </ButtonGradientWhite>
            </div>
          </div>
          <div className="p-4 rounded-[20px] bg-blur-bg">
            <p className="530:text-[16px] text-[15px]">{titleAbout}</p>
            <p className="975:leading-normal leading-4">{descriptionAbout}</p>
          </div>
        </div>
      </div>
      <div className="shadow-img-shadow rounded-[20px]">
        <img className="h-full w-full object-cover rounded-[12px]" src={img} />
      </div>
    </div>
  )
}
