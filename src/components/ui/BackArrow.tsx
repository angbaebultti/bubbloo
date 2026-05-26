import arrowImg from '@/assets/arrow.png'

interface BackArrowProps {
  onClick?: () => void
  className?: string
}

export default function BackArrow({ onClick, className = '' }: BackArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label="뒤로가기"
      className={`flex size-7 items-center justify-center ${className}`}
    >
      <img
        src={arrowImg}
        alt=""
        className="pointer-events-none size-full object-contain"
        draggable={false}
      />
    </button>
  )
}
