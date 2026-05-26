import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import namingImg from '@/assets/naming_img.png'
import { BackArrow, StatusBar } from '@/components'

const RANDOM_NAMES = [
  '몽실이', '뽀실이', '솜사탕', '꿀단지', '복숭아',
  '마시멜로', '도도리', '방울이', '통통이', '구름이',
  '별사탕', '코코아', '뭉게뭉게', '퐁실이', '솜털이',
  '달달이', '보들이', '포슬이', '냠냠이', '콩콩이',
  '두리둥실', '반짝이', '노을이', '햇살이', '이슬이',
  '무지개', '팡팡이', '꼬물이', '동글이', '복슬이',
  '꿈틀이', '방실이', '나비야', '하늘이', '별빛이',
  '뽀송이', '몽글이', '달콤이', '상큼이', '포근이',
  '따뜻이', '보송이', '톡톡이', '반들이', '통글이',
  '아지랑이', '설레임', '두근이', '살랑이', '느낌표',
  '물결이', '소용돌이', '퐁당이', '찰랑이', '반딧불',
  '꽃잎이', '봄바람', '새싹이', '솔솔이', '촉촉이',
  '뭉클이', '까꿍이', '아야야', '오호호', '우후후',
  '야호호', '히히히', '호호호', '끼끼끼', '뿌뿌뿌',
  '하하하', '나나나', '라라라', '도레미', '파솔라',
  '핑크빛', '보랏빛', '노란빛', '초롱이', '반짝반짝',
  '모글모글', '꾸물이', '오동이', '보배야', '구슬이',
  '쪼꼬미', '꼬꼬마', '아장이', '조랑이', '두둥실',
  '퍼덕이', '파닥이', '꿈꾸미', '느릿이', '살금이',
  '고요이', '잔잔이', '포옹이', '간질이', '설탕아',
]

function pickRandom() {
  return RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)]
}

export default function NamingPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

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
          {/* 터치 영역을 input과 동일하게 맞춰 모바일에서도 키보드 올라오게 */}
          <div
            className="h-13.25 w-full rounded-[24px] border border-[#eaebeb] bg-[rgba(247,248,248,0.89)]"
            onClick={() => inputRef.current?.focus()}
          >
            <input
              ref={inputRef}
              type="text"
              inputMode="text"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="size-full bg-transparent px-5 text-[17px] font-semibold text-[#857ead] outline-none"
            />
          </div>
          {/* 버튼: w-[159px] gap-[14px] */}
          <div className="flex gap-3.5">
            <button
              onClick={() => setName(pickRandom())}
              className="h-12.25 w-39.75 rounded-[24px] border-b border-[#c0c0c0] bg-[#efefef] text-[20px] font-semibold text-[#5445ac]"
            >
              랜덤
            </button>
            <button
              onClick={() => navigate('/bubble-select')}
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
