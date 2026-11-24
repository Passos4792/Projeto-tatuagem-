import { useState } from 'react'
import { artistas, estilos, estudio } from '../data'

const vazio = {
  nome: '',
  telefone: '',
  email: '',
  artista: '',
  estilo: '',
  tamanho: '',
  regiao: '',
  data: '',
  ideia: '',
  maior: false,
}

const hoje = () => new Date().toISOString().slice(0, 10)

function mascaraTelefone(v) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function validar(f) {
  const e = {}
  if (f.nome.trim().length < 3) e.nome = 'Informe seu nome completo.'
  if (f.telefone.replace(/\D/g, '').length < 10) e.telefone = 'Informe um WhatsApp válido com DDD.'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Informe um e-mail válido.'
  if (!f.estilo) e.estilo = 'Escolha um estilo.'
  if (!f.tamanho) e.tamanho = 'Escolha um tamanho aproximado.'
  if (!f.data) e.data = 'Escolha uma data.'
  else if (f.data < hoje()) e.data = 'A data precisa ser hoje ou depois.'
  else if (new Date(f.data + 'T12:00').getDay() === 0 || new Date(f.data + 'T12:00').getDay() === 1)
    e.data = 'Não atendemos aos domingos e segundas.'
  if (f.ideia.trim().length < 10) e.ideia = 'Conte um pouco mais sobre a ideia (mín. 10 caracteres).'
  if (!f.maior) e.maior = 'Atendemos apenas maiores de 18 anos.'
  return e
}

function salvarPedido(pedido) {
  try {
    const lista = JSON.parse(localStorage.getItem('pedidos-tinta-negra') || '[]')
    lista.push(pedido)
    localStorage.setItem('pedidos-tinta-negra', JSON.stringify(lista))
  } catch {
    // armazenamento indisponível: o pedido segue só pela confirmação na tela
  }
}

export default function Agendamento() {
  const [form, setForm] = useState(vazio)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(null)

  const set = (campo) => (ev) => {
    const valor = ev.target.type === 'checkbox' ? ev.target.checked
      : campo === 'telefone' ? mascaraTelefone(ev.target.value)
      : ev.target.value
    setForm((f) => ({ ...f, [campo]: valor }))
    if (erros[campo]) setErros((er) => ({ ...er, [campo]: undefined }))
  }

  const enviar = (ev) => {
    ev.preventDefault()
    const e = validar(form)
    setErros(e)
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus()
      return
    }
    const protocolo = 'TN-' + Date.now().toString(36).toUpperCase().slice(-6)
    const pedido = { ...form, protocolo, criadoEm: new Date().toISOString() }
    salvarPedido(pedido)
    setEnviado(pedido)
    setForm(vazio)
  }

  if (enviado) {
    const estiloNome = estilos.find((e) => e.id === enviado.estilo)?.nome
    const dataBR = new Date(enviado.data + 'T12:00').toLocaleDateString('pt-BR')
    const msg = `Olá! Sou ${enviado.nome} e fiz o pedido ${enviado.protocolo} pelo site. ` +
      `Estilo: ${estiloNome}, tamanho: ${enviado.tamanho}, data preferida: ${dataBR}. Ideia: ${enviado.ideia}`
    return (
      <section className="secao secao--agendar" id="agendar">
        <div className="container">
          <div className="sucesso" role="status">
            <span className="sucesso__icone" aria-hidden="true">✦</span>
            <h2>Pedido recebido, {enviado.nome.split(' ')[0]}!</h2>
            <p>Seu protocolo é <strong>{enviado.protocolo}</strong>. Nossa equipe responde em até 24h úteis com o orçamento e as datas disponíveis próximas de <strong>{dataBR}</strong>.</p>
            <div className="hero__acoes">
              <a className="btn" href={`https://wa.me/${estudio.whatsapp}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noreferrer">
                Agilizar pelo WhatsApp
              </a>
              <button className="btn btn--ghost" onClick={() => setEnviado(null)}>Fazer outro pedido</button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const campo = (nome, label, el) => (
    <label className={`campo ${erros[nome] ? 'campo--erro' : ''}`} htmlFor={`f-${nome}`}>
      <span>{label}</span>
      {el}
      {erros[nome] && <small className="campo__msg">{erros[nome]}</small>}
    </label>
  )

  return (
    <section className="secao secao--agendar" id="agendar">
      <div className="container agendar">
        <header className="secao__topo">
          <p className="eyebrow">05 — Agendamento</p>
          <h2>Vamos criar sua próxima tattoo</h2>
          <p className="secao__sub">
            Preencha o formulário e receba o orçamento em até 24h úteis.
            O sinal de 30% garante sua data.
          </p>
          <ul className="agendar__garantias">
            <li>Material 100% descartável</li>
            <li>Alvará da Vigilância Sanitária</li>
            <li>Retoque grátis em 60 dias</li>
          </ul>
        </header>

        <form className="form" onSubmit={enviar} noValidate>
          {campo('nome', 'Nome completo *',
            <input id="f-nome" value={form.nome} onChange={set('nome')} autoComplete="name" />)}
          <div className="form__linha">
            {campo('telefone', 'WhatsApp *',
              <input id="f-telefone" value={form.telefone} onChange={set('telefone')} inputMode="tel" placeholder="(11) 90000-0000" autoComplete="tel" />)}
            {campo('email', 'E-mail *',
              <input id="f-email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />)}
          </div>
          <div className="form__linha">
            {campo('estilo', 'Estilo *',
              <select id="f-estilo" value={form.estilo} onChange={set('estilo')}>
                <option value="">Selecione…</option>
                {estilos.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
                <option value="nao-sei">Ainda não sei</option>
              </select>)}
            {campo('artista', 'Artista preferido',
              <select id="f-artista" value={form.artista} onChange={set('artista')}>
                <option value="">Sem preferência</option>
                {artistas.map((a) => <option key={a.nome}>{a.nome}</option>)}
              </select>)}
          </div>
          <div className="form__linha">
            {campo('tamanho', 'Tamanho *',
              <select id="f-tamanho" value={form.tamanho} onChange={set('tamanho')}>
                <option value="">Selecione…</option>
                <option>Mini (até 5 cm)</option>
                <option>Média (5 a 15 cm)</option>
                <option>Grande (mais de 15 cm)</option>
                <option>Fechamento</option>
              </select>)}
            {campo('regiao', 'Região do corpo',
              <input id="f-regiao" value={form.regiao} onChange={set('regiao')} placeholder="Ex.: antebraço" />)}
          </div>
          {campo('data', 'Data preferida *',
            <input id="f-data" type="date" min={hoje()} value={form.data} onChange={set('data')} />)}
          {campo('ideia', 'Descreva sua ideia *',
            <textarea id="f-ideia" rows="4" value={form.ideia} onChange={set('ideia')} placeholder="Tema, referências, se é cobertura, cores…" />)}
          <label className={`check ${erros.maior ? 'campo--erro' : ''}`} htmlFor="f-maior">
            <input id="f-maior" type="checkbox" checked={form.maior} onChange={set('maior')} />
            <span>Declaro ter 18 anos ou mais *</span>
          </label>
          {erros.maior && <small className="campo__msg">{erros.maior}</small>}
          <button type="submit" className="btn btn--full">Enviar pedido de orçamento</button>
        </form>
      </div>
    </section>
  )
}
