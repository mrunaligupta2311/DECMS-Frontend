import { Inbox } from 'lucide-react'
import './EmptyState.css'
export default function EmptyState({title='Nothing here yet',description='Records will appear here when available.'}) { return <div className="empty-state"><span><Inbox size={23}/></span><strong>{title}</strong><p>{description}</p></div> }
