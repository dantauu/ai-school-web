import lvlChoose from "@/assets/images/lvl-choose.svg"

export const TheyChooseSection = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h3 className="pb-5 text-[45px]">Нас выбирают</h3>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <div className="w-[580px] h-[300px] flex flex-col gap-4 text-black p-10 gradient-white rounded-[15px]">
              <p className="text-[19px]">Современный онлайн-формат</p>
              <h3 className="leading-8 text-[30px]">
                Учёба без привязки. Только ты, AI и результат
              </h3>
              <ul className="list-disc pl-4">
                <li className="text-[18px]">Обучение через адаптивную платформу</li>
                <li className="text-[18px]">Доступ 24/7 из любой точки мира</li>
                <li className="text-[18px]">
                  Удобный интерфейс с мобильного и ноутбука
                </li>
              </ul>
            </div>

            <div className="w-[580px] h-[300px] flex flex-col gap-3 text-white p-10 gradient-light-blue rounded-[15px]">
              <p className="text-[19px]">Персонализация обучения</p>
              <h3 className="pb-2 leading-8 text-[30px]">
                Платформа адаптируется под тебя
              </h3>
              <p className="leading-5.5 text-[18.5px]">
                Алгоритмы отслеживают твой прогресс и интересы, подбирая задания и
                модули, которые реально подходят. Ты не теряешь время на ненужное.
                Только то, что продвигает тебя вперёд.
              </p>
            </div>
          </div>
            <div className="w-[580px] h-[620px] p-8 rounded-[15px] gradient-dark-blue-vertical">
                <img src={lvlChoose.src} />
              <p className="pt-4 text-[18px]">Поддержка на каждом уровне</p>
              <h4 className="pb-2 text-[30px]">Любой уровень. Полная опора</h4>
              <ul className="flex flex-col gap-2 list-disc pl-4">
                <li className="text-[18px]">Наставники из AI-индустрии</li>
                <li className="text-[18px]">Структурированные программы с живым сопровождением</li>
              </ul>
            </div>
        </div>
    </div>
  )
}
