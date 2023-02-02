import { useState } from 'react'
import { Card } from './components/Card'
import { GridWrapper } from './components/Cardgrid/Grid.styles'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function handleToggleDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  return (
     <GridWrapper>
      <div className='ContainerHeader'>
        <div className="titleWrapper">
          <h2>Social Media Dashboard</h2>
          <span>Total Followers: 23.004</span>
        </div>
        <div className='darkSwith'>
          <label htmlFor="darkMode">Dark Mode</label>
          <input 
            onClick={handleToggleDarkMode} 
            checked={darkMode} type="checkbox" 
            id="darkMode"
          />
        </div>
      </div>
        <Card
          user={'@eduodev'}
          iconSrc={facebook}
          numberOf={'1987'}
          numberOfLegend={'followers'}
          legend={'12 Today'}
          loss={false}
        />
        <Card
          user={'@eduodev'}
          iconSrc={twitter}
          numberOf={'1044'}
          numberOfLegend={'followers'}
          legend={'99 Today'}
          loss={false}
          borderColors={['#1da2ef']}
        />
        <Card
          user={'@eduodev'}
          iconSrc={instagram}
          numberOf={'11k'}
          numberOfLegend={'followers'}
          legend={'12 Today'}
          loss={false}
          borderColors={["#FCC676","#DE4C93"]}
        />
        <Card
          user={'@eduodev'}
          iconSrc={youtube}
          numberOf={'8239'}
          numberOfLegend={'subscribers'}
          legend={'144 Today'}
          loss={true}
          borderColors={['#ff0202']}
        />

        <div>
          <h2>Overview - Today</h2>
        </div>
     </GridWrapper>
  )
}

export default App
