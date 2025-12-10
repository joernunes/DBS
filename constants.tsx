import { MultilingualStudyContent, MultilingualScriptureItem, HomeContent, GenericQuestions, MorningUI, MeditationItem, ResourceUI } from './types';

export const NAV_LINKS = [
  { label: 'O que é', href: 'what-is' },
  { label: 'Como Funciona', href: 'method' },
  { label: 'Estudos', href: 'scriptures' },
];

export const HOME_UI: Record<string, HomeContent> = {
  pt: {
    title: "Estudos Bíblicos",
    subtitle: "Roteiros para nossos encontros de Pequeno Grupo.",
    facilitatorBtn: "Guia do Facilitador",
    pathLabel: "Série Atual: Encontros com Jesus",
    comingSoon: "Em breve",
    welcome: "Bem-vindo ao PG",
    meetingInfo: "Próximo Encontro",
    meetingDay: "Sexta-feira às 19:30",
    location: "Casa da Família Silva",
    confirmBtn: "Confirmar Presença",
    verseTitle: "Verso do Dia",
    nextStudy: "Preparar Estudo",
    devotionalTitle: "Devocional",
    devotionalDesc: "Conexão Diária",
    ssTitle: "Escola Sabatina",
    ssDesc: "Não esqueça de estudar a lição desta semana. O tema é 'O Grande Conflito'.",
    ssBtn: "Acessar Lição"
  },
  en: {
    title: "Bible Studies",
    subtitle: "Guides for our Small Group meetings.",
    facilitatorBtn: "Facilitator Guide",
    pathLabel: "Current Series: Encounters with Jesus",
    comingSoon: "Coming soon",
    welcome: "Welcome to the Group",
    meetingInfo: "Next Meeting",
    meetingDay: "Friday at 7:30 PM",
    location: "Silva Family Home",
    confirmBtn: "Confirm Attendance",
    verseTitle: "Verse of the Day",
    nextStudy: "Prepare Study",
    devotionalTitle: "Devotional",
    devotionalDesc: "Daily Connection",
    ssTitle: "Sabbath School",
    ssDesc: "Don't forget to study this week's lesson. The theme is 'The Great Controversy'.",
    ssBtn: "Access Lesson"
  },
  fr: {
    title: "Études Bibliques",
    subtitle: "Guides pour nos réunions de Petit Groupe.",
    facilitatorBtn: "Guide du Facilitateur",
    pathLabel: "Série Actuelle : Rencontres avec Jésus",
    comingSoon: "Bientôt disponible",
    welcome: "Bienvenue au Groupe",
    meetingInfo: "Prochaine Réunion",
    meetingDay: "Vendredi à 19h30",
    location: "Chez la famille Silva",
    confirmBtn: "Confirmer la Présence",
    verseTitle: "Verset du Jour",
    nextStudy: "Préparer l'Étude",
    devotionalTitle: "Dévotion",
    devotionalDesc: "Connexion Quotidienne",
    ssTitle: "École du Sabbat",
    ssDesc: "N'oubliez pas d'étudier la leçon de cette semaine. Le thème est 'La Tragédie des Siècles'.",
    ssBtn: "Accéder à la Leçon"
  }
};

export const RESOURCES_UI: Record<string, ResourceUI> = {
    pt: {
        pageTitle: "Biblioteca & Recursos",
        tabLibrary: "Acervo",
        tabUpload: "Enviar",
        tabAdmin: "Gestão",
        uploadTitle: "Compartilhe um Livro ou Estudo",
        uploadDesc: "Seus arquivos serão adicionados à estante virtual após aprovação.",
        formTitle: "Título da Obra",
        formDesc: "Breve Descrição",
        formFile: "Arquivo (PDF/Img)",
        btnUpload: "Enviar para Biblioteca",
        emptyLibrary: "A biblioteca está vazia no momento.",
        emptyPending: "Nenhum arquivo pendente.",
        statusPending: "Pendente",
        statusApproved: "Disponível",
        adminLogin: "Área do Líder",
        adminPass: "Senha de Acesso",
        btnLogin: "Entrar",
        readerBack: "Fechar",
        downloadBtn: "Baixar"
    },
    en: {
        pageTitle: "Library & Resources",
        tabLibrary: "Bookshelf",
        tabUpload: "Upload",
        tabAdmin: "Admin",
        uploadTitle: "Share a Book or Study",
        uploadDesc: "Your files will be added to the virtual bookshelf after approval.",
        formTitle: "Title of Work",
        formDesc: "Short Description",
        formFile: "File (PDF/Img)",
        btnUpload: "Submit to Library",
        emptyLibrary: "The library is currently empty.",
        emptyPending: "No files pending.",
        statusPending: "Pending",
        statusApproved: "Available",
        adminLogin: "Leader Area",
        adminPass: "Access Password",
        btnLogin: "Login",
        readerBack: "Close",
        downloadBtn: "Download"
    },
    fr: {
        pageTitle: "Bibliothèque & Ressources",
        tabLibrary: "Rayonnage",
        tabUpload: "Envoyer",
        tabAdmin: "Gestion",
        uploadTitle: "Partager un Livre ou une Étude",
        uploadDesc: "Vos fichiers seront ajoutés à l'étagère virtuelle après approbation.",
        formTitle: "Titre de l'Œuvre",
        formDesc: "Brève Description",
        formFile: "Fichier (PDF/Img)",
        btnUpload: "Soumettre à la Bibliothèque",
        emptyLibrary: "La bibliothèque est vide pour le moment.",
        emptyPending: "Aucun fichier en attente.",
        statusPending: "En attente",
        statusApproved: "Disponible",
        adminLogin: "Espace Responsable",
        adminPass: "Mot de passe",
        btnLogin: "Connexion",
        readerBack: "Fermer",
        downloadBtn: "Télécharger"
    }
};

export const MORNING_UI: Record<string, MorningUI> = {
  pt: {
    title: "Meditação Matinal",
    subtitle: "Um momento diário para conectar seu coração ao coração de Deus.",
    guideBtn: "Como Meditar",
    backBtn: "Voltar",
    listTitle: "Devocionais da Semana",
    guideTitle: "O Método da Comunhão Transformadora",
    guideIntro: "Este método é um guia para transformar a formalidade religiosa em uma experiência viva e íntima com Deus. Use este roteiro focando na qualidade da entrega e na constância do hábito.",
    guidePhases: [
      {
        title: "Fase I: A Prioridade e a Preparação",
        desc: "O fracasso espiritual se deve à ausência desse tempo sagrado. A primeira etapa é estabelecer este tempo como prioridade.",
        steps: [
          {
            title: "1. Estabeleça o Seu Santuário",
            desc: "Encontre um lugar onde você não será interrompido, buscando o isolamento intencional. O inimigo levantará obstáculos para impedi-lo.",
          },
          {
            title: "2. Defina o Horário Sagrado",
            desc: "Decida acordar mais cedo e desligue as telas. Não é uma questão de tempo, mas de prioridade.",
            bullets: ["Dica: É melhor ter 15 minutos diários do que 2 horas uma vez por semana. A inconstância é a inimiga."]
          }
        ]
      },
      {
        title: "Fase II: O Ritual da Transformação",
        desc: "Esta é a hora em que você se coloca diante do Oleiro para ser remodelado.",
        steps: [
          {
            title: "3. A Leitura Reflexiva",
            desc: "Não leia como quem estuda para um exame, mas como quem recebe uma carta pessoal de amor.",
            bullets: ["Leia devagar, absorvendo cada palavra.", "Pergunte-se: 'O que Deus está me dizendo aqui?'", "Melhor entender profundamente um verso do que ler muito superficialmente."]
          },
          {
            title: "4. A Confissão Específica",
            desc: "Abra seu coração em confissão sincera. Não esconda nem justifique seus erros.",
            bullets: ["Seja específico sobre seus pecados (orgulho, impaciência, palavra áspera).", "Muitos fracassam porque fazem confissões genéricas."]
          },
          {
            title: "5. A Consagração Total",
            desc: "Faça sua consagração diária: entregue-se novamente completamente.",
            bullets: ["Coloque seus planos, sonhos e tempo sobre o altar.", "Não retenha pequenas áreas, pois podem se tornar fortalezas para o inimigo."]
          },
          {
            title: "6. A Oração Abrangente",
            desc: "Apresente suas necessidades, mas não se esqueça de interceder pelos outros.",
            bullets: ["Ore pelos perdidos, pelos que sofrem e pelos seus inimigos.", "Evite orações egoístas centradas apenas em desejos pessoais."]
          },
          {
            title: "7. O Silêncio Intencional",
            desc: "Pratique o silêncio diante de Deus. Escute e esteja atento às impressões do Espírito Santo.",
            bullets: ["Deus raramente grita; Ele sussurra.", "Você só ouvirá quando fizer silêncio."]
          },
          {
            title: "8. O Compromisso Diário",
            desc: "Saia da hora secreta com propósito definido.",
            bullets: ["Estabeleça o que Deus lhe pediu para fazer: que mudança de atitude, que serviço prestar ou que hábito abandonar."]
          }
        ]
      },
      {
        title: "Fase III: A Conexão Contínua",
        steps: [
          {
            title: "Andar com Deus",
            desc: "A comunhão não se limita à hora secreta. Leve a presença divina para cada atividade, cada conversa e cada decisão do dia.",
            bullets: ["Renovação Constante: O maná de ontem não serve para hoje.", "Resultado: O coração endurecido é amolecido e a mente confusa é esclarecida."]
          }
        ]
      }
    ]
  },
  en: {
    title: "Morning Meditation",
    subtitle: "A daily moment to connect your heart to God's heart.",
    guideBtn: "How to Meditate",
    backBtn: "Back",
    listTitle: "Weekly Devotionals",
    guideTitle: "The Transformational Communion Method",
    guideIntro: "This method is a guide to transform religious formality into a living, intimate experience with God. Use this script focusing on the quality of surrender and the consistency of the habit.",
    guidePhases: [
      {
        title: "Phase I: Priority and Preparation",
        desc: "Spiritual failure is due to the absence of this sacred time. The first step is to establish this time as a priority.",
        steps: [
          {
            title: "1. Establish Your Sanctuary",
            desc: "Find a place where you will not be interrupted, seeking intentional isolation. The enemy will raise obstacles to stop you.",
          },
          {
            title: "2. Define Sacred Time",
            desc: "Decide to wake up earlier and turn off screens. It is not a matter of time, but of priority.",
            bullets: ["Tip: It is better to have 15 minutes daily than 2 hours once a week. Inconsistency is the enemy."]
          }
        ]
      },
      {
        title: "Phase II: The Transformation Ritual",
        desc: "This is the time when you place yourself before the Potter to be reshaped.",
        steps: [
          {
            title: "3. Reflective Reading",
            desc: "Do not read as one studying for an exam, but as one receiving a personal love letter.",
            bullets: ["Read slowly, absorbing every word.", "Ask yourself: 'What is God telling me here?'", "Better to deeply understand one verse than to read superficially."]
          },
          {
            title: "4. Specific Confession",
            desc: "Open your heart in sincere confession. Do not hide or justify your mistakes.",
            bullets: ["Be specific about your sins (pride, impatience, harsh words).", "Many fail because they make generic confessions."]
          },
          {
            title: "5. Total Consecration",
            desc: "Make your daily consecration: surrender yourself completely again.",
            bullets: ["Place your plans, dreams, and time on the altar.", "Do not withhold small areas, as they can become strongholds for the enemy."]
          },
          {
            title: "6. Comprehensive Prayer",
            desc: "Present your needs, but do not forget to intercede for others.",
            bullets: ["Pray for the lost, for those who suffer, and for your enemies.", "Avoid selfish prayers centered only on personal desires."]
          },
          {
            title: "7. Intentional Silence",
            desc: "Practice silence before God. Listen and be attentive to the impressions of the Holy Spirit.",
            bullets: ["God rarely shouts; He whispers.", "You will only hear when you are silent."]
          },
          {
            title: "8. Daily Commitment",
            desc: "Leave the secret hour with a defined purpose.",
            bullets: ["Establish what God asked you to do: what attitude change, what service to render, or what habit to abandon."]
          }
        ]
      },
      {
        title: "Phase III: Continuous Connection",
        steps: [
          {
            title: "Walking with God",
            desc: "Communion is not limited to the secret hour. Take the divine presence into every activity, conversation, and decision of the day.",
            bullets: ["Constant Renewal: Yesterday's manna does not serve for today.", "Result: The hardened heart is softened, and the confused mind is clarified."]
          }
        ]
      }
    ]
  },
  fr: {
    title: "Méditation Matinale",
    subtitle: "Un moment quotidien pour connecter votre cœur au cœur de Dieu.",
    guideBtn: "Comment Méditer",
    backBtn: "Retour",
    listTitle: "Dévotions de la Semaine",
    guideTitle: "La Méthode de Communion Transformationnelle",
    guideIntro: "Cette méthode est un guide pour transformer la formalité religieuse en une expérience vivante et intime avec Dieu. Utilisez ce scénario en vous concentrant sur la qualité de l'abandon et la constance de l'habitude.",
    guidePhases: [
      {
        title: "Phase I : Priorité et Préparation",
        desc: "L'échec spirituel est dû à l'absence de ce temps sacré. La première étape est d'établir ce temps comme une priorité.",
        steps: [
          {
            title: "1. Établissez Votre Sanctuaire",
            desc: "Trouvez un endroit où vous ne serez pas interrompu, en cherchant l'isolement intentionnel. L'ennemi dressera des obstacles pour vous arrêter.",
          },
          {
            title: "2. Définissez le Temps Sacré",
            desc: "Décidez de vous lever plus tôt et d'éteindre les écrans. Ce n'est pas une question de temps, mais de priorité.",
            bullets: ["Conseil : Il vaut mieux avoir 15 minutes par jour que 2 heures une fois par semaine. L'inconstance est l'ennemi."]
          }
        ]
      },
      {
        title: "Phase II : Le Rituel de Transformation",
        desc: "C'est le moment où vous vous placez devant le Potier pour être remodelé.",
        steps: [
          {
            title: "3. Lecture Réflexive",
            desc: "Ne lisez pas comme quelqu'un qui étudie pour un examen, mais comme quelqu'un qui reçoit une lettre d'amour personnelle.",
            bullets: ["Lisez lentement, en absorbant chaque mot.", "Demandez-vous : 'Que me dit Dieu ici ?'", "Mieux vaut comprendre profondément un verset que de lire superficiellement."]
          },
          {
            title: "4. Confession Spécifique",
            desc: "Ouvrez votre cœur dans une confession sincère. Ne cachez pas et ne justifiez pas vos erreurs.",
            bullets: ["Soyez précis sur vos péchés (orgueil, impatience, paroles dures).", "Beaucoup échouent parce qu'ils font des confessions génériques."]
          },
          {
            title: "5. Consécration Totale",
            desc: "Faites votre consécration quotidienne : abandonnez-vous complètement à nouveau.",
            bullets: ["Placez vos projets, vos rêves et votre temps sur l'autel.", "Ne retenez pas de petits domaines, car ils peuvent devenir des forteresses pour l'ennemi."]
          },
          {
            title: "6. Prière Complète",
            desc: "Présentez vos besoins, mais n'oubliez pas d'intercéder pour les autres.",
            bullets: ["Priez pour les perdus, pour ceux qui souffrent et pour vos ennemis.", "Évitez les prières égoïstes centrées uniquement sur des désirs personnels."]
          },
          {
            title: "7. Silence Intentionnel",
            desc: "Pratiquez le silence devant Dieu. Écoutez et soyez attentif aux impressions du Saint-Esprit.",
            bullets: ["Dieu crie rarement ; Il murmure.", "Vous n'entendrez que lorsque vous ferez silence."]
          },
          {
            title: "8. Engagement Quotidien",
            desc: "Quittez l'heure secrète avec un objectif défini.",
            bullets: ["Établissez ce que Dieu vous a demandé de faire : quel changement d'attitude, quel service rendre ou quelle habitude abandonner."]
          }
        ]
      },
      {
        title: "Phase III : Connexion Continue",
        steps: [
          {
            title: "Marcher avec Dieu",
            desc: "La communion ne se limite pas à l'heure secrète. Apportez la présence divine dans chaque activité, conversation et décision de la journée.",
            bullets: ["Renouveau Constant : La manne d'hier ne sert pas pour aujourd'hui.", "Résultat : Le cœur endurci est adouci et l'esprit confus est éclairé."]
          }
        ]
      }
    ]
  }
};

export const MORNING_MEDITATIONS_LIST: MeditationItem[] = [
  {
    id: 'm1',
    reference: 'Salmos 103:1-5',
    pt: { 
        title: 'Ordenando a Alma', 
        theme: 'Não é apenas agradecer, é ordenar à sua alma que saia da amnésia espiritual. Cada benefício esquecido é um terreno cedido à ingratidão.' 
    },
    en: { 
        title: 'Commanding the Soul', 
        theme: 'It is not just thanking; it is commanding your soul to wake from spiritual amnesia. Every forgotten benefit is ground yielded to ingratitude.' 
    },
    fr: { 
        title: 'Commander à l\'Âme', 
        theme: 'Ce n\'est pas seulement remercier, c\'est ordonner à votre âme de sortir de l\'amnésie spirituelle. Chaque bienfait oublié est un terrain cédé à l\'ingratitude.' 
    }
  },
  {
    id: 'm2',
    reference: 'Filipenses 4:6-7',
    pt: { 
        title: 'A Troca Divina', 
        theme: 'A ansiedade é um sinal de que você está carregando o que pertence a Deus. A troca é: sua preocupação pela paz dEle, que monta guarda sobre sua mente.' 
    },
    en: { 
        title: 'The Divine Exchange', 
        theme: 'Anxiety is a signal that you are carrying what belongs to God. The exchange is: your worry for His peace, which stands guard over your mind.' 
    },
    fr: { 
        title: 'L\'Échange Divin', 
        theme: 'L\'anxiété est un signal que vous portez ce qui appartient à Dieu. L\'échange est : votre inquiétude contre Sa paix, qui monte la garde sur votre esprit.' 
    }
  },
  {
    id: 'm3',
    reference: 'Lamentações 3:22-24',
    pt: { 
        title: 'O Reinício', 
        theme: 'Mesmo no meio dos escombros emocionais, a misericórdia de Deus reinicia o relógio a cada alvorecer. Sua fidelidade não depende da sua estabilidade.' 
    },
    en: { 
        title: 'The Reset', 
        theme: 'Even amidst emotional rubble, God\'s mercy resets the clock at every dawn. His faithfulness does not depend on your stability.' 
    },
    fr: { 
        title: 'La Réinitialisation', 
        theme: 'Même au milieu des décombres émotionnels, la miséricorde de Dieu remet l\'horloge à zéro à chaque aube. Sa fidélité ne dépend pas de votre stabilité.' 
    }
  },
  {
    id: 'm4',
    reference: 'Provérbios 3:5-6',
    pt: { 
        title: 'Rendição Intelectual', 
        theme: 'Confiar é admitir que sua visão é limitada. É escolher a direção dEle, mesmo quando o mapa não faz sentido para a sua lógica humana.' 
    },
    en: { 
        title: 'Intellectual Surrender', 
        theme: 'Trusting is admitting your vision is limited. It is choosing His direction, even when the map makes no sense to your human logic.' 
    },
    fr: { 
        title: 'Reddition Intellectuelle', 
        theme: 'Faire confiance, c\'est admettre que votre vision est limitée. C\'est choisir Sa direction, même lorsque la carte n\'a aucun sens pour votre logique humaine.' 
    }
  },
  {
    id: 'm5',
    reference: 'Salmos 23',
    pt: { 
        title: 'Presença no Vale', 
        theme: 'O segredo não é a ausência do vale, mas a presença do Pastor. O medo se dissipa não quando o problema some, mas quando você percebe Quem está ao seu lado.' 
    },
    en: { 
        title: 'Presence in the Valley', 
        theme: 'The secret is not the absence of the valley, but the presence of the Shepherd. Fear dissipates not when the problem vanishes, but when you realize Who is by your side.' 
    },
    fr: { 
        title: 'Présence dans la Vallée', 
        theme: 'Le secret n\'est pas l\'absence de la vallée, mais la présence du Berger. La peur se dissipe non pas quand le problème disparaît, mais quand vous réalisez Qui est à vos côtés.' 
    }
  },
];

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