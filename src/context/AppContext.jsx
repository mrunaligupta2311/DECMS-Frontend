import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)
const initialUser = { id: 'USR-001', name: 'Mrunali Gupta', email: 'admin@decms.demo', username: 'mrunali.admin', role: 'ADMIN', department: 'Cyber Crime Division', organization: 'Central Digital Forensics Unit', avatar: 'MG' }

const starterEvidence = [
  { id:'EV-2026-001', caseId:'CASE-CYBER-884', title:'Server access logs — compromised host', type:'NETWORK_LOG', file:'server_access.log', size:'2.4 MB', hash:'8d7f1b6a9c2e4f03a8b1d5e7c9f2a6b48d7f1b6a9c2e4f03a8b1d5e7c9f2a6b4', status:'VERIFIED', owner:'Rajesh Patel', date:'13 Nov 2026, 09:42', version:2, description:'Collected access logs from the affected production server.' },
  { id:'EV-2026-002', caseId:'CASE-FIN-109', title:'Suspected fraudulent transaction report', type:'DOCUMENT', file:'transaction_report.pdf', size:'840 KB', hash:'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0', status:'PENDING', owner:'Mrunali Gupta', date:'12 Nov 2026, 16:18', version:1, description:'PDF report supplied by the financial investigation team.' },
  { id:'EV-2026-003', caseId:'CASE-CYBER-884', title:'CCTV footage — north entrance', type:'VIDEO', file:'cctv_north.mp4', size:'148 MB', hash:'f0e1d2c3b4a5968778695a4b3c2d1e0ff0e1d2c3b4a5968778695a4b3c2d1e0f', status:'IN_COURT', owner:'Vikram Shah', date:'11 Nov 2026, 11:06', version:1, description:'CCTV footage collected during the site inspection.' },
  { id:'EV-2026-004', caseId:'CASE-PHYS-412', title:'Mobile device forensic image', type:'DISK_IMAGE', file:'device_image.E01', size:'3.8 GB', hash:'0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef', status:'VERIFIED', owner:'Pooja Mehta', date:'10 Nov 2026, 14:30', version:3, description:'Forensic image acquired using approved collection procedure.' }
]

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('decms-theme') || 'dark')
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('decms-user')) || initialUser } catch { return initialUser }
  })
  const [evidence, setEvidence] = useState(() => {
    try { return JSON.parse(localStorage.getItem('decms-evidence')) || starterEvidence } catch { return starterEvidence }
  })
  const [users, setUsers] = useState(() => {
    try { return JSON.parse(localStorage.getItem('decms-users')) || [
      {id:'USR-002',name:'Rajesh Patel',email:'rajesh@decms.demo',username:'rajesh.officer',role:'INVESTIGATOR',department:'Cyber Crime Division',active:true},
      {id:'USR-003',name:'Ruchi Singh',email:'ruchi@decms.demo',username:'ruchi.auditor',role:'AUDITOR',department:'Digital Forensics',active:true},
      {id:'USR-004',name:'Vikram Shah',email:'vikram@decms.demo',username:'vikram.officer',role:'OFFICER',department:'Field Operations',active:true},
      {id:'USR-005',name:'Pooja Mehta',email:'pooja@decms.demo',username:'pooja.viewer',role:'VIEWER',department:'Legal Review',active:true}
    ] } catch { return [] }
  })
  const [guideOn, setGuideOn] = useState(localStorage.getItem('decms-guide') !== 'off')
  const [notifications, setNotifications] = useState([
    {id:1,title:'Custody transfer awaiting review',detail:'EV-2026-001 · Rajesh Patel',time:'8 min ago',read:false},
    {id:2,title:'Integrity verification completed',detail:'EV-2026-004 · Verified',time:'1 hour ago',read:false},
    {id:3,title:'New personnel account created',detail:'Pooja Mehta · VIEWER',time:'Yesterday',read:true}
  ])
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('decms-theme', theme) }, [theme])
  useEffect(() => { localStorage.setItem('decms-user', JSON.stringify(user)) }, [user])
  useEffect(() => { localStorage.setItem('decms-evidence', JSON.stringify(evidence)) }, [evidence])
  useEffect(() => { localStorage.setItem('decms-users', JSON.stringify(users)) }, [users])
  useEffect(() => { localStorage.setItem('decms-guide', guideOn ? 'on' : 'off') }, [guideOn])
  const value = useMemo(() => ({theme,setTheme,user,setUser,evidence,setEvidence,users,setUsers,guideOn,setGuideOn,notifications,setNotifications}), [theme,user,evidence,users,guideOn,notifications])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export const useApp = () => useContext(AppContext)
