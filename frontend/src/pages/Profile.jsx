import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { progressService } from "../services/progress";
import { useTheme } from "../context/ThemeContext";

const IcoZap    = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IcoFlame  = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>;
const IcoBook   = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;
const IcoPencil = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>;
const IcoType   = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
const IcoTarget = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IcoFlag   = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
const IcoStack  = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IcoClock  = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IcoTrophy = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>;
const IcoStar   = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IcoLogout = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IcoShield = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IcoReset  = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>;
const IcoCheck  = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IcoLock   = ({ s=20,c="currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;

const ALL_ACHIEVEMENTS = [
  { id:"first_lesson",  Icon:IcoFlag,   title:"Première leçon",  desc:"1 leçon terminée",      accent:"#6366f1" },
  { id:"five_lessons",  Icon:IcoStack,  title:"Cinq leçons",      desc:"5 leçons terminées",    accent:"#8b5cf6" },
  { id:"first_words",   Icon:IcoType,   title:"Maître des mots",  desc:"10 mots appris",        accent:"#06b6d4" },
  { id:"hundred_xp",   Icon:IcoZap,    title:"Centaine XP",      desc:"100 XP gagnés",         accent:"#f59e0b" },
  { id:"streak_3",     Icon:IcoClock,  title:"Série de 3 jours", desc:"3 jours consécutifs",   accent:"#ef4444" },
  { id:"perfect_score",Icon:IcoTrophy, title:"Perfection",       desc:"100% bonnes réponses",  accent:"#10b981" },
];

const LEVEL_COLORS  = { A1:"#6366f1", A2:"#8b5cf6", B1:"#06b6d4", B2:"#10b981" };
const XP_THRESHOLDS = { A1:500, A2:1500, B1:3000, B2:6000 };
const LEVEL_ORDER   = ["A1","A2","B1","B2"];

/*  Gauge arc SVG  */
function ArcGauge({ pct, color, size=120, thickness=10 }) {
  const r = (size/2) - thickness;
  const angle = 220;
  const startRad = (180 + (360-angle)/2) * Math.PI/180;
  const arcLen = 2*Math.PI*r*(angle/360);
  const filled = arcLen*(pct/100);
  const sx = size/2 + r*Math.cos(startRad);
  const sy = size/2 + r*Math.sin(startRad);
  const ex = size/2 + r*Math.cos((startRad + 2*Math.PI*(angle/360)));
  const ey = size/2 + r*Math.sin((startRad + 2*Math.PI*(angle/360)));
  const bg = `M ${sx} ${sy} A ${r} ${r} 0 1 1 ${ex} ${ey}`;
  return (
    <svg width={size} height={size} style={{overflow:"visible"}}>
      <path d={bg} fill="none" stroke="rgba(128,128,128,0.13)" strokeWidth={thickness} strokeLinecap="round"/>
      <path d={bg} fill="none" stroke={color} strokeWidth={thickness} strokeLinecap="round"
        strokeDasharray={`${filled} ${arcLen}`}
        style={{transition:"stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1)", filter:`drop-shadow(0 0 6px ${color}99)`}}/>
    </svg>
  );
}

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout, updateProfile, changePassword, error:authError, clearError } = useAuth();
  const { theme } = useTheme();
  const il = theme === "light";
  const progress = progressService.getProgress();

  const [editingName,   setEditingName]   = useState(false);
  const [nameInput,     setNameInput]     = useState(user?.name ?? "");
  const [nameSuccess,   setNameSuccess]   = useState("");
  const nameRef = useRef(null);
  const [showPwForm,    setShowPwForm]    = useState(false);
  const [pwForm,        setPwForm]        = useState({ current:"", next:"", confirm:"" });
  const [pwError,       setPwError]       = useState("");
  const [pwSuccess,     setPwSuccess]     = useState("");
  const [resetConfirm,  setResetConfirm]  = useState(false);

  const accuracy   = progressService.getAccuracyRate();
  const currentLvl = progress.level || "A1";
  const nextLvl    = LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLvl)+1];
  const maxXP      = XP_THRESHOLDS[currentLvl] ?? 500;
  const xpPct      = Math.min(100, Math.round((progress.xp/maxXP)*100));
  const earnedIds  = new Set((progress.achievements||[]).map(a=>a.id));
  const earnedMap  = Object.fromEntries((progress.achievements||[]).map(a=>[a.id,a]));
  const initial    = user?.isGuest ? "?" : (user?.name?.[0] ?? "?").toUpperCase();
  const lvlColor   = LEVEL_COLORS[currentLvl] || "#6366f1";

  /* palette */
  const bg       = il ? "#f0f1f6"              : "#08080e";
  const sideB    = il ? "#ffffff"              : "#0f0f18";
  const sideBd   = il ? "rgba(0,0,0,0.08)"    : "rgba(255,255,255,0.07)";
  const mainB    = il ? "#ffffff"              : "#0f0f18";
  const mainBd   = il ? "rgba(0,0,0,0.08)"    : "rgba(255,255,255,0.07)";
  const txt      = il ? "#0d0d0d"              : "#efefef";
  const txts     = il ? "rgba(0,0,0,0.48)"    : "rgba(255,255,255,0.45)";
  const txtm     = il ? "rgba(0,0,0,0.28)"    : "rgba(255,255,255,0.28)";
  const trackBg  = il ? "rgba(0,0,0,0.07)"    : "rgba(255,255,255,0.07)";
  const inpBg    = il ? "rgba(0,0,0,0.04)"    : "rgba(255,255,255,0.04)";
  const inpBd    = il ? "rgba(0,0,0,0.12)"    : "rgba(255,255,255,0.10)";
  const btnSBg   = il ? "rgba(0,0,0,0.05)"    : "rgba(255,255,255,0.05)";
  const btnSBd   = il ? "rgba(0,0,0,0.10)"    : "rgba(255,255,255,0.10)";
  const btnSCl   = il ? "rgba(0,0,0,0.55)"    : "rgba(255,255,255,0.55)";

  const inp = { background:inpBg, border:`1.5px solid ${inpBd}`, color:txt, borderRadius:12, padding:"11px 16px", fontSize:14, outline:"none", width:"100%", transition:"border-color 0.15s" };

  const handleSaveName = async () => { clearError?.(); setNameSuccess(""); const ok = await updateProfile({ name:nameInput.trim() }); if(ok){ setNameSuccess("Nom mis à jour"); setEditingName(false); } };
  const handleChangePw  = async (e) => { e.preventDefault(); setPwError(""); setPwSuccess(""); if(pwForm.next.length<6){ setPwError("Min. 6 caractères"); return; } if(pwForm.next!==pwForm.confirm){ setPwError("Mots de passe différents"); return; } const ok = await changePassword({ current:pwForm.current, newPass:pwForm.next }); if(ok){ setPwSuccess("Mot de passe changé"); setPwForm({ current:"", next:"", confirm:"" }); setShowPwForm(false); } else { setPwError("Mot de passe actuel incorrect"); } };
  const handleReset  = () => { progressService.resetProgress(); setResetConfirm(false); navigate("/"); };
  const handleLogout = () => { logout(); navigate("/login"); };

  const STAT_ROWS = [
    { Icon:IcoZap,    label:"XP Total",        value:progress.xp,                             max:maxXP,   accent:"#f59e0b", pct:xpPct },
    { Icon:IcoFlame,  label:"Jours de série",  value:progress.streak??0,                      max:30,      accent:"#ef4444", pct:Math.min(100,Math.round(((progress.streak??0)/30)*100)) },
    { Icon:IcoBook,   label:"Leçons",          value:progress.stats?.lessonsCompleted??0,      max:20,      accent:"#6366f1", pct:Math.min(100,Math.round(((progress.stats?.lessonsCompleted??0)/20)*100)) },
    { Icon:IcoPencil, label:"Exercices",       value:progress.stats?.exercisesCompleted??0,   max:50,      accent:"#8b5cf6", pct:Math.min(100,Math.round(((progress.stats?.exercisesCompleted??0)/50)*100)) },
    { Icon:IcoType,   label:"Mots appris",     value:progress.stats?.wordsLearned??0,          max:200,     accent:"#06b6d4", pct:Math.min(100,Math.round(((progress.stats?.wordsLearned??0)/200)*100)) },
    { Icon:IcoTarget, label:"Précision",       value:`${accuracy}%`,                           max:100,     accent:"#10b981", pct:accuracy },
  ];

  return (
    <div style={{ background:bg, minHeight:"100vh", paddingTop:52 }}>
      <style>{`
        @media(max-width:768px){ .pf-layout{ flex-direction:column !important; } .pf-sidebar{ width:100% !important; position:static !important; } }
        .ach-card:hover{ transform:translateY(-3px) scale(1.04); }
        .stat-row:hover .stat-fill{ opacity:1 !important; }
      `}</style>

      <div className="pf-layout" style={{ display:"flex", alignItems:"flex-start", gap:16, maxWidth:1050, margin:"0 auto", padding:"28px 18px 56px" }}>

        {/*  SIDEBAR  */}
        <aside className="pf-sidebar" style={{ width:260, flexShrink:0, position:"sticky", top:72, display:"flex", flexDirection:"column", gap:12 }}>

          {/* Identity card */}
          <div style={{ background:sideB, border:`1px solid ${sideBd}`, borderRadius:28, overflow:"hidden" }}>
            {/* Gradient header strip */}
            <div style={{ height:72, background:`linear-gradient(135deg, ${lvlColor}ee, ${lvlColor}55)`, position:"relative" }}>
              <div style={{ position:"absolute", inset:0, background:`radial-gradient(circle at 80% 50%, ${lvlColor}88, transparent 70%)` }}/>
            </div>
            {/* Avatar  overlaps strip */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"0 20px 24px", marginTop:-44 }}>
              <div style={{
                width:84, height:84, borderRadius:"50%",
                background: il ? "#0d0d0d" : "#fff",
                color: il ? "#fff" : "#0d0d0d",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:32, fontWeight:900,
                border:`4px solid ${sideB}`,
                boxShadow:`0 0 0 3px ${lvlColor}66`,
                position:"relative"
              }}>
                {initial}
                <span style={{ position:"absolute", bottom:2, right:2, width:20, height:20, borderRadius:7, background:sideB, border:`1px solid ${sideBd}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:900, color:txts }}>
                  {user?.provider==="google" ? "G" : "@"}
                </span>
              </div>
              <h2 style={{ fontWeight:900, fontSize:17, color:txt, margin:"12px 0 2px", letterSpacing:"-0.02em", textAlign:"center" }}>{user?.name}</h2>
              <p style={{ fontSize:12, color:txts, margin:0, textAlign:"center" }}>{user?.email}</p>
              {/* Level pill */}
              <span style={{ marginTop:10, fontSize:11, fontWeight:800, padding:"4px 14px", borderRadius:99, background:lvlColor+"22", color:lvlColor, border:`1px solid ${lvlColor}44`, letterSpacing:"0.06em" }}>
                Niveau {currentLvl}
              </span>
            </div>
          </div>

          {/* XP Gauge card */}
          <div style={{ background:sideB, border:`1px solid ${sideBd}`, borderRadius:24, padding:"20px", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
            <div style={{ position:"relative", width:120, height:120 }}>
              <ArcGauge pct={xpPct} color={lvlColor} size={120} thickness={10}/>
              <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:22, fontWeight:900, color:txt, lineHeight:1 }}>{xpPct}%</span>
                <span style={{ fontSize:9, fontWeight:700, color:txts, textTransform:"uppercase", letterSpacing:"0.08em", marginTop:2 }}>XP</span>
              </div>
            </div>
            <p style={{ fontSize:12, color:txts, margin:0 }}>{progress.xp} / {maxXP} XP</p>
            {nextLvl && <p style={{ fontSize:11, color:txtm, margin:0 }}>Prochain : {nextLvl}</p>}
          </div>

          {/* Quick stats column */}
          <div style={{ background:sideB, border:`1px solid ${sideBd}`, borderRadius:24, padding:"16px 18px", display:"flex", flexDirection:"column", gap:12 }}>
            {[
              { Icon:IcoFlame,  label:"Série",    value:progress.streak??0,                            color:"#ef4444" },
              { Icon:IcoTrophy, label:"Succès",   value:earnedIds.size+"/"+ALL_ACHIEVEMENTS.length,   color:"#f59e0b" },
              { Icon:IcoBook,   label:"Leçons",   value:progress.stats?.lessonsCompleted??0,            color:"#6366f1" },
              { Icon:IcoType,   label:"Mots",     value:progress.stats?.wordsLearned??0,                color:"#06b6d4" },
            ].map((s,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:34, height:34, borderRadius:11, background:s.color+"16", border:`1px solid ${s.color}28`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <s.Icon s={16} c={s.color}/>
                </div>
                <span style={{ flex:1, fontSize:12, color:txts, fontWeight:600 }}>{s.label}</span>
                <span style={{ fontSize:15, fontWeight:900, color:txt }}>{s.value}</span>
              </div>
            ))}
          </div>

          {/* Logout */}
          <button onClick={handleLogout}
            style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", padding:"12px", borderRadius:18, border:`1px solid ${il?"rgba(220,38,38,0.20)":"rgba(248,113,113,0.18)"}`, background:il?"rgba(220,38,38,0.06)":"rgba(248,113,113,0.06)", color:il?"#dc2626":"#f87171", fontSize:13, fontWeight:700, cursor:"pointer", transition:"background 0.15s" }}
            onMouseEnter={e=>{ e.currentTarget.style.background=il?"rgba(220,38,38,0.14)":"rgba(248,113,113,0.14)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background=il?"rgba(220,38,38,0.06)":"rgba(248,113,113,0.06)"; }}>
            <IcoLogout s={16} c={il?"#dc2626":"#f87171"}/> Se déconnecter
          </button>
        </aside>

        {/*  MAIN CONTENT  */}
        <main style={{ flex:1, minWidth:0, display:"flex", flexDirection:"column", gap:14 }}>

          {/*  Stats section  */}
          <section style={{ background:mainB, border:`1px solid ${mainBd}`, borderRadius:26, padding:"22px 24px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
              <div style={{ width:6, height:22, borderRadius:3, background:lvlColor }}/>
              <h3 style={{ fontSize:14, fontWeight:900, color:txt, margin:0, letterSpacing:"-0.01em" }}>Statistiques</h3>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {STAT_ROWS.map((s,i) => (
                <div key={i} className="stat-row" style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:36, height:36, borderRadius:12, background:s.accent+"16", border:`1px solid ${s.accent}26`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <s.Icon s={16} c={s.accent}/>
                  </div>
                  <span style={{ fontSize:12, color:txts, fontWeight:600, width:100, flexShrink:0 }}>{s.label}</span>
                  <div style={{ flex:1, height:8, borderRadius:99, background:trackBg, overflow:"hidden" }}>
                    <div className="stat-fill" style={{ height:"100%", borderRadius:99, background:`linear-gradient(90deg, ${s.accent}cc, ${s.accent})`, width:`${s.pct}%`, transition:"width 1s ease", opacity:0.85 }}/>
                  </div>
                  <span style={{ fontSize:14, fontWeight:900, color:txt, minWidth:44, textAlign:"right" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/*  Achievements section  */}
          <section style={{ background:mainB, border:`1px solid ${mainBd}`, borderRadius:26, padding:"22px 24px" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:6, height:22, borderRadius:3, background:"#f59e0b" }}/>
                <h3 style={{ fontSize:14, fontWeight:900, color:txt, margin:0 }}>Succès</h3>
              </div>
              <span style={{ fontSize:12, color:txts, fontWeight:600 }}>{earnedIds.size} / {ALL_ACHIEVEMENTS.length}</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
              {ALL_ACHIEVEMENTS.map(ach => {
                const earned = earnedIds.has(ach.id);
                const ed = earnedMap[ach.id];
                return (
                  <div key={ach.id} className="ach-card" style={{
                    borderRadius:20, padding:"18px 12px 14px",
                    background: earned ? (il?`${ach.accent}0e`:`${ach.accent}14`) : (il?"rgba(0,0,0,0.02)":"rgba(255,255,255,0.02)"),
                    border:`1px solid ${earned ? ach.accent+"2a" : (il?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.07)")}`,
                    opacity: earned ? 1 : 0.42,
                    display:"flex", flexDirection:"column", alignItems:"center", gap:8, textAlign:"center",
                    transition:"transform 0.2s, opacity 0.2s",
                    boxShadow: earned ? `0 4px 18px ${ach.accent}20` : "none",
                    cursor: earned ? "default" : "not-allowed",
                    position:"relative", overflow:"hidden",
                  }}>
                    {earned && <div style={{ position:"absolute", top:8, right:8 }}><IcoStar s={12} c={ach.accent}/></div>}
                    <div style={{ width:46, height:46, borderRadius:16, background:earned?ach.accent+"1c":"rgba(128,128,128,0.08)", border:`1px solid ${earned?ach.accent+"32":"rgba(128,128,128,0.12)"}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:earned?`0 6px 16px ${ach.accent}30`:"none" }}>
                      <ach.Icon s={22} c={earned?ach.accent:(il?"rgba(0,0,0,0.22)":"rgba(255,255,255,0.22)")}/>
                    </div>
                    <div>
                      <p style={{ fontSize:12, fontWeight:800, color:earned?txt:txts, margin:"0 0 2px" }}>{ach.title}</p>
                      <p style={{ fontSize:10, color:txtm, margin:0, lineHeight:1.4 }}>
                        {earned && ed ? new Date(ed.earnedAt).toLocaleDateString("fr-FR") : ach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/*  Settings section  */}
          <section style={{ background:mainB, border:`1px solid ${mainBd}`, borderRadius:26, padding:"22px 24px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
              <div style={{ width:6, height:22, borderRadius:3, background:"#8b5cf6" }}/>
              <h3 style={{ fontSize:14, fontWeight:900, color:txt, margin:0 }}>Paramètres du compte</h3>
            </div>

            {/* Name row */}
            <div style={{ display:"flex", flexDirection:"column", gap:6, paddingBottom:18, borderBottom:`1px solid ${il?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.06)"}` }}>
              <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.09em", color:txts }}>Nom</label>
              {editingName ? (
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <input ref={nameRef} autoFocus value={nameInput} onChange={e=>setNameInput(e.target.value)}
                    onKeyDown={e=>{ if(e.key==="Enter") handleSaveName(); if(e.key==="Escape") setEditingName(false); }}
                    style={{ ...inp, flex:"1 1 160px" }}
                    onFocus={e=>{ e.target.style.borderColor=lvlColor; }} onBlur={e=>{ e.target.style.borderColor=inpBd; }}/>
                  <button onClick={handleSaveName} style={{ padding:"11px 20px", borderRadius:12, fontSize:13, fontWeight:800, cursor:"pointer", background:lvlColor, color:"#fff", border:"none", display:"flex", alignItems:"center", gap:6 }}><IcoCheck s={15} c="#fff"/> OK</button>
                  <button onClick={()=>setEditingName(false)} style={{ padding:"11px 16px", borderRadius:12, fontSize:13, fontWeight:600, cursor:"pointer", background:btnSBg, color:btnSCl, border:`1px solid ${btnSBd}` }}>Annuler</button>
                </div>
              ) : (
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
                  <span style={{ fontSize:15, fontWeight:700, color:txt }}>{user?.name}</span>
                  <button onClick={()=>{ setEditingName(true); setNameSuccess(""); }} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, padding:"7px 14px", borderRadius:10, fontWeight:700, cursor:"pointer", background:btnSBg, color:btnSCl, border:`1px solid ${btnSBd}` }}>
                    <IcoPencil s={13} c={btnSCl}/> Modifier
                  </button>
                </div>
              )}
              {nameSuccess && <p style={{ fontSize:12, fontWeight:600, color:"#16a34a", margin:0 }}>{nameSuccess} </p>}
              {authError   && <p style={{ fontSize:12, fontWeight:600, color:"#dc2626", margin:0 }}>{authError}</p>}
            </div>

            {/* Email row */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 0", borderBottom:`1px solid ${il?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.06)"}` }}>
              <div>
                <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.09em", color:txts, margin:"0 0 4px" }}>E-mail</p>
                <p style={{ fontSize:14, fontWeight:600, color:txt, margin:0 }}>{user?.email}</p>
              </div>
              <span style={{ fontSize:11, fontWeight:700, padding:"4px 12px", borderRadius:99, background:lvlColor+"18", color:lvlColor, border:`1px solid ${lvlColor}30` }}>
                {user?.provider==="google" ? "Google" : "Email"}
              </span>
            </div>

            {/* Password */}
            {user?.provider!=="google" && (
              <div style={{ paddingTop:16 }}>
                <label style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.09em", color:txts, display:"block", marginBottom:10 }}>Mot de passe</label>
                {!showPwForm ? (
                  <button onClick={()=>setShowPwForm(true)} style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, padding:"9px 18px", borderRadius:12, fontWeight:700, cursor:"pointer", background:btnSBg, color:btnSCl, border:`1px solid ${btnSBd}` }}>
                    <IcoLock s={14} c={btnSCl}/> Changer le mot de passe
                  </button>
                ) : (
                  <form onSubmit={handleChangePw} style={{ display:"flex", flexDirection:"column", gap:10, maxWidth:380 }}>
                    {[{label:"Actuel",key:"current",ph:""},{label:"Nouveau",key:"next",ph:"min. 6 caractères"},{label:"Confirmer",key:"confirm",ph:"Répéter"}].map(({label,key,ph})=>(
                      <div key={key}>
                        <label style={{ fontSize:11, fontWeight:700, display:"block", color:txts, marginBottom:5 }}>{label}</label>
                        <input type="password" value={pwForm[key]} placeholder={ph}
                          onChange={e=>setPwForm(p=>({...p,[key]:e.target.value}))} style={inp}
                          onFocus={e=>{ e.target.style.borderColor=lvlColor; }} onBlur={e=>{ e.target.style.borderColor=inpBd; }}/>
                      </div>
                    ))}
                    {pwError   && <p style={{ fontSize:12, fontWeight:600, color:"#dc2626", margin:0 }}>{pwError}</p>}
                    {pwSuccess && <p style={{ fontSize:12, fontWeight:600, color:"#16a34a", margin:0 }}>{pwSuccess} </p>}
                    <div style={{ display:"flex", gap:8 }}>
                      <button type="submit" style={{ padding:"11px 20px", borderRadius:12, fontSize:13, fontWeight:800, cursor:"pointer", background:lvlColor, color:"#fff", border:"none" }}>Confirmer</button>
                      <button type="button" onClick={()=>{ setShowPwForm(false); setPwError(""); }} style={{ padding:"11px 16px", borderRadius:12, fontSize:13, fontWeight:600, cursor:"pointer", background:btnSBg, color:btnSCl, border:`1px solid ${btnSBd}` }}>Annuler</button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </section>

          {/*  Danger section  */}
          <section style={{ background:mainB, border:`1px solid ${il?"rgba(220,38,38,0.18)":"rgba(248,113,113,0.12)"}`, borderRadius:26, padding:"22px 24px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
              <div style={{ width:6, height:22, borderRadius:3, background:"#ef4444" }}/>
              <h3 style={{ fontSize:14, fontWeight:900, color:il?"#dc2626":"#f87171", margin:0 }}>Zone Danger</h3>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              {/* Reset */}
              {!resetConfirm ? (
                <button onClick={()=>setResetConfirm(true)}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 20px", borderRadius:14, fontSize:13, fontWeight:700, cursor:"pointer",
                    background:"rgba(245,158,11,0.10)", color:il?"#92400e":"#fbbf24", border:"1px solid rgba(245,158,11,0.28)" }}>
                  <IcoReset s={15} c={il?"#92400e":"#fbbf24"}/> Réinitialiser la progression
                </button>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  <p style={{ fontSize:13, fontWeight:600, color:il?"#92400e":"#fbbf24", margin:0 }}>Cette action est irréversible. Continuer ?</p>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={handleReset} style={{ padding:"9px 18px", borderRadius:12, fontSize:13, fontWeight:800, cursor:"pointer", background:"rgba(245,158,11,0.20)", color:il?"#78350f":"#fbbf24", border:"1px solid rgba(245,158,11,0.35)" }}>Oui</button>
                    <button onClick={()=>setResetConfirm(false)} style={{ padding:"9px 16px", borderRadius:12, fontSize:13, fontWeight:600, cursor:"pointer", background:btnSBg, color:btnSCl, border:`1px solid ${btnSBd}` }}>Non</button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
