export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-neutral-900 text-sm uppercase tracking-widest font-bold">Newton</div>
        <nav className="flex gap-8">
          <a
            href="#services"
            className="text-neutral-800 hover:text-neutral-500 transition-colors duration-300 uppercase text-sm font-medium"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-neutral-800 hover:text-neutral-500 transition-colors duration-300 uppercase text-sm font-medium"
          >
            О клинике
          </a>
          <a
            href="#contact"
            className="text-neutral-800 hover:text-neutral-500 transition-colors duration-300 uppercase text-sm font-medium"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  )
}