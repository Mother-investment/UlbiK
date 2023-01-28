import { useTranslation } from 'react-i18next'
import cls from './EditProfile.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { Button,ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { EditForm } from '../EditForm/EditForm'
import { Modal } from 'shared/ui/Modal/Modal'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchAddressesData } from 'entities/Addresses/model/services/fetchProfileData/fetchAddressesData'

interface EditProfileProps {
	className?: string
}

export const EditProfile:React.FC<EditProfileProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()
	const [isOpenModal, setIsOpenModal] = useState(false)
	const dispatch = useAppDispatch()


	const onShowModal = useCallback(() => setIsOpenModal(true), [])
	const onCloseModal = useCallback(() => setIsOpenModal(false), [])

	useEffect(() => {
		dispatch(fetchAddressesData())
	}, [dispatch])

	return (
		<div className={classNames(cls.EditProfile, {}, [className])}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onShowModal} >{t('Редактировать профиль')}</Button>
			{isOpenModal &&
				<Modal isOpen={isOpenModal} onClose={onCloseModal} lazy>
					<EditForm />
				</Modal>
			}
		</div>
	)
})