import Bogota from '../components/WeatherBogota'
import Extra from '../components/Extra'

import Request from '../Core/Request'

export default function Home(props) {
  return (
    <>
      <Bogota props={props} />
      <Extra props={props} />
    </>
  )
}

Home.getInitialProps = async ctx => {
  const request = new Request()

  return {
      bogota: await request.bogota(),
      forecast: await request.forecast(),
      francia: await request.france()
  }
}
