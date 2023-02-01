import { useState } from 'react'
import { Card } from './components/Card'
import { GridWrapper } from './components/Cardgrid/Grid.styles'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function handleToggleDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  return (
     <GridWrapper>
      <div className='ContainerHeader'>
        <div className="titleWrapper">
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23.004</span>
        </div>
        <div className='darkSwith'>
          <label htmlFor="darkMode">Dark Mode</label>
          <input onClick={handleToggleDarkMode} checked={darkMode} type="checkbox" name="" id="darkMode" />
        </div>
      </div>
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/facebook.svg'}
          numberOf={'1987'}
          numberOfLegend={'followers'}
          legend={'12 Today'}
          loss={false}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/twitter.svg'}
          numberOf={'1044'}
          numberOfLegend={'followers'}
          legend={'99 Today'}
          loss={false}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/instagram.svg'}
          numberOf={'11k'}
          numberOfLegend={'followers'}
          legend={'12 Today'}
          loss={false}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/youtube.svg'}
          numberOf={'8239'}
          numberOfLegend={'followers'}
          legend={'144 Today'}
          loss={true}
        />
     </GridWrapper>
  )
}

export default App
