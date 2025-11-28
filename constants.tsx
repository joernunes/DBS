import { FAQItem, Scripture, StudyContent } from './types';

export const NAV_LINKS = [
  { label: 'O que é', href: 'what-is' },
  { label: 'O Método', href: 'method' },
  { label: 'Perguntas', href: 'questions' },
  { label: 'Textos', href: 'scriptures' },
  { label: 'FAQ', href: 'faq' },
];

export const SCRIPTURES: Scripture[] = [
  { title: 'A Criação', reference: 'Gênesis 1:1-25', theme: 'Deus Cria o Mundo' },
  { title: 'A Criação do Homem', reference: 'Gênesis 2:4-24', theme: 'Relacionamento com Deus' },
  { title: 'A Desobediência', reference: 'Gênesis 3:1-13', theme: 'A Queda da Humanidade' },
  { title: 'A Promessa', reference: 'Gênesis 12:1-8', theme: 'Deus Chama Abraão' },
  { title: 'O Sacrifício', reference: 'Gênesis 22:1-19', theme: 'Deus Proverá' },
  { title: 'O Filho Pródigo', reference: 'Lucas 15:11-32', theme: 'O Amor do Pai' },
  { title: 'Jesus e o Paralítico', reference: 'Marcos 2:1-12', theme: 'Jesus Tem Autoridade' },
  { title: 'Jesus Anda sobre as Águas', reference: 'Mateus 14:22-33', theme: 'Fé e Dúvida' },
  { title: 'A Cruz', reference: 'Lucas 23:32-49', theme: 'O Preço do Perdão' },
  { title: 'A Ressurreição', reference: 'Lucas 24:1-12', theme: 'A Morte Vencida' },
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso ser um teólogo ou pastor para liderar?",
    answer: "Não! O DBS é desenhado para ser facilitado, não ensinado. Seu papel é apenas fazer as perguntas e garantir que todos participem. O 'professor' é o Espírito Santo através do texto bíblico."
  },
  {
    question: "Quanto tempo dura uma reunião?",
    answer: "Recomendamos entre 60 a 90 minutos. Isso permite tempo suficiente para conexão (Olhar para Trás), descoberta (Olhar para Cima) e aplicação prática (Olhar para Frente)."
  },
  {
    question: "Onde posso fazer o DBS?",
    answer: "Em qualquer lugar! Casas, cafeterias, parques, intervalo do trabalho ou online. O ambiente deve ser informal e acolhedor."
  },
  {
    question: "E se alguém fizer uma pergunta difícil?",
    answer: "Ótima pergunta! Responda com honestidade: 'Essa é uma boa pergunta. Vamos ver se o texto que lemos hoje responde isso? Se não, vamos anotar e procurar a resposta na Bíblia durante a semana'."
  }
];

export const STUDY_CONTENTS: Record<string, StudyContent> = {
  'Marcos 2:1-12': {
    bibleText: [
      {
        verses: [
          { num: 1, text: "Alguns dias depois, Jesus entrou de novo em Cafarnaum, e logo se espalhou a notícia de que ele estava em casa." },
          { num: 2, text: "Muitas pessoas se reuniram ali, a ponto de não sobrar lugar nem mesmo em frente da porta. E Jesus anunciava a palavra a elas." }
        ]
      },
      {
        verses: [
          { num: 3, text: "Vieram então alguns trazendo um paralítico, carregado por quatro homens." },
          { num: 4, text: "Como não conseguiam levá-lo até Jesus por causa da multidão, abriram o teto, bem em cima de onde ele estava. Fizeram uma abertura e baixaram a maca em que o paralítico estava deitado." }
        ]
      },
      {
        verses: [
          { num: 5, text: "Vendo a fé que eles tinham, Jesus disse ao paralítico: “Filho, os seus pecados estão perdoados”." }
        ]
      },
      {
        verses: [
          { num: 6, text: "Ora, estavam sentados ali alguns mestres da lei, que pensavam em seu coração:" },
          { num: 7, text: "“Por que este homem fala assim? Ele está blasfemando! Quem pode perdoar pecados, a não ser um só, que é Deus?”" }
        ]
      },
      {
        verses: [
          { num: 8, text: "Jesus percebeu imediatamente em seu espírito o que eles estavam pensando e lhes disse: “Por que vocês estão pensando essas coisas?" },
          { num: 9, text: "O que é mais fácil dizer ao paralítico: ‘Os seus pecados estão perdoados’, ou: ‘Levante-se, pegue a sua maca e ande’?" },
          { num: 10, text: "Pois, para que vocês saibam que o Filho do Homem tem na terra autoridade para perdoar pecados” — disse ele ao paralítico —" },
          { num: 11, text: "“eu digo a você: Levante-se, pegue a sua maca e vá para casa”." }
        ]
      },
      {
        verses: [
          { num: 12, text: "Ele se levantou, pegou a maca e saiu imediatamente, à vista de todos. Todos ficaram admirados e glorificaram a Deus, dizendo: “Nunca vimos nada igual!”" }
        ]
      }
    ],
    quadrants: {
      god: [
        "Jesus tem autoridade para perdoar pecados (é Divino).",
        "Ele conhece os pensamentos e corações das pessoas.",
        "Ele valoriza o perdão espiritual acima da cura física.",
        "Ele honra a fé que é demonstrada com ação."
      ],
      people: [
        "Precisamos de amigos para nos levar a Jesus.",
        "Os líderes religiosos podem ser cegos espiritualmente.",
        "Nossa maior necessidade é perdão, não apenas cura física.",
        "Podemos ser críticos em nossos pensamentos."
      ],
      obedience: {
        example: "Eu vou parar de julgar as pessoas pela aparência como os mestres da lei faziam.",
        share: "Eu vou contar para o meu amigo que Jesus tem poder para perdoar os erros do passado dele."
      }
    }
  },
  'Mateus 14:22-33': {
    bibleText: [
       {
         verses: [
           { num: 22, text: "Logo em seguida, Jesus insistiu com os discípulos para que entrassem no barco e fossem adiante dele para o outro lado, enquanto ele despedia a multidão." },
           { num: 23, text: "Tendo despedido a multidão, subiu sozinho a um monte para orar. Ao anoitecer, ele estava ali sozinho." },
         ]
       },
       {
         verses: [
           { num: 24, text: "O barco, porém, já estava longe da terra, fustigado pelas ondas, porque o vento soprava contra ele." },
           { num: 25, text: "Alta madrugada, Jesus dirigiu-se a eles, andando sobre o mar." },
           { num: 26, text: "Quando o viram andando sobre o mar, ficaram aterrorizados e disseram: 'É um fantasma!' E gritaram de medo." }
         ]
       },
       {
         verses: [
           { num: 27, text: "Mas Jesus imediatamente lhes disse: 'Coragem! Sou eu. Não tenham medo!'" },
         ]
       },
       {
         verses: [
           { num: 28, text: " 'Senhor', disse Pedro, 'se és tu, manda-me ir ao teu encontro por sobre as águas'." },
           { num: 29, text: " 'Venha', respondeu ele. Então Pedro saiu do barco, andou sobre a água e foi na direção de Jesus." },
           { num: 30, text: "Mas, quando reparou no vento, ficou com medo e, começando a afundar, gritou: 'Senhor, salva-me!'" }
         ]
       },
       {
         verses: [
           { num: 31, text: "Imediatamente Jesus estendeu a mão e o segurou. E disse: 'Homem de pequena fé, por que você duvidou?'" },
           { num: 32, text: "Quando entraram no barco, o vento cessou." },
           { num: 33, text: "Então os que estavam no barco o adoraram, dizendo: 'Verdadeiramente tu és o Filho de Deus'." }
         ]
       }
    ],
    quadrants: {
      god: [
        "Jesus tem poder sobre a natureza (anda sobre as águas).",
        "Ele ora e busca tempo a sós com o Pai.",
        "Ele nos socorre quando gritamos por ajuda.",
        "Ele espera que tenhamos fé nEle."
      ],
      people: [
        "Sentimos medo diante do desconhecido.",
        "Podemos ter fé para começar, mas a dúvida pode nos fazer afundar.",
        "Precisamos manter os olhos em Jesus, não nas circunstâncias.",
        "Devemos adorar a Jesus."
      ],
      obedience: {
        example: "Vou separar 15 minutos diários para orar sozinho como Jesus fez.",
        share: "Vou encorajar minha irmã que está com medo a confiar em Jesus."
      }
    }
  }
};