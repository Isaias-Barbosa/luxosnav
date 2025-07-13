import { Product } from "../models/product.models";


export const produtos: Product[] = [
 {
  id: 101,
  section: 'chegando-agora',
  nome: 'Jaqueta Eco',
  categoria: 'Moda Masculina',
  descricao: 'Fabricada com materiais reciclados.',
  descricaoCompleta: 'A Jaqueta Eco combina estilo urbano com consciência ambiental. Produzida com materiais reciclados de alta durabilidade, é ideal para dias frios e para quem valoriza sustentabilidade.',
  preco: 279.90,
  imagem: '/produtos/jaqueta-eco.png',
  imagens: [
    '/produtos/jaqueta-eco.png',
    '/produtos/jaqueta-eco-lateral.png',
    '/produtos/jaqueta-eco-detalhe.jpg'
  ],
  tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliéster Reciclado' },
    { titulo: 'Cor', valor: 'Preto com verde' },
    { titulo: 'Tamanhos', valor: 'P, M, G, GG' }
  ],
  avaliacoes: [
    { nome: 'Carlos', nota: 5, comentario: 'Muito confortável e linda!' },
    { nome: 'Ana Paula', nota: 4, comentario: 'Estilo moderno e ótimo caimento.' }
  ]
},
{
  id: 102,
  section: 'chegando-agora',
  nome: 'Tênis SolarRun',
  categoria: 'Calçados',
  descricao: 'Com solado leve e resistente.',
  descricaoCompleta: 'O Tênis SolarRun é ideal para corridas e caminhadas. Seu solado com tecnologia EVA garante amortecimento e leveza em qualquer terreno.',
  preco: 229.90,
  imagem: '/produtos/tenis-solarrun.jpg',
  imagens: [
    '/produtos/tenis-solarrun.jpg',
    '/produtos/tenis-solarrun-top.jpg',
    '/produtos/tenis-solarrun-lado.jpg'
  ],
  tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Mesh respirável + sola EVA' },
    { titulo: 'Cor', valor: 'Cinza com detalhes laranja' },
    { titulo: 'Numeração', valor: '37 ao 44' }
  ],
  avaliacoes: [
    { nome: 'Juliana', nota: 5, comentario: 'Muito confortável, uso no dia a dia!' },
    { nome: 'Marcos', nota: 4, comentario: 'Design bonito e ótima performance.' }
  ]
},
{
  id: 103,
  section: 'chegando-agora',
  nome: 'Bolsa Minimal',
  categoria: 'Acessórios',
  descricao: 'Design limpo e versátil.',
  descricaoCompleta: 'A Bolsa Minimal é perfeita para quem busca praticidade e estilo. Com compartimento interno espaçoso, é ideal para uso cotidiano ou viagens curtas.',
  preco: 149.90,
  imagem: '/produtos/bolsa-minimal.jpg',
  imagens: [
    '/produtos/bolsa-minimal.jpg',
    '/produtos/bolsa-minimal-aberta.jpg',
    '/produtos/bolsa-minimal-costas.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Couro sintético' },
    { titulo: 'Alças', valor: 'Reguláveis e reforçadas' },
    { titulo: 'Dimensões', valor: '30cm x 40cm' }
  ],
  avaliacoes: [
    { nome: 'Fernanda', nota: 5, comentario: 'Cabe tudo, muito prática!' },
    { nome: 'Roberta', nota: 4, comentario: 'Boa qualidade, mas poderia ter mais divisórias.' }
  ]
},
{
  id: 104,
  section: 'chegando-agora',
  nome: 'Óculos Reflex',
  categoria: 'Acessórios',
  descricao: 'Lentes espelhadas com proteção UV.',
  descricaoCompleta: 'O Óculos Reflex traz proteção UV e estilo urbano com lentes espelhadas e armação leve. Ideal para dias ensolarados e looks de impacto.',
  preco: 99.90,
  imagem: '/produtos/oculos-reflex.jpg',
  imagens: [
    '/produtos/oculos-reflex.jpg',
    '/produtos/oculos-reflex-lente.jpg',
    '/produtos/oculos-reflex-case.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Proteção', valor: '100% UV' },
    { titulo: 'Lente', valor: 'Espelhada azul' },
    { titulo: 'Material', valor: 'Acetato resistente' }
  ],
  avaliacoes: [
    { nome: 'Pedro', nota: 5, comentario: 'Estilo demais! Uso todo dia.' },
    { nome: 'Larissa', nota: 4, comentario: 'Protege bem do sol, leve e bonito.' }
  ]
},
{
  id: 105,
  section: 'chegando-agora',
  nome: 'Camisa TechDry',
  categoria: 'Moda Fitness',
  descricao: 'Tecido antiumidade, ideal para treino.',
  descricaoCompleta: 'A Camisa TechDry foi criada para treinos intensos. Seu tecido técnico repele umidade e seca rapidamente, mantendo conforto durante atividades físicas.',
  preco: 89.90,
  imagem: '/produtos/camisa-techdry.jpg',
  imagens: [
    '/produtos/camisa-techdry.jpg',
    '/produtos/camisa-techdry-costas.jpg',
    '/produtos/camisa-techdry-detalhe.jpg'
  ],
  tamanhosDisponiveis: ['PP', 'P', 'M', 'G', 'GG', 'GGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliamida DryFit' },
    { titulo: 'Cor', valor: 'Grafite escuro' },
    { titulo: 'Tamanhos', valor: 'PP ao GG' }
  ],
  avaliacoes: [
    { nome: 'Luiz', nota: 5, comentario: 'Top pra correr! Seca rápido mesmo.' },
    { nome: 'Bianca', nota: 4, comentario: 'Confortável e estilosa.' }
  ]
},
  {
  id: 201,
  section: 'inverno',
  nome: 'Jaqueta Puffer',
  categoria: 'Moda Masculina',
  descricao: 'Super quente e estilosa.',
  descricaoCompleta: 'A Jaqueta Puffer oferece proteção térmica com estilo urbano. Feita com enchimento sintético de alta eficiência, garante conforto mesmo nos dias mais frios.',
  preco: 299.90,
  imagem: '/produtos/jaqueta-puffer.png',
  imagens: [
    '/produtos/jaqueta-puffer.png',
    '/produtos/jaqueta-puffer-lateral.jpg',
    '/produtos/jaqueta-puffer-aberta.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliéster com enchimento sintético' },
    { titulo: 'Cor', valor: 'Preto' },
    { titulo: 'Fechamento', valor: 'Zíper frontal com botão' }
  ],
  avaliacoes: [
    { nome: 'Gustavo', nota: 5, comentario: 'Esquenta muito! Ideal pra viagens.' },
    { nome: 'Luciana', nota: 4, comentario: 'Bem estilosa, só achei um pouco pesada.' }
  ]
},
{
  id: 202,
  section: 'inverno',
  nome: 'Gorro de Lã',
  categoria: 'Acessórios',
  descricao: 'Conforto para o frio.',
  descricaoCompleta: 'Gorro feito com lã acrílica macia, ideal para dias frios. Ajuste confortável e acabamento reforçado.',
  preco: 49.90,
  imagem: '/produtos/gorro.jpg',
  imagens: [
    '/produtos/gorro.jpg',
    '/produtos/gorro-lado.jpg',
    '/produtos/gorro-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Lã acrílica' },
    { titulo: 'Tamanho', valor: 'Único' },
    { titulo: 'Cor', valor: 'Cinza mescla' }
  ],
  avaliacoes: [
    { nome: 'Bruno', nota: 5, comentario: 'Muito confortável, esquenta bem!' },
    { nome: 'Patrícia', nota: 4, comentario: 'Boa qualidade, só poderia ser mais grosso.' }
  ]
},
{
  id: 203,
  section: 'inverno',
  nome: 'Bota Forrada',
  categoria: 'Calçados',
  descricao: 'Ideal para dias gelados.',
  descricaoCompleta: 'Bota com forro térmico e solado antiderrapante. Conforto, proteção e estilo para o inverno urbano.',
  preco: 199.90,
  imagem: '/produtos/bota.jpg',
  imagens: [
    '/produtos/bota.jpg',
    '/produtos/bota-topo.jpg',
    '/produtos/bota-lateral.jpg'
  ],
   tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Couro sintético com forro de lã' },
    { titulo: 'Cor', valor: 'Caramelo' },
    { titulo: 'Numeração', valor: '35 ao 43' }
  ],
  avaliacoes: [
    { nome: 'Eliane', nota: 5, comentario: 'Pé quentinho o dia todo!' },
    { nome: 'Rodrigo', nota: 4, comentario: 'Bota firme, ideal pra frio extremo.' }
  ]
},
{
  id: 204,
  section: 'inverno',
  nome: 'Cachecol Xadrez',
  categoria: 'Acessórios',
  descricao: 'Estilo clássico.',
  descricaoCompleta: 'Cachecol com estampa xadrez em tecido flanelado. Perfeito para compor looks de inverno com elegância.',
  preco: 59.90,
  imagem: '/produtos/cachecol.jpg',
  imagens: [
    '/produtos/cachecol.jpg',
    '/produtos/cachecol-detalhe.jpg',
    '/produtos/cachecol-draped.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Algodão flanelado' },
    { titulo: 'Tamanho', valor: '180cm x 30cm' },
    { titulo: 'Estampa', valor: 'Xadrez vermelho e preto' }
  ],
  avaliacoes: [
    { nome: 'Vanessa', nota: 5, comentario: 'Chique e quentinho!' },
    { nome: 'Eduardo', nota: 4, comentario: 'Bem macio, combinou com tudo.' }
  ]
},
{
  id: 205,
  section: 'inverno',
  nome: 'Moletom Oversized',
  categoria: 'Moda Unissex',
  descricao: 'Conforto e atitude.',
  descricaoCompleta: 'Moletom em modelagem ampla com capuz ajustável. Estilo street e aquecimento na medida certa.',
  preco: 129.90,
  imagem: '/produtos/moletom.jpg',
  imagens: [
    '/produtos/moletom.jpg',
    '/produtos/moletom-frente.jpg',
    '/produtos/moletom-costas.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Algodão e poliéster' },
    { titulo: 'Modelagem', valor: 'Oversized unissex' },
    { titulo: 'Capuz', valor: 'Com ajuste por cordão' }
  ],
  avaliacoes: [
    { nome: 'Matheus', nota: 5, comentario: 'Estiloso demais, uso todo dia!' },
    { nome: 'Sofia', nota: 4, comentario: 'Quentinho e combina com tudo.' }
  ]
},
{
  id: 301,
  section: 'luxo-elegancia',
  nome: 'Relógio Dourado',
  categoria: 'Acessórios de Luxo',
  descricao: 'Edição limitada com pulseira em aço.',
  descricaoCompleta: 'O Relógio Dourado é uma peça sofisticada de edição limitada, com pulseira em aço inox e visor detalhado em cristal mineral. Ideal para ocasiões especiais e estilo diário refinado.',
  preco: 799.90,
  imagem: '/produtos/relogio-dourado.jpg',
  imagens: [
    '/produtos/relogio-dourado.jpg',
    '/produtos/relogio-dourado-caixa.jpg',
    '/produtos/relogio-dourado-pulseira.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Aço inoxidável' },
    { titulo: 'Resistência', valor: 'À prova d\'água 50m' },
    { titulo: 'Visor', valor: 'Cristal mineral' }
  ],
  avaliacoes: [
    { nome: 'Renan', nota: 5, comentario: 'Muito elegante e pesado na medida certa.' },
    { nome: 'Carla', nota: 4, comentario: 'Luxuoso, mas a pulseira poderia ser mais ajustável.' }
  ]
},
{
  id: 302,
  section: 'luxo-elegancia',
  nome: 'Perfume Imperial',
  categoria: 'Cosméticos de Luxo',
  descricao: 'Aroma marcante com notas amadeiradas.',
  descricaoCompleta: 'O Perfume Imperial revela sofisticação em cada borrifada. Com notas amadeiradas e fundo almiscarado, é perfeito para marcar presença com classe e estilo.',
  preco: 429.90,
  imagem: '/produtos/perfume.jpg',
  imagens: [
    '/produtos/perfume.jpg',
    '/produtos/perfume-tampa.jpg',
    '/produtos/perfume-aberto.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Notas de topo', valor: 'Bergamota, pimenta rosa' },
    { titulo: 'Notas de coração', valor: 'Cedro, sândalo' },
    { titulo: 'Fixação', valor: 'Longa duração - até 12h' }
  ],
  avaliacoes: [
    { nome: 'Joana', nota: 5, comentario: 'Maravilhoso, recebe elogios toda vez que uso!' },
    { nome: 'Thiago', nota: 4, comentario: 'Forte no começo, mas evolui muito bem.' }
  ]
},
{
  id: 303,
  section: 'luxo-elegancia',
  nome: 'Blazer Premium',
  categoria: 'Moda Formal',
  descricao: 'Alfaiataria com tecido italiano.',
  descricaoCompleta: 'Blazer Premium com corte slim e tecido italiano. Proporciona elegância e conforto em eventos sofisticados ou no dia a dia profissional.',
  preco: 589.90,
  imagem: '/produtos/blazer.jpg',
  imagens: [
    '/produtos/blazer.jpg',
    '/produtos/blazer-costas.jpg',
    '/produtos/blazer-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Tecido', valor: 'Lã italiana com elastano' },
    { titulo: 'Forro', valor: 'Seda sintética' },
    { titulo: 'Modelagem', valor: 'Slim fit' }
  ],
  avaliacoes: [
    { nome: 'Felipe', nota: 5, comentario: 'Corte impecável, parece sob medida.' },
    { nome: 'Daniela', nota: 4, comentario: 'Elegante, mas preferia outra cor.' }
  ]
},
{
  id: 304,
  section: 'luxo-elegancia',
  nome: 'Sapato Social Lux',
  categoria: 'Calçados Formais',
  descricao: 'Couro legítimo com acabamento fosco.',
  descricaoCompleta: 'Sapato Lux com design clássico e acabamento fosco. Feito em couro legítimo, oferece conforto e elegância para ocasiões especiais.',
  preco: 349.90,
  imagem: '/produtos/sapato.jpg',
  imagens: [
    '/produtos/sapato.jpg',
    '/produtos/sapato-sola.jpg',
    '/produtos/sapato-lateral.jpg'
  ],
  tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Couro legítimo' },
    { titulo: 'Palmilha', valor: 'Espuma de memória' },
    { titulo: 'Solado', valor: 'Borracha antiderrapante' }
  ],
  avaliacoes: [
    { nome: 'Luiz Fernando', nota: 5, comentario: 'Conforto absurdo e acabamento premium.' },
    { nome: 'Beatriz', nota: 4, comentario: 'Fosco muito bonito, mas risca fácil.' }
  ]
},
{
  id: 305,
  section: 'luxo-elegancia',
  nome: 'Bolsa Elegance',
  categoria: 'Acessórios Femininos',
  descricao: 'Design clássico em couro vegano.',
  descricaoCompleta: 'Bolsa Elegance de design atemporal, ideal para compor visuais sofisticados. Produzida com couro vegano de alta qualidade e alças reforçadas.',
  preco: 319.90,
  imagem: '/produtos/bolsa-elegance.png',
  imagens: [
    '/produtos/bolsa-elegance.png',
    '/produtos/bolsa-elegance-aberta.jpg',
    '/produtos/bolsa-elegance-costas.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Couro vegano' },
    { titulo: 'Compartimentos', valor: '3 internos + 1 externo' },
    { titulo: 'Fechamento', valor: 'Botão magnético' }
  ],
  avaliacoes: [
    { nome: 'Mônica', nota: 5, comentario: 'Muito elegante, virou minha preferida!' },
    { nome: 'Karina', nota: 4, comentario: 'Excelente acabamento, só faltou uma alça maior.' }
  ]
},
{
  id: 401,
  section: 'mais-vendidos',
  nome: 'Boné Trucker',
  categoria: 'Acessórios Urbanos',
  descricao: 'Estilo urbano e casual.',
  descricaoCompleta: 'O Boné Trucker combina visual despojado com conforto. Possui tela respirável na parte traseira e aba curva para proteção solar estilosa.',
  preco: 59.90,
  imagem: '/produtos/bone.png',
  imagens: [
    '/produtos/bone.png',
    '/produtos/bone-lado.jpg',
    '/produtos/bone-topo.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Algodão + Poliéster' },
    { titulo: 'Ajuste', valor: 'Snapback regulável' },
    { titulo: 'Cor', valor: 'Preto com branco' }
  ],
  avaliacoes: [
    { nome: 'João Victor', nota: 5, comentario: 'Top demais, uso todo dia!' },
    { nome: 'Camila', nota: 4, comentario: 'Estiloso, só achei a aba um pouco mole.' }
  ]
},
{
  id: 402,
  section: 'mais-vendidos',
  nome: 'Tênis Chunky',
  categoria: 'Calçados Streetwear',
  descricao: 'Tendência streetwear.',
  descricaoCompleta: 'Com solado robusto e design marcante, o Tênis Chunky domina o streetstyle. Ideal para looks ousados e confortáveis.',
  preco: 289.90,
  imagem: '/produtos/chunky.jpg',
  imagens: [
    '/produtos/chunky.jpg',
    '/produtos/chunky-lateral.jpg',
    '/produtos/chunky-detalhe.jpg'
  ],
  tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Sintético com detalhes em mesh' },
    { titulo: 'Solado', valor: 'Alta plataforma em EVA' },
    { titulo: 'Numeração', valor: '34 ao 44' }
  ],
  avaliacoes: [
    { nome: 'Letícia', nota: 5, comentario: 'Estiloso e super confortável!' },
    { nome: 'Eduardo', nota: 4, comentario: 'Gostei, só é pesado pra correr.' }
  ]
},
{
  id: 403,
  section: 'mais-vendidos',
  nome: 'Jaqueta Jeans',
  categoria: 'Moda Casual',
  descricao: 'Clássico atemporal.',
  descricaoCompleta: 'A Jaqueta Jeans nunca sai de moda. Corte tradicional, lavagem vintage e bolsos frontais funcionais. Ideal para sobreposições.',
  preco: 219.90,
  imagem: '/produtos/jaqueta-jeans.jpg',
  imagens: [
    '/produtos/jaqueta-jeans.jpg',
    '/produtos/jaqueta-jeans-costas.jpg',
    '/produtos/jaqueta-jeans-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Jeans 100% algodão' },
    { titulo: 'Modelagem', valor: 'Unissex reta' },
    { titulo: 'Fechamento', valor: 'Botões metálicos frontais' }
  ],
  avaliacoes: [
    { nome: 'Vanessa', nota: 5, comentario: 'Essencial, combina com tudo!' },
    { nome: 'Igor', nota: 4, comentario: 'Boa qualidade, mas veio com cheiro forte de tinta.' }
  ]
},
{
  id: 404,
  section: 'mais-vendidos',
  nome: 'Bolsa Transversal',
  categoria: 'Acessórios Unissex',
  descricao: 'Compacta e prática.',
  descricaoCompleta: 'Bolsa com alça regulável e compartimentos internos. Ideal para o dia a dia ou viagens rápidas com estilo minimalista.',
  preco: 99.90,
  imagem: '/produtos/bolsa.jpg',
  imagens: [
    '/produtos/bolsa.jpg',
    '/produtos/bolsa-aberta.jpg',
    '/produtos/bolsa-costas.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Nylon impermeável' },
    { titulo: 'Capacidade', valor: '5 litros' },
    { titulo: 'Alça', valor: 'Regulável e acolchoada' }
  ],
  avaliacoes: [
    { nome: 'Thiago', nota: 5, comentario: 'Uso até pra ir na academia, muito prática!' },
    { nome: 'Amanda', nota: 4, comentario: 'Bonita, mas poderia ter mais divisórias.' }
  ]
},
{
  id: 405,
  section: 'mais-vendidos',
  nome: 'Calça Jogger',
  categoria: 'Moda Urbana',
  descricao: 'Conforto e estilo.',
  descricaoCompleta: 'Com cintura elástica e punhos ajustados, a Calça Jogger une liberdade de movimento e design moderno. Ideal pra rolês casuais ou treinos leves.',
  preco: 149.90,
  imagem: '/produtos/jogger.jpg',
  imagens: [
    '/produtos/jogger.jpg',
    '/produtos/jogger-frente.jpg',
    '/produtos/jogger-detalhe.jpg'
  ],
  
  tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Moletom premium' },
    { titulo: 'Ajuste', valor: 'Cordão na cintura' },
    { titulo: 'Cor', valor: 'Cinza mescla' }
  ],
  avaliacoes: [
    { nome: 'Rafaela', nota: 5, comentario: 'Super confortável, ficou linda!' },
    { nome: 'Henrique', nota: 4, comentario: 'Ótima, mas achei o tecido quente demais.' }
  ]
},

{
  id: 501,
  section: 'promocoes',
  nome: 'Camiseta Vintage',
  categoria: 'Moda Casual',
  descricao: 'Estampa retrô com tecido leve.',
  descricaoCompleta: 'Camiseta de algodão com estampa vintage inspirada nos anos 80. Corte reto e tecido respirável para o dia a dia.',
  preco: 49.90,
  imagem: '/produtos/camiseta-vintage.jpg',
  imagens: [
    '/produtos/camiseta-vintage.jpg',
    '/produtos/camiseta-vintage-detalhe.jpg',
    '/produtos/camiseta-vintage-costas.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Algodão 100%' },
    { titulo: 'Estampa', valor: 'Vintage retrô' },
    { titulo: 'Cor', valor: 'Off-white' }
  ],
  avaliacoes: [
    { nome: 'Alana', nota: 5, comentario: 'Super estilosa e leve!' },
    { nome: 'Felipe', nota: 4, comentario: 'Estampa linda, mas tecido um pouco fino.' }
  ]
},
{
  id: 502,
  section: 'promocoes',
  nome: 'Tênis Urban Flex',
  categoria: 'Calçados Esportivos',
  descricao: 'Leve e ideal para caminhadas.',
  descricaoCompleta: 'Tênis com solado flexível e palmilha em espuma. Modelo esportivo para uso urbano com design moderno.',
  preco: 139.90,
  imagem: '/produtos/urban-flex.jpg',
  imagens: [
    '/produtos/urban-flex.jpg',
    '/produtos/urban-flex-lado.jpg',
    '/produtos/urban-flex-topo.jpg'
  ],
   tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Tecido Knit e solado EVA' },
    { titulo: 'Cor', valor: 'Cinza e preto' },
    { titulo: 'Palmilha', valor: 'Espuma de memória' }
  ],
  avaliacoes: [
    { nome: 'Rodrigo', nota: 5, comentario: 'Muito confortável pra caminhar!' },
    { nome: 'Fernanda', nota: 4, comentario: 'Design bonito, mas a numeração é justa.' }
  ]
},
{
  id: 503,
  section: 'promocoes',
  nome: 'Blusa Cropped Manga Longa',
  categoria: 'Moda Feminina',
  descricao: 'Tecido canelado e elasticidade ideal.',
  descricaoCompleta: 'Blusa cropped com gola alta, ideal pra compor looks casuais ou modernos. Canelada e com toque macio.',
  preco: 69.90,
  imagem: '/produtos/cropped.jpg',
  imagens: [
    '/produtos/cropped.jpg',
    '/produtos/cropped-costas.jpg',
    '/produtos/cropped-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Viscolycra canelada' },
    { titulo: 'Modelagem', valor: 'Ajustada com stretch' },
    { titulo: 'Cor', valor: 'Rosa queimado' }
  ],
  avaliacoes: [
    { nome: 'Luiza', nota: 5, comentario: 'Fica linda no corpo!' },
    { nome: 'Thais', nota: 4, comentario: 'Só a gola é um pouco apertada.' }
  ]
},
{
  id: 504,
  section: 'promocoes',
  nome: 'Chinelo Slide Casual',
  categoria: 'Calçados',
  descricao: 'Super leve e confortável.',
  descricaoCompleta: 'Chinelo slide com palmilha anatômica e tira emborrachada. Ótimo para usar em casa ou na rua nos dias quentes.',
  preco: 39.90,
  imagem: '/produtos/chinelo.jpg',
  imagens: [
    '/produtos/chinelo.jpg',
    '/produtos/chinelo-lado.jpg',
    '/produtos/chinelo-topo.jpg'
  ],
  tamanhosDisponiveis: ['37', '38', '39', '40', '41', '42', '43', '44'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Borracha EVA flexível' },
    { titulo: 'Cor', valor: 'Preto fosco' },
    { titulo: 'Numeração', valor: '34 ao 44' }
  ],
  avaliacoes: [
    { nome: 'Carlos', nota: 5, comentario: 'Muito confortável, não escorrega!' },
    { nome: 'Juliana', nota: 4, comentario: 'Boa compra, mas ficou um pouco largo.' }
  ]
},
{
  id: 505,
  section: 'promocoes',
  nome: 'Short Fitness Dry',
  categoria: 'Moda Fitness',
  descricao: 'Ideal para treinos intensos.',
  descricaoCompleta: 'Short em tecido DryFit com bolsos laterais e cintura elástica. Secagem rápida e liberdade de movimento.',
  preco: 59.90,
  imagem: '/produtos/short-dry.jpg',
  imagens: [
    '/produtos/short-dry.jpg',
    '/produtos/short-dry-costas.jpg',
    '/produtos/short-dry-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliamida DryFit' },
    { titulo: 'Cor', valor: 'Azul marinho' },
    { titulo: 'Detalhes', valor: 'Cordão de ajuste interno' }
  ],
  avaliacoes: [
    { nome: 'Renan', nota: 5, comentario: 'Seca rápido e veste muito bem!' },
    { nome: 'Tati', nota: 4, comentario: 'Confortável, mas o bolso é pequeno.' }
  ]
},
{
  id: 506,
  section: 'promocoes',
  nome: 'Óculos Casual Clear',
  categoria: 'Acessórios',
  descricao: 'Lentes com filtro de luz azul.',
  descricaoCompleta: 'Óculos com armação leve e lente com proteção contra luz azul, ideal para quem passa horas na frente da tela.',
  preco: 79.90,
  imagem: '/produtos/oculos-clear.jpg',
  imagens: [
    '/produtos/oculos-clear.jpg',
    '/produtos/oculos-clear-frente.jpg',
    '/produtos/oculos-clear-detalhe.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Policarbonato' },
    { titulo: 'Proteção', valor: 'Filtro de luz azul' },
    { titulo: 'Armação', valor: 'Transparente' }
  ],
  avaliacoes: [
    { nome: 'Clara', nota: 5, comentario: 'Ajuda muito no trabalho com computador!' },
    { nome: 'Miguel', nota: 4, comentario: 'Bom, mas escorrega um pouco no rosto.' }
  ]
},
{
  id: 507,
  section: 'promocoes',
  nome: 'Regata Cavada Sport',
  categoria: 'Moda Masculina',
  descricao: 'Tecido leve e respirável.',
  descricaoCompleta: 'Regata para treinos com corte cavado e tecido respirável. Ideal para musculação e clima quente.',
  preco: 39.90,
  imagem: '/produtos/regata.jpg',
  imagens: [
    '/produtos/regata.jpg',
    '/produtos/regata-costas.jpg',
    '/produtos/regata-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliéster leve' },
    { titulo: 'Modelagem', valor: 'Cavada com gola redonda' },
    { titulo: 'Cor', valor: 'Verde militar' }
  ],
  avaliacoes: [
    { nome: 'Diego', nota: 5, comentario: 'Fica perfeita pra treinar!' },
    { nome: 'Marcelo', nota: 4, comentario: 'Boa, mas a gola é um pouco justa.' }
  ]
},
{
  id: 508,
  section: 'promocoes',
  nome: 'Vestido Floral Midi',
  categoria: 'Moda Feminina',
  descricao: 'Estampa floral com leveza.',
  descricaoCompleta: 'Vestido midi com estampa floral, alças finas e caimento fluido. Ideal para ocasiões ao ar livre ou eventos casuais.',
  preco: 119.90,
  imagem: '/produtos/vestido-floral.jpg',
  imagens: [
    '/produtos/vestido-floral.jpg',
    '/produtos/vestido-floral-costas.jpg',
    '/produtos/vestido-floral-detalhe.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Viscose com elastano' },
    { titulo: 'Estampa', valor: 'Floral vermelha' },
      {
    titulo: 'Tamanhos', valor: 'P, M, G, GG'
  }],
  avaliacoes: [
    { nome: 'Nathália', nota: 5, comentario: 'Caimento lindo e tecido super leve!' },
    { nome: 'Caio', nota: 4, comentario: 'Bonito, mas achei transparente.' }
  ]
},
{
  id: 509,
  section: 'promocoes',
  nome: 'Mochila Urban Travel',
  categoria: 'Acessórios',
  descricao: 'Espaçosa e resistente.',
  descricaoCompleta: 'Ideal para viagens curtas ou uso diário. A Mochila Urban Travel possui compartimento para notebook, zíperes reforçados e alças acolchoadas.',
  preco: 99.90,
  imagem: '/produtos/mochila.jpg',
  imagens: [
    '/produtos/mochila.jpg',
    '/produtos/mochila-aberta.jpg',
    '/produtos/mochila-costas.jpg'
  ],
   tamanhosDisponiveis: [],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Poliéster impermeável' },
    { titulo: 'Capacidade', valor: '20 litros' },
    { titulo: 'Compartimentos', valor: '4 internos + 2 externos' }
  ],
  avaliacoes: [
    { nome: 'Vinícius', nota: 5, comentario: 'Cabe tudo e é super leve!' },
    { nome: 'Larissa', nota: 4, comentario: 'Boa, mas senti falta de bolsos laterais.' }
  ]
},
{
  id: 510,
  section: 'promocoes',
  nome: 'Jaqueta Tech Thermo',
  categoria: 'Moda Esportiva',
  descricao: 'Proteção térmica com leveza.',
  descricaoCompleta: 'Jaqueta ideal para treinos em dias frios. Tecido térmico leve que protege do vento e mantém temperatura corporal.',
  preco: 179.90,
  imagem: '/produtos/tech-thermo.jpg',
  imagens: [
    '/produtos/tech-thermo.jpg',
    '/produtos/tech-thermo-lado.jpg',
    '/produtos/tech-thermo-capuz.jpg'
  ],
   tamanhosDisponiveis: ['P', 'M', 'G', 'GG', 'GGG', 'GGGG'],
  informacoesTecnicas: [
    { titulo: 'Material', valor: 'Microfibra térmica' },
    { titulo: 'Peso', valor: '350g' },
    { titulo: 'Capuz', valor: 'Removível com zíper' }
  ],
  avaliacoes: [
    { nome: 'Bruno', nota: 5, comentario: 'Esquenta sem pesar, excelente pra correr.' },
    { nome: 'Michelle', nota: 4, comentario: 'Bom corte, só faltou bolso interno.' }
  ]
}
];
