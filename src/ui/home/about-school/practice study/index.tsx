import Button from "@/shared/ui/buttons"

export const skills = [
  { id: 1, text: "Создание чат-ботов и AI-ассистентов" },
  { id: 2, text: "Машинное обучение" },
  { id: 3, text: "Автоматизация задач" },
  { id: 4, text: "NLP" },
  { id: 5, text: "Генерация изображений" },
  { id: 6, text: "Компьютерное зрение" },
  { id: 7, text: "MLOps" },
  { id: 8, text: "Применение OpenCV" },
  { id: 9, text: "PIL" },
  { id: 10, text: "YOLO" },
  { id: 11, text: "Основы работы с базами данных" },
  { id: 12, text: "И многое другое" },
]

export const PracticeStudy = () => {
  return (
    <div className="h-fit flex flex-col gap-4 rounded-[15px] p-5 border border-[#0062ff] gradient-dark-blue">
      <h3 className="585:text-[25px] 585:leading-normal leading-5 text-[20px]">
        Обучаем от основ до продвинутых направлений:
      </h3>
      <div className="flex gap-2 flex-wrap">
        {skills.map((item) => (
          <Button
            className={`px-[14px] py-[10px] text-left rounded-[10px] bg-[#1b72bd] duration-350 hover:bg-white hover:text-black ${item.id === 12 && "bg-white text-black"}`}
            key={item.id}
            variant="default"
          >
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  )
}
