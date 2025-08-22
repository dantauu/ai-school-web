import avatarOne from "@/assets/images/robot-choose.svg"
import avatarTwo from "@/assets/images/women-choose.svg"

export const TheyChooseRight = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[580px] h-[340px] flex flex-col gap-3 text-white p-7 gradient-purple rounded-[15px]">
        <div className="flex items-center gap-5">
          <div className="flex -space-x-5">
            <img src={avatarOne.src} />
            <img src={avatarTwo.src} />
          </div>
          <p className="text-[19px]">
            AI ассистенты + поддержка в реальном времени
          </p>
        </div>
        <h3 className="w-[410px] pb-2 leading-8 text-[30px]">
          Никогда не оставайся один на один с вопросом
        </h3>
        <p className="leading-5.5 text-[18.5px]">
          Встроенные AI-помощники отвечают на вопросы, разбирают код, дают
          подсказки по практике.
          <br /> Для сложных кейсов — система тикетов и помощь реальных
          экспертов
        </p>
      </div>

      <div className="w-[580px] h-[300px] flex flex-col gap-3 text-white p-7 bg-[#0062FF] rounded-[15px]">
        <p className="text-[19px]">Проектная и командная работа</p>
        <h3 className="w-[320px] pb-2 leading-8 text-[30px]">
          Не учёба ради галочки. А ради результата
        </h3>
        <div>
          <p className="leading-5.5 text-[18.5px]">
            Ты решаешь реальные задачи и кейсы, участвуешь в хакатонах,
            работаешь в команде и собираешь портфолио.
          </p>
          <p className="leading-5.5 text-[18.5px]">
            Результаты можно показать работодателю — или использовать в
            собственных проектах.
          </p>
        </div>
      </div>

      <div className="w-[580px] h-[300px] flex flex-col gap-3 text-black p-7 gradient-white rounded-[15px]">
        <p className="text-[19px]">Сертификаты и карьерный рост</p>
        <h3 className="pb-2 leading-8 text-[30px]">
          Цифровые сертификаты, которые реально работают
        </h3>
        <p className="leading-5.5 text-[18.5px]">
          Сертификаты можно добавить в LinkedIn, резюме и портфолио. Платформа —
          отличный старт для новой карьеры в AI.
        </p>
      </div>
    </div>
  )
}
