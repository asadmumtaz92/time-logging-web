import React from 'react'

import HeroSection from './hero-section/page'
import Clients from './clients/page'
import HowGetStart from './how-get-started-section/page'
import HowGetStart2 from './how-get-started-section/page-copy'
import Pricing from './pricing-section/page'
import BenefitSection from './benefits/page'


const HomePage = () => {


    return (
        <React.Fragment>
            <HeroSection />
            <Clients />
            <HowGetStart />
            <HowGetStart2 />
            <Pricing />
            <BenefitSection />
        </React.Fragment>
    )
}

export default HomePage