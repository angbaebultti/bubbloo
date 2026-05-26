import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import onboardingImg from '@/assets/onboarding_img.png'
import { StatusBar } from '@/components'

export default function SplashPage() {
  const navigate = useNavigate()

  return (
    <div
      className="relative mx-auto h-screen w-full max-w-107 cursor-pointer select-none overflow-hidden"
      onClick={() => navigate('/home')}
    >
      {/* 배경 */}
      <img
        src={splashBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <StatusBar />

      {/* 타이틀 + 캐릭터 (피그마 기준: left 63px, top 255px, w 302px, gap 44px) */}
      <div className="absolute left-[63px] top-[255px] flex w-[302px] flex-col items-center gap-[44px]">
        <p
          className="text-center text-[36px] font-semibold leading-normal"
          style={{ color: '#573e78' }}
        >
          당신의 감정을
          <br />
          만나보세요!
        </p>
        <img
          src={onboardingImg}
          alt="bubbloo"
          className="pointer-events-none size-[276px] object-cover"
          draggable={false}
        />
      </div>

      {/* 하단 안내 텍스트 (피그마 기준: bottom 46px) */}
      <p className="absolute bottom-[46px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[16px] font-extralight text-black">
        화면을 터치해 시작하세요
      </p>
    </div>
  )
}
