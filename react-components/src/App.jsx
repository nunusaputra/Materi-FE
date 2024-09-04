import React from 'react'
import PokemonList from './components/PokemonList'

const App = () => {
  return (
    <main>
      <section className='container'>
        <h1>List Card of Digimon</h1>
        <div className='wrapper'>
          <PokemonList />
        </div>
      </section>
    </main>
  )
}

export default App
