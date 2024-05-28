export default function Nav({ links }) {
    const scrollToSection = (event, href) => {
        event.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
  return (
    <nav className="w-full shadow-lg md:hidden">
      <ul className="grid grid-cols-4 place-items-center gap-y-6 p-2 bg-white rounded-[4px] md:flex md:flex-row md:items-center md:justify-evenly ">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={`#${link.href}`}
                onClick={(event) => scrollToSection(event, `#${link.href}`)}
                className="flex items-center text-slate-950 hover:text-blue-500 text-[16px] font-Assin"
              >
                {link.icon}
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
