import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

/* ─────────────────────────────────────────────────────────────
   CULTURE DATA
───────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'alltag',      icon: '🏙️',  label: 'Alltag',       labelFr: 'Vie quotidienne',       color: '#60a5fa', glow: 'rgba(96,165,250,0.08)'  },
  { id: 'traditionen', icon: '🎄',  label: 'Traditionen',  labelFr: 'Traditions',             color: '#34d399', glow: 'rgba(52,211,153,0.08)'  },
  { id: 'essen',       icon: '🥨',  label: 'Essen',        labelFr: 'Cuisine',                color: '#f59e0b', glow: 'rgba(245,158,11,0.08)'  },
  { id: 'feste',       icon: '🎉',  label: 'Feste',        labelFr: 'Fêtes',                  color: '#f472b6', glow: 'rgba(244,114,182,0.08)' },
  { id: 'staedte',     icon: '🗺️',  label: 'Städte',       labelFr: 'Villes',                 color: '#a78bfa', glow: 'rgba(167,139,250,0.08)' },
  { id: 'Geschichte',  icon: '📜',  label: 'Geschichte',   labelFr: 'Histoire',               color: '#fb923c', glow: 'rgba(251,146,60,0.08)'  },
  { id: 'beruf',       icon: '💼',  label: 'Berufsleben',  labelFr: 'Culture du travail',     color: '#2dd4bf', glow: 'rgba(45,212,191,0.08)'  },
];

const CULTURE_DATA = {
  alltag: {
    title: 'Alltag in Deutschland',
    titleFr: 'La vie quotidienne en Allemagne',
    intro: 'L\'Allemagne est un pays fascinant où tradition et modernité coexistent harmonieusement. La vie quotidienne des Allemands suit des rythmes bien établis, marqués par le sens de l\'organisation, le respect des règles et une grande importance accordée au temps libre.',
    articles: [
      {
        id: 'daily-life',
        icon: '☀️',
        title: 'La vie quotidienne',
        titleDE: 'Das alltägliche Leben',
        intro: 'Les Allemands accordent une grande importance à la structuration de leur journée. Le matin commence souvent tôt avec un petit-déjeuner copieux — considéré comme le repas le plus important de la journée.',
        sections: [
          {
            heading: 'Habitudes matinales',
            points: [
              'Le petit-déjeuner (Frühstück) est sacré : pain frais, charcuterie, fromage, œufs',
              'Les boulangeries (Bäckereien) ouvrent très tôt, souvent avant 7h',
              'Le café est central — les cafés sont des lieux de convivialité importants',
              'Les journaux papier restent populaires même à l\'ère numérique',
            ],
          },
          {
            heading: 'Rythme de la semaine',
            points: [
              'Dimanche (Sonntag) est sanctifié : les magasins sont fermés, moins de bruit',
              'Le samedi matin au marché (Wochenmarkt) est un rituel familial',
              'Les Allemands respectent scrupuleusement les horaires de collecte des déchets',
              'Le triage des déchets (Mülltrennung) est une obligation légale et un mode de vie',
            ],
          },
        ],
        examples: [
          'À Berlin, les boulangeries sont ouvertes le dimanche matin — une exception précieuse',
          'Le "Mittagessen" à 12h-13h est encore très répandu, notamment dans les petites villes',
          'Le "Feierabend" (fin de journée de travail) est un vrai rituel — on déconnecte vraiment',
        ],
        funFacts: [
          '🥖 L\'Allemagne compte plus de 3 200 variétés de pain différentes',
          '🚶 Les Allemands marchent en moyenne 7 500 pas par jour, contre 6 000 pour les Français',
          '📺 La télévision publique ARD existe depuis 1950 et reste très suivie',
          '🌿 80% des Allemands trient leurs déchets consciencieusement',
        ],
      },
      {
        id: 'punctuality',
        icon: '⏰',
        title: 'La ponctualité',
        titleDE: 'Die Pünktlichkeit',
        intro: 'En Allemagne, être ponctuel n\'est pas une simple politesse — c\'est une marque de respect fondamentale. Arriver en retard est perçu comme un manque de sérieux et peut nuire à votre image professionnelle et sociale.',
        sections: [
          {
            heading: 'Règles non-écrites',
            points: [
              'Arriver à l\'heure signifie arriver 2-3 minutes avant l\'heure prévue',
              'Un retard de 5-10 minutes est acceptable avec prévenance',
              'Au-delà de 15 minutes sans prévenir : impoli et irresponsable',
              'Les réunions professionnelles commencent à l\'heure exacte',
            ],
          },
          {
            heading: 'Dans la vie pratique',
            points: [
              'Les trains sont au départ à la seconde près (idéalement)',
              'Les rendez-vous médicaux respectent strictement les horaires',
              'Les invitations à dîner indiquent une heure réelle, pas approximative',
              'Les commerces respectent précisément leurs horaires d\'ouverture et de fermeture',
            ],
          },
        ],
        examples: [
          '"Akademische Viertelstunde" (le quart d\'heure académique) : une tradition universitaire où les cours commencent 15 min après l\'heure annoncée',
          'À un rendez-vous d\'affaires, arriver trop tôt (20 min avant) peut aussi être gênant',
          'Le dicton allemand : "Pünktlichkeit ist die Höflichkeit der Könige" (La ponctualité est la politesse des rois)',
        ],
        funFacts: [
          '🕐 Le retard moyen des trains allemands est de 8 minutes — ce qui choque les Allemands',
          '📱 Les Allemands ont souvent des alarmes pour chaque rendez-vous de la journée',
          '🤝 Un entretien d\'embauche : arriver en retard = refus quasi-automatique',
          '😅 Arriver en avance à une soirée chez des amis est aussi mal vu qu\'arriver en retard',
        ],
      },
      {
        id: 'education',
        icon: '🎓',
        title: 'Le système éducatif',
        titleDE: 'Das Bildungssystem',
        intro: 'Le système éducatif allemand est unique en Europe : il est fédéral (chaque Land a son propre système), et propose une orientation précoce des élèves selon leurs aptitudes vers trois filières distinctes.',
        sections: [
          {
            heading: 'Structure du système',
            points: [
              'Grundschule (école primaire) : 4 ans, de 6 à 10 ans',
              'Hauptschule : filière professionnelle (9-10 ans)',
              'Realschule : filière technique et commerciale (10 ans)',
              'Gymnasium : filière académique menant à l\'Abitur (équivalent du bac)',
              'Gesamtschule : école intégrée combinant les trois filières',
            ],
          },
          {
            heading: 'L\'enseignement supérieur',
            points: [
              'Universités (Universitäten) : formation académique',
              'Fachhochschulen : équivalent des écoles d\'ingénieurs',
              'Le système dual (Duales Ausbildungssystem) : alternance entreprise + école',
              'Pas de frais de scolarité dans la plupart des universités publiques',
            ],
          },
        ],
        examples: [
          'Un élève de 10 ans est orienté selon ses résultats vers une filière — decision très importante',
          'Le "Numerus Clausus" (NC) détermine l\'accès aux filières très demandées comme la médecine',
          'La formation duale est reconnue mondialement : ex. BMW, SAP forment leurs propres apprentis',
        ],
        funFacts: [
          '📚 L\'Allemagne dépense en moyenne 11 000€ par élève et par an',
          '🎓 45% des jeunes allemands choisissent une formation duale (apprentissage)',
          '🌍 Environ 370 000 étudiants étrangers étudient en Allemagne',
          '📖 La lecture est un loisir majeur : 46% des Allemands lisent au moins un livre par mois',
        ],
      },
    ],
  },

  traditionen: {
    title: 'Deutsche Traditionen',
    titleFr: 'Traditions allemandes',
    intro: 'Les traditions allemandes sont riches et variées, profondément ancrées dans l\'histoire et la géographie du pays. Des marchés de Noël féeriques aux œufs de Pâques colorés, la vie en Allemagne rythmée par des célébrations uniques tout au long de l\'année.',
    articles: [
      {
        id: 'weihnachten',
        icon: '🎄',
        title: 'Noël en Allemagne',
        titleDE: 'Weihnachten',
        intro: 'Noël est probablement la tradition la plus importante en Allemagne. La préparation commence bien avant le 25 décembre, avec l\'Avent qui marque le début d\'une période de recueillement et de festivités familiales.',
        sections: [
          {
            heading: 'L\'Avent (Advent)',
            points: [
              'Couronne de l\'Avent (Adventskranz) avec 4 bougies allumées une par dimanche',
              'Calendrier de l\'Avent (Adventskalender) : chocolats ou cadeaux du 1er au 24 décembre',
              'Marchés de Noël (Weihnachtsmärkte) dès fin novembre',
              'Chants de Noël (Weihnachtslieder) : "O Tannenbaum", "Stille Nacht"',
            ],
          },
          {
            heading: 'La nuit de Noël',
            points: [
              'La soirée du 24 décembre (Heiligabend) est le moment central — plus que le 25',
              'Repas traditionnel : Gänsebraten (oie rôtie) ou Kartoffelsalat mit Würstchen',
              'Le Christkind (Enfant Jésus) apporte les cadeaux aux enfants',
              'Saint-Nicolas (Nikolaus) passe le 6 décembre avec des sucreries',
            ],
          },
        ],
        examples: [
          'Le Weihnachtsmarkt de Nuremberg (Christkindlesmarkt) existe depuis 1628',
          'Le marché de Cologne au bord du Rhin attire 3 millions de visiteurs par an',
          'La tradition de l\'arbre de Noël (Weihnachtsbaum) est née en Allemagne',
        ],
        funFacts: [
          '🎄 Il y a plus de 2 500 marchés de Noël en Allemagne chaque année',
          '🍪 Les Lebkuchen (pain d\'épices) sont exportés dans le monde entier',
          '⭐ L\'étoile de Bethléem décore presque tous les sapins allemands',
          '🕯️ "Stille Nacht" a été composé en Autriche en 1818 et est chanté dans 300 langues',
        ],
      },
      {
        id: 'ostern',
        icon: '🐣',
        title: 'Pâques en Allemagne',
        titleDE: 'Ostern',
        intro: 'Pâques (Ostern) est une fête très importante en Allemagne, célébrée avec enthousiasme par toutes les générations. La tradition des œufs de Pâques cachés et du lapin de Pâques (Osterhase) est vécue avec beaucoup de créativité.',
        sections: [
          {
            heading: 'Traditions pascales',
            points: [
              'Osterhase (lapin de Pâques) cache des œufs dans le jardin ou la maison',
              'Ostereier : œufs durs décorés peints à la main en famille',
              'Osterfeuer (feux de Pâques) : grands feux allumés le samedi saint',
              'Palmsonntag (dimanche des Rameaux) : décoration avec des branches de saule',
            ],
          },
          {
            heading: 'Gastronomie pascale',
            points: [
              'Osterzopf : tresse briochée en forme d\'anneau',
              'Lammbraten : gigot d\'agneau rôti, symbole de renouveau',
              'Chocolats en forme de lapins et d\'œufs dans toutes les boulangeries',
              'Le jeudi de Pâques (Gründonnerstag) : tradition de manger vert (épinards)',
            ],
          },
        ],
        examples: [
          'À Lusace (Saxe), la tradition sorabe des œufs peints à la main est classée au patrimoine UNESCO',
          'Le "Osterbrunnen" de Franconie : fontaines décorées de milliers d\'œufs colorés',
          'Vendredi Saint (Karfreitag) : jour férié, danser en public est interdit dans certains Länder',
        ],
        funFacts: [
          '🥚 Les Allemands achètent en moyenne 100 millions d\'œufs pour Pâques',
          '🐰 Le mythe de l\'Osterhase est apparu en Allemagne au XVIIe siècle',
          '🔥 Les Osterfeuer ont des origines pré-chrétiennes pour chasser les mauvais esprits',
          '🌸 Pâques est la seule fête avec 4 jours fériés consécutifs en Allemagne',
        ],
      },
      {
        id: 'familie',
        icon: '👨‍👩‍👧‍👦',
        title: 'Traditions familiales',
        titleDE: 'Familientraditionen',
        intro: 'La famille occupe une place centrale dans la culture allemande. Les réunions familiales, les traditions transmises de génération en génération et les rituels du quotidien forgent l\'identité culturelle allemande.',
        sections: [
          {
            heading: 'Fêtes familiales',
            points: [
              'Geburtstag (anniversaire) : la personne fête elle-même ses invités (culture inverse)',
              'Konfirmation/Kommunion : fête importante avec toute la famille élargie',
              'Hochzeit (mariage) : fête qui dure souvent deux jours',
              '"Polterabend" : soirée de vaisselle cassée la veille du mariage',
            ],
          },
          {
            heading: 'Rituels quotidiens',
            points: [
              'Kaffee und Kuchen (café et gâteau) le dimanche à 15h : rituel incontournable',
              'Le repas du soir "Abendbrot" : souvent froid (pain, charcuterie)',
              'Les balades dominicales (Sonntagsspaziergang) en forêt ou au parc',
              'Les jardins partagés (Schrebergärten) comme espace de détente familial',
            ],
          },
        ],
        examples: [
          'Pour son anniversaire, c\'est l\'anniversaire qui apporte le gâteau au bureau — tradition très allemande',
          'Le "Kaffeeklatsch" (commérage autour du café) est un vrai rituel social',
          'Les associations (Vereine) : 90 000 clubs sportifs, musicaux, culturels — cœur du tissu social',
        ],
        funFacts: [
          '☕ Les Allemands sont les 3e plus gros consommateurs de café par habitant au monde',
          '🎂 L\'anniversaire se fête en avance : mauvais présage de le fêter avant la date !',
          '🌳 60% des Allemands sont membres d\'au moins une association (Verein)',
          '🏡 Les Schrebergärten datent du XIXe siècle — il y en a encore 1 million en Allemagne',
        ],
      },
    ],
  },

  essen: {
    title: 'Essen & Getränke',
    titleFr: 'Cuisine et boissons',
    intro: 'La cuisine allemande est bien plus riche et variée qu\'on ne le pense. Au-delà des saucisses et de la bière, chaque région possède ses spécialités uniques, et la culture alimentaire allemande reflète profondément l\'identité locale et les saisons.',
    articles: [
      {
        id: 'traditional',
        icon: '🍽️',
        title: 'Plats traditionnels',
        titleDE: 'Traditionelle Gerichte',
        intro: 'La cuisine allemande traditionnelle est riche, roborative et ancrée dans les saisons. Elle varie considérablement selon les régions, mais quelques plats sont devenus des symboles nationaux reconnus dans le monde entier.',
        sections: [
          {
            heading: 'Plats emblématiques',
            points: [
              'Sauerbraten : rôti mariné pendant plusieurs jours dans du vinaigre et des épices',
              'Eisbein : jarret de porc cuit avec choucroute (Sauerkraut)',
              'Schnitzel : escalope panée (d\'origine autrichienne, adoptée partout)',
              'Currywurst : saucisse de porc avec sauce curry — street-food emblématique de Berlin',
              'Maultaschen : raviolis souabes farcis à la viande et aux épinards',
            ],
          },
          {
            heading: 'Accompagnements',
            points: [
              'Kartoffeln (pommes de terre) : Bratkartoffeln, Kartoffelsalat, Kartoffelklöße',
              'Sauerkraut (choucroute fermentée) : riche en probiotiques',
              'Rotkohl (chou rouge) : cuisiné avec pommes et épices, servies en hiver',
              'Semmelknödel (quenelles de pain) : typiques de Bavière',
            ],
          },
        ],
        examples: [
          'Le Currywurst Imbiss (kiosque) est une institution berlinoise depuis 1949 — inventé par Herta Heuwer',
          'Un restaurant bavarois traditionnel (Gasthaus) sert toujours Schweinsbraten avec Semmelknödel le dimanche',
          'Le Grünkohl mit Pinkel (chou frisé avec saucisse) est un rituel hivernal en Basse-Saxe avec promenade obligatoire',
        ],
        funFacts: [
          '🌭 Les Allemands consomment environ 1,5 milliard de Bratwürste par an',
          '🥔 La pomme de terre (importée au XVIIIe) est intégrée dans 80% de la cuisine allemande',
          '🥩 Le Sauerbraten doit mariner au moins 3 jours pour être authentique',
          '🍛 Le Currywurst a été élevé au rang de patrimoine culturel de Berlin',
        ],
      },
      {
        id: 'brot',
        icon: '🥖',
        title: 'La culture du pain',
        titleDE: 'Die Brotkultur',
        intro: 'Le pain est au cœur de la culture alimentaire allemande. Avec plus de 3 200 variétés reconnues, la culture du pain en Allemagne est inscrite au patrimoine culturel immatériel de l\'UNESCO depuis 2014.',
        sections: [
          {
            heading: 'Variétés principales',
            points: [
              'Roggenbrot (pain de seigle) : dense, acidulé, conserve longtemps',
              'Vollkornbrot (pain complet) : très fibreux, populaire pour la santé',
              'Pumpernickel : pain de seigle noir à la mie dense, cuit 24h',
              'Brezel (bretzel) : typique de Bavière, souvent saupoudrée de gros sel',
              'Brötchen/Semmel : petits pains du matin, achetés frais chaque jour',
            ],
          },
          {
            heading: 'La boulangerie (Bäckerei)',
            points: [
              'Les boulangeries artisanales (Handwerksbäckereien) résistent aux chaînes',
              'Pain frais acheté chaque matin — jamais de pain de la veille',
              '"Abendbrot" : repas du soir composé de pain avec garnitures',
              'Le pain en Allemagne contient peu d\'additifs — réglementation stricte',
            ],
          },
        ],
        examples: [
          'Une vraie boulangerie allemande propose en moyenne 15-20 variétés de pain différentes',
          'Le Pumpernickel de Soest (Westphalie) est produit depuis le XVe siècle',
          'En Bavière, le Leberkäsesemmel (pain de viande dans un Brötchen) est le snack traditionnel',
        ],
        funFacts: [
          '🥐 Les Allemands consomment en moyenne 53 kg de pain par an et par habitant',
          '🏆 La culture boulangère allemande est au patrimoine UNESCO depuis 2014',
          '🔴 La Brezel a son propre festival annuel à Munich',
          '🌾 80% du pain allemand est à base de seigle, différent des pains de blé ailleurs',
        ],
      },
      {
        id: 'bier',
        icon: '🍺',
        title: 'La culture de la bière',
        titleDE: 'Die Bierkultur',
        intro: 'La bière est bien plus qu\'une boisson en Allemagne — c\'est une institution culturelle. La loi sur la pureté de la bière (Reinheitsgebot) de 1516 est la plus ancienne réglementation alimentaire encore en vigueur au monde.',
        sections: [
          {
            heading: 'Le Reinheitsgebot',
            points: [
              'Loi de 1516 : seuls eau, orge, houblon (et levure ajoutée plus tard) autorisés',
              'Application stricte dans la bière brassée en Bavière',
              'Garantit une qualité homogène et évite les additifs artificiel',
              'Devenu un argument marketing mondial pour la bière bavaroise',
            ],
          },
          {
            heading: 'Types de bières',
            points: [
              'Weizenbier/Weißbier : bière de blé blonde, typique de Bavière',
              'Pils : bière blonde légère, brassée dans tout le pays',
              'Märzenbier : bière ambré de l\'Oktoberfest',
              'Kölsch : bière de Cologne servie dans de petits verres cylindriques',
              'Altbier : bière brune fermentée haute, typique de Düsseldorf',
            ],
          },
        ],
        examples: [
          'À Cologne, commander une bière sans préciser = Kölsch automatiquement servi',
          'Le Biergarten (jardin de bière) est un lieu de rencontre sociale, pas juste un bar',
          'À l\'Hofbräuhaus de Munich, les tables sont "réservées" aux habitués (Stammtisch)',
        ],
        funFacts: [
          '🍺 L\'Allemagne compte plus de 1 300 brasseries — plus que tout autre pays',
          '📜 Le Reinheitsgebot a 500 ans et est toujours appliqué volontairement',
          '🥨 La bière est souvent accompagnée d\'un Brezel ou d\'un Obatzda (fromage épicé)',
          '🏙️ Munich, Dortmund et Cologne sont les trois plus grandes villes brassicoles',
        ],
      },
      {
        id: 'regional',
        icon: '🗺️',
        title: 'Spécialités régionales',
        titleDE: 'Regionale Spezialitäten',
        intro: 'Chaque région allemande a développé une identité culinaire forte, souvent liée à son histoire et sa géographie. Du Rheinland à la Bavière, de la Saxe à Hambourg, les saveurs changent radicalement.',
        sections: [
          {
            heading: 'Spécialités par région',
            points: [
              'Bavière : Weißwurst (saucisse blanche mangée avant midi), Obatzda, Brezeln',
              'Rhénanie-du-Nord : Sauerbraten rhénan avec raisins secs, Reibekuchen (galettes de pommes de terre)',
              'Saxe : Eierschecke (gâteau au fromage blanc), Dresdner Stollen (Noël)',
              'Hambourg : Labskaus (corned-beef avec betterave), Fischbrötchen (sandwichs au poisson)',
              'Bavière + Souabe : Zwiebelrostbraten (rosbif aux oignons), Käsespätzle (macaroni au fromage)',
            ],
          },
          {
            heading: 'Saisons alimentaires',
            points: [
              'Spargel (asperges blanches) d\'avril à juin : vénération quasi-religieuse',
              'Erdbeeren (fraises) en saison : stands sur les bords de route',
              'Kürbis (citrouille) en automne : soupes, pain, tartes',
              'Gänsebraten (oie rôtie) à la Saint-Martin (11 novembre)',
            ],
          },
        ],
        examples: [
          'La saison des Spargel est si importante qu\'elle a son propre nom : "Spargelzeit"',
          'Le Dresdner Christstollen (brioche de Noël aux fruits secs) est protégé géographiquement',
          'Les Fischbrötchen de Hambourg se mangent sur le marché au poisson le matin tôt',
        ],
        funFacts: [
          '🌱 Les Allemands consomment 80 000 tonnes d\'asperges blanches par an',
          '🎄 Le Stollen de Dresden est vendu avec certificat d\'authenticité',
          '🐟 Le marché au poisson de Hambourg ouvre dès 5h du matin le dimanche',
          '🧅 L\'Alsace et la Rhénanie partagent de nombreuses recettes — histoire commune',
        ],
      },
    ],
  },

  feste: {
    title: 'Feste & Feiertage',
    titleFr: 'Fêtes et événements',
    intro: 'Le calendrier festif allemand est riche et varié, mêlant fêtes religieuses, célébrations populaires et commémorations historiques. Certains événements comme l\'Oktoberfest sont devenus des phénomènes mondiaux tout en restant profondément ancrés dans la culture locale.',
    articles: [
      {
        id: 'oktoberfest',
        icon: '🍺',
        title: 'Oktoberfest',
        titleDE: 'Das Oktoberfest',
        intro: 'L\'Oktoberfest de Munich est la plus grande fête populaire du monde. Chaque année, des millions de visiteurs du monde entier convergent vers la Theresienwiese pour célébrer la bière, la gastronomie et la culture bavaroise.',
        sections: [
          {
            heading: 'Histoire et tradition',
            points: [
              'Première édition : 12 octobre 1810, pour le mariage du prince Ludwig I de Bavière',
              'Se tient fin septembre – début octobre (malgré le nom "Oktoberfest")',
              'Se déroule sur la Theresienwiese (Wies\'n) à Munich',
              'Ouverture officielle : le Maire de Munich ouvre le premier fût ("O\'zapft is!")',
            ],
          },
          {
            heading: 'Chiffres et incontournables',
            points: [
              '6-7 millions de visiteurs par an (500 000 l\'ont visité avant 1900)',
              'Plus de 7 millions de litres de bière consommés en 16-18 jours',
              'Grandes tentes (Zelte) des brasseries : Hofbräu, Augustiner, Paulaner...',
              'Costume traditionnel : Dirndl (femmes) et Lederhose (hommes)',
            ],
          },
        ],
        examples: [
          'Les tentes peuvent accueillir jusqu\'à 10 000 personnes avec orchestre live',
          '"Prosit!" est le toast obligatoire — tout le monde lève son chope au même moment',
          'Le roi des manèges : la Rutschpartie (toboggan géant) depuis 1912',
          'Half Chicken (Hendl) et Schweinshaxe (jarret de porc) : les plats emblématiques',
        ],
        funFacts: [
          '🍺 7,5 millions de litres de bière servis en 2023',
          '🐔 Plus de 120 bœufs et 500 000 poulets consommés pendant le festival',
          '🎠 L\'Oktoberfest a été annulé 24 fois en 200 ans (guerres, épidémies)',
          '👗 L\'industrie du Dirndl et Lederhose génère 1,5 milliard € par an en Bavière',
        ],
      },
      {
        id: 'karneval',
        icon: '🎭',
        title: 'Karneval / Fasching',
        titleDE: 'Karneval, Fasching, Fastnacht',
        intro: 'Le carnaval en Allemagne est une célébration explosive de la liberté, du déguisement et de l\'inversion sociale. Il porte différents noms selon les régions et culmine dans les "Drei Tolle Tage" (trois jours fous) avant le Mercredi des Cendres.',
        sections: [
          {
            heading: 'Les grandes villes du Carnaval',
            points: [
              'Cologne (Köln) : le plus grand et le plus fou — "Le Cinquième Saison"',
              'Düsseldorf : parade du lundi gras (Rosenmontagszug) légendaire',
              'Mainz : carnaval politiquement engagé et satirique',
              'Munich : Fasching — bals masqués et défilés de rue',
            ],
          },
          {
            heading: 'Traditions du Karneval',
            points: [
              'Rosenmontag (lundi des roses) : plus grande parade avec chars satiriques',
              '"Alaaf!" (Cologne) et "Helau!" (Düsseldorf) : cris de ralliement',
              'Distribution de bonbons (Kamelle) depuis les chars',
              'Le 11.11 à 11h11 : début officiel chaque année',
            ],
          },
        ],
        examples: [
          'À Cologne, 1 million de personnes descendent dans la rue pendant Rosenmontag',
          'Les chars satiriques moquent les politiciens — tradition de liberté d\'expression',
          'Les femmes de Cologne coupent symboliquement les cravates des hommes le Weiberfastnacht',
        ],
        funFacts: [
          '🎭 Cologne consomme plus de 3 millions de litres de Kölsch pendant le Karneval',
          '🎉 Le principe du carnaval remonte au Moyen Âge pour inverser l\'ordre social',
          '✂️ Des milliers de cravates finissent coupées à Cologne chaque Weiberfastnacht',
          '📺 La parade de Rosenmontag est retransmise en direct sur les chaînes nationales',
        ],
      },
      {
        id: 'einheit',
        icon: '🇩🇪',
        title: 'Tag der Deutschen Einheit',
        titleDE: '3. Oktober — Tag der Deutschen Einheit',
        intro: 'Le 3 octobre est la fête nationale allemande, commémorant la réunification de l\'Allemagne de l\'Ouest et de l\'Allemagne de l\'Est le 3 octobre 1990. C\'est un jour de célébration mais aussi de réflexion sur l\'histoire tourmentée du pays.',
        sections: [
          {
            heading: 'Contexte historique',
            points: [
              '1945 : l\'Allemagne divisée en 4 zones d\'occupation après la 2e Guerre mondiale',
              '1949 : naissance de la RFA (Ouest) et de la RDA (Est)',
              '9 novembre 1989 : chute du Mur de Berlin — moment décisif',
              '3 octobre 1990 : réunification officielle — nouvelle fête nationale',
            ],
          },
          {
            heading: 'Célébrations et signification',
            points: [
              'La ville hôte change chaque année — organisée par le Land qui préside le Bundesrat',
              'Concerts publics, discours officiels, festivités populaires',
              'Thème récurrent : "Zusammenwachsen" (grandir ensemble)',
              'Encore aujourd\'hui, des différences économiques et culturelles Est/Ouest subsistent',
            ],
          },
        ],
        examples: [
          'Berlin organise souvent la fête avec concerts gratuits sur la Straße des 17. Juni',
          'Le 9 novembre (chute du Mur) n\'est pas jour férié — car tombant le même jour que la Nuit de Cristal (1938)',
          'À Erfurt (Thuringe), les commémorations incluent souvent expositions sur la RDA',
        ],
        funFacts: [
          '🧱 Plus de 28 000 personnes ont risqué leur vie pour traverser le Mur', 
          '🎵 "Freiheit" de Marius Müller-Westernhagen est devenu l\'hymne de la réunification',
          '📊 En 1990, le PIB de l\'Allemagne de l\'Est était 1/3 de celui de l\'Ouest',
          '🌍 La réunification a transformé l\'Allemagne en 4e puissance économique mondiale',
        ],
      },
    ],
  },

  staedte: {
    title: 'Deutsche Städte',
    titleFr: 'Villes allemandes',
    intro: 'L\'Allemagne est un pays de villes — chacune avec une identité, une architecture, une culture et une gastronomie propres. Contrairement à des pays très centralisés, l\'Allemagne offre une richesse incroyable à travers ses différentes métropoles.',
    articles: [
      {
        id: 'berlin',
        icon: '🏛️',
        title: 'Berlin',
        titleDE: 'Berlin — Die Hauptstadt',
        intro: 'Berlin est l\'une des villes les plus fascinantes d\'Europe. Capitale de l\'Allemagne depuis 1990, elle porte encore les cicatrices visibles de son histoire tout en incarnant une créativité, une diversité et une vie culturelle exceptionnelles.',
        sections: [
          {
            heading: 'Culture et identité',
            points: [
              'Ville de la contre-culture, techno et clubs : Berghain, Tresor, Watergate',
              'Scène artistique mondiale : galeries, street-art (East Side Gallery)',
              'Vie nocturne unique : les clubs ouvrent le vendredi et ferment le lundi',
              '"Berlin ist arm, aber sexy" (Klaus Wowereit, ancien maire) — devenu devise',
            ],
          },
          {
            heading: 'Lieux incontournables',
            points: [
              'Brandenburger Tor (Porte de Brandebourg) : symbole de la réunification',
              'Reichstag (Parlement) avec coupole vitrée de Norman Foster — visite gratuite',
              'Museuminsel (Île aux musées) : 5 musées mondiaux, classé UNESCO',
              'Potsdamer Platz : quartier moderne reconstruit après la guerre',
              'Mémorial de l\'Holocauste : 2 711 stèles de béton, conçu par Peter Eisenman',
            ],
          },
        ],
        examples: [
          'Le "Dönergate" : Berlin a le meilleur Döner Kebab du monde (selon les berlinois)',
          'La "Schnauze" berlinoise : Berliner peuvent sembler directs voire impolis — mais c\'est culturel',
          'Le Kotti (Kottbusser Tor) : carrefour cosmopolite de Kreuzberg, symbole du Berlin multiculturel',
        ],
        funFacts: [
          '🚲 Berlin compte plus de 1 500 km de pistes cyclables',
          '🎨 La East Side Gallery est la plus longue galerie d\'art en plein air du monde (1,3 km)',
          '🌳 Berlin a plus de forêts et de lacs que toute autre capitale européenne',
          '🎭 Plus d\'opéras et de théâtres à Berlin qu\'à New York, Paris et Londres réunis',
        ],
      },
      {
        id: 'muenchen',
        icon: '⚽',
        title: 'München (Munich)',
        titleDE: 'München — Weltstadt mit Herz',
        intro: 'Munich est la capitale de la Bavière et la troisième ville d\'Allemagne. Connue pour son Oktoberfest, son architecture néoclassique et son équipe de football (FC Bayern), Munich est aussi un centre économique, technologique et culturel de premier plan.',
        sections: [
          {
            heading: 'Identité bavaroise',
            points: [
              'La culture bavaroise est distincte : langue (Bayerisch), costumes, bière',
              'Freistaat Bayern : la Bavière se perçoit presque comme un état indépendant',
              'Cathédrale Frauenkirche : symbole de Munich, visible depuis toute la ville',
              'Le Hofbräuhaus : brasserie fondée en 1589, mythe mondial',
            ],
          },
          {
            heading: 'Munich moderne',
            points: [
              'Centre économique : BMW, Siemens, Allianz, MAN ont leur siège à Munich',
              'Deutsches Museum : plus grand musée des sciences et techniques du monde',
              'Nymphenburg, Residenz : palais royaux ouverts au public',
              'Marienplatz : place centrale avec le Neues Rathaus et le carillon (Glockenspiel)',
            ],
          },
        ],
        examples: [
          'Le Englischer Garten de Munich est plus grand que Central Park à New York',
          'BMW Welt : showroom architectural spectaculaire, visite gratuite — temple de l\'automobile',
          'Le Isar : la rivière où les Munichois barbotent l\'été avec bière et barbecue interdit',
        ],
        funFacts: [
          '🏎️ Munich est le berceau de BMW — la ville est fière de son héritage automobile',
          '🏄 Les surfers de la Eisbachwelle surfent en plein centre-ville dans le jardin anglais',
          '🌡️ Munich a le même niveau de vie que Zurich — la ville la plus chère d\'Allemagne',
          '⚽ L\'Allianz Arena de Munich change de couleur selon quel match est joué (Bayern = rouge, TSV = bleu)',
        ],
      },
      {
        id: 'hamburg',
        icon: '⚓',
        title: 'Hamburg',
        titleDE: 'Hamburg — Die Freie und Hansestadt',
        intro: 'Hamburg est la deuxième ville d\'Allemagne et l\'un des ports les plus importants d\'Europe. "Die Hansestadt" allie tradition maritime, architecture de briques rouges, vie culturelle intense et réputation de liberté et d\'ouverture.',
        sections: [
          {
            heading: 'Identité hambourgeoise',
            points: [
              'Freie und Hansestadt Hamburg : ville-État depuis 1189, fière de son indépendance',
              'Port de Hambourg : 2e port d\'Europe, 9 000 navires par an',
              'Architektur typique : briques rouges, entrepôts de la Speicherstadt',
              'Speicherstadt classée UNESCO : quartier d\'entrepôts du XIXe siècle reconverti',
            ],
          },
          {
            heading: 'Culture et vie nocturne',
            points: [
              'Reeperbahn : Kiez légendaire, rue de la fête dans le quartier St-Pauli',
              'Les Beatles ont joué leurs premiers concerts à Hamburg en 1960-61',
              'Elbphilharmonie : salle de concerts spectaculaire inaugurée en 2017',
              'HafenCity : quartier ultra-moderne construit sur les anciens docks',
            ],
          },
        ],
        examples: [
          'Le Fischmarkt le dimanche matin dès 5h : marchands criant, poisson frais, ambiance unique',
          'L\'Elbphilharmonie a coûté 866 millions d\'euros — 10 fois le budget initial',
          'Hamburg a plus de ponts que Venise, Amsterdam et Londres réunis (2 300 ponts)',
        ],
        funFacts: [
          '🎵 Les Beatles ont joué plus de 1 200 heures à Hamburg avant de devenir célèbres',
          '🌉 Hamburg compte 2 300 ponts — plus que toute autre ville du monde',
          '🚢 Le port de Hambourg traite 8 millions de conteneurs par an',
          '🏛️ La Speicherstadt est la plus grande zone de stockage en brique au monde',
        ],
      },
    ],
  },

  Geschichte: {
    title: 'Deutsche Geschichte',
    titleFr: 'Histoire allemande',
    intro: 'L\'histoire allemande est l\'une des plus complexes et des plus riches d\'Europe. Des guerres médiévales à la réunification, en passant par la Réforme protestante, l\'Empire et les deux guerres mondiales, l\'Allemagne a façonné le destin de tout un continent.',
    articles: [
      {
        id: 'reformation',
        icon: '⛪',
        title: 'La Réforme protestante',
        titleDE: 'Die Reformation',
        intro: 'En 1517, Martin Luther affiche ses 95 thèses sur la porte de l\'église de Wittenberg, déclenchant une révolution religieuse, politique et culturelle qui a transformé l\'Europe entière.',
        sections: [
          {
            heading: 'Martin Luther et son impact',
            points: [
              'Martin Luther (1483-1546) : moine augustin de Thuringe',
              'Traduction de la Bible en allemand : standardise la langue allemande',
              'Principe du "Sola Fide" (uniquement par la foi) contre les indulgences',
              'Guerre des paysans (1524-1525) : conséquence sociale de la Réforme',
            ],
          },
          {
            heading: 'Héritage culturel',
            points: [
              'La Bible de Luther reste la traduction de référence en allemand',
              'Division religieuse : nord protestant, sud catholique — encore visible aujourd\'hui',
              'La Réforme a accéléré l\'alphabétisation en Allemagne',
              'Influence sur Bach, Handel et toute la musique baroque allemande',
            ],
          },
        ],
        examples: [
          'Wittenberg est aujourd\'hui une ville musée dédiée à Luther — inscrite UNESCO',
          'L\'Oktoberfest : la Bavière catholique résiste encore à la Réforme culturellement',
          'La fête de la Réforme (31 octobre) est jour férié dans les Länder protestants',
        ],
        funFacts: [
          '📜 Les 95 thèses ont été diffusées grâce à l\'imprimerie de Gutenberg — révolution médiatique',
          '📖 La Bible de Luther a établi le "Hochdeutsch" comme langue standard',
          '⛪ 35% des Allemands sont protestants, 35% catholiques, 30% non religieux',
          '🏛️ La ville de Worms conserve encore le lieu exact du procès de Luther (1521)',
        ],
      },
      {
        id: 'mauer',
        icon: '🧱',
        title: 'Le Mur de Berlin',
        titleDE: 'Die Berliner Mauer',
        intro: 'Le Mur de Berlin (1961-1989) est l\'un des symboles les plus forts de la Guerre Froide et de la division du monde. Sa chute le 9 novembre 1989 est l\'un des moments les plus émouvants du XXe siècle.',
        sections: [
          {
            heading: 'Construction et vie sous le Mur',
            points: [
              '13 août 1961 : construction du Mur pour stopper l\'exode massif vers l\'Ouest',
              '155 km de long, 3,6 m de haut avec "Death Strip" (zone de la mort)',
              'Plus de 5 000 tentatives d\'évasion, 140 morts documentés',
              'La Stasi (police secrète) surveille 1 Allemand de l\'Est sur 63',
            ],
          },
          {
            heading: 'La chute du Mur',
            points: [
              '9 novembre 1989 : annonce maladroite de Günter Schabowski — "sofort, unverzüglich"',
              'Des milliers de Berlinois convergent vers les checkpoints',
              '"Wir sind das Volk!" (Nous sommes le peuple) — slogan des manifestations',
              'En une nuit, le Mur tombe — l\'Europe change pour toujours',
            ],
          },
        ],
        examples: [
          'Checkpoint Charlie : le seul point de passage Est-Ouest pour étrangers, aujourd\'hui musée',
          'L\'East Side Gallery : 1,3 km de Mur conservé, recouvert de fresques d\'artistes du monde entier',
          '"Ossies" et "Wessis" : les termes encore utilisés pour distinguer Allemands de l\'Est et de l\'Ouest',
        ],
        funFacts: [
          '📺 La chute du Mur a été regardée en direct par des milliards de personnes dans le monde',
          '💰 La réunification a coûté plus de 2 000 milliards d\'euros sur 30 ans',
          '🧩 Des morceaux du Mur se vendent encore aux enchères jusqu\'à 10 000 €',
          '👂 La Stasi avait 91 000 employés officiels et 189 000 informateurs non officiels',
        ],
      },
    ],
  },

  beruf: {
    title: 'Berufsleben in Deutschland',
    titleFr: 'La culture du travail',
    intro: 'La culture professionnelle allemande est réputée pour son sens de l\'organisation, sa rigueur et son respect des hiérarchies. Mais elle évolue — les nouvelles générations redéfinissent l\'équilibre travail-vie privée dans un pays qui garantit légalement des droits sociaux étendus.',
    articles: [
      {
        id: 'arbeitszeit',
        icon: '⏱️',
        title: 'Horaires et organisation',
        titleDE: 'Arbeitszeiten',
        intro: 'L\'Allemagne a l\'une des meilleures réputations mondiales en termes d\'efficacité au travail, tout en ayant des durées de travail annuelles parmi les plus basses d\'Europe. La clé : rigueur, organisation et respect du temps personnel.',
        sections: [
          {
            heading: 'Durée et organisation',
            points: [
              'Durée légale : max 8h/jour (exceptionnellement 10h), 48h max par semaine',
              '30 jours de congés payés minimum par an (parmi les plus élevés au monde)',
              'Le "Feierabend" (fin officielle) est strictement respecté — on ne "reste pas par politesse"',
              'Les réunions ont un agenda précis, une durée fixée et des actions définies',
            ],
          },
          {
            heading: 'Environnement de travail',
            points: [
              '"Du" vs "Sie" au travail : culture du "per Du" (tutoiement) de plus en plus répandue',
              'Open-space vs bureaux fermés : débat culturel important',
              'Comités d\'entreprise (Betriebsrat) : organe de représentation très puissant',
              'Codétermination (Mitbestimmung) : les employés ont des représentants au conseil de surveillance',
            ],
          },
        ],
        examples: [
          'Volkswagen coupe les emails après 18h30 pour ses employés — règle officielle',
          'En Allemagne, "les heures supplémentaires non payées" sont généralement compensées en temps libre',
          'Le "Urlaubsantrag" : la demande de congés doit être planifiée au moins 4-6 semaines à l\'avance',
        ],
        funFacts: [
          '🏖️ Les Allemands prennent en moyenne 30 jours de congés par an',
          '📧 40% des grandes entreprises allemandes ont des politiques de déconnexion après 18h',
          '💼 Les Allemands travaillent en moyenne 1 349 heures par an (2e moins au monde)',
          '⚕️ 6 semaines de congé maladie payé à 100% — garanti par la loi',
        ],
      },
      {
        id: 'worklife',
        icon: '⚖️',
        title: 'Work-Life Balance',
        titleDE: 'Work-Life-Balance',
        intro: 'Le concept de "Work-Life-Balance" est pris très au sérieux en Allemagne. Le pays garantit légalement un équilibre entre vie professionnelle et vie privée que beaucoup de pays envient. Mais la culture évolue avec les générations Y et Z.',
        sections: [
          {
            heading: 'Protections légales',
            points: [
              'Elterngeld (allocation parentale) : 65% du salaire pendant 12-14 mois',
              'Elternzeit (congé parental) : jusqu\'à 3 ans possible, emploi garanti',
              'Kurzarbeit : dispositif de chômage partiel permettant d\'éviter les licenciements',
              'Kündigungsschutz : protection légale forte contre les licenciements abusifs',
            ],
          },
          {
            heading: 'Nouvelles tendances',
            points: [
              '4-Tage-Woche (semaine de 4 jours) : expérimentée dans plusieurs PME',
              'Home Office post-Covid : désormais un droit négocié dans de nombreuses entreprises',
              'Workation (travail depuis l\'étranger) : en discussion légale',
              'La "Quiet Quitting" génération : travail uniquement strictement dans les heures prévues',
            ],
          },
        ],
        examples: [
          'SAP, BMW et Bosch proposent des congés sabbatiques payés après 5 ans d\'ancienneté',
          'À Munich, entreprises tech offrent massage, salle de sport, cantine bio — pour fidéliser',
          'La crise des métiers : l\'Allemagne manque de 400 000 travailleurs qualifiés — attire des immigrés',
        ],
        funFacts: [
          '👶 Le congé parental allemand est parmi les plus généreux d\'Europe',
          '🏠 40% des Allemands travaillent en home office au moins partiellement depuis 2021',
          '⚕️ L\'Allemagne a l\'un des systèmes de santé les plus accessibles au monde',
          '📊 La productivité horaire allemande est supérieure de 30% à la moyenne mondiale',
        ],
      },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────
   ARTICLE CARD COMPONENT
───────────────────────────────────────────────────────────── */
const FunFact = ({ text, color, il }) => (
  <div className="flex items-start gap-2.5 py-2 px-3 rounded-xl"
    style={{ background: `${color}10`, border: `1px solid ${color}22` }}>
    <span className="text-base shrink-0 mt-0.5">{text.slice(0, 2)}</span>
    <span className="text-[12px] leading-relaxed" style={{ color: il ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.65)' }}>{text.slice(2).trim()}</span>
  </div>
);

const ArticleCard = ({ article, color, il }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${color}25`,
        background: il ? `${color}06` : `${color}04`,
      }}>

      {/* Card header */}
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
        style={{ background: `${color}08` }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
          {article.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-black text-sm leading-tight" style={{ color: il ? 'rgba(0,0,0,0.85)' : '#fff' }}>{article.title}</div>
          <div className="text-[11px] font-medium mt-0.5" style={{ color }}>{article.titleDE}</div>
        </div>
        <div className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[10px] transition-transform duration-300"
          style={{ background: `${color}15`, color, transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
          ▾
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-5 pb-5">
          {/* Intro */}
          <p className="text-[13px] leading-relaxed mt-4 mb-5 pl-3"
            style={{ borderLeft: `2px solid ${color}40`, color: il ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.60)' }}>
            {article.intro}
          </p>

          {/* Sections */}
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {article.sections.map((section, si) => (
              <div key={si} className="rounded-xl p-4"
                style={{ background: il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.02)', border: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color }}>
                  {section.heading}
                </div>
                <ul className="space-y-1.5">
                  {section.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-2 text-[12px] leading-relaxed"
                      style={{ color: il ? 'rgba(0,0,0,0.58)' : 'rgba(255,255,255,0.55)' }}>
                      <span className="shrink-0 mt-1 text-[8px]" style={{ color: `${color}80` }}>◆</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Examples */}
          {article.examples?.length > 0 && (
            <div className="mb-4">
              <div className="text-[10px] font-black uppercase tracking-widest mb-2.5"
                style={{ color: il ? 'rgba(0,0,0,0.30)' : 'rgba(255,255,255,0.30)' }}>
                Exemples concrets
              </div>
              <div className="space-y-2">
                {article.examples.map((ex, ei) => (
                  <div key={ei} className="flex items-start gap-2.5 text-[12px] leading-relaxed"
                    style={{ color: il ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.50)' }}>
                    <span className="shrink-0 text-[11px] mt-0.5" style={{ color: `${color}70` }}>→</span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fun facts */}
          {article.funFacts?.length > 0 && (
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest mb-2.5"
                style={{ color: il ? 'rgba(0,0,0,0.30)' : 'rgba(255,255,255,0.30)' }}>
                Faits intéressants
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {article.funFacts.map((fact, fi) => (
                  <FunFact key={fi} text={fact} color={color} il={il} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
const Kultur = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const il = theme === 'light';
  const [manualCat, setManualCat] = useState(null);
  const contentRef = useRef(null);

  /* Active category: manual click takes priority, then URL hash, then default */
  const hashCat = location.hash.replace('#', '');
  const activeCat = manualCat ?? (hashCat && CULTURE_DATA[hashCat] ? hashCat : null) ?? 'alltag';

  const cat = CATEGORIES.find(c => c.id === activeCat) || CATEGORIES[0];
  const data = CULTURE_DATA[activeCat];

  const handleCatChange = (id) => {
    setManualCat(id);
    if (contentRef.current) contentRef.current.scrollTop = 0;
    // On mobile, scroll window to the content area
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen pt-[52px]" style={{ background: 'var(--bg-base)' }}>

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden"
        style={{
          background: il
            ? `linear-gradient(135deg, #f8fafc 0%, #f0f4ff 100%)`
            : `linear-gradient(135deg, rgba(13,13,20,1) 0%, rgba(20,10,40,1) 100%)`,
          borderBottom: il ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.06)',
        }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${cat.color}18, transparent)` }} />
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest"
              style={{ background: `${cat.color}20`, color: cat.color, border: `1px solid ${cat.color}40` }}>
              🇩🇪 Deutsche Kultur
            </div>
            <div className="w-1 h-1 rounded-full" style={{ background: il ? 'rgba(0,0,0,0.20)' : 'rgba(255,255,255,0.20)' }} />
            <span className="text-[11px]" style={{ color: il ? 'rgba(0,0,0,0.40)' : 'rgba(255,255,255,0.35)' }}>Section culturelle</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2 leading-tight" style={{ color: il ? cat.color : '#fff' }}>
            {data?.title ?? 'Kultur'}
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: il ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.45)' }}>{data?.intro}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar ── */}
          <aside className="lg:w-60 shrink-0">
            <div className="lg:sticky lg:top-[72px]">
              <div className="text-[9px] font-black uppercase tracking-widest px-1 mb-3"
                style={{ color: il ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.30)' }}>
                Catégories
              </div>
              <nav className="space-y-1">
                {CATEGORIES.map(c => {
                  const isActive = activeCat === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => handleCatChange(c.id)}
                      className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer"
                      style={{
                        background: isActive ? `${c.color}18` : (il ? 'transparent' : 'transparent'),
                        border: isActive ? `1px solid ${c.color}40` : '1px solid transparent',
                      }}
                    >
                      <span className="text-base shrink-0">{c.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-bold truncate"
                          style={{ color: isActive ? c.color : (il ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.55)') }}>
                          {c.label}
                        </div>
                        <div className="text-[10px] truncate"
                          style={{ color: il ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.25)' }}>
                          {c.labelFr}
                        </div>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Decorative language card */}
              <div className="mt-6 p-4 rounded-2xl"
                style={{ background: il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.02)', border: il ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-[9px] font-black uppercase tracking-widest mb-2"
                  style={{ color: il ? 'rgba(0,0,0,0.30)' : 'rgba(255,255,255,0.25)' }}>Le saviez-vous ?</div>
                <p className="text-[11px] leading-relaxed" style={{ color: il ? 'rgba(0,0,0,0.50)' : 'rgba(255,255,255,0.40)' }}>
                  La langue allemande reflète sa culture : "<span className="font-semibold" style={{ color: il ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.70)' }}>Gemütlichkeit</span>" (convivialité chaleureuse) et "<span className="font-semibold" style={{ color: il ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.70)' }}>Schadenfreude</span>" (plaisir face au malheur d'autrui) n'ont pas d'équivalent exact en français.
                </p>
              </div>
            </div>
          </aside>

          {/* ── Content ── */}
          <main ref={contentRef} className="flex-1 min-w-0">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
                style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}>
                {cat.icon}
              </div>
              <div>
                <h2 className="font-black text-lg leading-tight" style={{ color: il ? cat.color : '#fff' }}>{cat.label}</h2>
                <div className="text-[11px]" style={{ color: cat.color }}>{cat.labelFr}</div>
              </div>
              <div className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}25` }}>
                {data?.articles?.length ?? 0} articles
              </div>
            </div>

            {/* Articles */}
            <div className="space-y-4">
              {data?.articles?.map(article => (
                <ArticleCard key={article.id} article={article} color={cat.color} il={il} />
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-10 flex items-center justify-between pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                {CATEGORIES.findIndex(c => c.id === activeCat) > 0 && (() => {
                  const prev = CATEGORIES[CATEGORIES.findIndex(c => c.id === activeCat) - 1];
                  return (
                    <button onClick={() => handleCatChange(prev.id)}
                      className="flex items-center gap-2 text-xs font-bold transition-opacity hover:opacity-80"
                      style={{ color: prev.color }}>
                      ← {prev.label}
                    </button>
                  );
                })()}
              </div>
              <div>
                {CATEGORIES.findIndex(c => c.id === activeCat) < CATEGORIES.length - 1 && (() => {
                  const next = CATEGORIES[CATEGORIES.findIndex(c => c.id === activeCat) + 1];
                  return (
                    <button onClick={() => handleCatChange(next.id)}
                      className="flex items-center gap-2 text-xs font-bold transition-opacity hover:opacity-80"
                      style={{ color: next.color }}>
                      {next.label} →
                    </button>
                  );
                })()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Kultur;
