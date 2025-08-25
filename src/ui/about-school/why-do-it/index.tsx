export const WhyDoItSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="530:text-[45px] text-[32px] text-center">
        Зачем я это делаю?
      </h3>
      <div className="530:flex-row flex flex-col justify-between gap-5">
        <div className="p-4 bg-blur-bg rounded-[15px]">
          <p className="text-[19px]">
            «Я хочу, чтобы ИИ был{" "}
            <span className="text-gradient-white">
              не игрушкой, а инструментом
            </span>{" "}
            — для школьника, маркетолога, инженера или художника»
          </p>
        </div>
        <div className=" p-4 bg-blur-bg rounded-[15px]">
          <p className="text-[19px]">
            «Лично отбираю экспертов, разрабатываю программу и внедряю лучшие
            образовательные AI-решения{" "}
            <span className="text-gradient-white">для наших студентов</span>».
          </p>
        </div>
      </div>
    </div>
  )
}
