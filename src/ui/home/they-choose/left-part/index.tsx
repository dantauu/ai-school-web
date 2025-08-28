import lvlChoose from "@/assets/images/lvl-choose.svg"
import photoChoose from "@/assets/images/photo-choose.png"

export const TheyChooseLeft = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="less-desctop:justify-between less-desctop:flex-row flex flex-col justify-between gap-5">
          <div className="flex flex-col justify-between gap-5">
            <div className="w-full h-full flex flex-col gap-4 text-black p-5 gradient-white rounded-[15px]">
              <p className="text-[19px]">Современный онлайн-формат</p>
              <h3 className="530:leading-8 530:text-[27px] leading-5 text-[21px]">
                Учёба без привязки. Только ты, AI и результат
              </h3>
              <ul className="list-disc pl-4">
                <li className="text-[18px]">
                  Обучение через адаптивную платформу
                </li>
                <li className="text-[18px]">Доступ 24/7 из любой точки мира</li>
                <li className="text-[18px]">
                  Удобный интерфейс с мобильного и ноутбука
                </li>
              </ul>
            </div>

            <div className="w-full h-full flex flex-col gap-3 text-white p-5 gradient-light-blue rounded-[15px]">
              <p className="text-[19px]">Персонализация обучения</p>
              <h3 className="pb-2 530:leading-8 530:text-[30px] leading-6 text-[21px]">
                Платформа адаптируется под тебя
              </h3>
              <p className="leading-5.5 text-[18.5px]">
                Алгоритмы отслеживают твой прогресс и интересы, подбирая задания
                и модули, которые реально подходят. Ты не теряешь время на
                ненужное. Только то, что продвигает тебя вперёд.
              </p>
            </div>
          </div>
          <div className="w-full h-auto p-5 rounded-[15px] gradient-dark-blue-vertical">
            <img src={lvlChoose.src} />
            <p className="pt-4 530:text-[18px] text-[16px]">
              Поддержка на каждом уровне
            </p>
            <h4 className="pb-2 530:text-[30px] text-[20px]">
              Любой уровень. Полная опора
            </h4>
            <ul className="flex flex-col gap-2 list-disc pl-4">
              <li className="text-[18px]">Наставники из AI-индустрии</li>
              <li className="text-[18px]">
                Структурированные программы с живым сопровождением
              </li>
            </ul>
          </div>
        </div>

        <div className="less-desctop:flex-row w-full flex flex-col gap-8 p-8 rounded-[15px] gradient-purple-reverse">
          <img
            className="max-w-[400px] max-h-[288px] object-cover"
            src={photoChoose.src}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[18px]">Сообщество и эксперты</p>
              <h3 className="530:text-[28px] 530:leading-normal leading-6 text-[21px] pb-3">
                Не просто курсы - комьюнити
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px]">
                С тобой будут работать практикующие эксперты из сферы разработки
                и AI — с реальными кейсами, опытом в индустрии и умением
                объяснять сложно просто. Ты становишься частью среды:закрытые
                чаты, форумы, митапы и вебинары с практиками.
              </p>
              <p className="text-[18px]">
                Мы растим не только знания, но и связи.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
