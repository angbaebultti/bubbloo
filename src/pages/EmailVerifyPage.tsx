import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import emailImg from '@/assets/email_img.png'
import { BackArrow, StatusBar } from '@/components'

export default function EmailVerifyPage() {
  const navigate = useNavigate()

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

      {/* 뒤로가기: top-[56px], w-[376px] 중앙 */}
      <div className="absolute left-1/2 top-14 w-94 -translate-x-1/2">
        <BackArrow onClick={() => navigate(-1)} />
      </div>

      {/* 콘텐츠: 화면 정중앙, w-[390px], gap-[55px] */}
      <div className="absolute left-1/2 top-1/2 flex w-97.5 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-13.75">
        {/* 텍스트: gap-[9px] */}
        <div className="flex flex-col items-center gap-2.25 text-center text-[#5445ac]">
          <p className="whitespace-nowrap text-[24px] font-semibold">
            이제 곧 당신의 감정이 태어날 거예요!
          </p>
          <p className="text-[14px] font-light">
            이메일을 통해 회원가입을 완료해 주세요.
          </p>
        </div>

        {/* 이미지: 1032×1024 정사각형 → object-contain */}
        <img
          src={emailImg}
          alt="bubbloo"
          className="pointer-events-none size-64 shrink-0 object-contain"
          draggable={false}
        />

        {/* 글래스 버튼: 피그마 기준 2중 레이어 */}
        <button
          onClick={() => navigate('/loading')}
          className="relative h-18.25 w-84 shrink-0 rounded-[30px]"
        >
          {/* 레이어 1: bg-white/64 × opacity-12 = 사실상 7.7% 흰색 + blur 6.2px */}
          <div className="absolute inset-0 rounded-[30px] border-2 border-white/2 bg-white/64 opacity-[0.12] backdrop-blur-[6.2px]" />
          {/* 레이어 2: 투명 그라디언트 + blur 37px + 흰 테두리 */}
          <div className="absolute inset-0 rounded-[30px] border-2 border-white bg-linear-to-b from-transparent to-transparent backdrop-blur-[37.3px]" />
          <span className="relative font-semibold text-[22px] text-[#8e57b2]">
            인증 메일 보내기
          </span>
        </button>
      </div>
    </div>
  )
}
