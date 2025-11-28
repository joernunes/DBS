import { FAQItem, MultilingualStudyContent, MultilingualScriptureItem, HomeContent, GenericQuestions } from './types';

// Used for legacy navigation if needed, but keeping for type safety
export const NAV_LINKS = [
  { label: 'O que é', href: 'what-is' },
  { label: 'O Método', href: 'method' },
  { label: 'Perguntas', href: 'questions' },
  { label: 'Textos', href: 'scriptures' },
  { label: 'FAQ', href: 'faq' },
];

export const HOME_UI: Record<string, HomeContent> = {
  pt: {
    title: "DBS",
    subtitle: "Um guia prático para ler a Bíblia e descobrir a verdade em comunidade.",
    facilitatorBtn: "Guia do Facilitador",
    pathLabel: "Caminho de Descoberta",
    comingSoon: "Em breve"
  },
  en: {
    title: "DBS",
    subtitle: "A practical guide to reading the Bible and discovering truth in community.",
    facilitatorBtn: "Facilitator Guide",
    pathLabel: "Discovery Path",
    comingSoon: "Coming soon"
  },
  fr: {
    title: "DBS",
    subtitle: "Un guide pratique pour lire la Bible et découvrir la vérité en communauté.",
    facilitatorBtn: "Guide du Facilitateur",
    pathLabel: "Parcours de Découverte",
    comingSoon: "Bientôt disponible"
  }
};

export const GENERIC_QUESTIONS: Record<string, GenericQuestions> = {
  pt: {
    god: [
      "O que este texto diz sobre Deus?",
      "Quais atributos de Deus vemos aqui (Amor, Justiça, Poder)?",
      "O que Ele faz ou diz no texto?"
    ],
    people: [
      "O que aprendemos sobre as pessoas?",
      "Há algum exemplo a seguir ou erro a evitar?",
      "O que o texto revela sobre a natureza humana?"
    ],
    obedience: {
      example: "Baseado neste texto, o que eu vou fazer esta semana?",
      share: "Com quem eu vou compartilhar essa história?"
    }
  },
  en: {
    god: [
      "What does this text say about God?",
      "What attributes of God do we see here (Love, Justice, Power)?",
      "What does He do or say in the text?"
    ],
    people: [
      "What do we learn about people?",
      "Is there an example to follow or a mistake to avoid?",
      "What does the text reveal about human nature?"
    ],
    obedience: {
      example: "Based on this text, what will I do this week?",
      share: "Who will I share this story with?"
    }
  },
  fr: {
    god: [
      "Que dit ce texte sur Dieu ?",
      "Quels attributs de Dieu voyons-nous ici (Amour, Justice, Puissance) ?",
      "Que fait-Il ou que dit-Il dans le texte ?"
    ],
    people: [
      "Qu'apprenons-nous sur les gens ?",
      "Y a-t-il un exemple à suivre ou une erreur à éviter ?",
      "Qu'est-ce que le texte révèle sur la nature humaine ?"
    ],
    obedience: {
      example: "Sur la base de ce texte, que ferai-je cette semaine ?",
      share: "Avec qui partagerai-je cette histoire ?"
    }
  }
};

export const SCRIPTURES_LIST: MultilingualScriptureItem[] = [
  { 
    reference: 'Gênesis 1:1-25',
    pt: { title: 'A Criação', theme: 'Deus Cria o Mundo' },
    en: { title: 'Creation', theme: 'God Creates the World' },
    fr: { title: 'La Création', theme: 'Dieu Crée le Monde' }
  },
  { 
    reference: 'Gênesis 2:4-24',
    pt: { title: 'A Criação do Homem', theme: 'Relacionamento com Deus' },
    en: { title: 'Creation of Man', theme: 'Relationship with God' },
    fr: { title: 'Création de l\'Homme', theme: 'Relation avec Dieu' }
  },
  { 
    reference: 'Gênesis 3:1-13',
    pt: { title: 'A Desobediência', theme: 'A Queda da Humanidade' },
    en: { title: 'The Disobedience', theme: 'The Fall of Humanity' },
    fr: { title: 'La Désobéissance', theme: 'La Chute de l\'Humanité' }
  },
  { 
    reference: 'Gênesis 12:1-8',
    pt: { title: 'A Promessa', theme: 'Deus Chama Abraão' },
    en: { title: 'The Promise', theme: 'God Calls Abraham' },
    fr: { title: 'La Promesse', theme: 'Dieu Appelle Abraham' }
  },
  { 
    reference: 'Gênesis 22:1-19',
    pt: { title: 'O Sacrifício', theme: 'Deus Proverá' },
    en: { title: 'The Sacrifice', theme: 'God Will Provide' },
    fr: { title: 'Le Sacrifice', theme: 'Dieu Pourvoira' }
  },
  { 
    reference: 'Lucas 15:11-32',
    pt: { title: 'O Filho Pródigo', theme: 'O Amor do Pai' },
    en: { title: 'The Prodigal Son', theme: 'The Father\'s Love' },
    fr: { title: 'Le Fils Prodigue', theme: 'L\'Amour du Père' }
  },
  { 
    reference: 'Marcos 2:1-12',
    pt: { title: 'Jesus e o Paralítico', theme: 'Jesus Tem Autoridade' },
    en: { title: 'Jesus and the Paralytic', theme: 'Jesus Has Authority' },
    fr: { title: 'Jésus et le Paralytique', theme: 'Jésus a de l\'Autorité' }
  },
  { 
    reference: 'Mateus 14:22-33',
    pt: { title: 'Jesus Anda sobre as Águas', theme: 'Fé e Dúvida' },
    en: { title: 'Jesus Walks on Water', theme: 'Faith and Doubt' },
    fr: { title: 'Jésus Marche sur l\'Eau', theme: 'Foi et Doute' }
  },
  { 
    reference: 'Lucas 23:32-49',
    pt: { title: 'A Cruz', theme: 'O Preço do Perdão' },
    en: { title: 'The Cross', theme: 'The Price of Forgiveness' },
    fr: { title: 'La Croix', theme: 'Le Prix du Pardon' }
  },
  { 
    reference: 'Lucas 24:1-12',
    pt: { title: 'A Ressurreição', theme: 'A Morte Vencida' },
    en: { title: 'The Resurrection', theme: 'Death Defeated' },
    fr: { title: 'La Résurrection', theme: 'La Mort Vaincue' }
  },
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

export const STUDY_CONTENTS: Record<string, MultilingualStudyContent> = {
  'Marcos 2:1-12': {
    pt: {
      title: "Jesus e o Paralítico",
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
    en: {
      title: "Jesus and the Paralytic",
      bibleText: [
        {
          verses: [
            { num: 1, text: "A few days later, when Jesus again entered Capernaum, the people heard that he had come home." },
            { num: 2, text: "They gathered in such large numbers that there was no room left, not even outside the door, and he preached the word to them." }
          ]
        },
        {
          verses: [
            { num: 3, text: "Some men came, bringing to him a paralyzed man, carried by four of them." },
            { num: 4, text: "Since they could not get him to Jesus because of the crowd, they made an opening in the roof above Jesus by digging through it and then lowered the mat the man was lying on." }
          ]
        },
        {
          verses: [
            { num: 5, text: "When Jesus saw their faith, he said to the paralyzed man, “Son, your sins are forgiven.”" }
          ]
        },
        {
          verses: [
            { num: 6, text: "Now some teachers of the law were sitting there, thinking to themselves," },
            { num: 7, text: "“Why does this fellow talk like that? He’s blaspheming! Who can forgive sins but God alone?”" }
          ]
        },
        {
          verses: [
            { num: 8, text: "Immediately Jesus knew in his spirit that this was what they were thinking in their hearts, and he said to them, “Why are you thinking these things?" },
            { num: 9, text: "Which is easier: to say to this paralyzed man, ‘Your sins are forgiven,’ or to say, ‘Get up, take your mat and walk’?" },
            { num: 10, text: "But I want you to know that the Son of Man has authority on earth to forgive sins.” So he said to the man," },
            { num: 11, text: "“I tell you, get up, take your mat and go home.”" }
          ]
        },
        {
          verses: [
            { num: 12, text: "He got up, took his mat and walked out in full view of them all. This amazed everyone and they praised God, saying, “We have never seen anything like this!”" }
          ]
        }
      ],
      quadrants: {
        god: [
          "Jesus has authority to forgive sins (He is Divine).",
          "He knows people's thoughts and hearts.",
          "He values spiritual forgiveness over physical healing.",
          "He honors faith that is demonstrated by action."
        ],
        people: [
          "We need friends to bring us to Jesus.",
          "Religious leaders can be spiritually blind.",
          "Our greatest need is forgiveness, not just healing.",
          "We can be critical in our thoughts."
        ],
        obedience: {
          example: "I will stop judging people by appearance like the teachers of the law did.",
          share: "I will tell my friend that Jesus has power to forgive his past mistakes."
        }
      }
    },
    fr: {
      title: "Jésus et le Paralytique",
      bibleText: [
        {
          verses: [
            { num: 1, text: "Quelques jours après, Jésus revint à Capernaüm. On apprit qu'il était à la maison," },
            { num: 2, text: "et il s'y rassembla un si grand nombre de personnes qu'il n'y avait plus de place, pas même devant la porte. Il leur annonçait la parole." }
          ]
        },
        {
          verses: [
            { num: 3, text: "On vint lui amener un paralytique porté par quatre hommes." },
            { num: 4, text: "Comme ils ne pouvaient pas l'aborder à cause de la foule, ils découvrirent le toit au-dessus de l'endroit où il se tenait et descendirent par cette ouverture le brancard sur lequel le paralytique était couché." }
          ]
        },
        {
          verses: [
            { num: 5, text: "Voyant leur foi, Jésus dit au paralytique: «Mon enfant, tes péchés te sont pardonnés.»" }
          ]
        },
        {
          verses: [
            { num: 6, text: "Il y avait là quelques spécialistes de la loi qui étaient assis et qui se disaient en eux-mêmes:" },
            { num: 7, text: "«Pourquoi cet homme parle-t-il ainsi? Il blasphème. Qui peut pardonner les péchés, si ce n'est Dieu seul?»" }
          ]
        },
        {
          verses: [
            { num: 8, text: "Jésus connut aussitôt par son esprit ce qu'ils pensaient en eux-mêmes et il leur dit: «Pourquoi avez-vous de telles pensées dans votre cœur?" },
            { num: 9, text: "Qu'est-ce qui est le plus facile à dire au paralytique: ‘Tes péchés sont pardonnés’, ou: ‘Lève-toi, prends ton brancard et marche’?" },
            { num: 10, text: "Afin que vous sachiez que le Fils de l'homme a sur la terre le pouvoir de pardonner les péchés, je te l'ordonne, dit-il au paralytique," },
            { num: 11, text: "lève-toi, prends ton brancard et rentre chez toi.»" }
          ]
        },
        {
          verses: [
            { num: 12, text: "Et, à l'instant, il se leva, prit son brancard et sortit devant tout le monde, de sorte qu'ils étaient tous très étonnés et glorifiaient Dieu en disant: «Nous n'avons jamais rien vu de pareil.»" }
          ]
        }
      ],
      quadrants: {
        god: [
          "Jésus a l'autorité de pardonner les péchés (Il est Divin).",
          "Il connaît les pensées et les cœurs des gens.",
          "Il valorise le pardon spirituel au-dessus de la guérison physique.",
          "Il honore la foi démontrée par l'action."
        ],
        people: [
          "Nous avons besoin d'amis pour nous amener à Jésus.",
          "Les chefs religieux peuvent être spirituellement aveugles.",
          "Notre plus grand besoin est le pardon, pas seulement la guérison.",
          "Nous pouvons être critiques dans nos pensées."
        ],
        obedience: {
          example: "Je vais arrêter de juger les gens sur leur apparence.",
          share: "Je vais dire à mon ami que Jésus a le pouvoir de pardonner ses erreurs passées."
        }
      }
    }
  },
  'Mateus 14:22-33': {
    pt: {
      title: "Jesus Anda sobre as Águas",
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
    },
    en: {
      title: "Jesus Walks on Water",
      bibleText: [
         {
           verses: [
             { num: 22, text: "Immediately Jesus made the disciples get into the boat and go on ahead of him to the other side, while he dismissed the crowd." },
             { num: 23, text: "After he had dismissed them, he went up on a mountainside by himself to pray. Later that night, he was there alone," },
           ]
         },
         {
           verses: [
             { num: 24, text: "and the boat was already a considerable distance from land, buffeted by the waves because the wind was against it." },
             { num: 25, text: "Shortly before dawn Jesus went out to them, walking on the lake." },
             { num: 26, text: "When the disciples saw him walking on the lake, they were terrified. “It’s a ghost,” they said, and cried out in fear." }
           ]
         },
         {
           verses: [
             { num: 27, text: "But Jesus immediately said to them: “Take courage! It is I. Don’t be afraid.”" },
           ]
         },
         {
           verses: [
             { num: 28, text: "“Lord, if it’s you,” Peter replied, “tell me to come to you on the water.”" },
             { num: 29, text: "“Come,” he said. Then Peter got down out of the boat, walked on the water and came toward Jesus." },
             { num: 30, text: "But when he saw the wind, he was afraid and, beginning to sink, cried out, “Lord, save me!”" }
           ]
         },
         {
           verses: [
             { num: 31, text: "Immediately Jesus reached out his hand and caught him. “You of little faith,” he said, “why did you doubt?”" },
             { num: 32, text: "And when they climbed into the boat, the wind died down." },
             { num: 33, text: "Then those who were in the boat worshiped him, saying, “Truly you are the Son of God.”" }
           ]
         }
      ],
      quadrants: {
        god: [
          "Jesus has power over nature (walks on water).",
          "He prays and seeks time alone with the Father.",
          "He saves us when we cry for help.",
          "He expects us to have faith in Him."
        ],
        people: [
          "We feel fear in the face of the unknown.",
          "We can have faith to start, but doubt can make us sink.",
          "We need to keep our eyes on Jesus, not on circumstances.",
          "We should worship Jesus."
        ],
        obedience: {
          example: "I will set aside 15 minutes daily to pray alone as Jesus did.",
          share: "I will encourage my sister who is afraid to trust in Jesus."
        }
      }
    },
    fr: {
      title: "Jésus Marche sur l'Eau",
      bibleText: [
         {
           verses: [
             { num: 22, text: "Aussitôt après, il obligea les disciples à monter dans la barque et à passer avant lui de l'autre côté, pendant qu'il renverrait la foule." },
             { num: 23, text: "Quand il l'eut renvoyée, il monta sur la montagne pour prier à l'écart; et, comme le soir était venu, il était là seul." },
           ]
         },
         {
           verses: [
             { num: 24, text: "La barque, déjà au milieu de la mer, était battue par les flots; car le vent était contraire." },
             { num: 25, text: "A la quatrième veille de la nuit, Jésus alla vers eux, marchant sur la mer." },
             { num: 26, text: "Quand les disciples le virent marcher sur la mer, ils furent troublés, et dirent: C'est un fantôme! Et, dans leur frayeur, ils poussèrent des cris." }
           ]
         },
         {
           verses: [
             { num: 27, text: "Jésus leur dit aussitôt: Rassurez-vous, c'est moi; n'ayez pas peur!" },
           ]
         },
         {
           verses: [
             { num: 28, text: "Pierre lui répondit: Seigneur, si c'est toi, ordonne que j'aille vers toi sur les eaux." },
             { num: 29, text: "Et il dit: Viens! Pierre sortit de la barque, et marcha sur les eaux, pour aller vers Jésus." },
             { num: 30, text: "Mais, voyant que le vent était fort, il eut peur; et, comme il commençait à enfoncer, il s'écria: Seigneur, sauve-moi!" }
           ]
         },
         {
           verses: [
             { num: 31, text: "Aussitôt Jésus étendit la main, le saisit, et lui dit: Homme de peu de foi, pourquoi as-tu douté?" },
             { num: 32, text: "Et ils montèrent dans la barque, et le vent cessa." },
             { num: 33, text: "Ceux qui étaient dans la barque vinrent se prosterner devant Jésus, et dirent: Tu es véritablement le Fils de Dieu." }
           ]
         }
      ],
      quadrants: {
        god: [
          "Jésus a le pouvoir sur la nature (marche sur l'eau).",
          "Il prie et cherche du temps seul avec le Père.",
          "Il nous sauve quand nous crions à l'aide.",
          "Il s'attend à ce que nous ayons foi en Lui."
        ],
        people: [
          "Nous ressentons la peur face à l'inconnu.",
          "Nous pouvons avoir la foi pour commencer, mais le doute peut nous faire couler.",
          "Nous devons garder les yeux sur Jésus, pas sur les circonstances.",
          "Nous devons adorer Jésus."
        ],
        obedience: {
          example: "Je vais réserver 15 minutes par jour pour prier seul comme Jésus l'a fait.",
          share: "Je vais encourager ma sœur qui a peur à faire confiance à Jésus."
        }
      }
    }
  }
};