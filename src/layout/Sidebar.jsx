import { NavLink } from 'react-router-dom'
import { Activity, Archive, BadgeCheck, BookOpenCheck, BriefcaseBusiness, ChartNoAxesCombined, ClipboardList, FileCheck2, FileText, Fingerprint, LayoutDashboard, Network, Settings2, ShieldCheck, Users, X } from 'lucide-react'
import './Sidebar.css'
import { useApp } from '../context/AppContext'
const links=[
 ['OVERVIEW',[['Dashboard','/dashboard',LayoutDashboard]]],
 ['EVIDENCE WORKSPACE',[['Evidence Vault','/evidence',Archive],['Upload Evidence','/evidence/upload',FileCheck2],['Verification','/verification',Fingerprint],['Chain of Custody','/custody',Network]]],
 ['INVESTIGATION',[['Cases','/cases',BriefcaseBusiness],['Audit Trail','/audit',ClipboardList],['Forensic Reports','/reports',FileText]]],
 ['ADMINISTRATION',[['Personnel','/users',Users],['System Health','/system',Activity],['My Profile','/profile',Settings2]]]
]
export default function Sidebar({open,onClose}){const {user}=useApp();return <aside className={`sidebar ${open?'show':''}`}><div className="brand"><div className="brand-mark"><ShieldCheck size={22}/></div><div><strong>DECMS<span> / FORENSICS</span></strong><small>Evidence integrity platform</small></div><button className="mobile-close" onClick={onClose}><X size={18}/></button></div><div className="workspace-switch"><span className="workspace-dot"/> CENTRAL FORENSICS UNIT <span className="chev">⌄</span></div><nav>{links.map(([group,items])=>{const visible=items.filter(([name])=>name!=='Personnel'||user?.role==='ADMIN');return visible.length?<div className="nav-group" key={group}><label>{group}</label>{visible.map(([name,to,Icon])=><NavLink key={to} to={to} onClick={onClose} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={17}/><span>{name}</span></NavLink>)}</div>:null})}</nav><div className="sidebar-bottom"><div className="secure-status"><span/><div><b>SECURE SESSION</b><small>Environment protected</small></div></div><div className="sidebar-version">DECMS PLATFORM <span>v1.0.0</span></div></div></aside>}
