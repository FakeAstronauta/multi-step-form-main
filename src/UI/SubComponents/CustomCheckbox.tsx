import React from 'react';
import '../../style/CustomCheckbox.css';

interface addOn {
	handleAddOn: (e: React.ChangeEvent<HTMLInputElement>, addOn: string) => void;
	addOn: string;
	addOnState: boolean;
}

const CustomCheckbox = ({
	handleAddOn,
	addOn,
	addOnState,
}: addOn): JSX.Element => {
	return (
		<label className='checkbox-container'>
			<input
				type='checkbox'
				onChange={e => {
					handleAddOn(e, addOn);
				}}
				defaultChecked={addOnState}
			/>
			<span className='checkmark'></span>
		</label>
	);
};

export default CustomCheckbox;
