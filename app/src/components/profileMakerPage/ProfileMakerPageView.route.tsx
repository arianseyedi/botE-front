import React from 'react'
import useStyles from './ProfileMakerPageStyles.route'

export interface ProfileMakerPageBaseProps { }

export interface ProfileMakerPageViewProps extends ProfileMakerPageBaseProps { }

const ProfileMakerPageView: React.FC<ProfileMakerPageViewProps> = () => {
  const classes = useStyles()
  return <div>Profile</div>
}

export default ProfileMakerPageView
