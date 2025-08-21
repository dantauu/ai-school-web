import SvgStudy from "@/assets/icons/Study"
import SvgTools from "@/assets/icons/Tools"
import avatar1 from "@/assets/images/avatar-1.png"
import avatar2 from "@/assets/images/avatar-2.png"
import avatar3 from "@/assets/images/avatar-3.png"
import avatar4 from "@/assets/images/avatar-4.png"
import avatar5 from "@/assets/images/avatar-5.png"
import videoFrame from "@/assets/images/frame-video.png"
import Button from "@/shared/ui/buttons"

const data = [
  {
    id: 1,
    icon: <SvgStudy />,
    title: "Учись быстро, используй сразу",
    text: "Быстрый вход - мощный старт",
  },
  {
    id: 2,
    icon: <SvgTools />,
    title: "Инструменты делают работу за тебя",
    text: "Боты, нейросети и крутые AI-фишки",
  },
]

const avatars = [
  { id: 1, image: avatar1 },
  { id: 2, image: avatar2 },
  { id: 3, image: avatar3 },
  { id: 4, image: avatar4 },
  { id: 5, image: avatar5 },
]

export const RightPart = () => {
  return (
    <div className="flex flex-col gap-15">
      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <div className="flex gap-3" key={item.id}>
            <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#145A96] rounded-full mt-2">
              {item.icon}
            </div>
            <div className="flex flex-col leading-8">
              <p className="w-[258px] text-[25px]">{item.title}</p>
              <p className="w-[330px] text-[20px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-5">
            {avatars.map((item) => (
              <img key={item.id} src={item.image.src} />
            ))}
          </div>
          <p>10 000+ учеников</p>
        </div>
        <div className="flex flex-col gap-3 w-[415px] bg-blur-bg rounded-[19px] p-2">
          <img src={videoFrame.src} />
          <Button className="w-full h-[48px] gradient-blue" variant="gradient">
            Посмотреть как это работает
          </Button>
        </div>
      </div>
    </div>
  )
}
