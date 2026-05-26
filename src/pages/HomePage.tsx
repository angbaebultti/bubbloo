import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import logo from '@/assets/logo.png'
import { BubblooButton, StatusBar } from '@/components'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="relative mx-auto h-screen w-full max-w-107 select-none overflow-hidden">
      {/* 배경 */}
      <img
        src={splashBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <StatusBar />

      {/* 피그마 기준: left 41px, top 228px, w 346px, gap 252px */}
      <div className="absolute left-10.25 top-57 flex w-86.5 flex-col items-center gap-63">
        {/* logo.png: 983×1154 → 246px 너비 시 height≈289px (캐릭터+텍스트 통합 이미지) */}
        <img
          src={logo}
          alt="Bubbioo"
          className="pointer-events-none w-61.5 object-contain"
          draggable={false}
        />

        {/* 버튼 */}
        <BubblooButton label="탐험 시작하기" onClick={() => navigate('/signup')} />
      </div>

      {/* 하단 텍스트: 피그마 기준 top 853px */}
      <p className="absolute left-1/2 top-213.25 -translate-x-1/2 whitespace-nowrap text-[16px] font-extralight text-black/70">
        로그인 없이 바로 체험 가능해요!
      </p>
    </div>
  )
}
