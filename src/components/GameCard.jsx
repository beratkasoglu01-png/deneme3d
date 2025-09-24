import React from 'react'

export default function GameCard({game, children}){
  return (
    <section className="bg-white shadow-md rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{game.title}</h2>
        <span className="text-xs text-slate-500">{game.type}</span>
      </div>

      <p className="text-slate-600 mb-3">{game.desc}</p>

      <div className="rounded-xl overflow-hidden border">
        {game.type === 'iframe' ? (
          <iframe
            src={game.src}
            title={game.title}
            className="w-full h-80"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        ) : (
          <div className="w-full h-80">
            {children}
          </div>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 rounded bg-slate-100 text-sm">Oyna</button>
        <button className="px-3 py-1 rounded bg-slate-100 text-sm">Paylaş</button>
      </div>
    </section>
  )
}
