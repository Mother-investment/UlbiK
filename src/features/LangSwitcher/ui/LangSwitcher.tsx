import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

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
		<div className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggle}>
			{t('ЯзыкВыбор')}
		</div>
	)
}
