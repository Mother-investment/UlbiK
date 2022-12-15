import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Loader } from 'shared/ui/Loader/Loader'

export const AppRouter: React.FC = () => {
	const { t } = useTranslation()
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} path={path} element={<div className="pageWrapper">{element}</div>} />
				))}
			</Routes>
		</Suspense>
	)
}