import createImage from "@/assets/images/will-fit-1.png"

export const IdeasSection = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h3 className="530:text-[49px] text-center text-[32px] leading-10">
        <span className="text-gradient-white">Кому</span> пришла эта идея?
      </h3>
      <p className="max-w-[550px] text-[21px] leading-7">
        <span className="text-[#fff6]">
          Представителю нового поколения, которому
        </span>{" "}
        наскучило смотреть, как старые системы учат новым технологиям.
      </p>
      <div className="w-full max-w-[955px] bg-blur-bg p-4 rounded-[15px]">
        <p className="530:text-[21px] text-[19px]">
          «Я сам предприниматель и проходил обучение по AI, где половину времени
          пытался просто понять, что от меня хотят. Не хватало простоты,
          практики, поддержки. Захотел сделать школу, где всё это будет. Где ты
          не один. Где тебе объяснят нормально. Где можно — быстро, понятно, по
          делу. Я не читаю сам лекции, не строю культ личности, но отвечаю за
          подход, за команду, за атмосферу.
          <span className="text-gradient-white">
            {" "}
            И каждый день продолжаю улучшать школу — чтобы она была не „одной
            из“, а той самой»
          </span>
          .
        </p>
      </div>
      <div className="flex items-center gap-2 bg-[#0bd3fb91] rounded-[15px] p-3 pr-4">
        <img className="w-[110px] h-[110px]" src={createImage.src} />
        <div>
          <p className="530:text-[25px] text-[21px]">Родион Графов</p>
          <p className="530:text-[19px] text-[17px]">основатель, визионер и движок школы</p>
        </div>
      </div>
    </div>
  )
}
