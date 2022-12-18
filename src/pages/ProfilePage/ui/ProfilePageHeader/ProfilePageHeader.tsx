import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { memo } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader:React.FC<ProfilePageHeaderProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль')}/>
				<Button theme={ButtonTheme.OUTLINE} >{t('Редактировать')}</Button>
			</div>
		</div>
	)
})