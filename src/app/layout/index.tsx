"use client"
import Header from "@/widgets/layout/header"
import { Footer } from "@/widgets/layout/footer"
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import ModalForm from "@/widgets/modals/form"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="pt-[20px]">
        <Provider store={store}>
          <Header />
          {children}
          <Footer className="mt-[110px]" />
          <ModalForm />
        </Provider>
      </body>
    </html>
  )
}
