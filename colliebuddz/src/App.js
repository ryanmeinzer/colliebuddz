import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'

const data = {
    summary: {
      name: 'Sour Diesel',
      image: 'url here',
      description: 'des here'
    },
    businessStats: {
      difficulty: 'hard',
      yield: 'x',
      flowering: '3'
    },
    consumerStats: {
      first: 34,
      second: 63,
      third: 78
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
