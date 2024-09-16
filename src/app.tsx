import './app.sass';

import intersect from '@img/intersect.svg';
import manzana from '@img/manzana.jpg';
import { useState } from 'react';

import DateRow from './components/dateRow/dateRow';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import RegBtn from './components/regBtn/regBtn';
import RegisterModal from './components/registerModal/registerModal';

const App = () => {
	const [isModalRegister, setIsModalRegister] = useState<boolean>(false);
	const changeIsModalRegister = (): void => {
		setIsModalRegister((v) => !v);
	};
	return (
		<>
			{isModalRegister && <RegisterModal setViewFunction={changeIsModalRegister} />}
			<Header />
			<main>
				<div className="heading">
					<h1>
						Приглашаем вас на вебинар «Platform Day: обновления Manzana Loyalty,
						Campaign и BI
					</h1>
					<div>
						<DateRow type="date" value="10 сентября 2024" />
						<DateRow type="time" value="11:00" />
					</div>
				</div>
				<img src={manzana} alt="" />
				<RegBtn text="Зарегистрироваться" onClick={changeIsModalRegister} />
				<div className="info">
					<div>
						<h3>Коллеги, добрый день!</h3>
						<p>
							При выходе новых функций мы отправляем email-рассылку. В этот
							раз в дополнение к рассылке будет живой рассказ с подробным
							описанием новых функций.
						</p>
					</div>
					<div className="info-text__shape">
						<span>
							<img src={intersect} alt="Дополнительная фигура" />
							<p>
								Мы подготовили живой рассказ не только о преимуществах
								основных обновлений Manzana Loyalty, Campaign и BI, но и
								демонстрацию их в системе.
							</p>
						</span>
						<span>
							<img src={intersect} alt="Дополнительная фигура" />
							<p>
								Это позволит вам лучше понять, как использовать новые
								функции и получить максимальную пользу от работы с
								платформой.
							</p>
						</span>
						<span>
							<img src={intersect} alt="Дополнительная фигура" />
							<p>
								Вы сможете задать все интересующие вопросы и получить ответы
								прямо во время вебинара.
							</p>
						</span>
					</div>
					<div className="info-text__background">
						<h2>
							Мы уверены, что данное мероприятие будет полезным для всех
							участников и поможет улучшить работу с платформой Manzana.
						</h2>
					</div>
					<div>
						<p>
							Вебинар состоится <b>10 сентября</b> (вторник) в <b>11:00</b>.
							Спикер – <b>Роман Горячев</b>, продакт-менеджер по платформе
							Manzana.
						</p>
						<p>
							Зарегистрироваться можно по ссылке <b>MTS Link</b>
						</p>
					</div>
				</div>
				<RegBtn text="Зарегистрироваться" onClick={changeIsModalRegister} />
			</main>
			<Footer />
		</>
	);
};

export default App;
