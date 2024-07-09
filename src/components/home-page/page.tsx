import React from 'react'

import HeroSection from './hero-section/page'
import Clients from './clients/page'
import HowGetStart from './how-get-started-section/page'
import Pricing from './pricing-section/page'
import BenefitSection from './benefits/page'
import WhyChoose from './why-choose/page'


const HomePage = () => {


    return (
        <React.Fragment>
            <HeroSection />
            {/* <Clients /> */}
            <HowGetStart />
            <Pricing />
            <WhyChoose />
            <BenefitSection />
        </React.Fragment>
    )
}

export default HomePage