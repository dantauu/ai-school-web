import Breadcrumbs from "@/shared/ui/breadcrumbs"
import FormRequestWidget from "@/widgets/form-request"
import { ContactCards } from "@/ui/contacts/cards"
import blue from "@/assets/backgrounds/purple-left.svg"

const ContactsPage = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute -z-2 975:-bottom-220 -bottom-130">
          <img src={blue.src} />
        </div>
      </div>
      <div className="container mx-auto">
        <Breadcrumbs className="pt-[20px]" location={"Контакты"} />
        <h3 className="975:text-[60px] text-[40px] pb-4">Контакты</h3>
        <ContactCards />
      </div>
      <FormRequestWidget
        className="mt-20"
        text={
          <>
            Готовы <span className="text-gradient-white">прокачаться</span> в
            AI?
          </>
        }
        description={
          "Оставь заявку — наш специалист подскажет, какой курс подходит именно тебе, ответит на все вопросы и поможет стартовать без стресса."
        }
      />
    </div>
  )
}

export default ContactsPage
