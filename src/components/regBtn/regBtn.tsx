import './regBtn.sass';

import { CSSProperties } from 'react';
interface IRegBtn {
	text: string;
	style?: CSSProperties;
	className?: string;
	onClick: () => void;
}

const RegBtn = ({ text, style, className, onClick }: IRegBtn) => {
	return (
		<button
			className={'ui-register-btn' + ` ${className ?? ''}`}
			style={style}
			onClick={onClick}
		>
			<p>{text}</p>
		</button>
	);
};

export default RegBtn;
