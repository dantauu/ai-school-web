export const WhyHereSection = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="max-w-[581px] w-full flex flex-col gap-3 py-10 pl-10  gradient-cold-blue rounded-[12px]">
        <div>
          <h3 className="text-[32px]">Почему вы здесь?</h3>
          <p className="text-[17px]">Потому что вы видите:</p>
        </div>
        <ul className="list-disc pl-4">
          <li>Технологии меняют всё</li>
          <li>Школа не успевает за реальностью</li>
          <li>Ваш ребёнок достоин большего</li>
        </ul>
      </div>
      <div className="flex items-center w-full border px-10 border-[#0BD3FB] rounded-[12px]">
        <h3 className="text-[42px]">
          Наш курс — это реальный старт в AI, пока другие просто играют в
          «информатику».
        </h3>
      </div>
    </div>
  )
}
