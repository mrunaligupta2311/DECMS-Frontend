import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import EvidencePage from './pages/EvidencePage'
import UploadPage from './pages/UploadPage'
import EvidenceDetailPage from './pages/EvidenceDetailPage'
import CustodyPage from './pages/CustodyPage'
import VerificationPage from './pages/VerificationPage'
import CasesPage from './pages/CasesPage'
import AuditPage from './pages/AuditPage'
import ReportsPage from './pages/ReportsPage'
import UsersPage from './pages/UsersPage'
import ProfilePage from './pages/ProfilePage'
import SystemPage from './pages/SystemPage'
import { useApp } from './context/AppContext'

export default function App() {
  const { user } = useApp()
  return <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route element={user ? <AppLayout/> : <Navigate to="/login"/>}>
      <Route index element={<Navigate to="/dashboard"/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/evidence" element={<EvidencePage/>}/>
      <Route path="/evidence/upload" element={<UploadPage/>}/>
      <Route path="/evidence/:id" element={<EvidenceDetailPage/>}/>
      <Route path="/custody" element={<CustodyPage/>}/>
      <Route path="/verification" element={<VerificationPage/>}/>
      <Route path="/cases" element={<CasesPage/>}/>
      <Route path="/audit" element={<AuditPage/>}/>
      <Route path="/reports" element={<ReportsPage/>}/>
      <Route path="/users" element={user?.role === "ADMIN" ? <UsersPage/> : <Navigate to="/dashboard"/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/system" element={<SystemPage/>}/>
      <Route path="*" element={<Navigate to="/dashboard"/>}/>
    </Route>
  </Routes>
}
