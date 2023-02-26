import React from 'react';
import '../../style/BackCard.css';

const BackCard = ({ stepNumber }: { stepNumber: number }): JSX.Element => {
	return (
		<div className='back-card hide-desktop'>
			<ul className=''>
				{[...Array(4).keys()].map(e => (
					<li key={e}>
						<div
							className={`step-index-mobile ${
								e === stepNumber || (stepNumber === 4 && e === 3)
									? 'current-step-mobile'
									: ''
							} `}
						>
							<div className='abs center-abs'>
								<span>{e + 1}</span>
							</div>
						</div>
					</li>
				))}
			</ul>
			<img src='images/bg-sidebar-mobile.svg' alt='background image' />
		</div>
	);
};

export default BackCard;
