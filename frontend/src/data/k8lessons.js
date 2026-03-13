// KAPITEL 8 — Begegnungen und Ereignisse

export const k8Lessons = [
  {
    id: "a1-k8-wishes",
    level: "A1",
    number: "K8·A1",
    title: "Gute Wuensche und schoene Geschenke",
    subtitle: "Formuler des voeux et offrir un cadeau",
    icon: "🎁",
    duration: "15 min",
    xp: 50,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Wuensche im Alltag",
        content:
          "In German, people use specific formulas for birthdays, celebrations, and gifts. Learning these phrases helps your interactions sound warm and natural.",
        contentDe:
          "Im Deutschen gibt es feste Formeln fuer Geburtstag, Feste und Geschenke. Mit diesen Ausdruecken klingst du freundlich und natuerlich.",
      },
      {
        type: "vocabulary",
        title: "Wuensche und Gratulationen",
        words: [
          { german: "Herzlichen Glueckwunsch!", english: "Congratulations!", example: "Herzlichen Glueckwunsch zum Geburtstag!" },
          { german: "Alles Gute!", english: "All the best!", example: "Alles Gute fuer das neue Jahr!" },
          { german: "Viel Erfolg!", english: "Good luck / much success!", example: "Viel Erfolg bei der Pruefung!" },
          { german: "Alles Liebe!", english: "Lots of love!", example: "Alles Liebe zum Geburtstag!" },
          { german: "Gute Besserung!", english: "Get well soon!", example: "Du bist krank? Gute Besserung!" },
          { german: "Frohe Weihnachten!", english: "Merry Christmas!", example: "Frohe Weihnachten und einen guten Rutsch!" },
        ],
      },
      {
        type: "vocabulary",
        title: "Geschenke geben und reagieren",
        words: [
          { german: "das Geschenk", english: "gift", example: "Ich habe ein kleines Geschenk fuer dich." },
          { german: "schenken", english: "to gift", example: "Wir schenken ihr ein Buch." },
          { german: "sich freuen", english: "to be happy", example: "Ich freue mich sehr ueber das Geschenk." },
          { german: "Danke schoen!", english: "Thank you very much!", example: "Danke schoen fuer deine Hilfe!" },
          { german: "Das ist sehr nett.", english: "That is very kind.", example: "Das ist sehr nett von dir." },
          { german: "Das gefaellt mir.", english: "I like it.", example: "Das Tuch ist toll, das gefaellt mir." },
        ],
      },
      {
        type: "dialogue",
        title: "Geburtstagsszene",
        lines: [
          { speaker: "Anna", text: "Herzlichen Glueckwunsch zum Geburtstag, Leo!", translation: "Happy birthday, Leo!" },
          { speaker: "Leo", text: "Danke schoen! Wie lieb von dir.", translation: "Thank you! How kind of you." },
          { speaker: "Anna", text: "Ich habe ein kleines Geschenk fuer dich.", translation: "I have a small gift for you." },
          { speaker: "Leo", text: "Oh, danke! Das ist wirklich schoen.", translation: "Oh, thanks! That is really nice." },
          { speaker: "Anna", text: "Ich hoffe, es gefaellt dir.", translation: "I hope you like it." },
          { speaker: "Leo", text: "Ja, sehr! Ich freue mich total.", translation: "Yes, very much! I am really happy." },
        ],
      },
      {
        type: "tip",
        text:
          "For social situations, combine one wish + one personal line: 'Alles Gute! Ich wuensche dir viel Erfolg im neuen Job.'",
        textDe:
          "In sozialen Situationen kombiniere einen Wunsch mit einem persoenlichen Satz: 'Alles Gute! Ich wuensche dir viel Erfolg im neuen Job.'",
      },
    ],
  },

  {
    id: "a1-k8-health",
    level: "A1",
    number: "K8·A2",
    title: "Die Gesundheit",
    subtitle: "Vocabulaire du corps, symptomes et medecin",
    icon: "🏥",
    duration: "18 min",
    xp: 55,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Beim Arzt sprechen",
        content:
          "Health vocabulary is essential for daily life in a new country: body parts, symptoms, and simple doctor communication.",
        contentDe:
          "Gesundheitswortschatz ist im Alltag sehr wichtig: Koerperteile, Symptome und einfache Kommunikation beim Arzt.",
      },
      {
        type: "vocabulary",
        title: "Koerperteile",
        words: [
          { german: "der Kopf", english: "head", example: "Mein Kopf tut weh." },
          { german: "der Hals", english: "throat", example: "Ich habe Halsschmerzen." },
          { german: "der Ruecken", english: "back", example: "Mein Ruecken schmerzt nach der Arbeit." },
          { german: "der Bauch", english: "stomach", example: "Ich habe Bauchschmerzen." },
          { german: "das Bein", english: "leg", example: "Mein Bein ist verletzt." },
          { german: "der Arm", english: "arm", example: "Ich kann den Arm kaum bewegen." },
        ],
      },
      {
        type: "vocabulary",
        title: "Symptome und Arzttermin",
        words: [
          { german: "Fieber", english: "fever", example: "Ich habe 38,5 Grad Fieber." },
          { german: "Husten", english: "cough", example: "Seit drei Tagen habe ich starken Husten." },
          { german: "Schnupfen", english: "runny nose", example: "Im Winter habe ich oft Schnupfen." },
          { german: "die Tablette", english: "tablet/pill", example: "Nehmen Sie bitte zweimal taeglich eine Tablette." },
          { german: "das Rezept", english: "prescription", example: "Die Aerztin gibt mir ein Rezept." },
          { german: "krankgeschrieben", english: "on sick leave", example: "Ich bin bis Freitag krankgeschrieben." },
        ],
      },
      {
        type: "dialogue",
        title: "In der Arztpraxis",
        lines: [
          { speaker: "Aerztin", text: "Guten Tag, was fehlt Ihnen?", translation: "Good day, what is wrong?" },
          { speaker: "Patient", text: "Ich habe seit gestern Fieber und Husten.", translation: "Since yesterday I have fever and cough." },
          { speaker: "Aerztin", text: "Haben Sie auch Halsschmerzen?", translation: "Do you also have a sore throat?" },
          { speaker: "Patient", text: "Ja, und ich bin sehr muede.", translation: "Yes, and I am very tired." },
          { speaker: "Aerztin", text: "Ich untersuche Sie kurz. Danach bekommen Sie ein Rezept.", translation: "I will examine you briefly. Then you get a prescription." },
        ],
      },
      {
        type: "tip",
        text:
          "Medical phrase template: 'Ich habe seit + Zeit + Symptom.' Example: 'Ich habe seit zwei Tagen starke Kopfschmerzen.'",
        textDe:
          "Arzt-Formel: 'Ich habe seit + Zeit + Symptom.' Beispiel: 'Ich habe seit zwei Tagen starke Kopfschmerzen.'",
      },
    ],
  },

  {
    id: "a1-k8-apology",
    level: "A1",
    number: "K8·A3",
    title: "Entschuldigungen",
    subtitle: "S excuser et expliquer une absence",
    icon: "🙏",
    duration: "15 min",
    xp: 45,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Hoeflich entschuldigen",
        content:
          "Apologizing is a key social skill. German has different levels: light apology (Entschuldigung) and stronger apology (Es tut mir leid).",
        contentDe:
          "Sich entschuldigen ist eine zentrale soziale Faehigkeit. Es gibt leichte Entschuldigungen (Entschuldigung) und staerkere (Es tut mir leid).",
      },
      {
        type: "vocabulary",
        title: "Entschuldigungsformeln",
        words: [
          { german: "Entschuldigung", english: "excuse me / sorry", example: "Entschuldigung, wo ist Gleis 8?" },
          { german: "Es tut mir leid.", english: "I am sorry.", example: "Es tut mir leid, ich war zu spaet." },
          { german: "Leider ...", english: "Unfortunately ...", example: "Leider kann ich heute nicht kommen." },
          { german: "Ich konnte nicht ...", english: "I could not ...", example: "Ich konnte nicht teilnehmen, weil ich krank war." },
          { german: "Das war mein Fehler.", english: "That was my mistake.", example: "Das war mein Fehler, Entschuldigung." },
          { german: "Das passiert nicht wieder.", english: "It will not happen again.", example: "Ich verspreche: Das passiert nicht wieder." },
        ],
      },
      {
        type: "grammar",
        title: "Entschuldigung + Grund + Loesung",
        items: [
          { pronoun: "Entschuldigungssatz", verb: "Es tut mir leid, dass ich zu spaet bin.", meaning: "Core apology statement." },
          { pronoun: "Grund mit weil", verb: "..., weil mein Zug Verspaetung hatte.", meaning: "Explain reason with weil-clause." },
          { pronoun: "Loesung anbieten", verb: "Ich sende Ihnen die Unterlagen heute noch.", meaning: "Show responsibility and next action." },
        ],
      },
      {
        type: "dialogue",
        title: "E-Mail an die Lehrerin",
        lines: [
          { speaker: "Mila", text: "Sehr geehrte Frau Berger, es tut mir leid, dass ich gestern gefehlt habe.", translation: "Dear Ms Berger, I am sorry that I was absent yesterday." },
          { speaker: "Mila", text: "Ich war krank und konnte nicht in den Kurs kommen.", translation: "I was sick and could not come to class." },
          { speaker: "Mila", text: "Ich hole den Stoff heute nach. Vielen Dank fuer Ihr Verstaendnis.", translation: "I will catch up today. Thank you for your understanding." },
          { speaker: "Lehrerin", text: "Danke fuer Ihre Nachricht. Gute Besserung!", translation: "Thank you for your message. Get well soon!" },
        ],
      },
      {
        type: "tip",
        text:
          "Professional apology recipe: 1) apology, 2) short reason, 3) concrete correction. Keep it clear and brief.",
        textDe:
          "Professionelle Entschuldigung: 1) Entschuldigung, 2) kurzer Grund, 3) konkrete Korrektur.",
      },
    ],
  },

  {
    id: "a1-k8-passiert",
    level: "A1",
    number: "K8·A4",
    title: "Was ist noch alles passiert?",
    subtitle: "Raconter des evenements passes avec le Perfekt",
    icon: "📰",
    duration: "20 min",
    xp: 60,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Vergangenheit im Alltag",
        content:
          "In spoken German, Perfekt is the standard way to talk about past events. You need it for stories, reports, and everyday updates.",
        contentDe:
          "Im gesprochenen Deutsch ist das Perfekt die Standardform fuer Vergangenes. Du brauchst es fuer Geschichten und Alltagsberichte.",
      },
      {
        type: "grammar",
        title: "Perfekt Grundstruktur",
        items: [
          { pronoun: "haben + Partizip II", verb: "Ich habe gestern gearbeitet.", meaning: "Most verbs use haben." },
          { pronoun: "sein + Partizip II", verb: "Ich bin nach Berlin gefahren.", meaning: "Movement/change verbs often use sein." },
          { pronoun: "Partizip II am Satzende", verb: "Wir haben lange telefoniert.", meaning: "Participle usually closes the sentence." },
        ],
      },
      {
        type: "vocabulary",
        title: "Zeitangaben fuer Berichte",
        words: [
          { german: "gestern", english: "yesterday", example: "Gestern habe ich lange gearbeitet." },
          { german: "letzte Woche", english: "last week", example: "Letzte Woche sind wir umgezogen." },
          { german: "am Wochenende", english: "on the weekend", example: "Am Wochenende haben wir Freunde besucht." },
          { german: "dann", english: "then", example: "Dann haben wir zusammen gegessen." },
          { german: "spaeter", english: "later", example: "Spaeter bin ich nach Hause gegangen." },
        ],
      },
      {
        type: "dialogue",
        title: "Kurzer Tagesbericht",
        lines: [
          { speaker: "Jonas", text: "Wie war dein Tag gestern?", translation: "How was your day yesterday?" },
          { speaker: "Lina", text: "Sehr voll. Ich habe bis 18 Uhr gearbeitet.", translation: "Very full. I worked until 6 pm." },
          { speaker: "Jonas", text: "Und danach?", translation: "And after that?" },
          { speaker: "Lina", text: "Danach bin ich zum Arzt gegangen und habe Medikamente gekauft.", translation: "After that I went to the doctor and bought medicine." },
          { speaker: "Jonas", text: "Zum Glueck. Geht es dir besser?", translation: "Good. Do you feel better?" },
          { speaker: "Lina", text: "Ja, ich habe gut geschlafen.", translation: "Yes, I slept well." },
        ],
      },
      {
        type: "tip",
        text:
          "Story order trick: time marker + Perfekt sentence + connector (dann, danach, spaeter). This creates clear timeline flow.",
        textDe:
          "Erzaehltrick: Zeitmarker + Perfekt-Satz + Verbinder (dann, danach, spaeter). So entsteht eine klare Reihenfolge.",
      },
    ],
  },

  {
    id: "a1-k8-kultur",
    level: "A1",
    number: "K8·B",
    title: "Feste und Braeuche in Deutschland",
    subtitle: "Geburtstag, Weihnachten, Karneval",
    icon: "🎊",
    duration: "12 min",
    xp: 40,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Feiern und Traditionen",
        content:
          "German culture has strong celebration traditions: birthdays with specific etiquette, Christmas markets, and regional carnival customs.",
        contentDe:
          "Die deutsche Kultur hat starke Festtraditionen: Geburtstage mit klaren Regeln, Weihnachtsmaerkte und regionale Karnevalsbraeuche.",
      },
      {
        type: "vocabulary",
        title: "Kulturwortschatz",
        words: [
          { german: "der Geburtstag", english: "birthday", example: "Zum Geburtstag bringt man oft Blumen mit." },
          { german: "die Einladung", english: "invitation", example: "Danke fuer die Einladung zur Feier." },
          { german: "der Weihnachtsmarkt", english: "Christmas market", example: "Im Dezember gehen viele auf den Weihnachtsmarkt." },
          { german: "der Karneval", english: "carnival", example: "In Koeln ist Karneval besonders gross." },
          { german: "verkleidet", english: "in costume", example: "An Karneval sind viele Menschen verkleidet." },
          { german: "der Brauch", english: "custom/tradition", example: "Das ist ein alter Brauch in der Region." },
        ],
      },
      {
        type: "tip",
        text:
          "Birthday etiquette in Germany: many people celebrate exactly on the day. Congratulations are usually given on the date itself, not too early.",
        textDe:
          "Geburtstagsetikette: Viele feiern am genauen Tag. Glueckwuensche gibt man meist am Geburtstag selbst, nicht zu frueh.",
      },
    ],
  },

  {
    id: "a1-k8-perfekt",
    level: "A1",
    number: "K8·C1",
    title: "Perfekt mit haben / sein",
    subtitle: "Partizip II regulaer, irregulaer et prefixes",
    icon: "⚙️",
    duration: "28 min",
    xp: 75,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Perfekt systematisch",
        content:
          "Perfekt is built with auxiliary + past participle. This lesson gives a compact system for regular, irregular, and prefix verbs.",
        contentDe:
          "Das Perfekt besteht aus Hilfsverb + Partizip II. Diese Lektion bietet ein kompaktes System fuer regulaere, irregulaere und praefixierte Verben.",
      },
      {
        type: "grammar",
        title: "Regulaere Verben (ge-...-t)",
        items: [
          { pronoun: "machen", verb: "ich habe gemacht", meaning: "regular participle with ge- and -t." },
          { pronoun: "lernen", verb: "wir haben gelernt", meaning: "same pattern." },
          { pronoun: "spielen", verb: "sie hat gespielt", meaning: "spoken everyday pattern." },
        ],
      },
      {
        type: "grammar",
        title: "Irregulaere Verben (haeufig ge-...-en)",
        items: [
          { pronoun: "gehen", verb: "ich bin gegangen", meaning: "movement verb with sein." },
          { pronoun: "sehen", verb: "ich habe gesehen", meaning: "irregular participle." },
          { pronoun: "nehmen", verb: "ich habe genommen", meaning: "common irregular form." },
        ],
      },
      {
        type: "grammar",
        title: "Wann haben, wann sein?",
        items: [
          { pronoun: "haben", verb: "Ich habe gearbeitet.", meaning: "Most verbs, including transitive ones." },
          { pronoun: "sein (movement)", verb: "Wir sind gefahren.", meaning: "Movement from A to B." },
          { pronoun: "sein (change of state)", verb: "Er ist krank geworden.", meaning: "State change verbs often use sein." },
        ],
      },
      {
        type: "grammar",
        title: "Praefixverben im Perfekt",
        items: [
          { pronoun: "trennbar", verb: "anrufen -> ich habe angerufen", meaning: "ge goes between prefix and stem." },
          { pronoun: "nicht trennbar", verb: "verstehen -> ich habe verstanden", meaning: "no ge- with non-separable prefixes." },
          { pronoun: "beispiel", verb: "besuchen -> ich habe besucht", meaning: "be-/ver-/er- usually no ge-." },
        ],
      },
      {
        type: "tip",
        text:
          "Perfekt checklist: 1) choose haben/sein, 2) build participle, 3) place participle at sentence end.",
        textDe:
          "Perfekt-Checkliste: 1) haben/sein waehlen, 2) Partizip bilden, 3) Partizip ans Satzende.",
      },
    ],
  },

  {
    id: "a1-k8-modal",
    level: "A1",
    number: "K8·C2",
    title: "Modalverben: muessen, duerfen, sollen",
    subtitle: "Obligation, permission, recommendation",
    icon: "🔧",
    duration: "22 min",
    xp: 65,
    color: "#fb923c",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Modalverben fuer Regeln und Pflichten",
        content:
          "These three modal verbs are essential for instructions and social rules: must, may, should.",
        contentDe:
          "Diese drei Modalverben sind zentral fuer Regeln und Hinweise: muessen, duerfen, sollen.",
      },
      {
        type: "grammar",
        title: "Bedeutung und Struktur",
        items: [
          { pronoun: "muessen", verb: "Ich muss heute zum Arzt gehen.", meaning: "obligation/necessity." },
          { pronoun: "duerfen", verb: "Du darfst hier nicht rauchen.", meaning: "permission/prohibition." },
          { pronoun: "sollen", verb: "Du sollst viel Wasser trinken.", meaning: "advice/instruction from others." },
          { pronoun: "Satzbau", verb: "Wir muessen morgen frueh aufstehen.", meaning: "modal in position 2 + infinitive at end." },
        ],
      },
      {
        type: "grammar",
        title: "Konjugation (Praesens)",
        items: [
          { pronoun: "muessen", verb: "ich muss, du musst, er/sie muss, wir muessen, ihr muesst, sie muessen", meaning: "singular stem simplification." },
          { pronoun: "duerfen", verb: "ich darf, du darfst, er/sie darf, wir duerfen, ihr duerft, sie duerfen", meaning: "permission forms." },
          { pronoun: "sollen", verb: "ich soll, du sollst, er/sie soll, wir sollen, ihr sollt, sie sollen", meaning: "recommendation/instruction forms." },
        ],
      },
      {
        type: "dialogue",
        title: "Beim Arzt und zu Hause",
        lines: [
          { speaker: "Arzt", text: "Sie muessen drei Tage zu Hause bleiben.", translation: "You must stay at home for three days." },
          { speaker: "Patient", text: "Darf ich morgen kurz arbeiten?", translation: "May I work briefly tomorrow?" },
          { speaker: "Arzt", text: "Nein, Sie sollen sich ausruhen.", translation: "No, you should rest." },
          { speaker: "Patient", text: "Verstanden, ich bleibe zu Hause.", translation: "Understood, I will stay at home." },
        ],
      },
      {
        type: "tip",
        text:
          "Meaning contrast: muessen = no choice, duerfen = permission, sollen = recommendation/instruction.",
        textDe:
          "Bedeutungsunterschied: muessen = Pflicht, duerfen = Erlaubnis, sollen = Empfehlung/Anweisung.",
      },
    ],
  },

  {
    id: "a1-k8-rev",
    level: "A1",
    number: "K8·D1",
    title: "Revision finale A1",
    subtitle: "Bilan vocabulaire, grammaire, communication et culture",
    icon: "📖",
    duration: "30 min",
    xp: 50,
    color: "#f97316",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "A1 Abschluss-Rueckblick",
        content:
          "This chapter closes A1: social phrases, health communication, apologies, past narration, Perfekt system, and modal verbs.",
        contentDe:
          "Dieses Kapitel schliesst A1 ab: soziale Formeln, Gesundheit, Entschuldigungen, Vergangenheit (Perfekt) und Modalverben.",
      },
      {
        type: "grammar",
        title: "Kernmuster wiederholen",
        items: [
          { pronoun: "Perfekt", verb: "Ich habe gearbeitet. / Ich bin gefahren.", meaning: "haben vs sein." },
          { pronoun: "Modalverb", verb: "Ich muss lernen. Du darfst gehen. Wir sollen warten.", meaning: "position 2 + infinitive at end." },
          { pronoun: "Entschuldigung", verb: "Es tut mir leid, dass ...", meaning: "apology structure." },
          { pronoun: "Wuensche", verb: "Alles Gute! Viel Erfolg!", meaning: "high-frequency social formulas." },
        ],
      },
      {
        type: "story_text",
        title: "Lesetext: Eine intensive Woche",
        level: "A1",
        paragraphs: [
          {
            text: "Letzte Woche ist sehr viel passiert. Am Montag habe ich Geburtstag gefeiert und viele Geschenke bekommen.",
            translation: "A lot happened last week. On Monday I celebrated my birthday and received many gifts."
          },
          {
            text: "Am Dienstag bin ich krank geworden und ich musste zum Arzt gehen.",
            translation: "On Tuesday I became sick and had to go to the doctor."
          },
          {
            text: "Leider konnte ich am Mittwoch nicht arbeiten, deshalb habe ich meinem Chef eine Entschuldigung geschrieben.",
            translation: "Unfortunately I could not work on Wednesday, so I wrote an apology to my boss."
          },
          {
            text: "Jetzt geht es mir besser. Ich darf wieder arbeiten, aber ich soll genug schlafen.",
            translation: "Now I feel better. I may work again, but I should sleep enough."
          }
        ],
        vocabulary: [
          { german: "intensiv", english: "intense", example: "Es war eine intensive Woche." },
          { german: "deshalb", english: "therefore", example: "Ich war krank, deshalb blieb ich zu Hause." },
          { german: "genug", english: "enough", example: "Ich soll genug Wasser trinken." }
        ]
      },
      {
        type: "tip",
        text:
          "For fast revision, write one short paragraph per day (Mon-Sun) using at least one Perfekt sentence and one modal sentence.",
        textDe:
          "Fuer schnelle Wiederholung: pro Wochentag einen kurzen Absatz mit mindestens einem Perfekt-Satz und einem Modalverb-Satz schreiben.",
      },
    ],
  },

  {
    id: "a1-k8-ex",
    level: "A1",
    number: "K8·D2",
    title: "Exercices de bilan",
    subtitle: "Production ecrite/orale et consolidation globale",
    icon: "✏️",
    duration: "35 min",
    xp: 60,
    color: "#f97316",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Training final A1",
        content:
          "These tasks consolidate all A1 modules with focus on communication + core grammar transfer.",
        contentDe:
          "Diese Aufgaben festigen alle A1-Module mit Fokus auf Kommunikation und Grammatiktransfer.",
      },
      {
        type: "grammar",
        title: "Uebung 1: Perfekt bilden",
        items: [
          { pronoun: "(machen) gestern", verb: "-> Ich habe gestern viel gemacht.", meaning: "haben + ge...t." },
          { pronoun: "(gehen) am Abend", verb: "-> Ich bin am Abend spazieren gegangen.", meaning: "sein + movement verb." },
          { pronoun: "(anrufen) gestern", verb: "-> Ich habe gestern meine Mutter angerufen.", meaning: "separable prefix participle." },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 2: Modalverben einsetzen",
        items: [
          { pronoun: "(muessen) Ich ___ morgen frueh aufstehen.", verb: "-> Ich muss morgen frueh aufstehen.", meaning: "obligation." },
          { pronoun: "(duerfen) Hier ___ man nicht rauchen.", verb: "-> Hier darf man nicht rauchen.", meaning: "permission/prohibition." },
          { pronoun: "(sollen) Du ___ heute viel trinken.", verb: "-> Du sollst heute viel trinken.", meaning: "recommendation." },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 3: Entschuldigung schreiben",
        items: [
          { pronoun: "Baustein 1", verb: "Es tut mir leid, dass ...", meaning: "open politely." },
          { pronoun: "Baustein 2", verb: "..., weil ich ...", meaning: "short reason." },
          { pronoun: "Baustein 3", verb: "Ich werde ...", meaning: "corrective action." },
        ],
      },
      {
        type: "tip",
        text:
          "If you get stuck, write in this fixed order: greeting -> main message -> reason -> action -> closing.",
        textDe:
          "Wenn du blockierst, schreibe in fester Reihenfolge: Anrede -> Hauptaussage -> Grund -> Aktion -> Abschluss.",
      },
    ],
  },

  {
    id: "a1-k8-finaltest",
    level: "A1",
    number: "K8·D3",
    title: "Test final A1",
    subtitle: "Evaluation finale: comprehension, production et grammaire",
    icon: "🏆",
    duration: "30 min",
    xp: 100,
    color: "#f97316",
    kapitel: 8,
    sections: [
      {
        type: "intro",
        title: "Test final",
        content:
          "Final A1 checkpoint with integrated tasks on Perfekt, modal verbs, social communication, and core understanding.",
        contentDe:
          "Abschlusstest A1 mit integrierten Aufgaben zu Perfekt, Modalverben, sozialer Kommunikation und Grundverstehen.",
      },
      {
        type: "quiz",
        title: "Test final A1 (16 questions)",
        questions: [
          {
            topic: "Wuensche",
            question: "Welche Formel passt zum Geburtstag?",
            options: ["Gute Nacht!", "Herzlichen Glueckwunsch!", "Guten Appetit!", "Bis spaeter!"],
            correct: 1,
            explanation: "Standard birthday congratulations: Herzlichen Glueckwunsch!"
          },
          {
            topic: "Gesundheit",
            question: "Welche Aussage beschreibt ein Symptom?",
            options: ["Ich habe Husten.", "Ich habe Geschenk.", "Ich habe Wohnung.", "Ich habe Wetter."],
            correct: 0,
            explanation: "Husten is a symptom term."
          },
          {
            topic: "Entschuldigung",
            question: "Welche Formulierung ist eine starke Entschuldigung?",
            options: ["Hallo!", "Es tut mir leid.", "Vielleicht.", "Danke."],
            correct: 1,
            explanation: "Es tut mir leid is a stronger apology."
          },
          {
            topic: "Perfekt",
            question: "Welche Form ist korrekt?",
            options: ["Ich habe gegangen.", "Ich bin gegangen.", "Ich bin gemacht.", "Ich habe gewesen."],
            correct: 1,
            explanation: "gehen uses sein in Perfekt: ich bin gegangen."
          },
          {
            topic: "Perfekt",
            question: "Welche Form ist korrekt?",
            options: ["Wir sind gearbeitet.", "Wir haben gearbeitet.", "Wir haben gegangen.", "Wir sind gemacht."],
            correct: 1,
            explanation: "arbeiten uses haben: wir haben gearbeitet."
          },
          {
            topic: "Perfekt-Praefix",
            question: "anrufen im Perfekt ist ...",
            options: ["angerufen", "geanruft", "anruft", "gerufenan"],
            correct: 0,
            explanation: "Separable prefix participle: angerufen."
          },
          {
            topic: "Modalverben",
            question: "Welche Bedeutung hat muessen?",
            options: ["permission", "obligation", "wish", "past"],
            correct: 1,
            explanation: "muessen expresses obligation/necessity."
          },
          {
            topic: "Modalverben",
            question: "Welche Bedeutung hat duerfen?",
            options: ["permission", "obligation", "possession", "movement"],
            correct: 0,
            explanation: "duerfen expresses permission."
          },
          {
            topic: "Modalverben",
            question: "Welche Struktur ist richtig?",
            options: ["Ich muss morgen gehe.", "Ich muss morgen gehen.", "Ich morgen muss gehen.", "Ich gehen muss morgen."],
            correct: 1,
            explanation: "Modal in position 2 + infinitive at end."
          },
          {
            topic: "Sein + Partizip",
            question: "Welcher Satz nutzt sein korrekt?",
            options: ["Ich bin gefahren.", "Ich habe gefahren.", "Ich habe geworden.", "Ich bin gearbeitet."],
            correct: 0,
            explanation: "fahren (movement) typically uses sein."
          },
          {
            topic: "Zeitausdruck",
            question: "Welche Angabe passt zu Perfekt-Erzaehlung?",
            options: ["morgen", "gestern", "naechste Woche", "in drei Tagen"],
            correct: 1,
            explanation: "gestern is a typical past-time marker."
          },
          {
            topic: "Kultur",
            question: "Was ist ein Weihnachtsmarkt?",
            options: ["a medical office", "a Christmas market", "a sports club", "a train ticket"],
            correct: 1,
            explanation: "Weihnachtsmarkt means Christmas market."
          },
          {
            topic: "Kommunikation",
            question: "Welche Reaktion auf ein Geschenk ist passend?",
            options: ["Ich verbiete das.", "Danke, das ist sehr nett.", "Ich darf nicht.", "Ich muss weg."],
            correct: 1,
            explanation: "A polite gift reaction is gratitude + appreciation."
          },
          {
            topic: "Produktion",
            question: "Welche Entschuldigungs-Mail ist am besten?",
            options: [
              "Hallo. Ich komme nicht.",
              "Es tut mir leid, dass ich heute fehle. Ich bin krank und sende die Aufgabe morgen.",
              "Ich weiss nicht.",
              "Vielleicht spaeter."],
            correct: 1,
            explanation: "Best structure: apology + reason + corrective action."
          },
          {
            topic: "Gesamt",
            question: "Welche Version ist komplett korrekt?",
            options: [
              "Ich habe gestern meine Freundin angerufen und wir sind zusammen ins Kino gegangen.",
              "Ich bin gestern meine Freundin angerufen und wir haben zusammen ins Kino gegangen.",
              "Ich habe gestern meine Freundin anrufen und wir sind zusammen ins Kino gehen.",
              "Ich bin gestern meine Freundin angerufen und wir sind zusammen gegangen Kino."],
            correct: 0,
            explanation: "Correct auxiliaries and participle forms across both clauses."
          },
          {
            topic: "A1 Abschluss",
            question: "Welche Prioritaet ist fuer A1 korrekt?",
            options: [
              "Perfekt ignorieren.",
              "Nur Wortschatz lernen ohne Saetze.",
              "Kurze klare Saetze mit korrekter Grundstruktur bilden.",
              "Nur schwierige Literatur lesen."],
            correct: 2,
            explanation: "At A1 level, clean sentence structure with core patterns is the priority."
          }
        ]
      },
      {
        type: "tip",
        text:
          "Final test strategy: answer first the pattern-based grammar questions, then return to longer communication items.",
        textDe:
          "Teststrategie: zuerst regelbasierte Grammatikfragen loesen, dann zu den laengeren Kommunikationsaufgaben zurueckkehren.",
      },
    ],
  },
];
