import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

interface IProps {}

export const AppRouter: React.FC<IProps> = () => {
    return (
        <Suspense fallback={<div>Loading..</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} path={path} element={<div className="pageWrapper">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    )
}