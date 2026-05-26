import { useNavigate } from 'react-router-dom'
import splashBg from '@/assets/splash_bg.png'
import bubble01 from '@/assets/bubble01.png'
import bubble02 from '@/assets/bubble02.png'
import bubble03 from '@/assets/bubble03.png'
import bubble04 from '@/assets/bubble04.png'
import bubble05 from '@/assets/bubble05.png'
import bubble06 from '@/assets/bubble06.png'
import { BackArrow, StatusBar } from '@/components'

const BUBBLES = [
  { img: bubble01, label: '결핍의 모습' },
  { img: bubble02, label: '통제의 모습' },
  { img: bubble03, label: '집착의 모습' },
  { img: bubble04, label: '상처의 모습' },
  { img: bubble05, label: '완벽의 모습' },
  { img: bubble06, label: '분노의 모습' },
]

export default function BubbleSelectPage() {
  const navigate = useNavigate()

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

      <p className="absolute left-1/2 top-[85px] w-[345px] -translate-x-1/2 whitespace-pre-line text-center text-[24px] font-semibold leading-[1.534] text-[#5445ac]">
        {'지금의 당신과 가장 가까운\n모습을 골라보세요!'}
      </p>

      <div className="absolute left-1/2 top-[calc(50%+41.21px)] w-78.25 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-9 gap-y-6.5">
        {BUBBLES.map(({ img, label }) => (
          <button
            key={label}
            className="flex h-46 w-34.75 flex-col items-center gap-3"
          >
            <img
              src={img}
              alt={label}
              className="pointer-events-none h-33 w-33.5 object-contain"
              draggable={false}
            />
            <span className="text-[17.82px] leading-[1.534] text-[#322b5b]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
