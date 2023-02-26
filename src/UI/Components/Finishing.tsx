import React from 'react';
import { useSelector } from 'react-redux';
import type { finishingType } from '../../models/propTypes';
import type { addOnsState, plansState, Store } from '../../models/stateTypes';
import '../../style/Finishing.css';
import { addOnsData } from '../../utilities/data';

const Finishing = ({ handleReturn }: finishingType): JSX.Element => {
	const planInfo: plansState = useSelector((store: Store) => store.plan);
	const addOnInfo: addOnsState = useSelector((store: Store) => store.addOns);
	const addOnInfoKeys = Object.values(addOnInfo);

	const handleBilling = (): string => {
		return planInfo.toggleState ? 'Yearly' : 'Monthly';
	};

	const calcFinalPrice = (): number => {
		let counter = 0;
		let finalPrice = planInfo.price;
		for (const i of addOnsData) {
			if (addOnInfoKeys[counter] === true) {
				finalPrice +=
					handleBilling() === 'Yearly' ? i.price.yearly : i.price.monthly;
			}
			counter++;
		}
		return finalPrice;
	};

	return (
		<>
			<div className='finishing-card'>
				<div className='flex-cont wide-flex'>
					<div>
						<div className='finishing-title'>
							<span>{`${planInfo.plan} (${handleBilling()})`} </span>
						</div>
						<div
							onClick={handleReturn}
							className='finishing-subtitle finishing-ul highlight'
						>
							<span>Change</span>
						</div>
					</div>
					<div className='finishing-price'>
						<span>{`$${planInfo.price}/${
							handleBilling() === 'Yearly' ? 'yr' : 'mo'
						}`}</span>
					</div>
				</div>
				<div className='divisor'></div>
				{addOnInfoKeys[0] === true ||
				addOnInfoKeys[1] === true ||
				addOnInfoKeys[2] === true ? (
					addOnsData.map(
						(e, i) =>
							addOnInfoKeys[i] === true && (
								<div
									key={e.title}
									className='flex-cont wide-flex margin-add-ons '
								>
									<div className='finishing-subtitle'>
										<span>{e.title}</span>
									</div>
									<div className='price-add-ons'>
										<span>
											{handleBilling() === 'Yearly'
												? `+$${e.price.yearly}/yr`
												: `+$${e.price.monthly}/mo`}
										</span>
									</div>
								</div>
							)
					)
				) : (
					<div className='flex-cont wide-flex margin-add-ons '>
						<div className='finishing-subtitle'>
							<span>No add-ons selected</span>
						</div>
					</div>
				)}
			</div>
			<div className='final-sum flex-cont wide-flex'>
				<div className='finishing-subtitle'>
					<span>
						Total {handleBilling() === 'Yearly' ? '(per year)' : '(per month)'}
					</span>
				</div>
				<div className='finishing-total'>
					<span>{`$${calcFinalPrice()}/${
						handleBilling() === 'Yearly' ? 'yr' : 'mo'
					}`}</span>
				</div>
			</div>
		</>
	);
};

export default Finishing;
