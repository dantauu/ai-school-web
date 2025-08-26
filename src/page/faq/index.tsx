import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { faqDataGeneral, faqDataMain } from "@/lib/data/faq"

export const FaqPage = () => {
  return (
    <div className="pt-[20px] container">
      <Breadcrumbs location={"Политика конфиденциальности"} />
      <h3 className="text-[60px]">Политика конфиденциальности</h3>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[32px] pb-2">Общие положения</p>
          {faqDataGeneral.map((item) => (
            <p key={item.id} className="max-w-[885px]">{item.number} {item.text}</p>
          ))}
        </div>
        <div>
          <p className="text-[32px] pb-2">Основные понятия, используемые в Политике</p>
          {faqDataMain.map((item) => (
            <p key={item.id} className="max-w-[885px]">{item.number} {item.text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
