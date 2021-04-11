import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'

const data = {
    summary: {
      name: 'Sour Diesel',
    image: 'https://images.leafly.com/flower-images/sour-diesel.jpg?auto=compress,format&w=440&dpr=2',
    description: 'Sour Diesel has defined East Coast high-THC cannabis since the 1990s and has decades- long popularity among elite consumers.'
    },
    businessStats: {
      difficulty: 'Moderate',
      yield: '1-3 (Oz/Ft)²',
      flowering: '10-12 Weeks'
    },
    consumerStats: {
      happy: 57,
      uplifted: 50,
      euphoric: 49
    }
}

function App() {
  return (
    <>
      < Summary data={data.summary} />
      < BusinessStats data={data.businessStats} />
      < ConsumerStats data={data.consumerStats} />
    </>
  )
}

export default App
