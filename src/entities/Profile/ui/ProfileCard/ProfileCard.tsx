import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import cls from './ProfileCard.module.scss'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard:React.FC<ProfileCardProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()

	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<h2>{t('Профиль')}</h2>
				<Button theme={ButtonTheme.OUTLINE} >{t('Редактировать')}</Button>
			</div>
			<div className={cls.data}>

			</div>
		</div>
	)
})