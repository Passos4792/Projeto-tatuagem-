import { useEffect, useState } from 'react'
import { estudio } from '../data'

const links = [
  ['#estilos', 'Estilos'],
  ['#portfolio', 'Portfólio'],
  ['#artistas', 'Artistas'],
  ['#precos', 'Preços'],
  ['#cuidados', 'Cuidados'],
  ['#faq', 'Dúvidas'],
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
  }, [aberto])

  const fechar = () => setAberto(false)

  return (
    <header className={`header ${rolou ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="logo" onClick={fechar}>
          <span className="logo__mark" aria-hidden="true">✦</span>
          {estudio.nome}
          <small>tattoo studio</small>
        </a>

        <button
          className={`menu-btn ${aberto ? 'menu-btn--open' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav ${aberto ? 'nav--open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={fechar}>{label}</a>
          ))}
          <a href="#agendar" className="btn btn--small" onClick={fechar}>Agendar</a>
        </nav>
      </div>
    </header>
  )
}
