import FormRequestWidget from "@/widgets/form-request"

export const FormRequestSection = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <FormRequestWidget
        text={"Готовы прокачаться в AI ?"}
        description={
          "Оставь заявку — наш специалист подскажет, какой курс подходит именно тебе, ответит на все вопросы и поможет стартовать без стресса."
        }
      />
    </div>
  )
}
