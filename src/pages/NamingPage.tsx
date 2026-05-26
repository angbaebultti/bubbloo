import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import namingImg from '@/assets/naming_img.png'
import { BackArrow, StatusBar } from '@/components'

export default function NamingPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  return (
    <div className="relative mx-auto h-screen w-full max-w-107 overflow-hidden">
      <img
        src={splashBg}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
        draggable={false}
      />

      <StatusBar />

      <div className="absolute left-1/2 top-7 w-94 -translate-x-1/2">
        <BackArrow onClick={() => navigate(-1)} />
      </div>

      {/* 콘텐츠: left-[37px] top-[114px] w-[354px] gap-[67px] */}
      <div className="absolute left-9.25 top-28.5 flex w-88.5 flex-col items-center gap-16.75">
        {/* 타이틀: gap-[40px] */}
        <div className="flex w-full flex-col items-center gap-10">
          <img
            src={namingImg}
            alt=""
            className="pointer-events-none size-30 object-contain"
            draggable={false}
          />
          <div className="flex flex-col items-center gap-1.25 text-center text-[#5445ac]">
            <p className="whitespace-nowrap text-[24px] font-semibold">
              당신의 감정의 이름을 지어주세요!
            </p>
            <p className="text-[14px] font-light">
              이름은 추후 재수정이 가능합니다.
            </p>
          </div>
        </div>

        {/* 폼: w-[340px] gap-[20px] */}
        <div className="flex w-85 flex-col gap-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-13.25 w-full rounded-[24px] border border-[#eaebeb] bg-[rgba(247,248,248,0.89)] px-5 text-[17px] font-semibold text-[#857ead] outline-none"
          />
          {/* 버튼: w-[159px] gap-[14px] */}
          <div className="flex gap-3.5">
            <button className="h-12.25 w-39.75 rounded-[24px] border-b border-[#c0c0c0] bg-[#efefef] text-[20px] font-semibold text-[#5445ac]">
              랜덤
            </button>
            <button
              onClick={() => navigate('/next')}
              className="h-12.25 w-39.75 rounded-[24px] border-b border-[#c0c0c0] bg-[#cb8ac2] text-[20px] font-semibold text-[#f3f3f3]"
            >
              다음으로
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
