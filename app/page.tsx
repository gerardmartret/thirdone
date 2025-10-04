export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Fireworks Background */}
      <div className="fireworks-container">
        <div className="firework firework-1"></div>
        <div className="firework firework-2"></div>
        <div className="firework firework-3"></div>
        <div className="firework firework-4"></div>
        <div className="firework firework-5"></div>
        <div className="firework firework-6"></div>
      </div>

      {/* Dancing People */}
      <div className="dancing-people">
        <div className="person person-1">🎉</div>
        <div className="person person-2">💃</div>
        <div className="person person-3">🕺</div>
        <div className="person person-4">🎊</div>
        <div className="person person-5">🎈</div>
        <div className="person person-6">🎁</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-bounce">
            Thank you for this awesome lesson!
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300 font-semibold animate-pulse">
            🎓 Learning is a celebration! 🎓
          </p>
        </div>
      </div>
    </div>
  );
}
