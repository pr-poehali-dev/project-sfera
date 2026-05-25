export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-neutral-700 text-xs font-light relative z-10">Стоматологическая клиника · Уфа, ул. 50 лет СССР, 34, 19 этаж, офис 146</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-neutral-900 mb-4">
          <span className="font-medium italic">Здоровые</span> зубы —
          <br />
          <span className="font-light tracking-tight text-neutral-900">красивая улыбка</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-neutral-600 mb-4 leading-relaxed">
          Имплантация, лечение, протезирование и отбеливание — всё в одном месте.
          Современное оборудование, опытные врачи и комфорт на каждом этапе лечения.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-neutral-400 text-neutral-800 font-normal text-xs transition-all duration-200 hover:bg-neutral-900/10 cursor-pointer">
            Наши услуги
          </button>
          <button className="px-8 py-3 rounded-full bg-neutral-900 text-white font-normal text-xs transition-all duration-200 hover:bg-neutral-700 cursor-pointer">
            Записаться
          </button>
        </div>
      </div>
    </main>
  )
}