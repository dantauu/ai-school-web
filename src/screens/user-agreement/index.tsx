"use client"
import Breadcrumbs from "@/shared/ui/breadcrumbs"
import { useEffect, useState } from "react"

type UserAgreement = {
  id: number
  number: string
  text: string
}

export const UserAgreement = () => {
  const [mainPolicy, setMainPolicy] = useState<UserAgreement[]>([])
  const [position, setPosition] = useState<UserAgreement[]>([])

  useEffect(() => {
    async function fetchPolicy() {
      try {
        const res = await fetch("/mocks/user-agreement.json")
        const data = await res.json()
        setMainPolicy(data)

        const resP = await fetch("/mocks/user-position.json")
        const dataP = await resP.json()
        setPosition(dataP)
      } catch (e) {
        console.error(e)
      }
    }

    fetchPolicy()
  }, [])
  return (
    <div className="pt-[20px] container mx-auto">
      <Breadcrumbs className="pb-3" location={"Пользовательское соглашение"} />
      <h3 className="975:text-[60px] 975:pb-0 pb-5 975:leading-normal leading-10 text-[32px]">
        Пользовательское соглашение
      </h3>
      <div className="flex flex-col gap-5">
        <div>
          <p className="975:text-[32px] text-[20px] pb-2">Общие положения</p>
          {position.map((item) => (
            <p key={item.id} className="max-w-[885px]">
              {item.number} {item.text}
            </p>
          ))}
        </div>
        <div>
          <p className="975:text-[32px] text-[20px] pb-2">
            Основные понятия, используемые в соглашении
          </p>
          {mainPolicy.map((item) => (
            <p key={item.id} className="max-w-[885px]">
              {item.number} {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
