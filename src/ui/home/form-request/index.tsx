import FormRequestWidget from "@/widgets/form-request"

export const FormRequestSection = () => {
  return (
    <div className="530:py-[110px] py-[70px]">
      <FormRequestWidget
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
