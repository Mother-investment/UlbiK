import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
	path: string,
	text: string,
	icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		icon: MainIcon,
		text: 'Главная'
	},
	{
		path: RoutePath.about,
		icon: AboutIcon,
		text: 'О сайте'
	},
	{
		path: RoutePath.profile,
		icon: MainIcon,
		text: 'Профиль'
	}
]