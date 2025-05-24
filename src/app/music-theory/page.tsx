import React from 'react'

const page = () => {
  return (
    <div>
     <div className="mt-30 min-h-screen bg-black bg-gradient-to-b  via-black to-gray-900 text-white px-4 py-12 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">🎵 Music Theory 101</h1>
        <p className="text-gray-300 text-lg">A beginner-friendly guide to the basics of music</p>
      </header>

      <section className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🎼 What Are Notes?</h2>
          <p className="text-gray-300">
            Notes are the building blocks of music. They represent the pitch and duration of a sound. The main musical notes are:
            <span className="text-teal-400 font-semibold"> A, B, C, D, E, F, G</span>.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🎹 Scales</h2>
          <p className="text-gray-300">
            A scale is a collection of notes arranged in ascending or descending order. The most common is the
            <span className="text-yellow-400 font-semibold"> C Major Scale</span>: C D E F G A B C.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🎸 Chords</h2>
          <p className="text-gray-300">
            Chords are groups of notes played together. For example, a
            <span className="text-purple-400 font-semibold"> C major chord</span> contains C, E, and G.
          </p>
        </div>
      </section>

    
    </div>
    </div>
  )
}

export default page
