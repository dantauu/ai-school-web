import LangToggle from "@/shared/ui/toggle-switch"

const items = [
  { id: 1, text: "Курсы" },
  { id: 2, text: "О школе" },
  { id: 3, text: "Контакты" },
]

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1>AI-School by Grafov</h1>
      <div className="flex gap-2">
        {items.map((item) => (
          <div key={item.id}>
            <button>{item.text}</button>
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        <LangToggle />
        <button>Записаться</button>
        <button>Войти</button>
      </div>
    </div>
  )
}

export default Header
