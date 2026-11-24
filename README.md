# Tinta Negra — Tattoo Studio

Site de um estúdio de tatuagem fictício, feito em **React + Vite** com apoio de IA e hospedado na **Vercel**.

## Funcionalidades

- Página única com navegação suave e menu responsivo (hambúrguer no celular)
- **Portfólio** com filtro por estilo (Fine Line, Blackwork, Old School, Realismo) e visualização ampliada (modal)
- Desenhos "flash" originais feitos em SVG (sem imagens externas)
- **Artistas**, **tabela de preços**, **cuidados pós-tattoo** e **FAQ** em acordeão
- **Agendamento** com validação (telefone com máscara, e-mail, data não pode ser passada nem domingo/segunda, maioridade obrigatória), protocolo gerado e envio pelo WhatsApp
- Pedidos salvos no `localStorage` do navegador
- Layout responsivo e respeito a `prefers-reduced-motion`

## Estrutura

```
src/
  data.js                 # dados do estúdio (artistas, preços, FAQ...)
  App.jsx                 # monta as seções
  index.css               # estilos
  components/
    Header.jsx            # cabeçalho + menu mobile
    Secoes.jsx            # Hero, Estilos, Artistas, Preços, Cuidados, Rodapé
    Portfolio.jsx         # galeria com filtro e modal
    Agendamento.jsx       # formulário com validação
    Faq.jsx               # perguntas frequentes
    Flash.jsx             # desenhos em SVG
```

## Rodar localmente

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em https://vercel.com → **Add New → Project** → importe o repositório.
3. Se o repositório tiver outras pastas, em **Root Directory** escolha `estudio-tatuagem`.
4. Framework: **Vite** (detectado automaticamente). Clique em **Deploy**.

Ou pela linha de comando: `npx vercel` dentro desta pasta (pede login na primeira vez).
