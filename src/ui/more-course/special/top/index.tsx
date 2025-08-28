import specialImage from "@/assets/images/course-2.png"

export const SpecialTop = () => {
  return (
    <div className="830:flex-row flex flex-col justify-between items-center p-4 rounded-[10px] bg-[#ffffff14]">
      <div className="w-full flex flex-col gap-2">
        <div className="830:w-fit w-full p-3 bg-blur-bg rounded-[10px]">
          <p>
            Ускоряйтесь. Делегируйте рутину нейросетям и фокусируйтесь на
            главном.
          </p>
        </div>
        <h3 className="830:leading-13 leading-8 830:text-[52px] text-[32px] pb-2">
          Курс «AI для специалистов
          <br /> и предпринимателей»
        </h3>
        <p className="max-w-[935px] text-[18px]">
          Это 2-месячная практическая программа для специалистов,
          предпринимателей и digital-маркетологов, которые хотят освоить
          AI-инструменты и внедрить их в свою работу от генерации контента до
          клиентской поддержки и аналитики.
        </p>
        <p className="max-w-[1090px] text-[18px] pb-4">
          Курс даст системное понимание, где и как применять ИИ без технических
          сложностей, а также позволит собрать портфолио из 2–3 реальных
          AI-кейсов.
        </p>
      </div>
      <img
        className="830:w-[260px] 830:h-[274px] w-full h-full"
        src={specialImage.src}
      />
    </div>
  )
}
