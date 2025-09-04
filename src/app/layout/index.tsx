"use client"
import Header from "@/widgets/layout/header"
import { Footer } from "@/widgets/layout/footer"
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import ModalForm from "@/widgets/modals/form"
import { useEffect, useState } from "react"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  return (
    <html lang="ru">
      <body className="pt-[20px]">
        <Provider store={store}>
          {hydrated ? (
            <>
              <Header />
              {children}
              <Footer className="830:mt-[110px] mt-[50px]" />
            </>
          ) : null}
          <ModalForm />
        </Provider>
      </body>
    </html>
  )
}
