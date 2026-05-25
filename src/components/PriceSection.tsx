import { useState } from "react"
import Icon from "@/components/ui/icon"

const PHONE = "89930474707"
const PHONE_DISPLAY = "+7 993 047-47-07"

const services = [
  {
    icon: "Smile",
    title: "Имплантация",
    description: "Установка зубного импланта под ключ",
    price: "от 25 000 ₽",
    tag: "Популярно",
  },
  {
    icon: "Shield",
    title: "Лечение кариеса",
    description: "Лечение с анестезией и пломбированием",
    price: "от 3 500 ₽",
    tag: null,
  },
  {
    icon: "Sparkles",
    title: "Чистка зубов",
    description: "Профессиональная ультразвуковая чистка",
    price: "от 4 000 ₽",
    tag: null,
  },
  {
    icon: "Star",
    title: "Отбеливание",
    description: "Отбеливание системой ZOOM до 8 тонов",
    price: "от 15 000 ₽",
    tag: "Акция",
  },
]

export default function PriceSection() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="services" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-white/40 uppercase text-xs tracking-widest mb-2">Прайс-лист</p>
          <h2 className="text-4xl font-light text-white">
            Наши <span className="italic font-medium">услуги</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-black p-8 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300 relative"
            >
              {service.tag && (
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-2 py-0.5 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Icon name={service.icon} size={18} className="text-white/70" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">{service.title}</h3>
                <p className="text-white/40 text-sm font-light">{service.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-white text-2xl font-light">{service.price}</p>
                <button
                  onClick={() => setSelected(service.title)}
                  className="px-5 py-2 rounded-full border border-white/20 text-white text-xs font-normal hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
                >
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-6 text-center">
          Точная стоимость определяется на бесплатной консультации
        </p>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-neutral-950 border border-white/10 rounded-2xl p-8 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors cursor-pointer"
            >
              <Icon name="X" size={18} />
            </button>

            <p className="text-white/40 uppercase text-[10px] tracking-widest mb-1">Запись на приём</p>
            <h3 className="text-white text-xl font-medium mb-6">{selected}</h3>

            <p className="text-white/50 text-sm mb-3">Позвоните нам, чтобы записаться:</p>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
            >
              <Icon name="Phone" size={18} />
              {PHONE_DISPLAY}
            </a>

            <p className="text-white/20 text-xs mt-4 text-center">
              Уфа, ул. 50 лет СССР, 34 · 19 этаж, офис 146
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
