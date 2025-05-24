import React from 'react'

const page = () => {
  return (
    <div>
<div className="mt-30 min-h-screen  text-white bg-gradient-to-b  via-black to-gray-900 px-6 py-12 font-sans">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎼 Advanced Composition</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Dive deeper into the art of creating complex, expressive music. Explore harmony, orchestration, and advanced structures used by professionals.
        </p>
      </header>

      {/* Section: Harmony */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🎵 Advanced Harmony</h2>
        <p className="text-gray-300 mb-2">
          Learn about extended chords (9ths, 11ths, 13ths), modal interchange, chromatic harmony, and complex progressions used in film scoring and jazz.
        </p>
      </section>

      {/* Section: Orchestration */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🎻 Orchestration</h2>
        <p className="text-gray-300 mb-2">
          Understand how to write music for full orchestras. Study instrument ranges, textures, voicing techniques, and blending timbres to create cinematic soundscapes.
        </p>
      </section>

      {/* Section: Form and Structure */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🎶 Form & Structure</h2>
        <p className="text-gray-300 mb-2">
          Analyze large-scale forms like sonata-allegro, rondo, and through-composed structures. Apply these to your own compositions.
        </p>
      </section>

      {/* Section: Counterpoint */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🔁 Counterpoint</h2>
        <p className="text-gray-300 mb-2">
          Explore polyphonic writing, species counterpoint, and techniques from Bach to Bartók. Compose melodies that interact with and enhance each other.
        </p>
      </section>

      {/* Section: Composition Lab */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🧠 Composition Lab</h2>
        <p className="text-gray-300 mb-2">
          Get assignments and exercises to sharpen your skills. Learn how to write effectively for different ensembles and genres.
        </p>
      </section>

     
    </div>
    </div>
  )
}

export default page
