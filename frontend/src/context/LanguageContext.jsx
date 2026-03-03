import { createContext, useContext, useState } from 'react';

/* ─────────────────────────────────────────────────────────────── */
/*  Translations — EN | DE                                         */
/* ─────────────────────────────────────────────────────────────── */
const T = {
  EN: {
    nav: {
      home:          'Home',
      levels:        'Levels',
      vocabulary:    'Vocabulary',
      exercises:     'Exercises',
      opportunities: 'Opportunities',
      community:     'Community',
      start:         'Get Started →',
      profile:       'Profile',
      logout:        'Log out',
    },
    home: {
      badge:       'Learn German — free for everyone',
      h1a:         'Learn German',
      h1b:         'for everyone.',
      subtitle:    'The free platform to learn German — lessons, vocabulary and exercises for all.',
      subtitleDe:  'Die kostenlose Deutschlernplattform für alle.',
      cta1:        'Start now',
      cta2:        'Browse vocabulary',
      xpLabel:     (xp, lvl) => `${xp} XP earned · Level ${lvl}`,
      openBtn:     'Open →',
      categories:  ['All', 'A1', 'A2', 'Grammar', 'Vocabulary', 'Exercises', 'Lists'],
      cards: [
        { title: 'Beginner — A1',          desc: '6 lessons — greetings, numbers, family, colours…',          tag: 'A1 · 6 lessons'   },
        { title: 'Full Vocabulary',         desc: '500+ words grouped by topic — body, food, work…',           tag: '500+ words'        },
        { title: 'Interactive Exercises',   desc: 'Multiple choice, fill-in-the-blank — learn by doing.',      tag: 'Interactive'       },
        { title: 'Intermediate — A2',       desc: '5 lessons — work, city, weather, health…',                  tag: 'A2 · 5 lessons'   },
        { title: 'German Grammar',          desc: 'der / die / das — articles, conjugation, cases explained.', tag: 'Grammar'           },
        { title: 'Thematic Lists',          desc: 'Families, colours, jobs, human body — 500+ words.',         tag: 'Lists'             },
        { title: 'Progress System',         desc: 'Earn XP every lesson, level up as you improve.',            tag: 'Gamification'      },
        { title: 'Start German',            desc: 'First words, greetings, numbers — perfect for beginners.',  tag: 'A1 · Beginner'    },
      ],
      footerLinks: ['Lessons', 'Vocabulary', 'Exercises', 'Profile'],
    },
    levels: {
      pageTitle:   'Levels',
      pageDecor:   'NIVEAU',
      pageSubtitle:'Choose your level and start learning.',
      progressLabel:'Progress',
      noLessons:   'No lessons available.',
      lessonLabel: 'Lesson',
      levels: [
        {
          name:    'Beginner',
          nameDe:  'Anfänger',
          desc:    'Start German — greetings, numbers, family…',
          descDe:  'Beginnen Sie mit den Grundlagen der deutschen Sprache.',
        },
        {
          name:    'Intermediate',
          nameDe:  'Grundkenntnisse',
          desc:    'Build on A1 — work, city, weather, health…',
          descDe:  'Aufbauend auf A1 — Alltag, Arbeit, Gesundheit…',
        },
      ],
    },
    vocabulary: {
      pageTitle:   'Vocabulary',
      pageDecor:   'WÖRTER',
      pageSubtitle:'500+ German words grouped by topic.',
      searchPlaceholder: 'Search a word…',
      filterAll:   'All',
      learned:     'Learned',
      notLearned:  'To learn',
      tapHint:     'Click to flip',
      deutsch:     'Deutsch',
      english:     'English',
      example:     'Example',
      learnedBadge:'Learned ✓',
      progress:    (n, t) => `${n} / ${t} words learned`,
      xpEarned:    (x) => `+${x} XP`,
    },
    exercises: {
      pageTitle:   'Exercises',
      pageDecor:   'QUIZ',
      pageSubtitle:'Test your knowledge with interactive exercises.',
      allFilter:   'All',
      score:       'Score',
      correct:     'Correct!',
      wrong:       'Wrong:',
      nextBtn:     'Next →',
      finishBtn:   'Finish',
      xpLabel:     (x) => `+${x} XP`,
      statsTitle:  'Results',
      statXP:      'Total XP',
      statCorrect: 'Correct answers',
      statLessons: 'Exercises completed',
    },
    login: {
      pageDecor:   'DEUTSCH',
      title:       'Sign in',
      subtitle:    'Sign in to continue your learning journey.',
      emailLabel:  'Email address',
      emailPH:     'your@email.com',
      passLabel:   'Password',
      passPH:      '••••••••',
      submitBtn:   'Sign in',
      loadingBtn:  'Signing in…',
      googleBtn:   'Continue with Google',
      orDivider:   'or',
      switchToReg: "No account? Sign up",
      regTitle:    'Create an account',
      regSubtitle: 'Join DeutschLearn — free forever.',
      nameLabel:   'Full name',
      namePH:      'Your name',
      confirmLabel:'Confirm password',
      confirmPH:   '••••••••',
      regBtn:      'Create account',
      regLoading:  'Creating…',
      switchToLog: 'Already have an account? Sign in',
      guestBtn:    'Continue without account →',
    },
    profile: {
      pageDecor:   'PROFIL',
      statsTitle:  'Statistics',
      achievTitle: 'Achievements',
      settingsTitle:'Settings',
      dangerTitle: 'Danger zone',
      nameLabel:   'Name',
      emailLabel:  'Email',
      saveBtn:     'Save',
      logoutBtn:   'Log out',
      deleteBtn:   'Delete account',
      xpStat:      'Total XP',
      lessonsStat: 'Lessons',
      exercisesStat:'Exercises',
      levelStat:   'Level',
    },
    footer: {
      nav:      'Navigation',
      levels:   'Levels',
      info:     'About',
      madeFor:  'For everyone',
      multilang:'Multilingual interface',
      openSource:'Open source',
      noAds:    'No ads',
      copy:     (y) => `© ${y} DeutschLearn`,
    },
  },

  /* ────────────────────────────── DEUTSCH ───────────────────────── */
  DE: {
    nav: {
      home:          'Startseite',
      levels:        'Niveaus',
      vocabulary:    'Wortschatz',
      exercises:     'Übungen',
      opportunities: 'Möglichkeiten',
      community:     'Community',
      start:         'Starten →',
      profile:       'Profil',
      logout:        'Abmelden',
    },
    home: {
      badge:       'The German learning platform for everyone',
      h1a:         'Lernen Sie Deutsch',
      h1b:         'für alle.',
      subtitle:    'Die kostenlose Plattform für alle — Lektionen, Wortschatz und Übungen.',
      subtitleDe:  'Learn German — free forever.',
      cta1:        'Jetzt starten',
      cta2:        'Wortschatz ansehen',
      xpLabel:     (xp, lvl) => `${xp} XP erreicht · Niveau ${lvl}`,
      openBtn:     'Öffnen →',
      categories:  ['Alle', 'A1', 'A2', 'Grammatik', 'Wortschatz', 'Übungen', 'Listen'],
      cards: [
        { title: 'Anfänger — A1',         desc: '6 Lektionen — Begrüßung, Zahlen, Familie, Farben…',            tag: 'A1 · 6 Lektionen' },
        { title: 'Vollständiger Wortschatz', desc: '500+ Wörter nach Thema — Körper, Essen, Arbeit…',           tag: '500+ Wörter'      },
        { title: 'Interaktive Übungen',   desc: 'Multiple Choice, Lückentexte — Lernen macht Spaß.',            tag: 'Interaktiv'       },
        { title: 'Fortgeschrittene — A2', desc: '5 Lektionen — Arbeit, Stadt, Wetter, Gesundheit…',             tag: 'A2 · 5 Lektionen' },
        { title: 'Deutsche Grammatik',    desc: 'der / die / das — Artikel, Konjugation, Fälle einfach erklärt.',tag: 'Grammatik'       },
        { title: 'Thematische Listen',    desc: 'Familien, Farben, Berufe, Körper — 500+ Wörter.',              tag: 'Listen'           },
        { title: 'Fortschrittssystem',    desc: 'Verdiene XP bei jeder Lektion, steige im Level auf.',          tag: 'Gamification'     },
        { title: 'Deutsch beginnen',      desc: 'Erste Wörter, Begrüßung, Zahlen — perfekt für Anfänger.',      tag: 'A1 · Anfänger'   },
      ],
      footerLinks: ['Lektionen', 'Wortschatz', 'Übungen', 'Profil'],
    },
    levels: {
      pageTitle:   'Niveaus',
      pageDecor:   'NIVEAU',
      pageSubtitle:'Wählen Sie Ihr Niveau und beginnen Sie zu lernen.',
      progressLabel:'Fortschritt',
      noLessons:   'Keine Lektionen verfügbar.',
      lessonLabel: 'Lektion',
      levels: [
        {
          name:    'Anfänger',
          nameDe:  'Anfänger',
          desc:    'Beginnen Sie mit Deutsch — Begrüßung, Zahlen, Familie…',
          descDe:  'Beginnen Sie mit den Grundlagen der deutschen Sprache.',
        },
        {
          name:    'Grundkenntnisse',
          nameDe:  'Grundkenntnisse',
          desc:    'Aufbauend auf A1 — Arbeit, Stadt, Wetter, Gesundheit…',
          descDe:  'Aufbauend auf A1 — Alltag, Arbeit, Gesundheit…',
        },
      ],
    },
    vocabulary: {
      pageTitle:   'Wortschatz',
      pageDecor:   'WÖRTER',
      pageSubtitle:'500+ deutsche Wörter nach Thema gruppiert.',
      searchPlaceholder: 'Wort suchen…',
      filterAll:   'Alle',
      learned:     'Gelernt',
      notLearned:  'Zu lernen',
      tapHint:     'Tippen zum Umdrehen',
      deutsch:     'Deutsch',
      english:     'Englisch',
      example:     'Beispiel',
      learnedBadge:'Gelernt ✓',
      progress:    (n, t) => `${n} / ${t} Wörter gelernt`,
      xpEarned:    (x) => `+${x} XP`,
    },
    exercises: {
      pageTitle:   'Übungen',
      pageDecor:   'QUIZ',
      pageSubtitle:'Testen Sie Ihr Wissen mit interaktiven Übungen.',
      allFilter:   'Alle',
      score:       'Punktzahl',
      correct:     'Richtig !',
      wrong:       'Falsch :',
      nextBtn:     'Weiter →',
      finishBtn:   'Fertig',
      xpLabel:     (x) => `+${x} XP`,
      statsTitle:  'Ergebnisse',
      statXP:      'Gesamt-XP',
      statCorrect: 'Richtige Antworten',
      statLessons: 'Übungen abgeschlossen',
    },
    login: {
      pageDecor:   'DEUTSCH',
      title:       'Anmelden',
      subtitle:    'Melden Sie sich an, um Ihr Lernen fortzusetzen.',
      emailLabel:  'E-Mail-Adresse',
      emailPH:     'ihre@email.com',
      passLabel:   'Passwort',
      passPH:      '••••••••',
      submitBtn:   'Anmelden',
      loadingBtn:  'Laden…',
      googleBtn:   'Mit Google fortfahren',
      orDivider:   'oder',
      switchToReg: 'Kein Konto? Registrieren',
      regTitle:    'Konto erstellen',
      regSubtitle: 'Treten Sie DeutschLearn bei — für immer kostenlos.',
      nameLabel:   'Vollständiger Name',
      namePH:      'Ihr Name',
      confirmLabel:'Passwort bestätigen',
      confirmPH:   '••••••••',
      regBtn:      'Konto erstellen',
      regLoading:  'Erstellen…',
      switchToLog: 'Schon ein Konto? Anmelden',
      guestBtn:    'Ohne Konto fortfahren →',
    },
    profile: {
      pageDecor:   'PROFIL',
      statsTitle:  'Statistiken',
      achievTitle: 'Erfolge',
      settingsTitle:'Einstellungen',
      dangerTitle: 'Gefahrenzone',
      nameLabel:   'Name',
      emailLabel:  'E-Mail',
      saveBtn:     'Speichern',
      logoutBtn:   'Abmelden',
      deleteBtn:   'Konto löschen',
      xpStat:      'Gesamt-XP',
      lessonsStat: 'Lektionen',
      exercisesStat:'Übungen',
      levelStat:   'Niveau',
    },
    footer: {
      nav:      'Navigation',
      levels:   'Niveaus',
      info:     'Über uns',
      madeFor:  'Für alle',
      multilang:'Mehrsprachige Oberfläche',
      openSource:'Open Source',
      noAds:    'Keine Werbung',
      copy:     (y) => `© ${y} DeutschLearn`,
    },
  },
};

/* ─────────────────────────────────────────────────────────────── */
const LanguageContext = createContext(null);
const STORAGE_KEY = 'deutschmg_lang';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return (saved === 'MG' || saved === 'FR') ? 'EN' : (saved || 'EN');
    } catch { return 'EN'; }
  });

  const changeLang = (code) => {
    setLang(code);
    try { localStorage.setItem(STORAGE_KEY, code); } catch { /* noop */ }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t: T[lang] ?? T.EN, allLangs: ['EN', 'DE'] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider');
  return ctx;
};

export default LanguageContext;
