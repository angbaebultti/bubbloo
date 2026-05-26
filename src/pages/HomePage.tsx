export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-600">Bubbloo</h1>
        <p className="mt-4 text-lg text-gray-500">React + TypeScript + Vite 프로젝트가 준비됐어요!</p>
        <div className="mt-8 flex gap-3 justify-center">
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">React 19</span>
          <span className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">TypeScript</span>
          <span className="rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">Tailwind CSS</span>
          <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">Zustand</span>
        </div>
      </div>
    </div>
  )
}
