import React from 'react'

const page = () => {
  return (
    <div>
    <div className="mt-30 min-h-screen bg-gradient-to-b  via-black to-gray-900 text-white px-6 py-12 font-sans">
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎧 Music Production</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn how to record, edit, and produce professional-quality music from your home studio or any production environment.
        </p>
      </header>

      {/* Section: Digital Audio Workstations */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">💻 Digital Audio Workstations (DAWs)</h2>
        <p className="text-gray-300 mb-2">
          Explore popular DAWs like Ableton Live, FL Studio, Logic Pro, and Pro Tools. Learn how to record, edit, and mix audio and MIDI tracks efficiently.
        </p>
      </section>

      {/* Section: Recording Techniques */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">🎙️ Recording Techniques</h2>
        <p className="text-gray-300 mb-2">
          Understand mic placement, room acoustics, audio interfaces, and capturing clean vocal/instrumental takes.
        </p>
      </section>

      {/* Section: Mixing Essentials */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">🎚️ Mixing Essentials</h2>
        <p className="text-gray-300 mb-2">
          Learn how to EQ, compress, pan, and add effects to balance a track. Develop critical listening skills to shape your mix.
        </p>
      </section>

      {/* Section: Mastering Basics */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">🎛️ Mastering Basics</h2>
        <p className="text-gray-300 mb-2">
          Discover how to prepare your final mix for distribution. Learn about loudness, stereo widening, limiting, and exporting best practices.
        </p>
      </section>

      {/* Section: Production Gear & Plugins */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">🎹 Gear & Plugins</h2>
        <p className="text-gray-300 mb-2">
          Get familiar with MIDI controllers, audio interfaces, studio monitors, and essential VST plugins for modern production.
        </p>
      </section>

     
    </div>
    </div>
  )
}

export default page
