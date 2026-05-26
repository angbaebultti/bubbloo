import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import bubbleImg from '@/assets/bubble.png'
import { BackArrow, StatusBar } from '@/components'

export default function LoadingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/awake'), 8000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative mx-auto h-screen w-full max-w-107 overflow-hidden">
      {/* 배경 */}
      <img
        src={splashBg}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
        draggable={false}
      />

      <StatusBar />

      {/* 뒤로가기: 피그마 top-[28px] */}
      <div className="absolute left-1/2 top-7 w-94 -translate-x-1/2">
        <BackArrow onClick={() => navigate(-1)} />
      </div>

      {/* 버블: 화면 정중앙, 회전 애니메이션 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
        <img
          src={bubbleImg}
          alt=""
          className="pointer-events-none size-68 object-contain drop-shadow-xl"
          draggable={false}
        />
      </div>
    </div>
  )
}
