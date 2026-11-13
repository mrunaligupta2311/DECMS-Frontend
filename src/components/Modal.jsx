import { X } from 'lucide-react'
import './Modal.css'
export default function Modal({open,onClose,title,children,wide=false}) { if(!open)return null; return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className={`modal-panel ${wide?'wide':''}`}><div className="modal-head"><h3>{title}</h3><button className="icon-button" onClick={onClose}><X size={18}/></button></div><div className="modal-content">{children}</div></div></div> }
