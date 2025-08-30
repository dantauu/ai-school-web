"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Button from "@/shared/ui/buttons"
import SvgCross from "@/assets/icons/Cross"
import { closeFormModal } from "@/redux/slices/modal-form"
import { ModalFormRequest } from "@/shared/ui/form/modal-form"
import { useEffect } from "react"

const ModalForm = () => {
  const { isFormOpen } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isFormOpen === true) {
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [isFormOpen])
  if (!isFormOpen) return
  return (
    <div
      onClick={() => dispatch(closeFormModal())}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative 530:w-[425px] 530:h-[620px] w-full h-full flex flex-col py-7 gap-5 px-5 gradient-dark-blue-vertical rounded-xl border border-[#888888]"
      >
        <Button
          className="absolute top-5 right-5"
          onClick={() => dispatch(closeFormModal())}
          variant="default"
        >
          <SvgCross />
        </Button>
        <div className="flex flex-col gap-3">
          <h3 className="text-[32px] 530:leading-8 leading-7 pb-1">
            Запишись и посмотри всё своими глазами
          </h3>
          <p className="max-w-[535px] text-[17px] 530:leading-5 leading-6">
            Реши сам, готов ли ты идти в мир ИИ вместе с нами.
          </p>
        </div>
        <ModalFormRequest />
      </div>
    </div>
  )
}

export default ModalForm
