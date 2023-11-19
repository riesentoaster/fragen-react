/* eslint-disable max-len */
import { HandPutTag } from './tags'

interface QuestionByDate {
  translations: {
    en: string
    de: string
  }
  deepness: number
  tags?: HandPutTag[]
  author?: string
  date?: string
}

interface QuestionsByDate {
  [date: string]: QuestionByDate[]
}

export const questionsByDate: QuestionsByDate = {
  '2022-08-31': [
    {
      deepness: 5,
      translations: {
        en: 'What decision of yours do you regret the most?',
        de: 'Welche deiner Entscheidungen bereust du am meisten?'
      }
    },
    {
      deepness: 2,
      tags: [ 'christians' ],
      translations: {
        en: 'What is your story with Jesus?',
        de: 'Was ist deine Story mit Jesus?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What behaviour of others annoys you?',
        de: 'Welches Verhalten von anderen nervt dich?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What would you like to know about the future?',
        de: 'Was würdest du wissen wollen über die Zukunft?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What do you have no idea about?',
        de: 'Wovon hast du keine Ahnung?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What do you usually do to de-stress?',
        de: 'Was machst du normalerweise, um Stress abzubauen?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What are the most important entries in your calendar?',
        de: 'Was sind die wichtigsten Termine in deiner Agenda?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What makes you interesting?',
        de: 'Was macht dich interessant?'
      }
    },
    {
      deepness: 2,
      tags: [ 'v' ],
      translations: {
        en: 'What bothers you at the moment?',
        de: 'Was beschäftigt dich gerade?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'What are you thinking about regarding your faith?',
        de: 'Was beschäftigt dich in deinem Glaubensleben?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What are you currently responsible for?',
        de: 'Wofür trägst du momentan Verantwortung?'
      }
    },
    {
      deepness: 1,
      tags: [ 'v' ],
      translations: {
        en: 'What is something you like talking about?',
        de: 'Wovon erzählst du gerne?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What would you change about your looks?',
        de: 'Was würdest du an deinem Aussehen ändern?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'Who are you in 10 years?',
        de: 'Wer bist du in 10 Jahren?'
      }
    },
    {
      deepness: 2,
      tags: [ 'v' ],
      translations: {
        en: 'What are you grateful for?',
        de: 'Wofür bist du dankbar?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is the coolest thing you\'ve done in your life so far?',
        de: 'Was ist das Coolste, was du bisher in deinem Leben gemacht hast?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What story is particularly important to you?',
        de: 'Was ist eine Geschichte, die dir besonders wichtig ist?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'When did you fail the hardest in your life? What was your biggest triumph?',
        de: 'Wo bist du im Leben am schlimmsten gescheitert? Was war dein grösster Triumph?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'In which direction would you like to change the world?',
        de: 'In welche Richtung möchtest du diese Welt verändern?'
      }
    },
    {
      deepness: 2,
      tags: [ 'christians' ],
      translations: {
        en: 'What bible story is particularly important to you?',
        de: 'Was ist eine Bibelgeschichte, die dir besonders wichtig ist?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is a property/habit of yours that annoys other people?',
        de: 'Was ist eine deiner Eigenschaften/Gewohnheiten, die andere nervt?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'In life, are you where you wanted to be at this point?',
        de: 'Bist du da im Leben, wo du zum jetzigen Zeitpunkt sein wolltest?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'If you would be able to change your first name, how would you like to be called?',
        de: 'Wenn du einen neuen Vornamen haben könntest, welchen würdest du wählen?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'How do you reach a decision?',
        de: 'Wie triffst du Entscheidungen?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is likeable/admirable about you?',
        de: 'Was ist liebenswert an dir?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians', 'v' ],
      translations: {
        en: 'Which trait of Jesus do you appreciate most?',
        de: 'Welche Eigenschaft von Jesus schätzt du am meisten?'
      }
    },
    {
      deepness: 4,
      tags: [ 'v' ],
      translations: {
        en: 'What must I never forget?',
        de: 'Was darf ich nie vergessen?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'What have you wanted to try to change about your life, but haven\'t managed?',
        de: 'Was willst du schon lange an dir ändern, schaffst es aber nicht?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'What blind spots of me should I change?',
        de: 'Was sind meine blinden Flecken, die ich deiner Meinung nach an mir ändern sollte?'
      }
    },
    {
      deepness: 4,
      tags: [ 'v' ],
      translations: {
        en: 'What is my best quality that I don\'t see?',
        de: 'Was ist meine beste Qualität, die ich selber nicht sehe?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is your best (secret) advice for working relationships?',
        de: 'Was ist dein bester Rat (oder Geheimtipp) für eine funktionierende Beziehung?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'On a scale from 1 through 10, how would you rate your life? What could you do to improve it?',
        de: 'Auf einer Skala von 1 bis 10, wie bewertest du dein Leben? Was könntest du tun, um es zu verbessern?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What opinion of yours is unpopular with your friends?',
        de: 'Welche Meinung von dir ist in deinem Freundeskreis unpopulär?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What 3 traits would a person that is an exact opposite of you have?',
        de: 'Welche 3 Eigenschaften weist eine Person auf, die das exakte Gegenteil von dir ist?'
      }
    },
    {
      deepness: 5,
      tags: [ 'v' ],
      translations: {
        en: 'What breaks your heart?',
        de: 'Was bricht dein Herz?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is the best advice you have received?',
        de: 'Was ist der beste Ratschlag, den du in deinem Leben erhalten hast?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'Of what friend are you particularly proud? Why?',
        de: 'Auf welchen deiner Freunde bist du am meisten stolz? Warum?'
      }
    },
    {
      deepness: 1,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'Show me your best imitation of me!',
        de: 'Zeig mir die beste Nachahmung von mir!'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What do you like about our culture?',
        de: 'Was findest du toll an unserer Kultur?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'When was the last time you felt misunderstood?',
        de: 'Wann fühltest du dich zuletzt falsch verstanden?'
      }
    },
    {
      deepness: 3,
      tags: [ 'v' ],
      translations: {
        en: 'What can other people learn from you?',
        de: 'Was können andere von dir lernen?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What part of getting older worries you? What are you looking forward to?',
        de: 'Welcher Aspekt des Älterwerdens bereitet dir Sorgen? Auf was freust du dich?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What TV series are you currently watching?',
        de: 'Welche Serien schaust du gerade?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What do you think is the most beautiful part of your body?',
        de: 'Was findest du das Schönste an deinem Körper?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians', 'v' ],
      translations: {
        en: 'What bothers you most about what christians believe and how they live?',
        de: 'Was stört dich am meisten an dem, was Christen glauben und leben?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'How are you maintaining your relationship to God?',
        de: 'Wie pflegst du deine Freundschaft mit Gott?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'Tell me/us something about you that only few people know!',
        de: 'Erzähle etwas Spannendes über dich, das nur wenige wissen.'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is something you learned during the past week?',
        de: 'Was ist etwas, das du in der letzten Woche gelernt hast?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'What advice would you give to a recently converted christian?',
        de: 'Was sind gute Tipps, die du frisch bekehrten Christen geben würdest?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What is your favourite story from a movie or book?',
        de: 'Welches ist deine Lieblings-Geschichte aus einem Film oder Buch?'
      }
    },
    {
      deepness: 1,
      tags: [ 'christians' ],
      translations: {
        en: 'What is something that pastors should preach about more often?',
        de: 'Worüber sollte in der Kirche mehr gepredigt werden?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'What are your goals in your faith?',
        de: 'Was sind deine Ziele im Glauben?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is most important to you in our relationship?',
        de: 'Was ist dir am wichtigsten an unserer Beziehung?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'Is there an ability you\'d like to master?',
        de: 'Gibt es eine Fähigkeit, welche du wirklich beherrschen möchtest?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What are your trademarks?',
        de: 'Was sind deine Markenzeichen?'
      }
    },
    {
      deepness: 4,
      tags: [ 'v' ],
      translations: {
        en: 'From what mistakes of yours can people learn?',
        de: 'Von welchen Fehlern, die du gemacht hast, können andere lernen?'
      }
    },
    {
      deepness: 5,
      tags: [ 'v' ],
      translations: {
        en: 'What is something that life is currently teaching you?',
        de: 'Was lehrt dich das Leben gerade?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is most important to you in a relationship?',
        de: 'Was ist dir am einer Beziehung am wichtigsten?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What do you know especially much about?',
        de: 'Worin kennst du dich besonders gut aus?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What persons do you admire? What for?',
        de: 'Welche Menschen bewunderst du? Wofür?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'Is there something about Jesus and his doctrine that annoys you?',
        de: 'Gibt es etwas über Jesus und seine Lehre, das dich verärgert?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'What wrong belief did you hold in the past?',
        de: 'Was hast du in der Vergangenheit falsch geglaubt?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What are your biggest goals in life?',
        de: 'Was sind deine grössten Lebensziele?'
      }
    },
    {
      deepness: 3,
      tags: [ 'christians' ],
      translations: {
        en: 'What treats do mature christians show?',
        de: 'Was sind Merkmale eines reifen Christen?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'How does somebody become a friend of yours?',
        de: 'Wie wird man ein Freund oder ein:e Freund:in von dir? (Freundschaft)'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What is something that I have to experience?',
        de: 'Was ist etwas, das ich unbedingt erleben soll?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is a common prejudice people have about you?',
        de: 'Was ist ein häufiges Vorurteil, welches Leute von dir haben?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'Who is your best friend? Why?',
        de: 'Wer ist dein bester Freund oder deine beste Freundin? Warum?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'What was the most difficult decision of your life?',
        de: 'Was war die schwierigste Entscheidung deines Lebens?'
      }
    },
    {
      deepness: 1,
      translations: {
        en: 'What is something you like doing in particular?',
        de: 'Was machst du besonders gerne?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What accomplishment of yours are you most proud of?',
        de: 'Auf welche deiner Leistungen/Errungenschaften bist du am meisten Stolz?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What would you change about your personality?',
        de: 'Was würdest du an deiner Persönlichkeit ändern?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'How are you inspiring other people?',
        de: 'Wie inspirierst du andere?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'When were you ready to sink into the floor in shame?',
        de: 'Wann wärst du aus Scham am liebsten im Boden versunken?'
      }
    }
  ],
  '2022-09-03': [
    {
      deepness: 5,
      translations: {
        en: 'What is a decision you are struggling with right now? What is keeping you from making it?',
        de: 'Was für eine Entscheidung fällt dir gerade schwer zu treffen? Was hält dich davon ab?'
      }
    }
  ],
  '2022-09-09': [
    {
      deepness: 1,
      tags: [ 'v' ],
      translations: {
        en: 'What is the last song you listened to?',
        de: 'Welchen Song hast du zuletzt angehört?'
      }
    }
  ],
  '2022-09-11': [
    {
      deepness: 3,
      tags: [ 'v' ],
      translations: {
        en: 'When do you feel at home?',
        de: 'Wann fühlst du dich zuhause?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'When did you last cry? Why?',
        de: 'Wann hast du das letzte mal geweint? Warum?'
      }
    }
  ],
  '2022-09-19': [
    {
      deepness: 5,
      tags: [ 'v' ],
      translations: {
        en: 'Where are you deceiving yourself?',
        de: 'Wo lügst du dich selbst an?'
      }
    }
  ],
  '2022-10-12': [
    {
      deepness: 3,
      tags: [ 'v' ],
      translations: {
        en: 'What is out of balance in your life right now?',
        de: 'Wo ist dein Leben zur Zeit nicht im Gleichgewicht?'
      }
    }
  ],
  '2022-10-21': [
    {
      deepness: 3,
      author: 'Alex No',
      tags: [ 'philosophy' ],
      translations: {
        en: 'What is love?',
        de: 'Was ist Liebe?'
      }
    }
  ],
  '2022-10-31': [
    {
      deepness: 3,
      translations: {
        en: 'What is something that you do differently from your parents? Why?',
        de: 'Was machst du anders als deine Eltern? Warum?'
      }
    }
  ],
  '2022-11-09': [
    {
      deepness: 4,
      author: 'Alex No',
      translations: {
        en: 'How do you show love? How do you like being shown love?',
        de: 'Wie zeigst du Liebe? Wie können dir andere Liebe zeigen?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is the best compliment somebody ever gave you?',
        de: 'Was ist das beste Kompliment, das du je bekommen hast?'
      }
    }
  ],
  '2022-11-25': [
    {
      deepness: 4,
      translations: {
        en: 'What needs to happen in your life for it to have gone right?',
        de: 'Was muss in deinem Leben passieren, damit es gut war?'
      }
    },
    {
      deepness: 1,
      author: 'Alex No',
      translations: {
        en: 'What sound or song would summon you?',
        de: 'Welcher Ton oder welches Lied würde dich herbeirufen?'
      }
    },
    {
      deepness: 2,
      tags: [ 'philosophy' ],
      translations: {
        en: 'Are there evil humans?',
        de: 'Gibt es böse Menschen?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What role did music play in the household you grew up in?',
        de: 'Was für eine Rolle hat Musik gespielt im Haushalt, in dem du aufgewachsen bist?'
      }
    },
    {
      deepness: 1,
      author: 'Alex No',
      translations: {
        en: 'What song is playing in your head?',
        de: 'Was hast du gerade für einen Ohrwurm?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is a line from a song or poem that means a lot to you?',
        de: 'Was ist eine Zeile aus einem Gedicht oder Lied, die dir viel bedeutet?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is something that you took after your grandparents? What is something you took after your parents?',
        de: 'Wo bist du wie deine Grosseltern? Wo bist du wie deine Eltern?'
      }
    }
  ],
  '2022-12-21': [
    {
      deepness: 2,
      translations: {
        en: 'What are your pet peeves?',
        de: 'Was kannst du nicht leiden in anderen Menschen? Was sind deine pet peeves?'
      }
    },
    {
      deepness: 5,
      tags: [ 'twoPeople' ],
      author: 'Samer Massad',
      translations: {
        en: 'Where are you choosing wrong? Where am I choosing wrong?',
        de: 'Wo wählst du falsch? Wo wähle ich falsch?'
      }
    },
    {
      deepness: 3,
      author: 'Samer Massad',
      tags: [ 'v' ],
      translations: {
        en: 'What is something you\'re distracted from?',
        de: 'Wovon bist du abgelenkt?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What is a coping mechanism you used to rely on? What for?',
        de: 'Was ist ein coping mechanism, den du in der Vergangenheit misbrauchst hast? Wofür?'
      }
    }
  ],
  '2023-02-02': [
    {
      deepness: 5,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is the pain in me you wish you could heal?',
        de: 'Was ist der Schmerz in mir, den du gerne heilen würdest?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What do you think I need to hear?',
        de: 'Was glaubst du, müsste ich mal hören?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is your biggest fear? How can I help you to face it?',
        de: 'Was ist deine grösste Angst? Wie kann ich dir helfen, sie zu überwinden?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is something you think I\'m really good at?',
        de: 'Was ist etwas, was ich wirklich gut kann?'
      }
    },
    {
      deepness: 3,
      author: 'Sofia',
      translations: {
        en: 'What do you like about your parents?',
        de: 'Was magst du an deinen Eltern?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What is something you\'ve done to try and be cool?',
        de: 'Was hast to in der Vergangenheit gemacht um cool zu scheinen?'
      }
    },
    {
      deepness: 5,
      translations: {
        en: 'When have you seen me the most vulnerable? What did it teach you about me?',
        de: 'Wann hast du mich am verwundbarsten gesehen? Was hat es dich über mich gelehrt?'
      }
    },
    {
      deepness: 3,
      tags: [ 'sex' ],
      translations: {
        en: 'What do you think is my sexiest quality?',
        de: 'Was findest du ist meine sexieste Qualität?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople', 'v' ],
      translations: {
        en: 'What do you think I\'m hesitant to tell you?',
        de: 'Was glaubst du zögere ich, dir zu sagen?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'Who has more power in this relationship?',
        de: 'Wer hat mehr Macht in dieser Beziehung?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is one experience you hope we share in the future?',
        de: 'Was ist ein Erlebnis, von dem du hoffst, dass wir es mal zusammen machen?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'If this was our last conversation, what is something you\'d never want me to forget?',
        de: 'Angenommen, das wäre unser letztes Gespräch: Was sollte ich niemals vergessen?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is one thing I could do to improve our relationship?',
        de: 'Was könnte ich machen, um unsere Beziehung zu verbessern?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'When do you feel most empowered in your body?',
        de: 'Wann fühlst du dich am stärksten (most empowered) in deinem Körper?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What would you never, ever want my help with?',
        de: 'Wobei möchtest du nie und nimmer meine Hilfe?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'What about me makes you come back for more?',
        de: 'Was an mir motiviert dich, für mehr zurückzukommen?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'When did you feel closest to me?',
        de: 'Wann hast du dich mir am nächsten gefühlt?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What is a possible challenge for me in the future? What can I do to prepare for it now?',
        de: 'Was ist eine mögliche Herausforderung, die du in meiner Zukunft siehst? Was kann ich jetzt schon machen, um dafür vorbereitet zu sein?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What are you hesitant to talk to me about?',
        de: 'Über was zögerst du, mit mir zu reden?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'When you look into my eyes, what do you see?',
        de: 'Wenn du in meine Augen schaust, was siehst du dann?'
      }
    },
    {
      deepness: 3,
      tags: [ 'v' ],
      translations: {
        en: 'What is a question you\'ve always wanted to ask me?',
        de: 'Was wolltest du mich schon immer mal fragen?'
      }
    },
    {
      deepness: 3,
      author: 'Andy Stanley',
      tags: [ 'v' ],
      translations: {
        en: 'What do you want to be known for?',
        de: 'Für was möchtest du bekannt sein?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is your favourite imperfection of mine?',
        de: 'Was ist deine Lieblingsfehler an mir?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'How were we raised differently and how do you think it affects our relationship?',
        de: 'Inwiefer wurden wir unterschiedlich erzogen und wie beeinflusst das unsere Beziehung?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is something you learned from me that changed you?',
        de: 'Was hast du von mir gelernt, was dich verändert hat?'
      }
    },
    {
      deepness: 4,
      tags: [ 'dating' ],
      translations: {
        en: 'What would your last partner warn me about?',
        de: 'Vor was würde mich dein letzer Partner/deine letzte Partnerin warnen?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'When are you most worried about me?',
        de: 'Wann machst du dir am meisten Sorgen um mich?'
      }
    }
  ],
  '2023-04-06': [
    {
      deepness: 3,
      author: 'Franziska von Grünigen',
      translations: {
        en: 'What should people think and say about you after your death?',
        de: 'Was sollen Leute über dich sagen und denken nach deinem Tod?'
      }
    },
    {
      deepness: 4,
      author: 'Franziska von Grünigen',
      translations: {
        en: 'What do you want your funeral to be like? Any songs that must be played? What should be said? By whom?',
        de: 'Wie soll deine Beerdigung sein? Was für ein Lied muss unbedingt gespielt werden? Was soll gesagt werden? Von wem?'
      }
    }
  ],
  '2023-04-12': [
    {
      deepness: 3,
      author: 'Robert',
      translations: {
        en: 'What should never change about your environment?',
        de: 'Was soll sich an deinem Umfeld nie ändern?'
      }
    },
    {
      deepness: 4,
      translations: {
        en: 'What did you recently need courage for?',
        de: 'Für was brauchtest du in letzter Zeit Mut?'
      }
    },
    {
      deepness: 4,
      author: 'Tim Harford',
      translations: {
        en: 'Have you ever broken anyone\'s heart?',
        de: 'Hast du schon einmal das Herz von jemandem gebrochen?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'How stressed are you right now?',
        de: 'Wie gestresst bist du gerade?'
      }
    },
    {
      deepness: 3,
      author: 'Felizitas Ambauen',
      translations: {
        en: 'How would you describe your parents with three words each?',
        de: 'Wie würdest du deine Eltern in je drei Begriffen beschreiben?'
      }
    }
  ],
  '2023-04-19': [
    {
      deepness: 5,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'When did I disappoint you? How do you feel about it now?',
        de: 'Wann habe ich dich enttäuscht? Wie denkst du heute darüber?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'Why do you love me?',
        de: 'Warum liebst du mich?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is one experience you wish we never shared?',
        de: 'Was ist ein Erlebnis, von dem du dir wünschen würdest, dass wir es nie zusammen erlebt hätten?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What is something you are missing out on for being in this relationship?',
        de: 'Was ist etwas, was du wegen dieser Beziehung verpasst?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'What could be the reason for us to break up? What can we do about it now?',
        de: 'Was könnte der Grund sein, dass wir uns trennen? War können wir jetzt dagegen machen?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'Where do we misunderstand each other most? Why do you think that is?',
        de: 'Wo verstehen wir uns am häufigsten falsch? Warum?'
      }
    },
    {
      deepness: 3,
      tags: [ 'dating', 'sex', 'v' ],
      translations: {
        en: 'When have you felt sexiest around me? What did it teach you about yourself?',
        de: 'Wann hast du dich in meiner Gegenwart am sexiesten gefühlt? Was hast du dabei über dich gelernt?'
      }
    },
    {
      deepness: 2,
      tags: [ 'dating' ],
      translations: {
        en: 'When did you realize I was in love with you?',
        de: 'Wann hast du realisiert, dass ich dich liebe?'
      }
    },
    {
      deepness: 2,
      tags: [ 'dating', 'sex' ],
      translations: {
        en: 'What is something I do that turns you on that I don\'t realize?',
        de: 'Was ist etwas, das ich mache, und dass dich antörnt, ohne dass ich es weiss?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'How do you describe me to others?',
        de: 'Wie beschreibst du mich gegenüber anderen?'
      }
    }
  ],

  '2023-04-21': [
    {
      deepness: 1, translations: {
        en: 'What is a boring fact about you?',
        de: 'Was ist ein langweiliger Fakt über dich?'
      } }
  ],
  '2023-04-25': [
    {
      deepness: 2,
      translations: {
        en: 'What\'s the best question you\'ve ever been asked?',
        de: 'Was war die beste Frage, die dir je gestelt wurde?'
      }
    }
  ],
  '2023-04-29': [
    {
      deepness: 4,
      translations: {
        de: 'Wann hat dich dein Bauchgefühl betrogen?',
        en: 'When did your gut betray you?'
      }
    }
  ],
  '2023-05-04': [
    {
      deepness: 3,
      translations: {
        en: 'What question do you hate answering?',
        de: 'Was für eine Frage hasst du zu beantworten?'
      }
    }
  ],
  '2023-05-06': [
    {
      deepness: 3,
      translations: {
        en: 'What is the best decision you ever made?',
        de: 'Was ist die beste Entscheidung, die du je gemacht hast?'
      }
    }
  ],
  '2023-05-07': [
    {
      deepness: 1,
      translations: {
        en: 'What is the coolest thing you own that isn\'t expensive?',
        de: 'Was ist das coolste Ding, das dir gehört, und nicht teuer ist?'
      }
    }
  ],
  '2023-05-09': [
    {
      deepness: 2,
      translations: {
        en: 'What is your most unethical lifehack?',
        de: 'Was ist dein unethischster Tipp/Lifehack?'
      }
    }
  ],
  '2023-05-15': [
    {
      deepness: 4,
      translations: {
        en: 'What experience have you grown the most from?',
        de: 'An welchem Erlebnis bist du am meisten gewachsen?'
      }
    }
  ],
  '2023-05-18': [
    {
      deepness: 3,
      translations: {
        en: 'Is there an experience in your life that made you fundamentally change your thinking?',
        de: 'Gibt es ein Erlebnis in deinem Leben, dass dich zu einem fundamentalen Umdenken bewogen hat?'
      },
      author: 'Silvio'
    }
  ],
  '2023-06-05': [
    {
      deepness: 4,
      translations: {
        en: 'What are three reasons not to date you? What are three reasons to date you?',
        de: 'Was sind drei Gründe, dich nicht zu daten? Was sind drei Gründe es zu tun?'
      }
    }
  ],
  '2023-06-24': [
    {
      deepness: 4,
      translations: {
        en: 'Who broke your heart?',
        de: 'Wer hat dein Herz gebrochen?'
      }
    }
  ],
  '2023-06-29': [
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'Why are you in this relationship?',
        de: 'Warum bist du in dieser Beziehung?'
      }
    }
  ],
  '2023-07-11': [
    {
      deepness: 3,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'How do you love me?',
        de: 'Wie liebst du mich?'
      }
    }
  ],
  '2023-09-02': [
    {
      deepness: 2,
      tags: [ 'v' ],
      translations: {
        en: 'What is the best purchase you ever made?',
        de: 'Was war bisher dein bester Kauf?'
      }
    }
  ],
  '2023-09-03': [
    {
      deepness: 3,
      translations: {
        en: 'What\'s the most surprising discovery that you made about your own body?',
        de: 'Was war die überaschendste Entdeckung, die du über deinen Körper gemacht hast?'
      },
      author: 'Laura'
    }
  ],
  '2023-09-10': [
    {
      deepness: 2,
      translations: {
        en: 'What was the best birthday or christmas present you\'ve ever received?',
        de: 'Was war das beste Geburtstags- oder Weihnachtsgeschenk, dass du je bekommen hast?'
      },
      author: 'Noëmi'
    }
  ],
  '2023-09-12': [
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'How do I annoy you?',
        de: 'Mit was nerve ich dich?'
      }
    }
  ],
  '2023-09-13': [
    {
      deepness: 3,
      tags: [ 'twoPeople', 'v' ],
      translations: {
        en: 'What\'s something about me that you love that I might not know?',
        de: 'Was liebst du an mir, ohne dass ich es weiss?'
      }
    }
  ],
  '2023-09-17': [
    {
      deepness: 2,
      translations: {
        en: 'Do you have any scars? What\'s the story behind it?',
        de: 'Hast du eine Narbe? Was ist die Geschichte dahinter?'
      }
    }
  ],
  '2023-09-18': [
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What\'s the most ridiculous thing you\'ve seen me do?',
        de: 'Was ist das Lächerlichste, was du mich hast tun sehen?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What would you warn my current/next partner about?',
        de: 'Über was würdest du meine:n aktuelle:n/zukünftige:n Partner:in warnen?'
      }
    }
  ],
  '2023-09-19': [
    {
      deepness: 2,
      tags: [ 'christians' ],
      translations: {
        en: 'What is an underrated bible story?',
        de: 'Was ist eine unterschätzte (underrated) Bibelgeschichte?'
      }
    }
  ],
  '2023-09-24': [
    {
      deepness: 3,
      translations: {
        en: 'When did you last experience true peace?',
        de: 'Wann hast du zuletzt wahren Frieden verspürt?'
      }
    }
  ],
  '2023-09-30': [
    {
      deepness: 4,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'What do you get from me that you didn\'t get in past relationshipts?',
        de: 'Was bekommst du von mir, was du in bisherigen Beziehungen nicht bekommen hast?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'What makes you think we will last?',
        de: 'Wegen was denkst du, wir werden als Paar durchhalten?'
      }
    },
    {
      deepness: 3,
      translations: {
        en: 'What do you not like to come up in conversation?',
        de: 'Was magst du nicht, wenn es in Gesprächen aufkommt?'
      }
    },
    {
      deepness: 5,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'When is the last time you considered ending this relationship? Why didn\'t you?',
        de: 'Wann hast du das letzte Mal darüber nachgedacht, diese Beziehung zu beenden? Warum hast du es nicht gemacht?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'When were you proudest of me?',
        de: 'Wann warst du am meisten stolz auf mich?'
      }
    }
  ],
  '2023-10-01': [
    {
      deepness: 2,
      tags: [ 'v' ],
      author: 'Destin Sandlin',
      translations: {
        en: 'What song makes you feel the most things?',
        de: 'Welches Lied löst in dir die meisten Emotionen aus?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What are you currently frustrated about?',
        de: 'Wegen was bist du zur Zeit frustriert?'
      }
    }
  ],
  '2023-10-05': [
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What do you think I need most from you? Are you providing it?',
        de: 'Was denkst du, das ich am meisten von dir brauche? Gibst du es mir?'
      }
    },
    {
      deepness: 5,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What am I always carrying that I should let go of?',
        de: 'Was trage ich immer mit mir herum, was ich deiner Meinung nach ablegen sollte?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'What does my love feel like?',
        de: 'Wie fühlt sich meine Liebe an?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople', 'dating' ],
      translations: {
        en: 'How has your love changed for me?',
        de: 'Wie hat sich deine Liebe für mich verändert?'
      }
    },
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What do you think is my biggest challenge right now and what am I learning from it?',
        de: 'Was glaubst du ist aktuell meine grösste Herausforderung? Was denkst du lerne ich davon?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'How have I grown the most in the past few years that I don\'t realize?',
        de: 'Wie bin ich in den letzten Jahren am stärksten gewachsen, ohne es zu realisieren?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        en: 'What have you recently learned about me?',
        de: 'Was hast du kürzlich über mich gelernt?'
      }
    }
  ],
  '2023-10-09': [
    {
      deepness: 2,
      translations: {
        en: 'What does your perfect work day look like?',
        de: 'Wie sieht ein optimaler Arbeitstag für dich aus?'
      }
    }
  ],
  '2023-10-11': [
    {
      deepness: 3,
      translations: {
        en: 'What thing that I did did you most appreciate?',
        de: 'Von dem, was ich für dich getan habe: Was schätzst du am meisten?'
      }
    }
  ],
  '2023-10-14': [
    {
      deepness: 2,
      author: 'Noëmi',
      translations: {
        en: 'What music do you listen to when you\'re not doing well?',
        de: 'Was für Musik hörst du, wenn es dir schlecht geht?'
      }
    },
    {
      deepness: 2,
      translations: {
        en: 'What song takes you back to a specific situation, place, or point in time?',
        de: 'Welcher Song erinnert dich an eine spezifische Situation, einen Ort oder Zeitpunkt?'
      }
    }
  ],
  '2023-10-15': [
    {
      deepness: 3,
      translations: {
        en: 'What makes you a good loser? What makes you a bad loser?',
        de: 'Was macht dich zu einem guten Verlierer? Was macht dich zu einem schlechten Verlierer?'
      }
    }
  ],
  '2023-10-17': [
    {
      deepness: 2,
      author: 'Jacoba',
      translations: {
        de: 'Was für ein Kompliment bekommst du nicht gerne?',
        en: 'What compliment do you dislike receiving?'
      }
    }
  ],
  '2023-10-19': [
    {
      deepness: 1,
      author: 'Michi',
      translations: {
        de: 'Wie würdest du dein Kind nie nennen?',
        en: 'What would you never call your child?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        de: 'Welche Gewohnheit hast du von mir übernommen?',
        en: 'What habit did you pick up from me?'
      }
    }
  ],
  '2023-10-20': [
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        de: 'Was ist das beste, das ich je für dich gemacht habe?',
        en: 'What is the best thing I\'ve ever done for you?'
      }
    },
  ],
  '2023-10-24': [
    {
      deepness: 4,
      translations: {
        en: 'What is it like for you to ask for help?',
        de: 'Wie ist es für dich, um Hilfe zu bitten?'
      }
    },
  ],
  '2023-10-26': [
    {
      deepness: 2,
      translations: {
        de: 'Was hast du in letzter Zeit entdeckt, das dich begeistert hat?',
        en: 'What is something you discovered recently that delighted you?'
      }
    },
  ],
  '2023-10-29': [
    {
      deepness: 4,
      tags: [ 'twoPeople' ],
      translations: {
        de: 'Was magst du nicht an meinen Eltern?',
        en: 'What do you dislike about my parents?',
      }
    },
  ],
  '2023-11-02': [
    {
      deepness: 1,
      translations: {
        de: 'Wenn ich verhaftet würde und du nicht wüsstest, warum – was würdest du annehmen, dass ich getan habe?',
        en: 'If I got arrested but you didn\'t know why — what would you assume I did?'
      }
    },
    {
      deepness: 5,
      translations: {
        de: 'Was ist das schmerzhafteste, was dir je gesagt wurde?',
        en: 'What is the most painful thing you\'ve ever been told?'
      }
    },
  ],
  '2023-11-04': [
    {
      deepness: 1,
      translations: {
        de: 'Was braucht es deiner Meinung nach für eine gute Party?',
        en: 'What, in your opinion, is necessary for a good party?'
      }
    },
    {
      deepness: 2,
      tags: [ 'v' ],
      translations: {
        de: 'Was hat dich diese Woche am meisten gestresst? Was hat dich am meisten gefreut?',
        en: 'What stressed you out the most this week? What made you the happiest?'
      }
    },
  ],
  '2023-11-07': [
    {
      deepness: 2,
      author: 'Merlin Mann',
      translations: {
        de: 'Was ist das coolste, das dir diese Woche passiert ist?',
        en: 'What\'s the coolest thing that has happend to you this week?'
      }
    },
  ],
  '2023-11-10': [
    {
      deepness: 3,
      translations: {
        de: 'Was hat dich deine Mutter darüber gelehrt, eine Frau zu sein? Was hat dir dein Vater darüber beigebracht, ein Mann zu sein?',
        en: 'What is something your mom taught you about being a woman? What is something your dad taught you about being a man?'
      }
    },
  ],
  '2023-11-17': [
    {
      deepness: 2,
      translations: {
        de: 'Was ist etwas, das du tust, bei dem du dich alt fühlst?',
        en: 'What\'s something you do that makes you feel old?'
      }
    },
  ],
  '2023-11-18': [
    {
      deepness: 3,
      tags: [ 'christians', 'v' ],
      translations: {
        de: 'Mit welcher biblischen Figur identifizierst du dich derzeit am meisten? Warum?',
        en: 'Which biblical character do you currently relate to the most? Why?'
      }
    },
    {
      deepness: 3,
      tags: [ 'twoPeople' ],
      translations: {
        de: 'Wobei warst du bisher am meisten eifersüchtig auf mich?',
        en: 'What\'s the most jealous you\'ve ever been of me?'
      }
    },
    {
      deepness: 1,
      translations: {
        de: 'Was ist das beste Konzert, das du je besucht hast?',
        en: 'What is the favourite concert you\'ve ever been to?'
      }
    },
    {
      deepness: 2,
      tags: [ 'twoPeople' ],
      translations: {
        de: 'An welche Person aus einer Geschichte oder historische Figur erinnere ich dich am meisten?',
        en: 'What figure from a story or history do I most remind you of?'
      }
    },
  ],
}
