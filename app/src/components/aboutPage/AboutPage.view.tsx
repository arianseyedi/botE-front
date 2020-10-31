import React from 'react'
import useStyles from './AboutPage.styles'

export interface AboutPageBaseProps { }

export interface AboutPageViewProps extends AboutPageBaseProps { }

const AboutPageView: React.FC<AboutPageViewProps> = () => {
  const classes = useStyles()
  return <div>TOBE Implementedsdd</div>
}

export default AboutPageView
