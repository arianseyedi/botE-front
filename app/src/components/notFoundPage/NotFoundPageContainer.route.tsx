import React from 'react'

import NotFoundPageView, { NotFoundPageBaseProps } from './NotFoundPageView.route'

export interface NotFoundPageProps extends NotFoundPageBaseProps { }

const NotFoundPageContainer: React.FC<NotFoundPageProps> = props => {
  return <NotFoundPageView {...props} />
}

export default NotFoundPageContainer
