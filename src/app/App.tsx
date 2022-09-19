import { Suspense, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { MainPage } from 'pages/MainPage'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button className='toggleTheme' onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
export default App
