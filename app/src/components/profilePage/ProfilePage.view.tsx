import React from 'react'
import useStyles from './ProfilePage.styles'

export interface ProfilePageBaseProps { }

export interface ProfilePageViewProps extends ProfilePageBaseProps { }

const ProfilePageView: React.FC<ProfilePageViewProps> = () => {
  const classes = useStyles()
  return <div>Profile</div>
}

export default ProfilePageView
