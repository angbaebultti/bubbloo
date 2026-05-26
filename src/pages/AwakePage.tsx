import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import awakeImg from '@/assets/awake_img.png'
import { BackArrow, StatusBar } from '@/components'

export default function AwakePage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/naming'), 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative mx-auto h-screen w-full max-w-107 overflow-hidden">
      <img
        src={splashBg}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
        draggable={false}
      />

      <StatusBar />

      <div className="absolute left-1/2 top-14 w-94 -translate-x-1/2">
        <BackArrow onClick={() => navigate(-1)} />
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10">
        <img
          src={awakeImg}
          alt="bubbloo awake"
          className="pointer-events-none size-64 object-contain"
          draggable={false}
        />
        <p className="text-[24px] font-semibold text-[#5445ac]">
          감정이 깨어났어요!
        </p>
      </div>
    </div>
  )
}
