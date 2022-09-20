import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared'
import cls from './ThemeSwitcher.module.scss'
import Icon from 'shared/assets/icons/themeIcon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
className?: string
}

export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = (props) => {
    const {className, ...otherProps} = props
    const { theme, toggleTheme } = useTheme()
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            <Icon className={cls.themeIcon} />
        </Button>
    )
}