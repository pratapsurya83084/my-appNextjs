import React from 'react'

const page = () => {
  return (
    <div>
     <div className="mt-30 min-h-screen bg-gradient-to-b  via-black to-gray-900 text-white px-6 py-12 font-sans">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎤 Songwriting</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Unlock your creativity and learn to write powerful, memorable songs. Explore lyric writing, melody crafting, structure, and storytelling.
        </p>
      </header>

      {/* Section: Lyric Writing */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">✍️ Lyric Writing</h2>
        <p className="text-gray-300 mb-2">
          Learn how to write authentic, expressive lyrics. Discover rhyme schemes, metaphor, imagery, and emotional resonance in lyricism.
        </p>
      </section>

      {/* Section: Melody Crafting */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">🎶 Melody Crafting</h2>
        <p className="text-gray-300 mb-2">
          Explore how melodies are built from scale patterns, motif development, and phrasing. Create hooks that listeners can't forget.
        </p>
      </section>

      {/* Section: Song Structure */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">📐 Song Structure</h2>
        <p className="text-gray-300 mb-2">
          Understand the frameworks of popular songs: verse, chorus, bridge, and pre-chorus. Learn to balance repetition and surprise.
        </p>
      </section>

      {/* Section: Storytelling in Songs */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">📖 Storytelling</h2>
        <p className="text-gray-300 mb-2">
          Use character, setting, and narrative arc to write compelling songs. Make every word count in telling your unique story.
        </p>
      </section>

      {/* Section: Songwriting Exercises */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">🧪 Songwriting Exercises</h2>
        <p className="text-gray-300 mb-2">
          Engage with creative prompts, daily challenges, and collaboration techniques to strengthen your songwriting craft.
        </p>
      </section>

    
    </div>
    </div>
  )
}

export default page
