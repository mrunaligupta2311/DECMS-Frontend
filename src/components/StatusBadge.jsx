import './StatusBadge.css'
export default function StatusBadge({status}) { const s=(status||'PENDING').toLowerCase().replaceAll('_',' '); return <span className={`status-badge ${s.replaceAll(' ','-')}`}><i/>{s}</span> }
