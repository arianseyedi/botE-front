import React from 'react'

import RoutesContainerView, { RoutesContainerBaseProps } from './Routes.view'

export interface RoutesContainerProps extends RoutesContainerBaseProps { }

const RoutesContainerContainer: React.FC<RoutesContainerProps> = props => {
  return <RoutesContainerView {...props} />
}

export default RoutesContainerContainer
