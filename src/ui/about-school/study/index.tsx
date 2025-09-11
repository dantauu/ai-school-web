import aboutSchoolImage from "@/assets/images/school-call.png"
import blue from "@/assets/backgrounds/blue.svg"

export const StudySection = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -z-2 -bottom-220">
          <img src={blue.src} />
        </div>
      </div>
      <div className="flex flex-col gap-10 relative">
        <div className="gradient-dark-blue p-7 rounded-[15px]">
          <p className="text-[#fff6] 975:text-[21px] text-[18px]">
            Мы - за другое
          </p>
          <h3 className="975:text-[48px] 975:leading-14 leading-9 text-[32px]">
            <span className="text-gradient-white">
              За обучение, которое реально помогает войти в AI
            </span>{" "}
            — без лишней теории, без мишуры, без «громких побед».
          </h3>
          <div className="975:flex-row flex flex-col justify-between gap-5 pt-10">
            <div>
              <p className="max-w-[715px] text-[20px]">
                Школу запустил{" "}
                <span className="text-gradient-white">
                  человек, который сам через это всё прошёл
                </span>
                : сам искал, сам пробовал, сам злился, когда было сложно и
                непонятно.
              </p>
            </div>
            <div>
              <p className="max-w-[725px] text-[20px]">
                А потом собрал крутую команду — тех, кто не только шарит, но и
                умеет объяснять. И построил школу, в которую хочется
                возвращаться, а не бросать на третьем модуле.
              </p>
            </div>
          </div>
        </div>
        <img className="w-full h-full" src={aboutSchoolImage.src} />
      </div>
    </>
  )
}
