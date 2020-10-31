import React from 'react'
import useStyles from './NotFoundPageStyles.route'

export interface NotFoundPageBaseProps { }

export interface NotFoundPageViewProps extends NotFoundPageBaseProps { }

const NotFoundPageView: React.FC<NotFoundPageViewProps> = () => {
  const classes = useStyles()
  return <div>Ooops...notFound</div>
}

export default NotFoundPageView
