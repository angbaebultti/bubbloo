import { useEffect, useState } from 'react'

function useCurrentTime() {
  const [time, setTime] = useState(() => {
    const now = new Date()
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
  })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(`${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`)
    }
    // 다음 분이 시작될 때까지 대기 후 1분 간격으로 업데이트
    const msUntilNextMinute = (60 - new Date().getSeconds()) * 1000
    const timeout = setTimeout(() => {
      tick()
      const interval = setInterval(tick, 60_000)
      return () => clearInterval(interval)
    }, msUntilNextMinute)

    return () => clearTimeout(timeout)
  }, [])

  return time
}

export default function StatusBar() {
  const time = useCurrentTime()

  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex h-12 items-center justify-between py-4 pl-8.75 pr-5">
      <span className="text-[14px] font-medium text-white">{time}</span>
      <div className="flex items-center gap-[8.5px] text-white">
        {/* Cellular */}
        <svg width="18" height="10" viewBox="0 0 18 10" fill="white">
          <rect x="0" y="6" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="4" width="3" height="6" rx="0.5" />
          <rect x="9" y="2" width="3" height="8" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="10" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <circle cx="8" cy="11" r="1.5" />
          <path d="M4.93 7.93A4.5 4.5 0 0 1 8 6.75c1.18 0 2.26.46 3.07 1.18l1.06-1.06A6 6 0 0 0 8 5.25a6 6 0 0 0-4.13 1.62l1.06 1.06Z" />
          <path d="M2.11 5.11A8 8 0 0 1 8 2.75a8 8 0 0 1 5.89 2.36l1.06-1.06A9.5 9.5 0 0 0 8 1.25a9.5 9.5 0 0 0-6.95 3l1.06 1.06Z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div className="relative h-3 w-6 rounded-[3px] border-[1.5px] border-white">
            <div className="absolute inset-[1.5px] rounded-[1px] bg-white" />
          </div>
          <div className="ml-px h-1.5 w-0.5 rounded-r-sm bg-white/50" />
        </div>
      </div>
    </div>
  )
}
