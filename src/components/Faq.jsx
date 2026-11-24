import { useState } from 'react'
import { faq } from '../data'

export default function Faq() {
  const [aberta, setAberta] = useState(0)

  return (
    <section className="secao" id="faq">
      <div className="container faq">
        <header className="secao__topo">
          <p className="eyebrow">07 — Dúvidas</p>
          <h2>Perguntas frequentes</h2>
        </header>
        <div className="faq__lista">
          {faq.map((item, i) => {
            const open = aberta === i
            return (
              <div key={item.q} className={`faq__item ${open ? 'faq__item--open' : ''}`}>
                <button aria-expanded={open} onClick={() => setAberta(open ? -1 : i)}>
                  {item.q}
                  <span aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                {open && <p>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
