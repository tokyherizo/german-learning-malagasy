import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

const StatCard = ({ icon, value, label, color }) => (
  <div className={`flex flex-col items-center border ${color} rounded-2xl p-5 text-center hover:scale-105 transition-transform`}
    style={{ background: 'var(--bg-card)', backdropFilter: 'blur(20px)' }}>
    <span className="text-3xl mb-2">{icon}</span>
    <span className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>{value}</span>
    <span className="text-xs uppercase tracking-wide mt-1" style={{ color: 'var(--text-muted)' }}>{label}</span>
  </div>
);

const FeatureCard = ({ icon, title, desc, color, delay }) => (
  <div className={`animate-fade-up delay-${delay} glass-card p-6 transition-all duration-300 card-hover`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${color}`}>
      {icon}
    </div>
    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
  </div>
);

const Home = () => {
  const [progress] = useState(() => progressService.getProgress());
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimIn(true), 100);
  }, []);

  const accuracyRate = progressService.getAccuracyRate();

  return (
    <div className="min-h-screen pt-[68px]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/6 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/6 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-700 ${animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8" style={{ background: 'var(--accent-soft)', border: '1px solid var(--border-card)' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                🇩🇪 Alemà • Malagasy 🇲🇬
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-grad">Mianara Alemà</span>
              <br />
              <span className="text-white/90">amin'ny Malagasy</span>
            </h1>

            <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-4 leading-relaxed">
              Plateforme maimaim-poana ho an'ny Malagasy mianatra ny teny Alemà —
              miaraka amin'ny lesona, fanazaran-tsaina ary teny maro.
            </p>
            <p className="text-sm text-white/30 italic mb-10">
              Die kostenlose Lernplattform für Madagassen, die Deutsch lernen wollen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/levels" className="btn-grad flex items-center gap-2 px-8 py-3.5 rounded-2xl text-base">
                Atombohy Izao
              </Link>
              <Link to="/vocabulary"
                className="flex items-center gap-2 font-semibold px-8 py-3.5 rounded-2xl text-base transition-all duration-200"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' }}>
                Hijery Teny
              </Link>
            </div>
          </div>

          {/* Floating flags */}
          <div className="flex justify-center gap-8 mt-14">
            {['🇩🇪', '⟷', '🇲🇬'].map((f, i) => (
              <span key={i} className={`text-4xl md:text-5xl animate-float delay-${i * 200} ${i === 1 ? 'text-white/30 text-2xl' : ''}`}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress Overview (if started) ── */}
      {progress && progress.stats.totalXP > 0 && (
        <section className="py-10 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              📈 <span>Fandrosoanao / Dein Fortschritt</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <StatCard icon="⚡" value={progress.stats.totalXP} label="XP Total" color="border-indigo-400/20" />
              <StatCard icon="📚" value={progress.stats.lessonsCompleted} label="Lesona" color="border-violet-400/20" />
              <StatCard icon="✏️" value={progress.stats.exercisesCompleted} label="Fanazaran-tsaina" color="border-sky-400/20" />
              <StatCard icon="🎯" value={`${accuracyRate}%`} label="Fahamarinana" color="border-green-400/20" />
            </div>
            <ProgressBar
              value={progress.stats.totalXP}
              max={progressService.getXPForNextLevel()}
              label={`Ambaratonga ${progress.level}`}
              sublabel={`${progress.stats.totalXP} / ${progressService.getXPForNextLevel()} XP`}
              color="gold"
              size="large"
            />
          </div>
        </section>
      )}

      {/* ── Levels Preview ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Ambaratonga / <span className="text-grad">Niveaus</span>
            </h2>
            <p className="text-white/45 text-sm">Atombohy amin'ny A1 — safidinao ny haingananao</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* A1 */}
            <Link to="/levels" className="group glass-card p-8 border-indigo-400/15 hover:border-indigo-400/40 transition-all duration-300 card-hover text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_65%)] pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/12 border border-indigo-400/25 rounded-full px-4 py-1 mb-4">
                <span className="text-xl font-black text-indigo-400">A1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fanombohana / Anfänger</h3>
              <p className="text-sm text-white/45 mb-5 leading-relaxed">
                Atombohy ny fianarana — miarahaba, isa, fianakaviana, loko...
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div><div className="text-lg font-bold text-indigo-400">6</div><div className="text-[10px] text-white/35">Lesona</div></div>
                <div><div className="text-lg font-bold text-indigo-400">80+</div><div className="text-[10px] text-white/35">Teny</div></div>
                <div><div className="text-lg font-bold text-indigo-400">12</div><div className="text-[10px] text-white/35">Fanazaran</div></div>
              </div>
            </Link>

            {/* A2 */}
            <Link to="/levels" className="group glass-card p-8 border-violet-400/15 hover:border-violet-400/40 transition-all duration-300 card-hover text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06),transparent_65%)] pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-violet-500/15 border border-violet-400/25 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform">
                🔥
              </div>
              <div className="inline-flex items-center gap-2 bg-violet-500/12 border border-violet-400/25 rounded-full px-4 py-1 mb-4">
                <span className="text-xl font-black text-violet-400">A2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mioha / Grundkenntnisse</h3>
              <p className="text-sm text-white/45 mb-5 leading-relaxed">
                Haavela amin'ny A1 — asa, tanàna, toetr'andro, fahasalamana...
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div><div className="text-lg font-bold text-violet-400">5</div><div className="text-[10px] text-white/35">Lesona</div></div>
                <div><div className="text-lg font-bold text-violet-400">100+</div><div className="text-[10px] text-white/35">Teny</div></div>
                <div><div className="text-lg font-bold text-violet-400">8</div><div className="text-[10px] text-white/35">Fanazaran</div></div>
              </div>
            </Link>

            {/* B1 */}
            <div className="glass-card p-8 border-white/6 opacity-50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mx-auto mb-5">
                ⭐
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-4">
                <span className="text-xl font-black text-white/40">B1</span>
              </div>
              <h3 className="text-lg font-bold text-white/40 mb-2">Manaraka... / Bald...</h3>
              <p className="text-sm text-white/25 mb-5 leading-relaxed">
                Haavela be kokoa — amin'ny ho avy...
              </p>
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <span className="text-xs text-white/30 font-medium">🔒 Manaraka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border-card)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Inona no <span className="text-grad">Misy?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard icon="📚" title="Lesona Structured" desc="Lesona mifanaraka amin'ny ambaratonga CEFR A1/A2 — mora haingana azo."
              color="bg-indigo-500/10 border border-indigo-400/18" delay="100" />
            <FeatureCard icon="📖" title="Vocabulaire Rich" desc="Teny 500+ amin'ny lohahevitra maro — fianakaviana, sakafo, asa, sns."
              color="bg-violet-500/10 border border-violet-400/18" delay="200" />
            <FeatureCard icon="✏️" title="Fanazaran-tsaina" desc="Fanontaniana multiple choice, fenoy banga, adikidika — mampianatra amin'ny fomba mahafinaritra."
              color="bg-purple-500/10 border border-purple-400/18" delay="300" />
            <FeatureCard icon="🏆" title="Fandrosoana XP" desc="Mahazo XP amin'ny lesona sy fanazaran-tsaina — jereo ny fandrosoanao."
              color="bg-sky-500/10 border border-sky-400/18" delay="400" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="grad-card p-10 glow-violet">
            <div className="text-5xl mb-5 animate-float">🇩🇪</div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Vonona ve ianao?
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Atombohy ny dia fianarana ny teny Alemà anio! Tsy misy tamberi, tsy misy fotoana manokana.
            </p>
            <Link to="/levels" className="btn-grad inline-flex items-center gap-2 px-10 py-3.5 rounded-2xl text-base">
              Atombohy Izao — Maimaim-poana!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
