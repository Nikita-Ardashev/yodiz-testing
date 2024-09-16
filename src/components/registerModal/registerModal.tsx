import './registerModal.sass';

import closeIcon from '@img/close.svg';
import React from 'react';

import RegBtn from '../regBtn/regBtn';

interface IRegisterModal {
	setViewFunction: () => void;
}

const RegisterModal = ({ setViewFunction }: IRegisterModal) => {
	const register = (): void => {
		setViewFunction();
	};
	const clickOutsideModal = (e: React.MouseEvent) => {
		const t = e.target;
		const ct = e.currentTarget;
		if (t === ct) {
			setViewFunction();
		}
	};
	return (
		<div className="modal-register" onClick={clickOutsideModal}>
			<div>
				<button onClick={setViewFunction}>
					<img src={closeIcon} alt="кнопка закрытия" />
				</button>
				<div>
					<input type="text" placeholder="Введите ваш e-mail" />
					<RegBtn text="Зарегистрироваться" onClick={register} />
				</div>
			</div>
		</div>
	);
};

export default RegisterModal;
