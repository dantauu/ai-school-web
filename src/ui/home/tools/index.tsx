import { cn } from "@/lib/utils/cn"
import Button from "@/shared/ui/buttons"

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

export const PracticeToolsSection = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className="text-[21px] text-[#fff6]">Практика на топовых инструментах</p>
      <h3 className="text-[45px]">AI-инструменты не в теории, а в твоих руках</h3>
      <p className="text-[19px]">
        Ты не просто смотришь — ты создаёшь: ботов, тексты, визуалы, модели.
      </p>

      <div className="flex gap-5 pt-4">
        {dataTools.map((card) => (
          <div
            key={card.id}
            className={`h-[150px] flex flex-col justify-center gap-3 p-6 rounded-[15px] ${card.id === 1 ? "bg-[#0062FF]" : card.id === 2 ? "bg-[#145A96]" : "bg-[#fff2]"}`}
          >
            <div className="flex flex-wrap gap-2">
              {card.items.map((tool) => (
                <Button
                  key={tool.id}
                  variant="default"
                  className="px-5 py-2 whitespace-nowrap bg-[#308dde] rounded-[8px]"
                >
                  {tool.text}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
