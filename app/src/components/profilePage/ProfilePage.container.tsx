import React from 'react'

import ProfilePageView, { ProfilePageBaseProps } from './ProfilePage.view'

export interface ProfilePageProps extends ProfilePageBaseProps { }

const ProfilePageContainer: React.FC<ProfilePageProps> = props => {
  return <ProfilePageView {...props} />
}

export default ProfilePageContainer
