import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import GuidePanel from '../components/GuidePanel'
import './AppLayout.css'
export default function AppLayout(){const [open,setOpen]=useState(false);return <div className="app-shell"><Sidebar open={open} onClose={()=>setOpen(false)}/><Header onMenu={()=>setOpen(true)}/><main className="main-content"><Outlet/></main><GuidePanel/></div>}
