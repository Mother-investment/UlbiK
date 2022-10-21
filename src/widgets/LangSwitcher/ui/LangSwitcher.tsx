import { classNames } from 'shared'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
	const { className, ...otherProps } = props

	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button theme={ButtonTheme.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggle}>
			{t('ЯзыкВыбор')}
		</Button>
	)
}
