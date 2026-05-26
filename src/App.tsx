import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SplashPage, HomePage, SignUpPage, EmailVerifyPage, LoadingPage, AwakePage, NamingPage } from '@/pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<EmailVerifyPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/awake" element={<AwakePage />} />
        <Route path="/naming" element={<NamingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
