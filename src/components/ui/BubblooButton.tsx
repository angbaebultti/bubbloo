import btnBg from '@/assets/btn_bg.png'

interface BubblooButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

export default function BubblooButton({ label, onClick, className = '' }: BubblooButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full cursor-pointer overflow-hidden rounded-full ${className}`}
    >
      <img
        src={btnBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-fill"
        draggable={false}
      />
      <span className="relative z-10 block py-5 text-center text-[26px] font-normal text-white drop-shadow-sm">
        {label}
      </span>
    </button>
  )
}
