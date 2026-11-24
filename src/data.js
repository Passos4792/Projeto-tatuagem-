export const estudio = {
  nome: 'Tinta Negra',
  slogan: 'Arte que fica na pele — e na memória.',
  endereco: 'Rua Augusta, 1520 — Consolação, São Paulo/SP',
  telefone: '(11) 98765-4321',
  whatsapp: '5511987654321',
  email: 'contato@tintanegra.com.br',
  instagram: '@tintanegra.studio',
  horario: [
    { dia: 'Terça a sexta', hora: '11h às 20h' },
    { dia: 'Sábado', hora: '10h às 18h' },
    { dia: 'Domingo e segunda', hora: 'Fechado' },
  ],
}

export const estilos = [
  { id: 'fineline', nome: 'Fine Line', desc: 'Traços finos e delicados, ideais para peças minimalistas e escritas.' },
  { id: 'blackwork', nome: 'Blackwork', desc: 'Preto sólido, geometria e contraste forte. Envelhece muito bem.' },
  { id: 'oldschool', nome: 'Old School', desc: 'Traço grosso, cores chapadas e os clássicos da tradição americana.' },
  { id: 'realismo', nome: 'Realismo', desc: 'Retratos, animais e natureza com sombreamento detalhado.' },
]

export const artistas = [
  {
    nome: 'Marina Duarte',
    papel: 'Fundadora · Fine Line',
    anos: 12,
    bio: 'Especialista em traço fino e botânicos. Formada em artes visuais, já tatuou em convenções de Lisboa e Berlim.',
    desenho: 'Rosa',
    insta: '@marina.ink',
  },
  {
    nome: 'Rafael "Corvo" Lima',
    papel: 'Blackwork · Ornamental',
    anos: 9,
    bio: 'Geometria sagrada, mandalas e fechamentos. Cada projeto é desenhado sob medida para o corpo.',
    desenho: 'Olho',
    insta: '@corvo.tattoo',
  },
  {
    nome: 'Beatriz Nogueira',
    papel: 'Old School · Neo Trad',
    anos: 7,
    bio: 'Apaixonada por flash tradicional, cores vibrantes e traço que dura décadas sem perder a leitura.',
    desenho: 'Andorinha',
    insta: '@bia.neotrad',
  },
  {
    nome: 'Thiago Prado',
    papel: 'Realismo · Preto e cinza',
    anos: 10,
    bio: 'Retratos e realismo em preto e cinza. Atende com agenda reduzida para projetos grandes.',
    desenho: 'Caveira',
    insta: '@thiago.realism',
  },
]

export const portfolio = [
  { titulo: 'Rosa botânica', estilo: 'fineline', artista: 'Marina Duarte', desenho: 'Rosa', local: 'Antebraço' },
  { titulo: 'Serpente', estilo: 'oldschool', artista: 'Beatriz Nogueira', desenho: 'Serpente', local: 'Panturrilha' },
  { titulo: 'Adaga tradicional', estilo: 'oldschool', artista: 'Beatriz Nogueira', desenho: 'Adaga', local: 'Braço' },
  { titulo: 'Lua e estrelas', estilo: 'fineline', artista: 'Marina Duarte', desenho: 'Lua', local: 'Costela' },
  { titulo: 'Andorinha', estilo: 'oldschool', artista: 'Beatriz Nogueira', desenho: 'Andorinha', local: 'Peito' },
  { titulo: 'Caveira', estilo: 'realismo', artista: 'Thiago Prado', desenho: 'Caveira', local: 'Coxa' },
  { titulo: 'Olho que tudo vê', estilo: 'blackwork', artista: 'Rafael Lima', desenho: 'Olho', local: 'Nuca' },
  { titulo: 'Âncora', estilo: 'blackwork', artista: 'Rafael Lima', desenho: 'Ancora', local: 'Mão' },
  { titulo: 'Mão mística', estilo: 'realismo', artista: 'Thiago Prado', desenho: 'Mao', local: 'Ombro' },
]

export const precos = [
  {
    nome: 'Mini',
    tamanho: 'até 5 cm',
    valor: 'a partir de R$ 250',
    itens: ['Desenho do nosso flash ou simples', 'Sessão única (até 1h)', 'Retoque grátis em 60 dias'],
  },
  {
    nome: 'Média',
    tamanho: '5 a 15 cm',
    valor: 'a partir de R$ 600',
    destaque: true,
    itens: ['Desenho autoral exclusivo', 'Sessão de até 3h', 'Retoque grátis em 60 dias', 'Kit de cuidados incluso'],
  },
  {
    nome: 'Projeto / Sessão',
    tamanho: 'fechamentos e peças grandes',
    valor: 'R$ 1.200 por sessão',
    itens: ['Consultoria e estudo de anatomia', 'Sessões de até 6h', 'Planejamento em etapas', 'Kit de cuidados incluso'],
  },
]

export const cuidados = [
  { t: 'Primeiras horas', d: 'Mantenha o plástico ou o filme por 2 a 4 horas. Depois lave com água morna e sabonete neutro.' },
  { t: 'Hidratação', d: 'Aplique uma camada fina de pomada cicatrizante 3 vezes ao dia, por cerca de 15 dias.' },
  { t: 'Evite', d: 'Sol, piscina, mar e sauna por 30 dias. Não coce nem arranque as casquinhas.' },
  { t: 'Para sempre', d: 'Protetor solar FPS 50 na tatuagem cicatrizada mantém o traço e a cor vivos por muito mais tempo.' },
]

export const faq = [
  { q: 'Qual a idade mínima para tatuar?', a: 'Atendemos apenas maiores de 18 anos, com documento com foto. A lei não permite tatuar menores, mesmo com autorização.' },
  { q: 'Preciso pagar sinal para agendar?', a: 'Sim. Um sinal de 30% garante a data e é descontado do valor final. Ele é devolvido se você remarcar com 48h de antecedência.' },
  { q: 'Os materiais são descartáveis?', a: 'Agulhas, biqueiras, luvas e copinhos de tinta são descartáveis e abertos na sua frente. O estúdio tem alvará da Vigilância Sanitária.' },
  { q: 'Dói muito?', a: 'Depende da região e da sua sensibilidade. Costelas, pés e mãos costumam doer mais; braço e coxa, menos. Nossos artistas fazem pausas sempre que precisar.' },
  { q: 'Vocês fazem cobertura (cover-up)?', a: 'Fazemos. Traga uma foto da tatuagem atual para a consultoria e avaliamos juntos o melhor caminho.' },
]
