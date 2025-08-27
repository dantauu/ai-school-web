import SvgTime from "@/assets/icons/Time"
import SvgCount from "@/assets/icons/Count"
import SvgHeart from "@/assets/icons/Heart"
import SvgSuiteCase from "@/assets/icons/SuiteCase"
import SvgCert from "@/assets/icons/Cert"

const conditionsOne = [
  { id: 1, text: "3 месяца обучения", icon: <SvgTime className="text-[#031C52]" /> },
  { id: 2, text: "36 занятий по 90 минут", icon: <SvgCount className="text-[#031C52]" /> },
  { id: 3, text: "Поддержка преподавателей и куратора", icon: <SvgHeart className="text-[#031C52]" /> },
  { id: 4, text: "Работа над проектами в портфолио", icon: <SvgSuiteCase className="text-[#031C52]" /> },
  { id: 5, text: "Сертификат об окончании", icon: <SvgCert className="text-[#031C52]" /> },
]

export const PriceSection = ({ price }: { price: string }) => {
  return (
    <div className="flex justify-between border border-white rounded-[12px] p-5">
      <div className="flex flex-col gap-8 justify-between">
        <div>
          <p className="text-[17px]">Стоимость обучения*</p>
          <p className="text-[52px]">Полный курс - {price} ₽</p>
        </div>
        <div className="flex flex-col gap-2 w-fit bg-blur-bg rounded-[12px] p-3">
          <p>*Доступна оплата частями</p>
          <p>Разбей сумму на удобные платежи — пиши нам, всё расскажем.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {conditionsOne.map((item) => (
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-[8px]" key={item.id}>
            {item.icon}
            <p className="text-[#031C52]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}