import './StatCard.css'
export default function StatCard({label,value,change,icon:Icon,tone='blue'}) {
  return <div className="stat-card"><div className={`stat-icon ${tone}`}>{Icon && <Icon size={19}/>}</div><div className="stat-copy"><span>{label}</span><strong>{value}</strong><small>{change}</small></div></div>
}
