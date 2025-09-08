const itemsSociety = [
  { id: 1, name: "ОРГН:", text: "1272837015718" },
  { id: 2, name: "ИНН:", text: "7721581040" },
  { id: 3, name: "КПП:", text: "380892108" },
]

const data = [
  {
    id: 1,
    title: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «AI-school by Grafov»",
    description:
      "Маркетинг, образование, бизнес, IT, креатив — хочешь ускорить работу и стать продуктивнее с AI",
  },
  {
    id: 2,
    title: "+7 987 654-32-10",
    link: "tel:+7987654-32-10",
    description: "Вопросы по покупке и содержанию курсов",
  },
  {
    id: 3,
    title: "help@email.com",
    link: "mailto:help@email.com",
    description: "Вопросы по учебному процессу",
  },
]

export const ContactCards = () => {
  return (
    <div className="975:flex-row flex flex-col justify-between gap-7">
      {data.map((item) => (
        <div
          key={item.id}
          className={`w-full 975:h-auto h-full flex flex-col gap-3 rounded-[12px] p-5 border ${
            item.id === 1
              ? "border-[#ffffff33] bg-[rgb(20,97,135)]"
              : "bg-blur-bg border-[#ffffff33]"
          }`}
        >
          <a href={item.link}>
            <p
              className={`text-[19px] leading-5 ${item.id !== 1 && "text-gradient-white leading-6 text-[24px]"}`}
            >
              {item.title}
            </p>
          </a>

          {item.id === 1 ? (
            <div className="flex flex-col gap-1">
              {itemsSociety.map((soc) => (
                <div key={soc.id} className="flex gap-2">
                  <p>{soc.name}</p>
                  <p>{soc.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="max-w-[470px] text-[17px]">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
