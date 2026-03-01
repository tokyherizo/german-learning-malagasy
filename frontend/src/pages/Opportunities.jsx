import { useState } from 'react';

/* ─── Data ─────────────────────────────────────────────────── */
const PROGRAMS = [
  {
    id: 'ausbildung',
    tag: 'Formation',
    tagColor: '#818cf8',
    title: 'Ausbildung',
    subtitle: 'Formation professionnelle duale',
    bigWord: 'AUSB.',
    summary:
      "L'Ausbildung est un système unique en Allemagne : 70 % pratique en entreprise + 30 % cours à l'école. Durée : 2 à 3,5 ans. À la fin, tu obtiens un diplôme reconnu dans toute l'UE.",
    conditions: [
      'Minimum 18 ans (certains dès 16 ans)',
      'Diplôme équivalent au Bac ou BEP selon la filière',
      'Titre de séjour valide ou visa D',
      'Casier judiciaire vierge',
    ],
    level: { code: 'B1–C2', label: 'B1 minimum, B2 recommandé', color: '#7e90f4' },
    advantages: [
      'Salaire mensuel : 900 € – 1 200 € pendant la formation',
      'Logement & transports parfois pris en charge',
      'Permis de résidence automatique pendant 3 ans',
      'Accès direct à l\'emploi à la fin',
      'Diplôme reconnu dans toute l\'Europe',
    ],
    steps: [
      { n: 1, text: 'Chercher une offre sur make-it-in-germany.com ou ausbildung.de' },
      { n: 2, text: 'Envoyer un CV + lettre de motivation en allemand' },
      { n: 3, text: 'Demander le visa « Berufsausbildung » à l\'ambassade' },
      { n: 4, text: 'S\'inscrire à la Berufsschule après arrivée' },
    ],
    links: [
      { label: 'make-it-in-germany.com', url: 'https://www.make-it-in-germany.com' },
      { label: 'ausbildung.de', url: 'https://www.ausbildung.de' },
    ],
  },
  {
    id: 'studium',
    tag: 'Études',
    tagColor: '#34d399',
    title: 'Studium',
    subtitle: 'Études universitaires en Allemagne',
    bigWord: 'UNI',
    summary:
      'Les universités publiques allemandes sont gratuites (frais de semestre ~300 €). Plus de 19 000 programmes disponibles, dont beaucoup en anglais. Classées parmi les meilleures au monde.',
    conditions: [
      'Baccalauréat ou équivalent reconnu (APS obligatoire pour certains pays)',
      'Dossier académique solide',
      'Preuve de ressources : 11 208 € sur un compte bloqué (Sperrkonto)',
      'Assurance maladie obligatoire',
    ],
    level: { code: 'B2–C1', label: 'B2 pour cours en allemand, B2/C1 requis', color: '#34d399' },
    advantages: [
      'Frais de scolarité quasiment nuls (publiques)',
      'Visa étudiant permet de travailler 120 jours/an',
      'Accès au marché européen après diplôme',
      '18 mois pour chercher un emploi après diplôme (Job-Seeker)',
      'Bibliothèques, ÖPNV à tarif réduit avec la Semesterticket',
    ],
    steps: [
      { n: 1, text: 'Choisir une université sur uni-assist.de ou hochschulstart.de' },
      { n: 2, text: 'Faire évaluer ton diplôme (APS pour certains pays africains/asiatiques)' },
      { n: 3, text: 'Ouvrir un Sperrkonto (compte bloqué) chez Fintiba ou Coracle' },
      { n: 4, text: 'Demander le visa étudiant à l\'ambassade allemande' },
    ],
    links: [
      { label: 'uni-assist.de', url: 'https://www.uni-assist.de' },
      { label: 'daad.de', url: 'https://www.daad.de' },
    ],
  },
  {
    id: 'bluecard',
    tag: 'Emploi qualifié',
    tagColor: '#38bdf8',
    title: 'Blue Card EU',
    subtitle: 'Carta Blu per professionisti qualificati',
    bigWord: 'BLUE',
    summary:
      'La Blue Card EU est un titre de séjour pour les travailleurs hautement qualifiés. Elle mène à la résidence permanente en 21 mois (avec B1 allemand) ou 33 mois.',
    conditions: [
      'Diplôme universitaire reconnu (Licence et +)',
      'Contrat de travail en Allemagne',
      'Salaire minimum : 43 800 € brut/an (MINT : 38 688 €)',
      'Pas de restriction de nationalité',
    ],
    level: { code: 'Sans exigence', label: 'Pas d\'exigence officielle, B1 accélère la RP', color: '#38bdf8' },
    advantages: [
      'Permis de résidence permanente en 21 mois (B1 allemand)',
      'Famille peut venir immédiatement (pas de liste d\'attente)',
      'Mobilité dans l\'espace Schengen',
      'Change facilement d\'employeur après 2 ans',
      'Naturalisation possible après 5 ans',
    ],
    steps: [
      { n: 1, text: 'Obtenir une offre d\'emploi avec contrat signé' },
      { n: 2, text: 'Faire reconnaître ton diplôme (anabin.kmk.org)' },
      { n: 3, text: 'Demander la Blue Card à la Ausländerbehörde après arrivée' },
      { n: 4, text: 'S\'inscrire à l\'Einwohnermeldeamt (Anmeldung) dans les 14 jours' },
    ],
    links: [
      { label: 'make-it-in-germany.com/Blue-Card', url: 'https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card' },
      { label: 'anabin.kmk.org', url: 'https://anabin.kmk.org' },
    ],
  },
  {
    id: 'aupair',
    tag: 'Au Pair',
    tagColor: '#fb923c',
    title: 'Au Pair',
    subtitle: 'Vivre en famille, apprendre l\'allemand',
    bigWord: 'AU P.',
    summary:
      'Le programme Au Pair te permet de vivre dans une famille allemande en échange d\'aide avec les enfants. Idéal pour apprendre la langue et découvrir la culture avant de s\'installer.',
    conditions: [
      '18 à 26 ans',
      'Pas encore marié(e)',
      'Minimum 6 mois (maximum 18 mois)',
      'Quelques connaissances de base en allemand',
      'Expérience avec les enfants appréciée',
    ],
    level: { code: 'A1–A2', label: 'A1 minimum, cours pris en charge par la famille', color: '#fb923c' },
    advantages: [
      'Logement + repas gratuits chez la famille',
      'Argent de poche : 280 € / mois minimum',
      'Cours d\'allemand financés par la famille (50 €/mois)',
      'Couverture assurance maladie obligatoire',
      'Expérience culturelle immersive',
    ],
    steps: [
      { n: 1, text: 'Trouver une famille via aupair.com, aupairworld.com ou aupair-vermittlung.de' },
      { n: 2, text: 'Signer un contrat Au Pair officiel' },
      { n: 3, text: 'Demander le visa « Au Pair » à l\'ambassade' },
      { n: 4, text: 'S\'inscrire à des cours d\'allemand dès l\'arrivée' },
    ],
    links: [
      { label: 'aupairworld.com', url: 'https://www.aupairworld.com' },
      { label: 'aupair-vermittlung.de', url: 'https://www.aupair-vermittlung.de' },
    ],
  },
  {
    id: 'fsj',
    tag: 'Volontariat',
    tagColor: '#a78bfa',
    title: 'FSJ / BFD',
    subtitle: 'Service volontaire pour jeunes',
    bigWord: 'FSJ',
    summary:
      'Le FSJ (Freiwilliges Soziales Jahr) et le BFD (Bundesfreiwilligendienst) sont des services volontaires de 6 à 18 mois dans le domaine social, écologique ou culturel. Très apprécié pour la suite.',
    conditions: [
      'FSJ : 16 à 26 ans // BFD : tout âge',
      'Niveau d\'allemand B1+ obligatoire',
      'Motivation et esprit de service',
      'Visa D « volontaire » requis hors UE',
    ],
    level: { code: 'B1+', label: 'B1 obligatoire, B2 fortement recommandé', color: '#a78bfa' },
    advantages: [
      'Logement, repas, assurance couverts',
      'Allocation mensuelle : 200 € – 700 €',
      'Cours d\'allemand inclus (Seminartage)',
      'Renforce ton CV pour Ausbildung/Studium',
      'Intégration facile dans la communauté',
    ],
    steps: [
      { n: 1, text: 'Chercher un poste sur ijgd.de, caritas.de ou diakonisches-werk.de' },
      { n: 2, text: 'Postuler directement auprès de l\'organisation porteuse' },
      { n: 3, text: 'Obtenir une lettre de confirmation du poste' },
      { n: 4, text: 'Demander le visa volontaire à l\'ambassade' },
    ],
    links: [
      { label: 'fsj.de', url: 'https://www.fsj.de' },
      { label: 'bundesfreiwilligendienst.de', url: 'https://www.bundesfreiwilligendienst.de' },
    ],
  },
  {
    id: 'jobseeker',
    tag: 'Visa Emploi',
    tagColor: '#fbbf24',
    title: 'Job-Seeker Visa',
    subtitle: 'Venir chercher un emploi en Allemagne',
    bigWord: 'JOBS',
    summary:
      'Le visa de recherche d\'emploi permet de séjourner 6 mois en Allemagne pour trouver un travail qualifié. Tu n\'as pas besoin d\'un contrat avant de partir !',
    conditions: [
      'Diplôme universitaire ou Ausbildung reconnu en Allemagne',
      'Financement prouvé pour 6 mois (~9 000 €)',
      'Assurance maladie voyage valable 6 mois',
      'Aucune obligation d\'emploi préalable',
    ],
    level: { code: 'B1–B2', label: 'B1 pour le quotidien, B2+ préféré par les employeurs', color: '#fbbf24' },
    advantages: [
      '6 mois pour chercher activement un emploi sur place',
      'Si emploi trouvé : transformation directe en titre de séjour travail',
      'Permet de passer des entretiens en présentiel',
      'Accès aux événements de recrutement (Jobmesse)',
      'Connaissance directe du marché local',
    ],
    steps: [
      { n: 1, text: 'Faire reconnaître ton diplôme (anabin.kmk.org ou IHK)' },
      { n: 2, text: 'Réunir les justificatifs financiers (relevé de compte ou garantie)' },
      { n: 3, text: 'Demander le visa « Arbeitsplatzsuche » à l\'ambassade' },
      { n: 4, text: 'Arriver et s\'inscrire à l\'Agentur für Arbeit' },
    ],
    links: [
      { label: 'make-it-in-germany.com/jobseeker', url: 'https://www.make-it-in-germany.com/en/visa-residence/types/jobseeker' },
      { label: 'arbeitsagentur.de', url: 'https://www.arbeitsagentur.de' },
    ],
  },
];

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B1–B2', 'B2–C1', 'Blue Card', 'Sans exigence', 'B1+'];

const TAG_FILTERS = ['Tous', 'Formation', 'Études', 'Emploi qualifié', 'Au Pair', 'Volontariat', 'Visa Emploi'];

/* ─── Sub-components ─────────────────────────────────────────── */

const LevelBadge = ({ code, color }) => (
  <span
    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold"
    style={{ background: color + '18', color, border: `1px solid ${color}33` }}
  >
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />
    {code}
  </span>
);

const StepDot = ({ n, color }) => (
  <div
    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
    style={{ background: color + '18', color, border: `1px solid ${color}35` }}
  >
    {n}
  </div>
);

const ProgramCard = ({ prog, expanded, onToggle }) => {
  const c = prog.tagColor;
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: '#111',
        border: `1px solid ${expanded ? c + '40' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: expanded ? `0 0 32px ${c}12` : 'none',
      }}
    >
      {/* Card header — always visible */}
      <button
        className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors"
        onClick={onToggle}
        style={{ background: 'transparent' }}
      >
        {/* Big decorative letter */}
        <div
          className="hidden sm:flex shrink-0 w-16 h-16 rounded-xl items-center justify-center font-black text-lg select-none"
          style={{ background: c + '14', color: c, border: `1px solid ${c}28`, letterSpacing: '-0.04em' }}
        >
          {prog.bigWord.length > 4 ? prog.bigWord.slice(0, 4) : prog.bigWord}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ background: c + '18', color: c, border: `1px solid ${c}30` }}
            >
              {prog.tag}
            </span>
            <LevelBadge code={prog.level.code} color={prog.level.color} />
          </div>
          <h3 className="text-lg font-black text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {prog.title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>{prog.subtitle}</p>
        </div>
        {/* Chevron */}
        <div
          className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200"
          style={{
            background: expanded ? c + '18' : 'rgba(255,255,255,0.05)',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke={expanded ? c : 'rgba(255,255,255,0.4)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Summary — always visible below header */}
      <div className="px-6 pb-4 -mt-1">
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {prog.summary}
        </p>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div
          className="px-6 pb-6 grid gap-6"
          style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, paddingTop: 20 }}
        >
          {/* 4-column info grid */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Conditions */}
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Conditions requises
              </div>
              <ul className="space-y-1.5">
                {prog.conditions.map((c2, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: c }}>▸</span>
                    {c2}
                  </li>
                ))}
              </ul>
            </div>

            {/* Niveau + Avantages */}
            <div className="flex flex-col gap-3">
              {/* Niveau */}
              <div
                className="p-3 rounded-xl flex items-center gap-3"
                style={{ background: c + '10', border: `1px solid ${c}25` }}
              >
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-black text-xs" style={{ background: c + '20', color: c }}>
                  DE
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color: c + 'aa' }}>Niveau requis</div>
                  <div className="text-sm font-bold text-white">{prog.level.label}</div>
                </div>
              </div>

              {/* Avantages */}
              <div
                className="p-4 rounded-xl flex-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Avantages
                </div>
                <ul className="space-y-1.5">
                  {prog.advantages.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#4ade80' }}>✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Comment postuler */}
          <div
            className="p-4 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Comment postuler — étapes
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {prog.steps.map((s) => (
                <div key={s.n} className="flex items-start gap-2.5">
                  <StepDot n={s.n} color={c} />
                  <span className="text-xs pt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.60)' }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Liens utiles */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest self-center" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Liens utiles :
            </span>
            {prog.links.map((lk) => (
              <a
                key={lk.url}
                href={lk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-lg transition-opacity hover:opacity-80"
                style={{ background: c + '18', color: c, border: `1px solid ${c}30` }}
              >
                {lk.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Page ───────────────────────────────────────────────────── */
const Opportunities = () => {
  const [activeTag, setActiveTag] = useState('Tous');
  const [expanded, setExpanded] = useState(null);

  const filtered = activeTag === 'Tous'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.tag === activeTag);

  const toggle = (id) => setExpanded(prev => (prev === id ? null : id));

  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', paddingTop: '52px' }}>

      {/* ── Hero ── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Decorative background text */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(4rem,15vw,9rem)', color: 'rgba(255,255,255,0.025)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          DEUTSCHLAND
        </div>

        {/* Decorative flag colors */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ background: '#1a1a1a' }} />
          <div className="flex-1" style={{ background: '#cc0000' }} />
          <div className="flex-1" style={{ background: '#ffcc00' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
            OPPORTUNITÉS EN ALLEMAGNE
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-3" style={{ letterSpacing: '-0.03em' }}>
            <span className="text-white">Germany </span>
            <span style={{ color: '#818cf8' }}>Opportunities</span>
          </h1>
          <p className="text-sm max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Tous les programmes disponibles pour s&apos;installer, étudier, se former ou travailler en Allemagne.
            Conditions claires, niveaux requis, avantages et étapes pour postuler.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            {[
              { value: PROGRAMS.length, label: 'Programmes', color: '#818cf8' },
              { value: 'A1 → C2', label: 'Niveaux couverts', color: '#34d399' },
              { value: 'Gratuit', label: 'Accès aux infos', color: '#fbbf24' },
            ].map(({ value, label, color }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="text-2xl font-black" style={{ color }}>{value}</div>
                <div className="text-[11px] leading-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter chips ── */}
      <div
        className="sticky z-40 flex items-center justify-center gap-2 overflow-x-auto px-6 py-3 no-scrollbar"
        style={{ top: '52px', background: 'rgba(13,13,13,0.96)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
      >
        {TAG_FILTERS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
            style={{
              background: activeTag === tag ? '#fff' : 'rgba(255,255,255,0.06)',
              color: activeTag === tag ? '#0d0d0d' : 'rgba(255,255,255,0.55)',
              border: activeTag === tag ? '1px solid #fff' : '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Tip banner */}
        <div
          className="mb-8 flex items-start gap-3 px-5 py-4 rounded-2xl text-xs leading-relaxed"
          style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.18)', color: 'rgba(255,255,255,0.55)' }}
        >
          <span className="text-base shrink-0">💡</span>
          <span>
            <strong className="text-white">Conseil :</strong> Chaque programme indique le niveau d&apos;allemand requis.
            Continue à apprendre avec <strong className="text-white">DeutschMG</strong> pour atteindre le niveau souhaité avant de postuler.
          </span>
        </div>

        {/* Program list */}
        <div className="grid gap-4">
          {filtered.map(prog => (
            <ProgramCard
              key={prog.id}
              prog={prog}
              expanded={expanded === prog.id}
              onToggle={() => toggle(prog.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <div className="text-4xl font-black mb-2">?</div>
            <div className="text-sm">Aucun programme trouvé pour ce filtre.</div>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-12 p-8 rounded-3xl text-center"
          style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="font-black mb-2 select-none"
            style={{ fontSize: 'clamp(2.5rem,8vw,4rem)', color: 'rgba(129,140,248,0.15)', letterSpacing: '-0.04em' }}
          >
            DEIN WEG
          </div>
          <h3 className="text-xl font-black text-white mb-2">Ton chemin commence ici</h3>
          <p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.40)' }}>
            La plupart des programmes exigent au minimum le niveau B1. Continue à pratiquer chaque jour pour y arriver.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/lessons"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: '#818cf8', color: '#fff' }}
            >
              Commencer les leçons →
            </a>
            <a
              href="https://www.make-it-in-germany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.70)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              make-it-in-germany.com ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
