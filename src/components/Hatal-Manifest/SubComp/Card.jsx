export default function Card({ children, card }) {
    return (
      <article
        id={card.id}
        className="my-8 mb-2 scroll-m-[70px] rounded-lg bg-[#484747] shadow-lg shadow-slate-900 duration-300 md:max-w-xs"
      >
        <img
          className="h-56 w-full rounded-t-lg object-cover"
          src={card.img}
          alt={card.title}
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-[24px] text-white text-center font-Katana">{card.title}</h4>
          {children}
        </div>
      </article>
    )
  }
  