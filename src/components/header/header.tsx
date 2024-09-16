import './header.sass';

import logoIcon from '@img/logo.svg';
import phoneIcon from '@img/phone.svg';

const Header = () => {
	return (
		<header>
			<img src={logoIcon} alt="логотип" />
			<a href="tel:8 800 775 01 11">
				<img src={phoneIcon} alt="иконка телефона" />
				<p>8 800 775 01 11</p>
			</a>
		</header>
	);
};

export default Header;
