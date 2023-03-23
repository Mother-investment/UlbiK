import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from '../types/sidebar'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import { getRouteMain, getRouteAbout, getRouteProfile } from 'shared/const/router'



export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: MainIcon,
				text: 'Главная'
			},
			{
				path: getRouteAbout(),
				Icon: AboutIcon,
				text: 'О сайте'
			},
		]

		if (userData) {
			sidebarItemsList.push(
				{
					path: getRouteProfile(userData.id),
					Icon: ProfileIcon,
					text: 'Профиль',
					authOnly: true,
				}
			)
		}

		return sidebarItemsList
	},
)
