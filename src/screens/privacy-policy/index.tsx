import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { privacyPolicyDataGeneral, faqDataMain } from "@/lib/data/faq"

export const PrivacyPolicy = () => {
  return (
    <div className="pt-[20px] container">
      <Breadcrumbs className="pb-3" location={"Политика конфиденциальности"} />
      <h3 className="975:text-[60px] 975:pb-0 pb-5 975:leading-normal leading-10 text-[32px]">
        Политика конфиденциальности
      </h3>
      <div className="flex flex-col gap-5">
        <div>
          <p className="975:text-[32px] text-[20px] pb-2">Общие положения</p>
          {privacyPolicyDataGeneral.map((item) => (
            <p key={item.id} className="max-w-[885px]">
              {item.number} {item.text}
            </p>
          ))}
        </div>
        <div>
          <p className="975:text-[32px] text-[20px] pb-2">
            Основные понятия, используемые в Политике
          </p>
          {faqDataMain.map((item) => (
            <p key={item.id} className="max-w-[885px]">
              {item.number} {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
