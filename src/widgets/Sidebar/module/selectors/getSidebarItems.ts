import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import { createSelector } from '@reduxjs/toolkit'
import { SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from 'entities/User'

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
			{
				path: RoutePath.main,
				Icon: MainIcon,
				text: 'Главная'
			},
			{
				path: RoutePath.about,
				Icon: AboutIcon,
				text: 'О сайте'
			}
		]

		if (userData) {
			sidebarItemsList.push(
				{
					path: RoutePath.profile,
					Icon: ProfileIcon,
					text: 'Профиль'
				}
			)
		}

		return sidebarItemsList
	}
)