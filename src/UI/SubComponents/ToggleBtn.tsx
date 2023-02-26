import React from 'react';
import '../../style/ToggleBtn.css';
import type { toggleType } from '../../models/propTypes';

const ToggleBtn = ({ handlePlan, toggleState }: toggleType): JSX.Element => {
	return (
		<label className='switch'>
			<input
				type='checkbox'
				onChange={handlePlan}
				defaultChecked={toggleState}
			/>
			<span className='slider round'></span>
		</label>
	);
};

export default ToggleBtn;
