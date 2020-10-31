import React from 'react'

import ProfileMakerPageView, { ProfileMakerPageBaseProps } from './ProfileMakerPageView.route'

export interface ProfileMakerPageProps extends ProfileMakerPageBaseProps { }

const ProfileMakerPageContainer: React.FC<ProfileMakerPageProps> = props => {
  return <ProfileMakerPageView {...props} />
}

export default ProfileMakerPageContainer
