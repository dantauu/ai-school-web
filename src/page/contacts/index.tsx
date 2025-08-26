import Breadcrumbs from "@/shared/ui/breadcrumbs"
import FormRequestWidget from "@/widgets/form-request"
import { ContactCards } from "@/ui/contacts/cards"

const ContactsPage = () => {
  return (
    <div>
      <div className="container">
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