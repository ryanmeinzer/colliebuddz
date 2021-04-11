import './App.css'
import Summary from './Summary.js'
import BusinessStats from './BusinessStats.js'
import ConsumerStats from './ConsumerStats.js'

const data = {
    summary: {
      name: 'Sour Diesel',
      image: '',
      description: ''
    },
    businessStats: {
      difficulty: '',
      yield: '',
      flowering: ''
    },
    consumerStats: {
      effects: {
        first: 34,
        second: 63,
        third: 78
      }
    }
}

function App() {
  return (
    <>
      <div>Hi</div>
      < Summary data={data.summary} />
      {/* < BusinessStats data={data.businessStats} />
      < ConsumerStats data={data.consumerStats} /> */}
    </>
  )
}

export default App
