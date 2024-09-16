import './dateRow.sass';

import calendarIcon from '@img/calendar.svg';
import clockIcon from '@img/clock.svg';
import React from 'react';

type TDateRow = 'date' | 'time';

interface IDateRow {
	type: TDateRow;
	value: string;
}

const DateRow = ({ type, value }: IDateRow) => {
	return (
		<div className="ui-date-row">
			<img src={type === 'date' ? calendarIcon : clockIcon} alt="" />
			<p>{value}</p>
		</div>
	);
};

export default DateRow;
