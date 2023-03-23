import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { AppRoutes, getRouteAbout, getRouteMain, getRouteProfile } from 'shared/const/router'
import { AppRoutesProps } from 'shared/types/router'


export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPage />
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(':id'),
		element: <ProfilePage />,
		authOnly: true
	},
	// last
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />
	}
}