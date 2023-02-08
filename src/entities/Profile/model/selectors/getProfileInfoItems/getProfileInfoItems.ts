import { createSelector } from '@reduxjs/toolkit'
import BirthdayIcon from 'shared/assets/icons/birthdayIcon.svg'
import HomeIcon from 'shared/assets/icons/homeIcon.svg'
import CountryIcon from 'shared/assets/icons/countryIcon.svg'
import { getProfileData } from '../getProfileData/getProfileData'
import { ProfileInfoItemType } from '../../types/profileInfoItem'

export const getProfileInfoItems = createSelector(
	getProfileData,
	(profileData) => {
		if(profileData) {
			const profileInfoItemsList: ProfileInfoItemType[] = [
				{
					Text: profileData?.age,
					Icon: BirthdayIcon
				},
				{
					Text: profileData?.country,
					Icon: CountryIcon
				},
				{
					Text: profileData?.city,
					Icon: HomeIcon
				}
			]
			return profileInfoItemsList
		}
	},
)