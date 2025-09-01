import Button from "@/shared/ui/buttons"
import blue from "@/assets/backgrounds/blue.svg"

const dataTools = [
  {
    id: 1,
    items: [
      { id: 1, text: "PyTorch" },
      { id: 2, text: "TensorFlow" },
      { id: 3, text: "Scikit-learn" },
      { id: 4, text: "Hugging Face" },
      { id: 5, text: "OpenAI" },
    ],
  },
  {
    id: 2,
    items: [
      { id: 1, text: "Midjourney" },
      { id: 2, text: "Kandinsky" },
      { id: 3, text: "ChatGPT" },
    ],
  },
  {
    id: 3,
    items: [
      { id: 1, text: "Запуск проекта на GPU" },
      { id: 2, text: "JupyterHub" },
      { id: 3, text: "Colab" },
      { id: 4, text: "Яндекс DataSphere" },
    ],
  },
]

export const PracticeToolsSection = () => {
  return (
    <div className="relative flex flex-col gap-1">
      <p className="text-[21px] leading-7 text-[#fff6]">
        Практика на топовых инструментах
      </p>
      <h3 className="530:leading-10 530:text-[45px] leading-7 text-[30px] pb-2">
        AI-инструменты не в теории,{" "}
        <span className="text-gradient-white">а в твоих руках</span>
      </h3>
      <p className="530:text-[19px] text-[18px] 530:leading-normal leading-5.5">
        Ты не просто смотришь — ты создаёшь: ботов, тексты, визуалы, модели.
      </p>

      <div className="form:flex-row flex flex-col gap-5 pt-4">
        {dataTools.map((card) => (
          <div
            key={card.id}
            className={`h-fit flex flex-col justify-center gap-3 p-4 rounded-[15px] ${card.id === 1 ? "bg-[#0062FF]" : card.id === 2 ? "bg-[#145A96]" : "bg-[#fff2]"}`}
          >
            <div className="flex flex-wrap gap-2">
              {card.items.map((tool) => (
                <Button
                  key={tool.id}
                  variant="default"
                  className="px-5 py-2 whitespace-nowrap bg-[#0099f8] rounded-[8px] duration-350 hover:bg-white hover:text-black"
                >
                  {tool.text}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -top-20 -z-5">
        <img src={blue.src} />
      </div>
    </div>
  )
}
