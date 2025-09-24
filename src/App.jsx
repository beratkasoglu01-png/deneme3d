import React from 'react'
import GameCard from './components/GameCard'
import ThreeScene from './components/ThreeScene'

export default function App(){
  const games = [
    {
      id: 'demo-three',
      title: 'Spinning Cube (built-in)',
      type: 'embedded',
      desc: 'Bu sayfaya gömülü küçük Three.js demo oyunu.',
    },
    {
      id: 'unity-sample',
      title: 'Unity WebGL Sample',
      type: 'iframe',
      src: '/games/game1/index.html',
      desc: 'public/games/game1 içine koyduğun WebGL buildini iframe ile gösterir.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-extrabold">3D Oyun Sitesi</h1>
        <p className="text-slate-600">Oyunları gömülü (Three.js) veya iframe ile WebGL build olarak göster.</p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {games.map(g=> (
          <GameCard key={g.id} game={g}>
            {g.type === 'embedded' && <ThreeScene />}
          </GameCard>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-sm text-slate-500">
        <p>Not: WebGL buildleri <code>public/games/</code> içine koy. İframe yolunu Game nesnesine yaz.</p>
      </footer>
    </div>
  )
}
