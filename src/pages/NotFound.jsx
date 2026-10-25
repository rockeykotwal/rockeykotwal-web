import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-neutral-600 text-sm uppercase tracking-widest mb-4">404</p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <Link to="/" className="text-neutral-400 hover:text-white text-sm transition-colors underline underline-offset-4">
          ← go home
        </Link>
      </div>
    </div>
  )
}
