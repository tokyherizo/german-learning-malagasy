// Lesons / Lektionen
export const lessons = {
  A1: [
    {
      id: "a1-l1",
      level: "A1",
      number: 1,
      title: "Miarahaba / Sich vorstellen",
      subtitle: "Fandraisana sy fampahafantarana tena",
      icon: "👋",
      duration: "15 min",
      xp: 50,
      color: "#FF6B6B",
      sections: [
        {
          type: "intro",
          title: "Tonga soa! Willkommen!",
          content: "Anio, hianarantsika ny fomba fandraisana sy fampahafantarana tena amin'ny teny Alemà.",
          contentDe: "Heute lernen wir, wie man sich auf Deutsch begrüßt und vorstellt."
        },
        {
          type: "grammar",
          title: "Fomba teny: sein (ho)",
          items: [
            { pronoun: "ich", verb: "bin", meaning: "aho dia" },
            { pronoun: "du", verb: "bist", meaning: "ianao dia" },
            { pronoun: "er/sie/es", verb: "ist", meaning: "izy dia" },
            { pronoun: "wir", verb: "sind", meaning: "izahay dia" },
            { pronoun: "ihr", verb: "seid", meaning: "ianareo dia" },
            { pronoun: "sie/Sie", verb: "sind", meaning: "izy ireo / Ianao (fomba) dia" },
          ]
        },
        {
          type: "dialogue",
          title: "Resadresaka / Dialog",
          lines: [
            { speaker: "A", text: "Hallo! Wie heißt du?", translation: "Salama! Iza no anaranao?" },
            { speaker: "B", text: "Ich heiße Rakoto. Und du?", translation: "Rakoto no anarako. Ary ianao?" },
            { speaker: "A", text: "Ich bin Rabe. Woher kommst du?", translation: "Rabe aho. Avy aiza ianao?" },
            { speaker: "B", text: "Ich komme aus Madagaskar.", translation: "Avy eto Madagascar aho." },
            { speaker: "A", text: "Schön! Wie alt bist du?", translation: "Tsara! Firy taona ianao?" },
            { speaker: "B", text: "Ich bin 20 Jahre alt.", translation: "Roapolo taona aho." },
          ]
        },
        {
          type: "vocabulary",
          title: "Teny mahazatra / Schlüsselwörter",
          words: [
            { german: "der Name", malagasy: "ny anarana", example: "Mein Name ist Rakoto." },
            { german: "kommen aus", malagasy: "avy any", example: "Ich komme aus Madagaskar." },
            { german: "wohnen in", malagasy: "monina ao", example: "Ich wohne in Antananarivo." },
            { german: "das Alter", malagasy: "ny taona / ny fanaovana", example: "Ich bin 25 Jahre alt." },
            { german: "die Sprache", malagasy: "ny fiteny", example: "Ich spreche Malagasy." },
            { german: "lernen", malagasy: "mianatra", example: "Ich lerne Deutsch." },
          ]
        },
        {
          type: "tip",
          text: "Torohevitra: Ny 'Sie' amin'ny litera lehibe dia fomba fanajana. Ampiasainao amin'ny olona tsy fanao antso efa firaisana.",
          textDe: "Tipp: 'Sie' (großgeschrieben) ist die formelle Anrede. Benutze es mit Fremden oder älteren Menschen."
        }
      ]
    },
    {
      id: "a1-l2",
      level: "A1",
      number: 2,
      title: "Isa sy Dikany / Zahlen",
      subtitle: "Fianaran'ny isa alemà 0-100",
      icon: "🔢",
      duration: "20 min",
      xp: 60,
      color: "#4ECDC4",
      sections: [
        {
          type: "intro",
          title: "Isa Alemà / Deutsche Zahlen",
          content: "Zava-dehibe ny mahafantatra ny isa. Ampiasaintsika azy amin'ny vidiny, fanaovana, ora, sns.",
          contentDe: "Zahlen sind sehr wichtig. Wir benutzen sie für Preise, Adressen, Uhrzeiten, usw."
        },
        {
          type: "number_table",
          title: "Isa 1-20",
          numbers: [
            { number: 1, german: "eins", malagasy: "iray" },
            { number: 2, german: "zwei", malagasy: "roa" },
            { number: 3, german: "drei", malagasy: "telo" },
            { number: 4, german: "vier", malagasy: "efatra" },
            { number: 5, german: "fünf", malagasy: "dimy" },
            { number: 6, german: "sechs", malagasy: "enina" },
            { number: 7, german: "sieben", malagasy: "fito" },
            { number: 8, german: "acht", malagasy: "valo" },
            { number: 9, german: "neun", malagasy: "sivy" },
            { number: 10, german: "zehn", malagasy: "folo" },
            { number: 11, german: "elf", malagasy: "iraika ambin'ny folo" },
            { number: 12, german: "zwölf", malagasy: "roa ambin'ny folo" },
            { number: 20, german: "zwanzig", malagasy: "roapolo" },
            { number: 30, german: "dreißig", malagasy: "telopolo" },
            { number: 100, german: "hundert", malagasy: "zato" },
          ]
        },
        {
          type: "tip",
          text: "Torohevitra: Amin'ny Alemà, ny isa 21 dia 'einundzwanzig' (iray sy roapolo). Ampiasainyy ny '-und-' eo afovoan'ny isa.",
          textDe: "Tipp: Im Deutschen sagt man erst die Einerzahl, dann 'und', dann die Zehnerzahl: 21 = einundzwanzig."
        }
      ]
    },
    {
      id: "a1-l3",
      level: "A1",
      number: 3,
      title: "Fianakaviana / Familie",
      subtitle: "Fianarana ny teny momba ny fianakaviana",
      icon: "👨‍👩‍👧‍👦",
      duration: "20 min",
      xp: 65,
      color: "#FFE66D",
      sections: [
        {
          type: "intro",
          title: "Ny Fianakaviana / Die Familie",
          content: "Hianarantsika ny teny momba ny fianakaviana amin'ny teny Alemà. Zava-dehibe izany amin'ny resadresaka andavanandro.",
          contentDe: "Wir lernen Wörter über die Familie auf Deutsch. Das ist wichtig für Alltagsgespräche."
        },
        {
          type: "grammar",
          title: "Ny Possessivpronomen (Mein/Meine)",
          items: [
            { pronoun: "ich", verb: "mein / meine", meaning: "ahy/aky" },
            { pronoun: "du", verb: "dein / deine", meaning: "anao" },
            { pronoun: "er/es", verb: "sein / seine", meaning: "azy (lahy)" },
            { pronoun: "sie", verb: "ihr / ihre", meaning: "azy (vavy)" },
            { pronoun: "wir", verb: "unser / unsere", meaning: "antsika" },
          ]
        },
        {
          type: "dialogue",
          title: "Resadresaka momba ny fianakaviana",
          lines: [
            { speaker: "A", text: "Hast du Geschwister?", translation: "Misy rahalahy/anabavy ve ianao?" },
            { speaker: "B", text: "Ja, ich habe einen Bruder und eine Schwester.", translation: "Eny, manana rahalahy iray sy anabavy iray aho." },
            { speaker: "A", text: "Wie alt ist dein Bruder?", translation: "Firy taona ny rahalahinao?" },
            { speaker: "B", text: "Er ist 15 Jahre alt.", translation: "Dimy ambin'ny folo taona izy." },
            { speaker: "A", text: "Wo wohnen deine Eltern?", translation: "Aiza no monina ny ray aman-dreninao?" },
            { speaker: "B", text: "Sie wohnen in Antananarivo.", translation: "Monina any Antananarivo izy ireo." },
          ]
        }
      ]
    },
    {
      id: "a1-l4",
      level: "A1",
      number: 4,
      title: "Sakafo sy Fanomezana / Essen und Trinken",
      subtitle: "Fianarana sakafo sy zavapisotro",
      icon: "🍽️",
      duration: "25 min",
      xp: 70,
      color: "#A8E6CF",
      sections: [
        {
          type: "intro",
          title: "Sakafo sy Fisotroana / Essen und Trinken",
          content: "Anio, hianarantsika ny teny momba sakafo sy zavapisotro. Zava-dehibe izany amin'ny resaka sy fividy.",
          contentDe: "Heute lernen wir Wörter für Essen und Trinken. Das ist wichtig beim Einkaufen und im Restaurant."
        },
        {
          type: "grammar",
          title: "Ny Akkusativ: mögen / essen / trinken",
          items: [
            { pronoun: "ich", verb: "esse / trinke / mag", meaning: "mihinana / misotro / tia aho" },
            { pronoun: "du", verb: "isst / trinkst / magst", meaning: "mihinana / misotro / tia ianao" },
            { pronoun: "er/sie/es", verb: "isst / trinkt / mag", meaning: "mihinana / misotro / tia izy" },
            { pronoun: "wir", verb: "essen / trinken / mögen", meaning: "mihinana / misotro / tia izahay" },
          ]
        },
        {
          type: "tip",
          text: "Manarama: Varira malaza any Alemana dia ny 'Bratwurst' (sosisy masaka), 'Schnitzel' (hena misisy), sy 'Sauerkraut' (lela-bary).",
          textDe: "Wusstest du? Beliebte deutsche Gerichte sind Bratwurst, Schnitzel und Sauerkraut!"
        }
      ]
    },
    {
      id: "a1-l5",
      level: "A1",
      number: 5,
      title: "Loko sy Endrika / Farben und Formen",
      subtitle: "Fianarana loko sy endrika",
      icon: "🎨",
      duration: "15 min",
      xp: 55,
      color: "#FF8B94",
      sections: [
        {
          type: "intro",
          title: "Ny Loko sy Endrika",
          content: "Anio hianarantsika ny loko ary fomba fanoratana endrika amin'ny teny Alemà.",
          contentDe: "Heute lernen wir Farben und wie man Dinge auf Deutsch beschreibt."
        }
      ]
    },
    {
      id: "a1-l6",
      level: "A1",
      number: 6,
      title: "Ora sy Daty / Uhrzeit und Datum",
      subtitle: "Fianarana ora sy daty amin'ny Alemà",
      icon: "⏰",
      duration: "25 min",
      xp: 75,
      color: "#B8B8FF",
      sections: [
        {
          type: "intro",
          title: "Ny Ora sy Daty / Die Uhrzeit und das Datum",
          content: "Zava-dehibe tokoa ny mahafantatra ny fomba fiteny ny ora sy ny daty amin'ny teny Alemà.",
          contentDe: "Es ist sehr wichtig zu wissen, wie man Uhrzeit und Datum auf Deutsch sagt."
        },
        {
          type: "tip",
          text: "Torohevitra: Any Alemana, ny 24-heures ora dia ampiasaina matetika. Ohatra: 15:00 = fito hefiteny hariva.",
          textDe: "Tipp: In Deutschland benutzt man oft die 24-Stunden-Uhr. Zum Beispiel: 15:00 Uhr."
        }
      ]
    }
  ],
  A2: [
    {
      id: "a2-l1",
      level: "A2",
      number: 1,
      title: "Asa sy Andro Fiasa / Arbeit und Alltag",
      subtitle: "Fianarana momba asa andavanandro",
      icon: "💼",
      duration: "30 min",
      xp: 90,
      color: "#FF6B6B",
      sections: [
        {
          type: "intro",
          title: "Ny Asa sy ny Andro Niasanao",
          content: "Anio hianarantsika ny teny momba ny asa sy ny andavanandro any Alemana.",
          contentDe: "Heute lernen wir über Berufe und den deutschen Alltag."
        },
        {
          type: "grammar",
          title: "Ny Modalverben (mafy sy azo atao)",
          items: [
            { pronoun: "können", verb: "mahay", meaning: "Ich kann Deutsch sprechen." },
            { pronoun: "müssen", verb: "tsy maintsy", meaning: "Ich muss arbeiten." },
            { pronoun: "wollen", verb: "te-", meaning: "Ich will lernen." },
            { pronoun: "sollen", verb: "tokony", meaning: "Du sollst pünktlich sein." },
            { pronoun: "dürfen", verb: "azo", meaning: "Du darfst hier parken." },
            { pronoun: "möchten", verb: "nanina", meaning: "Ich möchte Kaffee." },
          ]
        },
        {
          type: "dialogue",
          title: "Momba ny Asa",
          lines: [
            { speaker: "A", text: "Was machst du beruflich?", translation: "Inona no asanao?" },
            { speaker: "B", text: "Ich bin Lehrer. Und du?", translation: "Mpampianatra aho. Ary ianao?" },
            { speaker: "A", text: "Ich bin Ingenieur und arbeite in einer Firma.", translation: "Injeniera aho ary miasa ao amin'ny orinasa." },
            { speaker: "B", text: "Wie lange arbeitest du schon dort?", translation: "Hafiry no niasanao any?" },
            { speaker: "A", text: "Seit fünf Jahren. Ich mag meine Arbeit sehr.", translation: "Hadimy taona. Tiako be ny asako." },
          ]
        }
      ]
    },
    {
      id: "a2-l2",
      level: "A2",
      number: 2,
      title: "Toetr'andro / Das Wetter",
      subtitle: "Fomba fiteny momba ny toetr'andro",
      icon: "🌤️",
      duration: "25 min",
      xp: 85,
      color: "#4ECDC4",
      sections: [
        {
          type: "intro",
          title: "Ny Toetr'andro / Das Wetter",
          content: "Firesahana momba ny toetr'andro dia mahazatra any Alemana. Hianarantsika fomba fiteny maro momba izany.",
          contentDe: "Über das Wetter zu reden ist in Deutschland sehr üblich. Wir lernen viele Ausdrücke dafür."
        }
      ]
    },
    {
      id: "a2-l3",
      level: "A2",
      number: 3,
      title: "Tanàna sy Lalana / Stadt und Weg",
      subtitle: "Fomba fangatahana sy fanomezan-dalana",
      icon: "🗺️",
      duration: "30 min",
      xp: 95,
      color: "#FFE66D",
      sections: [
        {
          type: "intro",
          title: "Ny Tanàna sy ny Lalam-pandehan'ny",
          content: "Hianarantsika ny fomba fangatahana lalana sy ny teny ampiasaintsika ao an-tanàna.",
          contentDe: "Wir lernen, wie man nach dem Weg fragt und Wörter, die man in der Stadt benutzt."
        },
        {
          type: "dialogue",
          title: "Fangatahana Lalana",
          lines: [
            { speaker: "A", text: "Entschuldigung, wie komme ich zum Bahnhof?", translation: "Azafady, ahoana no ho amin'ny gara?" },
            { speaker: "B", text: "Gehen Sie geradeaus und dann links.", translation: "Mandeha mivantana ary avy eo mitambelona havia." },
            { speaker: "A", text: "Ist es weit?", translation: "Lavitra ve izany?" },
            { speaker: "B", text: "Nein, etwa 10 Minuten zu Fuß.", translation: "Tsia, tokony minitra folo an-tongotra." },
            { speaker: "A", text: "Vielen Dank!", translation: "Misaotra betsaka!" },
          ]
        }
      ]
    },
    {
      id: "a2-l4",
      level: "A2",
      number: 4,
      title: "Sekoly sy Fianarana / Schule und Bildung",
      subtitle: "Fianarana teny momba ny sekoly",
      icon: "📚",
      duration: "25 min",
      xp: 85,
      color: "#A8E6CF",
      sections: [
        {
          type: "intro",
          title: "Ny Sekoly any Alemana",
          content: "Hianarantsika momba ny sistem'ny sekoly any Alemana sy ny teny ampiasaintsika ao aminy.",
          contentDe: "Wir lernen über das Schulsystem in Deutschland und die Wörter, die man dort benutzt."
        }
      ]
    },
    {
      id: "a2-l5",
      level: "A2",
      number: 5,
      title: "Nofo sy Fahasalamana / Körper und Gesundheit",
      subtitle: "Teny momba fahasalamana sy nofo",
      icon: "🏥",
      duration: "30 min",
      xp: 90,
      color: "#FF8B94",
      sections: [
        {
          type: "intro",
          title: "Ny Nofo sy ny Fahasalamana",
          content: "Zava-dehibe ny mahafantatra ny teny momba ny aretina sy fahasalamana amin'ny teny Alemà.",
          contentDe: "Es ist wichtig, Wörter über Krankheit und Gesundheit auf Deutsch zu kennen."
        },
        {
          type: "dialogue",
          title: "Tany amin'ny Dokotera",
          lines: [
            { speaker: "Dokotera", text: "Guten Tag! Was fehlt Ihnen?", translation: "Andron-tsara! Inona no tsy mety?" },
            { speaker: "Marary", text: "Ich habe Kopfschmerzen und Fieber.", translation: "Marary loha aho ary manana hafanana." },
            { speaker: "Dokotera", text: "Seit wann haben Sie das?", translation: "Nanomboka rahoviana izany?" },
            { speaker: "Marary", text: "Seit zwei Tagen.", translation: "Hadroa andro." },
            { speaker: "Dokotera", text: "Ich gebe Ihnen ein Rezept.", translation: "Hanome didy aho ho anao." },
          ]
        }
      ]
    }
  ]
};

export const getLessonsByLevel = (level) => lessons[level] || [];
export const getLessonById = (id) => {
  for (const level of Object.values(lessons)) {
    const lesson = level.find(l => l.id === id);
    if (lesson) return lesson;
  }
  return null;
};
