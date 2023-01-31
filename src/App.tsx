import { Card } from './components/Card'
import { GridWrapper } from './components/Cardgrid/Grid.styles'

function App() {

  return (
     <GridWrapper>
      <div className='ContainerHeader'>
        <div className="titleWrapper">
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23.004</span>
        </div>
      </div>
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/facebook.svg'}
          numberOf={1987}
          numberOfLegend={'followers'}
          legend={'12 Today'}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/facebook.svg'}
          numberOf={1946}
          numberOfLegend={'followers'}
          legend={'12 Today'}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/facebook.svg'}
          numberOf={1946}
          numberOfLegend={'followers'}
          legend={'12 Today'}
        />
        <Card
          user={'@eduodev'}
          iconSrc={'./src/assets/facebook.svg'}
          numberOf={1946}
          numberOfLegend={'followers'}
          legend={'12 Today'}
        />
     </GridWrapper>
  )
}

export default App
