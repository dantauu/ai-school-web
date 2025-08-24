import FormRequestWidget from "@/widgets/form-request"

export const RecordedForm = () => {
  return (
    <div className="530:pt-[112px] pt-[70px]">
      <FormRequestWidget
        text={"Запишись и посмотри всё своими глазами"}
        description={"Реши сам, готов ли ты идти в мир ИИ вместе с нами."}
        classText={"max-w-[410px] leading-10"}
      />
    </div>
  )
}
