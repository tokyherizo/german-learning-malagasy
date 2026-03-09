// ═══════════════════════════════════════════
// KAPITEL 4 — Essen und Trinken (Begegnungen A1)
// ═══════════════════════════════════════════

export const k4Lessons = [
  // ── K4-A1 : Frühstück im Hotel ──
  {
    id: "k4-a1",
    level: "A1",
    number: 7,
    title: "Frühstück im Hotel",
    subtitle: "Petit-déjeuner à l'hôtel — commander et choisir",
    icon: "🥐",
    duration: "20 min",
    xp: 60,
    color: "#f472b6",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Das Frühstück im Hotel",
        content: "In Germany, hotel breakfasts (Frühstücksbuffet) are usually generous. You will find bread, rolls, cold cuts, cheese, eggs, jam, cereal, and hot drinks. Let's learn how to talk about breakfast!",
        contentDe: "In Deutschland ist das Hotelfrühstück (Frühstücksbuffet) normalerweise reichhaltig. Es gibt Brot, Brötchen, Aufschnitt, Käse, Eier, Marmelade, Müsli und heiße Getränke."
      },
      {
        type: "dialogue",
        title: "Dialog: Am Frühstückstisch",
        lines: [
          { speaker: "K", text: "Guten Morgen! Möchten Sie Kaffee oder Tee?", translation: "Good morning! Would you like coffee or tea?" },
          { speaker: "G", text: "Einen Kaffee, bitte. Mit Milch.", translation: "A coffee, please. With milk." },
          { speaker: "K", text: "Sehr gerne. Das Frühstücksbuffet ist dort drüben.", translation: "Gladly. The breakfast buffet is over there." },
          { speaker: "G", text: "Gibt es auch Orangensaft?", translation: "Is there also orange juice?" },
          { speaker: "K", text: "Ja, natürlich! Saft, Wasser und Tee stehen am Buffet.", translation: "Yes, of course! Juice, water and tea are at the buffet." },
          { speaker: "G", text: "Wunderbar, danke schön!", translation: "Wonderful, thank you!" }
        ]
      },
      {
        type: "vocabulary",
        title: "Frühstück — Vocabulaire du petit-déjeuner",
        words: [
          { german: "das Frühstück", english: "breakfast", example: "Das Frühstück beginnt um 7 Uhr." },
          { german: "das Brötchen", english: "bread roll", example: "Ich nehme zwei Brötchen, bitte." },
          { german: "die Butter", english: "butter", example: "Brötchen mit Butter und Marmelade." },
          { german: "die Marmelade", english: "jam", example: "Erdbeermarmelade ist mein Favorit." },
          { german: "der Honig", english: "honey", example: "Möchten Sie Honig?" },
          { german: "das Ei", english: "egg", example: "Ein gekochtes Ei, bitte." },
          { german: "der Aufschnitt", english: "cold cuts", example: "Der Aufschnitt ist frisch." },
          { german: "der Käse", english: "cheese", example: "Ich esse gern Käse zum Frühstück." },
          { german: "der Orangensaft", english: "orange juice", example: "Ein Glas Orangensaft, bitte." },
          { german: "das Müsli", english: "muesli / cereal", example: "Müsli mit Milch und Obst." }
        ]
      },
      {
        type: "tip",
        text: "In German hotels, breakfast is usually included in the room price. 'Frühstück inklusive' means breakfast is included. The typical time is 6:30–10:00.",
        textDe: "Tipp: In deutschen Hotels ist das Frühstück oft im Zimmerpreis enthalten. 'Frühstück inklusive' bedeutet, das Frühstück ist dabei."
      }
    ]
  },

  // ── K4-A2 : Geschirr und Besteck ──
  {
    id: "k4-a2",
    level: "A1",
    number: 8,
    title: "Geschirr und Besteck",
    subtitle: "La vaisselle et les couverts",
    icon: "🍽️",
    duration: "15 min",
    xp: 50,
    color: "#f472b6",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Am Tisch — Geschirr und Besteck",
        content: "When you eat in Germany, you need to know the names of dishes, cutlery and glasses. Let's learn all the items you find on a table!",
        contentDe: "Wenn man in Deutschland isst, sollte man die Namen von Geschirr, Besteck und Gläsern kennen. Lernen wir alle Dinge, die man auf einem Tisch findet!"
      },
      {
        type: "vocabulary",
        title: "Geschirr und Besteck — Vaisselle et couverts",
        words: [
          { german: "der Teller", english: "plate", example: "Der Teller ist sauber." },
          { german: "die Tasse", english: "cup", example: "Eine Tasse Kaffee, bitte." },
          { german: "das Glas", english: "glass", example: "Ein Glas Wasser, bitte." },
          { german: "die Gabel", english: "fork", example: "Die Gabel liegt links." },
          { german: "das Messer", english: "knife", example: "Das Messer liegt rechts." },
          { german: "der Löffel", english: "spoon", example: "Ich brauche einen Löffel für die Suppe." },
          { german: "die Serviette", english: "napkin", example: "Können Sie mir eine Serviette bringen?" },
          { german: "die Schüssel", english: "bowl", example: "Die Suppe ist in der Schüssel." },
          { german: "die Kanne", english: "pot / jug", example: "Eine Kanne Tee, bitte." },
          { german: "das Besteck", english: "cutlery", example: "Das Besteck liegt auf dem Tisch." }
        ]
      },
      {
        type: "dialogue",
        title: "Dialog: Ich brauche...",
        lines: [
          { speaker: "A", text: "Entschuldigung, kann ich bitte ein Messer haben?", translation: "Excuse me, can I have a knife please?" },
          { speaker: "B", text: "Natürlich! Brauchen Sie auch eine Gabel?", translation: "Of course! Do you also need a fork?" },
          { speaker: "A", text: "Ja, bitte. Und eine Serviette.", translation: "Yes, please. And a napkin." },
          { speaker: "B", text: "Hier bitte. Möchten Sie noch etwas?", translation: "Here you go. Would you like anything else?" },
          { speaker: "A", text: "Nein, danke. Das ist alles.", translation: "No, thank you. That's everything." }
        ]
      },
      {
        type: "tip",
        text: "In Germany, the fork goes on the left and the knife on the right. It's polite to keep both hands visible on the table (not on your lap) while eating.",
        textDe: "Tipp: In Deutschland liegt die Gabel links und das Messer rechts. Es ist höflich, beide Hände auf dem Tisch zu lassen."
      }
    ]
  },

  // ── K4-A3 : Essen und Trinken ──
  {
    id: "k4-a3",
    level: "A1",
    number: 9,
    title: "Essen und Trinken",
    subtitle: "Aliments et boissons — parler de nourriture",
    icon: "🍎",
    duration: "20 min",
    xp: 60,
    color: "#f472b6",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Was essen und trinken Sie gern?",
        content: "Food and drink are central to daily life. In this lesson we learn the names of common foods and drinks, and how to express what we like or dislike.",
        contentDe: "Essen und Trinken sind ein zentraler Teil des Alltags. In dieser Lektion lernen wir die Namen von Lebensmitteln und Getränken und wie man sagt, was man gern oder nicht gern mag."
      },
      {
        type: "vocabulary",
        title: "Lebensmittel — Les aliments",
        words: [
          { german: "das Brot", english: "bread", example: "Ich esse Brot zum Frühstück." },
          { german: "die Wurst", english: "sausage", example: "Deutsche Wurst ist berühmt." },
          { german: "der Schinken", english: "ham", example: "Schinken auf Brot schmeckt gut." },
          { german: "der Fisch", english: "fish", example: "Ich esse freitags Fisch." },
          { german: "das Gemüse", english: "vegetables", example: "Gemüse ist gesund." },
          { german: "das Obst", english: "fruit", example: "Ich esse gern Obst." },
          { german: "die Kartoffel", english: "potato", example: "Kartoffeln mit Butter, bitte." },
          { german: "der Kuchen", english: "cake", example: "Der Kuchen ist lecker!" },
          { german: "die Suppe", english: "soup", example: "Eine Tomatensuppe, bitte." },
          { german: "das Hähnchen", english: "chicken", example: "Ich nehme das Hähnchen." }
        ]
      },
      {
        type: "vocabulary",
        title: "Getränke — Les boissons",
        words: [
          { german: "das Wasser", english: "water", example: "Ein Glas Wasser, bitte." },
          { german: "der Kaffee", english: "coffee", example: "Ich trinke morgens Kaffee." },
          { german: "der Tee", english: "tea", example: "Grüner Tee ist gesund." },
          { german: "das Bier", english: "beer", example: "Ein Bier, bitte!" },
          { german: "der Wein", english: "wine", example: "Rotwein oder Weißwein?" },
          { german: "der Saft", english: "juice", example: "Apfelsaft ist mein Favorit." },
          { german: "die Limonade", english: "lemonade / soft drink", example: "Eine Limonade für das Kind." },
          { german: "die Milch", english: "milk", example: "Milch mit Kakao, bitte." }
        ]
      },
      {
        type: "grammar",
        title: "Verbe: mögen (to like)",
        items: [
          { pronoun: "ich", verb: "mag", meaning: "I like" },
          { pronoun: "du", verb: "magst", meaning: "you like" },
          { pronoun: "er/sie/es", verb: "mag", meaning: "he/she/it likes" },
          { pronoun: "wir", verb: "mögen", meaning: "we like" },
          { pronoun: "ihr", verb: "mögt", meaning: "you (pl.) like" },
          { pronoun: "sie/Sie", verb: "mögen", meaning: "they/you (formal) like" }
        ]
      },
      {
        type: "tip",
        text: "To say what you like eating: 'Ich esse gern Obst.' (I like eating fruit). To say what you don't like: 'Ich esse nicht gern Fisch.' (I don't like eating fish).",
        textDe: "Um zu sagen, was man gern isst: 'Ich esse gern Obst.' Was man nicht mag: 'Ich esse nicht gern Fisch.'"
      }
    ]
  },

  // ── K4-A4 : Im Restaurant ──
  {
    id: "k4-a4",
    level: "A1",
    number: 10,
    title: "Im Restaurant",
    subtitle: "Au restaurant — commander et payer",
    icon: "🍝",
    duration: "25 min",
    xp: 70,
    color: "#f472b6",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Im Restaurant bestellen und bezahlen",
        content: "Going to a restaurant in Germany? You need to know how to order food, ask for the menu, and pay the bill. Let's practise the most important phrases!",
        contentDe: "Gehen Sie in ein deutsches Restaurant? Sie müssen wissen, wie man bestellt, nach der Speisekarte fragt und die Rechnung bezahlt."
      },
      {
        type: "dialogue",
        title: "Dialog: Im Restaurant",
        lines: [
          { speaker: "K", text: "Guten Abend! Haben Sie reserviert?", translation: "Good evening! Have you reserved?" },
          { speaker: "G", text: "Ja, auf den Namen Schmidt. Einen Tisch für zwei, bitte.", translation: "Yes, under the name Schmidt. A table for two, please." },
          { speaker: "K", text: "Bitte schön, hier ist die Speisekarte.", translation: "Here you go, here is the menu." },
          { speaker: "G", text: "Danke. Was empfehlen Sie?", translation: "Thank you. What do you recommend?" },
          { speaker: "K", text: "Das Wiener Schnitzel ist sehr beliebt.", translation: "The Wiener Schnitzel is very popular." },
          { speaker: "G", text: "Gut, ich nehme das Schnitzel mit Kartoffelsalat.", translation: "Good, I'll have the Schnitzel with potato salad." },
          { speaker: "G2", text: "Und ich hätte gern die Tomatensuppe und einen Salat.", translation: "And I would like the tomato soup and a salad." },
          { speaker: "K", text: "Und zu trinken?", translation: "And to drink?" },
          { speaker: "G", text: "Zwei Glas Wasser und ein Bier, bitte.", translation: "Two glasses of water and a beer, please." },
          { speaker: "K", text: "Kommt sofort!", translation: "Coming right away!" }
        ]
      },
      {
        type: "dialogue",
        title: "Dialog: Die Rechnung",
        lines: [
          { speaker: "G", text: "Entschuldigung, können wir bitte zahlen?", translation: "Excuse me, could we pay please?" },
          { speaker: "K", text: "Zusammen oder getrennt?", translation: "Together or separate?" },
          { speaker: "G", text: "Zusammen, bitte.", translation: "Together, please." },
          { speaker: "K", text: "Das macht 32 Euro 50.", translation: "That comes to 32 euros 50." },
          { speaker: "G", text: "Hier, bitte. Stimmt so!", translation: "Here you go. Keep the change!" },
          { speaker: "K", text: "Vielen Dank! Einen schönen Abend noch!", translation: "Thank you very much! Have a nice evening!" }
        ]
      },
      {
        type: "vocabulary",
        title: "Im Restaurant — Au restaurant",
        words: [
          { german: "die Speisekarte", english: "menu", example: "Kann ich die Speisekarte sehen?" },
          { german: "bestellen", english: "to order", example: "Ich möchte bestellen, bitte." },
          { german: "die Rechnung", english: "the bill", example: "Die Rechnung, bitte!" },
          { german: "das Trinkgeld", english: "tip", example: "In Deutschland gibt man 5–10% Trinkgeld." },
          { german: "die Vorspeise", english: "starter / appetizer", example: "Als Vorspeise nehme ich die Suppe." },
          { german: "das Hauptgericht", english: "main course", example: "Das Hauptgericht ist Schnitzel." },
          { german: "die Nachspeise", english: "dessert", example: "Möchten Sie eine Nachspeise?" },
          { german: "lecker", english: "delicious", example: "Das Essen war sehr lecker!" },
          { german: "die Beilage", english: "side dish", example: "Pommes oder Reis als Beilage?" },
          { german: "empfehlen", english: "to recommend", example: "Was empfehlen Sie heute?" }
        ]
      },
      {
        type: "tip",
        text: "In Germany, tipping is not obligatory but customary: round up or add 5–10%. Say 'Stimmt so!' (Keep the change!) or state the total you want to pay.",
        textDe: "Tipp: In Deutschland ist Trinkgeld üblich: aufrunden oder 5–10% geben. Man sagt 'Stimmt so!' oder nennt den Betrag."
      }
    ]
  },

  // ── K4-B1 : Wissenswertes — Essen in Deutschland ──
  {
    id: "k4-b1",
    level: "A1",
    type: "story",
    number: "S3",
    title: "Essen in Deutschland — Küche und Essgewohnheiten",
    subtitle: "German food culture — read and discover",
    icon: "🇩🇪",
    duration: "15 min",
    xp: 50,
    color: "#34d399",
    kapitel: 4,
    sections: [
      {
        type: "story",
        title: "Essen in Deutschland",
        level: "A1",
        paragraphs: [
          {
            text: "Das Frühstück in Deutschland ist wichtig. Viele Deutsche essen Brot oder Brötchen mit Butter, Marmelade, Käse oder Aufschnitt. Dazu trinken sie Kaffee, Tee oder Saft. Am Wochenende frühstücken viele Familien zusammen — das dauert oft lange.",
            translation: "Breakfast in Germany is important. Many Germans eat bread or rolls with butter, jam, cheese or cold cuts. They drink coffee, tea or juice with it. At weekends many families have breakfast together — it often takes a long time."
          },
          {
            text: "Das Mittagessen war früher die Hauptmahlzeit. Heute essen viele Berufstätige in der Kantine oder holen sich etwas Schnelles. Typische Gerichte sind Schnitzel mit Kartoffeln, Bratwurst mit Sauerkraut oder Nudeln.",
            translation: "Lunch used to be the main meal. Today many working people eat in canteens or get something quick. Typical dishes are Schnitzel with potatoes, Bratwurst with Sauerkraut or pasta."
          },
          {
            text: "Das Abendessen heißt oft \"Abendbrot\". Man isst Brot mit Käse, Wurst und Salat. Es ist normalerweise eine kalte Mahlzeit. In Restaurants kann man natürlich auch warm essen.",
            translation: "Dinner is often called 'Abendbrot' (evening bread). People eat bread with cheese, sausage and salad. It is normally a cold meal. In restaurants you can of course also eat something warm."
          },
          {
            text: "Typisch deutsch: Kaffee und Kuchen am Nachmittag! Zwischen 15 und 16 Uhr treffen sich Freunde oder Familien und essen Kuchen oder Torte mit Kaffee. Das ist eine schöne Tradition.",
            translation: "Typically German: Coffee and cake in the afternoon! Between 3 and 4 pm friends or families meet and eat cake or gateau with coffee. It's a lovely tradition."
          }
        ],
        vocabulary: [
          { german: "das Frühstück", english: "breakfast", example: "Das Frühstück ist um 7 Uhr." },
          { german: "das Mittagessen", english: "lunch", example: "Was gibt es zum Mittagessen?" },
          { german: "das Abendessen", english: "dinner / supper", example: "Das Abendessen ist um 19 Uhr." },
          { german: "die Mahlzeit", english: "meal", example: "Drei Mahlzeiten am Tag." },
          { german: "die Kantine", english: "canteen", example: "Ich esse in der Kantine." },
          { german: "das Gericht", english: "dish / course", example: "Das ist ein typisches Gericht." },
          { german: "die Bratwurst", english: "fried sausage", example: "Eine Bratwurst mit Senf, bitte." },
          { german: "das Sauerkraut", english: "sauerkraut", example: "Sauerkraut ist fermentierter Kohl." },
          { german: "die Tradition", english: "tradition", example: "Kaffee und Kuchen ist eine Tradition." },
          { german: "die Torte", english: "gateau / fancy cake", example: "Die Schwarzwälder Kirschtorte ist berühmt." }
        ]
      },
      {
        type: "tip",
        text: "Fun fact: Germany has over 1,500 types of sausages and more than 3,000 varieties of bread — the UNESCO-recognized 'Deutsche Brotkultur'!",
        textDe: "Wusstest du? Deutschland hat über 1.500 Wurstsorten und mehr als 3.000 Brotsorten — die UNESCO-geschützte 'Deutsche Brotkultur'!"
      }
    ]
  },

  // ── K4-C1 : Die Nomengruppe — Akkusativ ──
  {
    id: "k4-c1",
    level: "A1",
    type: "grammar",
    number: "G3",
    title: "Die Nomengruppe — Akkusativ",
    subtitle: "Articles at the accusative case",
    duration: "20 min",
    xp: 65,
    color: "#a78bfa",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Der Akkusativ — L'accusatif",
        content: "The accusative case is used for the direct object — the thing being acted upon. In German, only the masculine article changes: der → den, ein → einen. Feminine, neuter and plural stay the same!",
        contentDe: "Der Akkusativ wird für das direkte Objekt verwendet. Im Deutschen ändert sich nur der maskuline Artikel: der → den, ein → einen."
      },
      {
        type: "grammar",
        title: "Bestimmte Artikel im Akkusativ",
        items: [
          { pronoun: "Maskulin", verb: "den (← der)", meaning: "Ich nehme den Kuchen." },
          { pronoun: "Feminin", verb: "die (= die)", meaning: "Ich nehme die Suppe." },
          { pronoun: "Neutrum", verb: "das (= das)", meaning: "Ich nehme das Brot." },
          { pronoun: "Plural", verb: "die (= die)", meaning: "Ich nehme die Brötchen." }
        ]
      },
      {
        type: "grammar",
        title: "Unbestimmte Artikel im Akkusativ",
        items: [
          { pronoun: "Maskulin", verb: "einen (← ein)", meaning: "Ich möchte einen Kaffee." },
          { pronoun: "Feminin", verb: "eine (= eine)", meaning: "Ich möchte eine Suppe." },
          { pronoun: "Neutrum", verb: "ein (= ein)", meaning: "Ich möchte ein Brötchen." },
          { pronoun: "Negation", verb: "keinen / keine / kein", meaning: "Ich möchte keinen Kuchen." }
        ]
      },
      {
        type: "tip",
        text: "Only the MASCULINE article changes in the accusative! den (der→den), einen (ein→einen), keinen (kein→keinen). Everything else stays the same.",
        textDe: "Nur der MASKULINE Artikel ändert sich im Akkusativ! den, einen, keinen. Alles andere bleibt gleich."
      }
    ]
  },

  // ── K4-C2 : Verben — essen, trinken, mögen, nehmen ──
  {
    id: "k4-c2",
    level: "A1",
    type: "grammar",
    number: "G4",
    title: "Verben: essen, trinken, mögen, nehmen",
    subtitle: "Food verbs — irregular conjugations",
    duration: "20 min",
    xp: 65,
    color: "#a78bfa",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Wichtige Verben rund ums Essen",
        content: "The verbs essen (to eat), nehmen (to take) and mögen (to like) are irregular. Pay attention to the vowel changes in the du and er/sie/es forms!",
        contentDe: "Die Verben essen, nehmen und mögen sind unregelmäßig. Achte auf den Vokalwechsel bei du und er/sie/es!"
      },
      {
        type: "grammar",
        title: "essen (to eat) — Vokalwechsel e → i",
        items: [
          { pronoun: "ich", verb: "esse", meaning: "I eat" },
          { pronoun: "du", verb: "isst", meaning: "you eat" },
          { pronoun: "er/sie/es", verb: "isst", meaning: "he/she/it eats" },
          { pronoun: "wir", verb: "essen", meaning: "we eat" },
          { pronoun: "ihr", verb: "esst", meaning: "you (pl.) eat" },
          { pronoun: "sie/Sie", verb: "essen", meaning: "they/you (formal) eat" }
        ]
      },
      {
        type: "grammar",
        title: "nehmen (to take) — Vokalwechsel e → i",
        items: [
          { pronoun: "ich", verb: "nehme", meaning: "I take" },
          { pronoun: "du", verb: "nimmst", meaning: "you take" },
          { pronoun: "er/sie/es", verb: "nimmt", meaning: "he/she/it takes" },
          { pronoun: "wir", verb: "nehmen", meaning: "we take" },
          { pronoun: "ihr", verb: "nehmt", meaning: "you (pl.) take" },
          { pronoun: "sie/Sie", verb: "nehmen", meaning: "they/you (formal) take" }
        ]
      },
      {
        type: "grammar",
        title: "trinken (to drink) — regelmäßig",
        items: [
          { pronoun: "ich", verb: "trinke", meaning: "I drink" },
          { pronoun: "du", verb: "trinkst", meaning: "you drink" },
          { pronoun: "er/sie/es", verb: "trinkt", meaning: "he/she/it drinks" },
          { pronoun: "wir", verb: "trinken", meaning: "we drink" },
          { pronoun: "ihr", verb: "trinkt", meaning: "you (pl.) drink" },
          { pronoun: "sie/Sie", verb: "trinken", meaning: "they/you (formal) drink" }
        ]
      },
      {
        type: "tip",
        text: "Remember: essen → du isst / er isst (e→i), nehmen → du nimmst / er nimmt (e→i). trinken is regular, and mögen has special forms (ich mag, du magst).",
        textDe: "Merke: essen → du isst (e→i), nehmen → du nimmst (e→i). trinken ist regelmäßig, mögen hat besondere Formen."
      }
    ]
  },

  // ── K4-C3 : Personalpronomen im Akkusativ ──
  {
    id: "k4-c3",
    level: "A1",
    type: "grammar",
    number: "G5",
    title: "Personalpronomen im Akkusativ",
    subtitle: "Personal pronouns in the accusative",
    duration: "15 min",
    xp: 55,
    color: "#a78bfa",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Akkusativpronomen",
        content: "When a pronoun is the direct object, we use the accusative form. 'Ich sehe ihn' (I see him). Most pronouns change in the accusative — let's learn them!",
        contentDe: "Wenn ein Pronomen das direkte Objekt ist, verwenden wir den Akkusativ. 'Ich sehe ihn' — Die meisten Pronomen ändern sich im Akkusativ."
      },
      {
        type: "grammar",
        title: "Personalpronomen: Nominativ → Akkusativ",
        items: [
          { pronoun: "ich →", verb: "mich", meaning: "me — Er sieht mich." },
          { pronoun: "du →", verb: "dich", meaning: "you — Ich sehe dich." },
          { pronoun: "er →", verb: "ihn", meaning: "him — Ich sehe ihn." },
          { pronoun: "sie →", verb: "sie", meaning: "her — Ich sehe sie." },
          { pronoun: "es →", verb: "es", meaning: "it — Ich sehe es." },
          { pronoun: "wir →", verb: "uns", meaning: "us — Er sieht uns." },
          { pronoun: "ihr →", verb: "euch", meaning: "you (pl.) — Ich sehe euch." },
          { pronoun: "sie/Sie →", verb: "sie/Sie", meaning: "them/you (formal) — Ich sehe sie/Sie." }
        ]
      },
      {
        type: "dialogue",
        title: "Dialog: Pronomen in Aktion",
        lines: [
          { speaker: "A", text: "Kennst du den Kellner?", translation: "Do you know the waiter?" },
          { speaker: "B", text: "Ja, ich kenne ihn. Er ist sehr nett.", translation: "Yes, I know him. He is very nice." },
          { speaker: "A", text: "Und die Köchin? Kennst du sie auch?", translation: "And the cook? Do you know her too?" },
          { speaker: "B", text: "Nein, ich kenne sie nicht.", translation: "No, I don't know her." },
          { speaker: "A", text: "Besucht ihr uns am Wochenende?", translation: "Are you visiting us at the weekend?" },
          { speaker: "B", text: "Ja, wir besuchen euch am Samstag!", translation: "Yes, we'll visit you on Saturday!" }
        ]
      },
      {
        type: "tip",
        text: "The biggest changes: ich→mich, du→dich, er→ihn, wir→uns, ihr→euch. Note that sie (she/they) and es stay the same in the accusative.",
        textDe: "Die größten Änderungen: ich→mich, du→dich, er→ihn, wir→uns, ihr→euch. Beachte: sie und es bleiben gleich."
      }
    ]
  },

  // ── K4-D1 : Rückblick — Révision Kapitel 4 ──
  {
    id: "k4-d1",
    level: "A1",
    number: 11,
    title: "Rückblick — Kapitel 4",
    subtitle: "Révision : Essen und Trinken",
    icon: "📋",
    duration: "15 min",
    xp: 50,
    color: "#f472b6",
    kapitel: 4,
    sections: [
      {
        type: "intro",
        title: "Rückblick Kapitel 4 — Essen und Trinken",
        content: "Let's review everything from Chapter 4! We covered breakfast, tableware, food & drinks, restaurants, the accusative case, food verbs, and accusative pronouns.",
        contentDe: "Wiederholen wir alles aus Kapitel 4! Frühstück, Geschirr, Essen & Trinken, Restaurant, der Akkusativ, Essensverben und Akkusativpronomen."
      },
      {
        type: "vocabulary",
        title: "Schlüsselwörter Kapitel 4",
        words: [
          { german: "das Frühstück", english: "breakfast", example: "Das Frühstück ist um 7 Uhr." },
          { german: "die Speisekarte", english: "menu", example: "Die Speisekarte, bitte." },
          { german: "bestellen", english: "to order", example: "Ich möchte bestellen." },
          { german: "die Rechnung", english: "bill", example: "Die Rechnung, bitte!" },
          { german: "der Teller", english: "plate", example: "Der Teller ist groß." },
          { german: "das Besteck", english: "cutlery", example: "Wo ist das Besteck?" },
          { german: "lecker", english: "delicious", example: "Das Essen ist lecker!" },
          { german: "das Trinkgeld", english: "tip", example: "Stimmt so! (Keep the change)" }
        ]
      },
      {
        type: "grammar",
        title: "Zusammenfassung: Akkusativ",
        items: [
          { pronoun: "Maskulin", verb: "den / einen / keinen", meaning: "Ich nehme den Kuchen." },
          { pronoun: "Feminin", verb: "die / eine / keine", meaning: "Ich nehme die Suppe." },
          { pronoun: "Neutrum", verb: "das / ein / kein", meaning: "Ich nehme das Brot." },
          { pronoun: "Pronomen", verb: "mich, dich, ihn, sie, es, uns, euch", meaning: "Er sieht mich." }
        ]
      },
      {
        type: "tip",
        text: "You've completed Kapitel 4! Key takeaways: master restaurant vocabulary, remember only masculine articles change in the accusative (der→den), and practise food verbs with vowel changes (essen→isst, nehmen→nimmt).",
        textDe: "Kapitel 4 geschafft! Merke: Restaurantvokabular, nur maskuline Artikel ändern sich im Akkusativ (der→den), und übe die Essensverben mit Vokalwechsel."
      }
    ]
  }
];

// ═══════════════════════════════════════════
// KAPITEL 4 — Exercises
// ═══════════════════════════════════════════
export const k4Exercises = [
  {
    id: "k4-ex1",
    lessonId: "k4-a1",
    level: "A1",
    type: "multiple_choice",
    question: "What does 'das Frühstück' mean?",
    questionDe: "Was bedeutet 'das Frühstück' auf Englisch?",
    options: ["lunch", "dinner", "breakfast", "snack"],
    correct: 2,
    explanation: "'das Frühstück' = breakfast. 'Früh' means early, 'Stück' means piece.",
    xp: 10
  },
  {
    id: "k4-ex2",
    lessonId: "k4-a1",
    level: "A1",
    type: "multiple_choice",
    question: "How do you say 'bread roll' in German?",
    questionDe: "Wie sagt man 'bread roll' auf Deutsch?",
    options: ["das Brot", "das Brötchen", "der Kuchen", "die Brezel"],
    correct: 1,
    explanation: "'das Brötchen' = bread roll. It's the diminutive of 'Brot' (bread).",
    xp: 10
  },
  {
    id: "k4-ex3",
    lessonId: "k4-a2",
    level: "A1",
    type: "multiple_choice",
    question: "What is 'die Gabel'?",
    questionDe: "Was ist 'die Gabel'?",
    options: ["knife", "spoon", "fork", "plate"],
    correct: 2,
    explanation: "'die Gabel' = fork. 'das Messer' = knife, 'der Löffel' = spoon.",
    xp: 10
  },
  {
    id: "k4-ex4",
    lessonId: "k4-a2",
    level: "A1",
    type: "fill_blank",
    question: "Fill in: 'Kann ich bitte ___ Messer haben?' (a knife — accusative)",
    questionDe: "Füllen Sie: 'Kann ich bitte ___ Messer haben?'",
    options: ["ein", "einen", "eine", "der"],
    correct: 0,
    explanation: "'das Messer' is neuter. In the accusative, neuter stays the same: ein Messer.",
    xp: 10
  },
  {
    id: "k4-ex5",
    lessonId: "k4-a3",
    level: "A1",
    type: "multiple_choice",
    question: "What does 'Ich esse gern Obst' mean?",
    questionDe: "Was bedeutet 'Ich esse gern Obst'?",
    options: ["I eat fruit every day", "I like eating fruit", "I don't like fruit", "I buy fruit"],
    correct: 1,
    explanation: "'gern' means 'gladly/with pleasure'. 'Ich esse gern...' = I like eating...",
    xp: 10
  },
  {
    id: "k4-ex6",
    lessonId: "k4-a3",
    level: "A1",
    type: "multiple_choice",
    question: "What is 'die Kartoffel'?",
    questionDe: "Was ist 'die Kartoffel'?",
    options: ["carrot", "potato", "tomato", "onion"],
    correct: 1,
    explanation: "'die Kartoffel' = potato. Potatoes are very important in German cuisine!",
    xp: 10
  },
  {
    id: "k4-ex7",
    lessonId: "k4-a4",
    level: "A1",
    type: "multiple_choice",
    question: "How do you ask for the bill in a German restaurant?",
    questionDe: "Wie fragt man nach der Rechnung?",
    options: ["Das Menü, bitte!", "Die Speisekarte, bitte!", "Die Rechnung, bitte!", "Das Trinkgeld, bitte!"],
    correct: 2,
    explanation: "'Die Rechnung, bitte!' = The bill, please! 'Stimmt so!' = Keep the change!",
    xp: 10
  },
  {
    id: "k4-ex8",
    lessonId: "k4-a4",
    level: "A1",
    type: "fill_blank",
    question: "Fill in: 'Ich nehme ___ Schnitzel mit Kartoffelsalat.' (the — accusative masculine)",
    questionDe: "Füllen Sie: 'Ich nehme ___ Schnitzel mit Kartoffelsalat.'",
    options: ["der", "den", "das", "die"],
    correct: 2,
    explanation: "'das Schnitzel' is neuter. In the accusative, neuter doesn't change: das Schnitzel.",
    xp: 10
  },
  {
    id: "k4-ex9",
    lessonId: "k4-c1",
    level: "A1",
    type: "multiple_choice",
    question: "In the accusative, which article changes? der → ?",
    questionDe: "Im Akkusativ: der → ?",
    options: ["dem", "den", "des", "der"],
    correct: 1,
    explanation: "In the accusative, only the masculine article changes: der → den, ein → einen.",
    xp: 15
  },
  {
    id: "k4-ex10",
    lessonId: "k4-c1",
    level: "A1",
    type: "fill_blank",
    question: "Fill in: 'Ich möchte ___ Kaffee.' (a coffee — accusative masculine)",
    questionDe: "Füllen Sie: 'Ich möchte ___ Kaffee.'",
    options: ["ein", "einen", "eine", "einem"],
    correct: 1,
    explanation: "'der Kaffee' is masculine. In the accusative: ein → einen.",
    xp: 15
  },
  {
    id: "k4-ex11",
    lessonId: "k4-c2",
    level: "A1",
    type: "fill_blank",
    question: "Conjugate 'essen': 'Du ___ gern Pizza.' (you eat)",
    questionDe: "Konjugieren Sie 'essen': 'Du ___ gern Pizza.'",
    options: ["esst", "esse", "isst", "essen"],
    correct: 2,
    explanation: "essen: du isst (vowel change e→i). Same pattern as nehmen: du nimmst.",
    xp: 15
  },
  {
    id: "k4-ex12",
    lessonId: "k4-c2",
    level: "A1",
    type: "fill_blank",
    question: "Conjugate 'nehmen': 'Er ___ das Schnitzel.' (he takes)",
    questionDe: "Konjugieren Sie 'nehmen': 'Er ___ das Schnitzel.'",
    options: ["nehmt", "nimmt", "nimmst", "nehme"],
    correct: 1,
    explanation: "nehmen: er nimmt (vowel change e→i, plus consonant change hm→mm).",
    xp: 15
  },
  {
    id: "k4-ex13",
    lessonId: "k4-c3",
    level: "A1",
    type: "multiple_choice",
    question: "What is the accusative form of 'er'?",
    questionDe: "Was ist die Akkusativform von 'er'?",
    options: ["ihm", "ihn", "er", "sein"],
    correct: 1,
    explanation: "er → ihn in the accusative. 'Ich sehe ihn' = I see him.",
    xp: 15
  },
  {
    id: "k4-ex14",
    lessonId: "k4-c3",
    level: "A1",
    type: "fill_blank",
    question: "Fill in: 'Kennst du ___? Sie ist sehr nett.' (her — accusative)",
    questionDe: "Füllen Sie: 'Kennst du ___? Sie ist sehr nett.'",
    options: ["ihr", "sie", "ihn", "es"],
    correct: 1,
    explanation: "sie (she) → sie (her) in the accusative. The form doesn't change!",
    xp: 15
  },
  {
    id: "k4-ex15",
    lessonId: "k4-d1",
    level: "A1",
    type: "multiple_choice",
    question: "What does 'Stimmt so!' mean in a restaurant?",
    questionDe: "Was bedeutet 'Stimmt so!' im Restaurant?",
    options: ["That's correct!", "Keep the change!", "I want to pay!", "The food was great!"],
    correct: 1,
    explanation: "'Stimmt so!' literally means 'That's right as is!' — used to say 'Keep the change!'",
    xp: 10
  }
];

// ═══════════════════════════════════════════
// KAPITEL 4 — Vocabulary categories
// ═══════════════════════════════════════════
export const k4Vocabulary = {
  breakfast: {
    title: "Breakfast / Frühstück",
    icon: "🥐",
    words: [
      { german: "das Frühstück", english: "breakfast", example: "Das Frühstück beginnt um 7 Uhr.", exampleEn: "Breakfast starts at 7 o'clock." },
      { german: "das Brötchen", english: "bread roll", example: "Zwei Brötchen mit Butter, bitte.", exampleEn: "Two bread rolls with butter, please." },
      { german: "die Butter", english: "butter", example: "Brötchen mit Butter und Marmelade.", exampleEn: "Rolls with butter and jam." },
      { german: "die Marmelade", english: "jam", example: "Erdbeermarmelade ist lecker!", exampleEn: "Strawberry jam is delicious!" },
      { german: "der Honig", english: "honey", example: "Möchten Sie Honig?", exampleEn: "Would you like honey?" },
      { german: "der Aufschnitt", english: "cold cuts", example: "Der Aufschnitt ist frisch.", exampleEn: "The cold cuts are fresh." },
      { german: "der Käse", english: "cheese", example: "Ich esse gern Käse.", exampleEn: "I like eating cheese." },
      { german: "das Müsli", english: "muesli / cereal", example: "Müsli mit Milch und Obst.", exampleEn: "Muesli with milk and fruit." },
      { german: "der Orangensaft", english: "orange juice", example: "Ein Glas Orangensaft, bitte.", exampleEn: "A glass of orange juice, please." },
      { german: "das gekochte Ei", english: "boiled egg", example: "Ein gekochtes Ei, bitte.", exampleEn: "A boiled egg, please." }
    ]
  },
  tableware: {
    title: "Tableware / Geschirr",
    icon: "🍽️",
    words: [
      { german: "der Teller", english: "plate", example: "Der Teller ist sauber.", exampleEn: "The plate is clean." },
      { german: "die Tasse", english: "cup", example: "Eine Tasse Kaffee, bitte.", exampleEn: "A cup of coffee, please." },
      { german: "das Glas", english: "glass", example: "Ein Glas Wasser, bitte.", exampleEn: "A glass of water, please." },
      { german: "die Gabel", english: "fork", example: "Die Gabel liegt links.", exampleEn: "The fork is on the left." },
      { german: "das Messer", english: "knife", example: "Das Messer liegt rechts.", exampleEn: "The knife is on the right." },
      { german: "der Löffel", english: "spoon", example: "Ich brauche einen Löffel.", exampleEn: "I need a spoon." },
      { german: "die Serviette", english: "napkin", example: "Eine Serviette, bitte.", exampleEn: "A napkin, please." },
      { german: "die Schüssel", english: "bowl", example: "Die Suppe ist in der Schüssel.", exampleEn: "The soup is in the bowl." },
      { german: "die Kanne", english: "pot / jug", example: "Eine Kanne Tee, bitte.", exampleEn: "A pot of tea, please." },
      { german: "das Besteck", english: "cutlery", example: "Das Besteck liegt auf dem Tisch.", exampleEn: "The cutlery is on the table." }
    ]
  },
  food: {
    title: "Food & Meals / Essen",
    icon: "🍎",
    words: [
      { german: "die Wurst", english: "sausage", example: "Deutsche Wurst ist berühmt.", exampleEn: "German sausage is famous." },
      { german: "der Schinken", english: "ham", example: "Schinken auf Brot schmeckt gut.", exampleEn: "Ham on bread tastes good." },
      { german: "der Fisch", english: "fish", example: "Ich esse freitags Fisch.", exampleEn: "I eat fish on Fridays." },
      { german: "das Gemüse", english: "vegetables", example: "Gemüse ist gesund.", exampleEn: "Vegetables are healthy." },
      { german: "das Obst", english: "fruit", example: "Ich esse gern Obst.", exampleEn: "I like eating fruit." },
      { german: "die Kartoffel", english: "potato", example: "Kartoffeln mit Butter.", exampleEn: "Potatoes with butter." },
      { german: "der Kuchen", english: "cake", example: "Der Kuchen ist lecker!", exampleEn: "The cake is delicious!" },
      { german: "die Suppe", english: "soup", example: "Eine Tomatensuppe, bitte.", exampleEn: "A tomato soup, please." },
      { german: "das Hähnchen", english: "chicken", example: "Ich nehme das Hähnchen.", exampleEn: "I'll have the chicken." },
      { german: "das Schnitzel", english: "schnitzel", example: "Wiener Schnitzel ist typisch.", exampleEn: "Wiener Schnitzel is typical." }
    ]
  },
  drinks: {
    title: "Drinks / Getränke",
    icon: "🥤",
    words: [
      { german: "das Bier", english: "beer", example: "Ein Bier, bitte!", exampleEn: "A beer, please!" },
      { german: "der Wein", english: "wine", example: "Rotwein oder Weißwein?", exampleEn: "Red wine or white wine?" },
      { german: "der Saft", english: "juice", example: "Apfelsaft ist mein Favorit.", exampleEn: "Apple juice is my favourite." },
      { german: "die Limonade", english: "lemonade", example: "Eine Limonade, bitte.", exampleEn: "A lemonade, please." },
      { german: "das Mineralwasser", english: "mineral water", example: "Mit oder ohne Kohlensäure?", exampleEn: "Sparkling or still?" },
      { german: "der Kakao", english: "hot chocolate", example: "Ein Kakao für das Kind.", exampleEn: "A hot chocolate for the child." }
    ]
  },
  restaurant: {
    title: "Restaurant / Im Restaurant",
    icon: "🍝",
    words: [
      { german: "die Speisekarte", english: "menu", example: "Die Speisekarte, bitte.", exampleEn: "The menu, please." },
      { german: "bestellen", english: "to order", example: "Ich möchte bestellen.", exampleEn: "I would like to order." },
      { german: "die Rechnung", english: "the bill", example: "Die Rechnung, bitte!", exampleEn: "The bill, please!" },
      { german: "das Trinkgeld", english: "tip", example: "Stimmt so!", exampleEn: "Keep the change!" },
      { german: "die Vorspeise", english: "starter", example: "Als Vorspeise die Suppe.", exampleEn: "The soup as a starter." },
      { german: "das Hauptgericht", english: "main course", example: "Das Hauptgericht ist Schnitzel.", exampleEn: "The main course is Schnitzel." },
      { german: "die Nachspeise", english: "dessert", example: "Möchten Sie eine Nachspeise?", exampleEn: "Would you like a dessert?" },
      { german: "die Beilage", english: "side dish", example: "Pommes oder Reis als Beilage?", exampleEn: "Fries or rice as a side?" },
      { german: "lecker", english: "delicious", example: "Das Essen war lecker!", exampleEn: "The food was delicious!" },
      { german: "empfehlen", english: "to recommend", example: "Was empfehlen Sie?", exampleEn: "What do you recommend?" },
      { german: "der Kellner", english: "waiter", example: "Der Kellner ist freundlich.", exampleEn: "The waiter is friendly." },
      { german: "reservieren", english: "to reserve", example: "Ich möchte einen Tisch reservieren.", exampleEn: "I would like to reserve a table." }
    ]
  }
};

// ═══════════════════════════════════════════
// KAPITEL 4 — Schreiben (writing prompts)
// ═══════════════════════════════════════════
export const k4Schreiben = [
  { en: "I would like a coffee, please.", de: "Ich möchte einen Kaffee, bitte.", hint: "Ich möchte einen/eine/ein... bitte." },
  { en: "The bread roll is with butter and jam.", de: "Das Brötchen ist mit Butter und Marmelade.", hint: "Das Brötchen ist mit..." },
  { en: "I eat chicken with potato salad.", de: "Ich esse Hähnchen mit Kartoffelsalat.", hint: "Ich esse... mit..." },
  { en: "Can I have the menu, please?", de: "Kann ich die Speisekarte haben, bitte?", hint: "Kann ich... haben?" },
  { en: "I take the Schnitzel with fries.", de: "Ich nehme das Schnitzel mit Pommes.", hint: "Ich nehme das/die/den... mit..." },
  { en: "The bill, please!", de: "Die Rechnung, bitte!", hint: "Die Rechnung..." },
  { en: "The soup is delicious!", de: "Die Suppe ist lecker!", hint: "... ist lecker!" },
  { en: "Do you know him? He is the waiter.", de: "Kennst du ihn? Er ist der Kellner.", hint: "Kennst du ihn/sie/es?" },
  { en: "I don't eat meat.", de: "Ich esse kein Fleisch.", hint: "Ich esse kein/keine..." },
  { en: "Keep the change!", de: "Stimmt so!", hint: "Stimmt..." }
];
