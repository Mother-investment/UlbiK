import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { memo, useEffect, useState } from 'react'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Container } from 'shared/ui/Container/Container'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import CityIcon from 'shared/assets/icons/cityIcon.svg'
import InfoIcon from 'shared/assets/icons/infoIcon.svg'
import { Loader } from 'shared/ui/Loader/Loader'
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, Profile } from 'entities/Profile'
import { ProfileCardModal } from './../ProfileCardModal/ProfileCardModal'
import { EditProfile } from 'features/EditProfile'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ProfileCardProps {
	className?: string
	data?: Profile
	isLoading?: boolean
	error?: string
	id?: string
}

export const ProfileCard:React.FC<ProfileCardProps> = memo((props) => {
	const { className, id } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id))
		}
	})

	const openInfo = () => {
		setIsOpen(true)
	}
	const closeInfo = () => {
		setIsOpen(false)
	}

	if(isLoading || data == undefined) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}><Loader /></div>
		)
	}

	if(error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ATTN}
					aling={TextAling.CENTER}
					title={t('Произошла ошибка при загрузке профилья')}
					text={t('Попробуйте обновить страницу')}
				/>
			</div>
		)
	}

	return (
		<Container className={classNames(cls.ProfileCard, {}, [className])}>
			<LuminousContainer border radius>
				<Avatar size={AvatarSize.XL} className={cls.avatar} src={data.avatar} radius />
			</LuminousContainer>
			<div className={cls.main}>
				<div className={cls.info}>
					<Text theme={TextTheme.SECONDARY} title={`${t(data.firstName)} ${t(data.lastName)}`}/>
					<div className={cls.fullInfo}>
						<div className={cls.itemInfo}>
							<CityIcon className={cls.iconInfo}/>
							<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={t(data.city)}/>
						</div>
						<div className={classNames(cls.learnMore, {}, [cls.itemInfo]) } onClick={openInfo}>
							<InfoIcon className={cls.iconInfo}/>
							<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={t('Подробнее')}/>
						</div>
					</div>
				</div>
				<div className={cls.actions}>
					<EditProfile />
				</div>
			</div>
			{isOpen && <ProfileCardModal isOpen={isOpen} onClose={closeInfo} />}
		</Container>
	)
})