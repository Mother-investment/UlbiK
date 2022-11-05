import { useTranslation } from 'react-i18next'
import { Button, classNames, Text } from 'shared'
import cls from './ProfilePageHeader.module.scss'
import { memo } from 'react'
import { TextTheme } from 'shared/ui/text/Text'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader:React.FC<ProfilePageHeaderProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<div className={cls.header}>
				<Text theme={TextTheme.PRIMARY} title={t('Профиль')}/>
				<Button theme={ButtonTheme.OUTLINE} >{t('Редактировать')}</Button>
			</div>
		</div>
	)
})