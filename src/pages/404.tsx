import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#282C33] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-[140px] sm:text-[180px] leading-none font-bold text-[#C778DD]/10 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl sm:text-8xl font-bold text-[#C778DD]">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Page not found
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to somewhere useful.
        </p>

        {/* Home button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center
              px-6 py-3
              text-sm font-medium
              text-white
              border-2 border-[#C778DD]
              rounded-xl
              transition-all duration-300
              hover:bg-[#C778DD]
              hover:text-[#09090B]
              hover:shadow-[0_0_20px_rgba(200,120,221,0.35)]
              active:scale-95
              focus:outline-none
              focus:ring-2
              focus:ring-[#C778DD]
              focus:ring-offset-2
              focus:ring-offset-[#282C33]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
