import { useState } from 'react'
import { Card, CardResume } from './components/Card'
import { GridWrapper } from './components/Cardgrid/Grid.styles'
import { HeaderContainer } from './components/HeaderConteiner/HeaderContainer.styles'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function handleToggleDarkMode() {
    setDarkMode((dark) => dark === true ? dark = false : dark = true)
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <HeaderContainer>
        <GridWrapper>
          <div className='ContainerHeader'>
            <div className="titleWrapper">
              <h2>Social Media Dashboard</h2>
              <span>Total Followers: 23.004</span>
            </div>
            <div className='darkSwith'>
              <label htmlFor="darkMode">Dark Mode</label>
              <input 
                onChange={handleToggleDarkMode} 
                checked={darkMode} 
                
                type="checkbox" 
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

            <div className='title'>
              <h2>Overview - Today</h2>
            </div>

            <CardResume
              textLegend='Page Views'
              iconSrc={facebook}
              porcent={'3%'}
              loss={false} 
              number={'87'}        />
            <CardResume
              textLegend='Likes'
              iconSrc={facebook}
              porcent={'2%'}
              loss={true} 
              number={'52'}        />
            <CardResume
              textLegend='Likes'
              iconSrc={instagram}
              porcent={'2257%'}
              loss={false} 
              number={'5462'}        />
            <CardResume
              textLegend='Profile Views'
              iconSrc={instagram}
              porcent={'1375%'}
              loss={false} 
              number={'52k'}        />
            <CardResume
              textLegend='Retweets'
              iconSrc={twitter}
              porcent={'303%'}
              loss={false} 
              number={'117'}        />
            <CardResume
              textLegend='Likes'
              iconSrc={twitter}
              porcent={'553%'}
              loss={false} 
              number={'507'}        />
            <CardResume
              textLegend='Likes'
              iconSrc={youtube}
              porcent={'10%'}
              loss={true} 
              number={'107'}        />
            <CardResume
              textLegend='Total Views'
              iconSrc={youtube}
              porcent={'12%'}
              loss={true} 
              number={'1407'}        />
        </GridWrapper>
      </HeaderContainer>
    </ThemeProvider>
  )
}

export default App
