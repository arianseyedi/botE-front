import React from 'react'

import AboutPageView, { AboutPageBaseProps } from './AboutPage.view'

export interface AboutPageProps extends AboutPageBaseProps { }

const AboutPageContainer: React.FC<AboutPageProps> = props => {
  return <AboutPageView {...props} />
}

export default AboutPageContainer
