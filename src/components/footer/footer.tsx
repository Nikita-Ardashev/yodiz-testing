import './footer.sass';

import manzanaGroup from '@img/manzanaGroup.jpg';
import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div>
				<p>Спасибо за ваше внимание и до встречи на вебинаре!</p>
				<h2>Команда Manzana Group</h2>
			</div>
			<img src={manzanaGroup} alt="Изображение manzana group" />
		</footer>
	);
};

export default Footer;
