import { Suspense, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App: React.FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button className='toggleTheme' onClick={toggleTheme}>Toggle Theme</button>
            <br />
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default App
