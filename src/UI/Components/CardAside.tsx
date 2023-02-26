import React from 'react';
import '../../style/CardAside.css';

const info = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

const CardAside = ({ stepNumber }: { stepNumber: number }): JSX.Element => {
	return (
		<aside className='hide-mobile'>
			<ul>
				{info.map((e, i) => (
					<li key={e}>
						<div
							className={`step-index ${
								i === stepNumber || (stepNumber === 4 && i === 3)
									? 'current-step'
									: ''
							} `}
						>
							<span>{i + 1}</span>
						</div>
						<div>
							<div className='flex'>
								<span className='step-info'>STEP {i + 1}</span>
							</div>
							<div className=''>
								<span className='step-title'>{e}</span>
							</div>
						</div>
					</li>
				))}
			</ul>
			<img src='images/bg-sidebar-desktop.svg' alt='side menu background' />
		</aside>
	);
};

export default CardAside;
