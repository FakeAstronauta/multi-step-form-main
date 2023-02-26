import React from 'react';
import type { buttonType } from '../../models/propTypes';

const CardButton = ({
	stepNumber,
	handlePrev,
	handleNext,
	mobile = '',
}: buttonType): JSX.Element => {
	return (
		<div
			className={`btn-wrapper${mobile} hide-${
				mobile === '' ? 'mobile' : 'desktop'
			}`}
		>
			{stepNumber >= 1 ? (
				<div className='btn-step-prev' onClick={handlePrev}>
					<span>Go Back</span>
				</div>
			) : (
				<div></div>
			)}

			<div
				className={`btn-card${mobile} ${
					stepNumber === 3 ? 'btn-confirm' : 'btn-step-next'
				}`}
				onClick={handleNext}
			>
				<div className='abs center-abs'>
					<span>{stepNumber === 3 ? 'Confirm' : 'Next Step'}</span>
				</div>
			</div>
		</div>
	);
};

export default CardButton;
