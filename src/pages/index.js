import React from 'react'

import { TestimonialNew as Testimonial, TrustedClientsNew as TrustedClients, Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/home/Hero'
import Benefits from 'src/components/pages/home/Benefits'
import ServerlessGrowth from 'src/components/pages/home/ServerlessGrowth'
import AllInOne from 'src/components/pages/home/AllInOne'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      usingSafariDesktop: false,
    }
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window
    const navigatorGlobal = typeof navigator !== 'undefined' && navigator

    
    if(windowGlobal && navigatorGlobal) {
      const using_safari_browser = /^((?!chrome|android).)*safari/i.test(navigatorGlobal.userAgent)
      const using_desktop = windowGlobal.innerWidth > 1200

      if(using_safari_browser && using_desktop) {
        this.setState({usingSafariDesktop: true})
      }
    }
  }

  render() {
    return (
      <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader={true}>
        <Helmet
          title='Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more'
          description='Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more.'
          location={this.props.location}
        />
        <Hero usingSafariDesktop={this.state.usingSafariDesktop}/>
        <Benefits usingSafariDesktop={this.state.usingSafariDesktop}/>
        <ServerlessGrowth />
        <Testimonial />
        <AllInOne usingSafariDesktop={this.state.usingSafariDesktop}/>
        <TrustedClients />
      </DefaultLayout>
    )
  }
}

