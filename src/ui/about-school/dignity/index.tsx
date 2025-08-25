const itemsDignities = [
  { id: 1, text: "Здесь прокачивают интеллект. И не только искусственный." },
  { id: 2, text: "Здесь тебя не оставят один на один с задачами." },
  { id: 3, text: "Здесь не учат «для галочки»." },
  {
    id: 4,
    text: (
      <>
        Здесь <span className="text-gradient-white">готовят к реальности:</span>
        <br /> скиллы, которые применяются сразу, поддержка, которая работает, и
        сообщество, в котором не чувствуешь себя лишним.
      </>
    ),
  },
]

export const DignitySection = () => {
  return (
    <div className="975:flex-row 975:gap-20 975:py-10 w-full h-fit flex flex-col justify-center items-center gap-7 py-5 px-3 gradient-grey">
      <div>
        <h1 className="530:leading-normal 530:text-[57px] leading-10 text-[40px]">
          AI-school by Grafov
        </h1>
        <p className="max-w-[490px] text-[19px]">
          Современная онлайн-школа, где ты быстро и понятно освоишь нейросети,
          ботов, AI-инструменты и начнёшь больше зарабатывать
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {itemsDignities.map((item) => (
          <div
            className={`max-w-[582px] w-full h-fit rounded-[15px] p-5 border border-[#ffffff3d] ${item.id === 4 ? "bg-[#0bd3fb91]" : "bg-blur-bg"}`}
            key={item.id}
          >
            <p className="max-w-[350px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
