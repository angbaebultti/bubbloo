import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import signinImg from '@/assets/signin_img.png'
import { BackArrow, BubblooButton, StatusBar } from '@/components'

export default function SignUpPage() {
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

      {/* 상단 네비게이션: top-[48px], w-[370px] 중앙 정렬 */}
      <div className="absolute left-1/2 top-12 flex w-92.5 -translate-x-1/2 items-center justify-between">
        <BackArrow onClick={() => navigate(-1)} />
        <button
          onClick={() => navigate('/home')}
          className="text-[14px] font-normal text-[#322b5b]"
        >
          건너뛰기
        </button>
      </div>

      {/* 메인 콘텐츠: left-[19px], top-[103px], w-[389px], gap-[33px] */}
      <div className="absolute left-4.75 top-25.75 flex w-97.25 flex-col items-center gap-8.25">
        {/* 타이틀 그룹: w-[274px], gap-[6px] */}
        <div className="flex w-68.5 flex-col items-center gap-1.5">
          <img
            src={signinImg}
            alt="bubbloo"
            className="pointer-events-none size-48.75 object-cover"
            draggable={false}
          />
          <div className="flex flex-col items-center text-center text-[#5445ac]">
            <p className="text-[24px] font-semibold leading-[1.534]">
              계정을 생성해 주세요!
            </p>
            <p className="whitespace-nowrap text-[14px] font-light leading-[1.534]">
              계정을 생성하고 당신의 감정과 마주해 보세요.
            </p>
          </div>
        </div>

        {/* 입력 폼: w-[332px], gap-[10px] */}
        <div className="flex w-83 flex-col gap-2.5">
          <input
            type="email"
            placeholder="이메일 주소"
            className="h-16.25 w-full rounded-2xl border border-[#dacdee] bg-[#f2ebfe] px-5.5 text-[17px] font-semibold text-[#857ead] outline-none placeholder:font-semibold placeholder:text-[17px] placeholder:text-[#857ead]"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="h-16.25 w-full rounded-2xl border border-[#dacdee] bg-[#f2ebfe] px-5.5 text-[17px] font-semibold text-[#857ead] outline-none placeholder:font-semibold placeholder:text-[17px] placeholder:text-[#857ead]"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="h-16.25 w-full rounded-2xl border border-[#dacdee] bg-[#f2ebfe] px-5.5 text-[17px] font-semibold text-[#857ead] outline-none placeholder:font-semibold placeholder:text-[17px] placeholder:text-[#857ead]"
          />
        </div>

        {/* 버튼: w-[346px] */}
        <div className="w-86.5">
          <BubblooButton label="계속" onClick={() => navigate('/verify-email')} />
        </div>

        {/* 이용약관 */}
        <p className="text-[14px] font-light leading-[1.534] text-[#5445ac]">
          계속하면 이용약관 및 개인정보처리방침에 동의하게 됩니다.
        </p>
      </div>
    </div>
  )
}
