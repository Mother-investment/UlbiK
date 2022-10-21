import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface IProps {}

export const AppRouter: React.FC<IProps> = () => {
	const { t } = useTranslation()
	return (
		<Suspense fallback={<div>{t('Загрузка')}</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} path={path} element={<div className="pageWrapper">{element}</div>} />
				))}
			</Routes>
		</Suspense>
	)
}