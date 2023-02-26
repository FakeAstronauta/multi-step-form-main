import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { plansState, Store } from '../../models/stateTypes';
import '../../style/AddOns.css';
import CustomCheckbox from '../SubComponents/CustomCheckbox';
import { modifyAddOn } from '../../redux/state/addOns';
import { addOnsData } from '../../utilities/data';

const AddOns = (): JSX.Element => {
	const planInfo: plansState = useSelector((store: Store) => store.plan);
	const addOnInfo = useSelector((store: Store) => store.addOns);
	const addOnsValues: boolean[] = Object.values(addOnInfo);
	const addOnsDispatch = useDispatch();

	// a add-on name is passed to save it's state
	const handleAddOn = (
		event: React.ChangeEvent<HTMLInputElement>,
		addOn: string
	): void => {
		if (addOn === addOnsData[0].title) {
			addOnsDispatch(modifyAddOn({ onlineService: event.target.checked }));
		} else if (addOn === addOnsData[1].title) {
			addOnsDispatch(modifyAddOn({ largerStorage: event.target.checked }));
		} else if (addOn === addOnsData[2].title) {
			addOnsDispatch(
				modifyAddOn({ customizableProfile: event.target.checked })
			);
		}
	};

	return (
		<div className='add-ons-wrapper'>
			{addOnsData.map((e, i) => (
				<div
					key={e.title}
					className={`add-on-card ${
						addOnsValues[i] ? 'active-add-on-card' : ''
					}`}
				>
					<div className='flex-cont'>
						<CustomCheckbox
							handleAddOn={handleAddOn}
							addOn={e.title}
							addOnState={addOnsValues[i]}
						/>
						<div>
							<div className='add-on-title'>
								<span>{e.title}</span>
							</div>
							<div className='add-on-subtitle'>
								<span>{e.subtitle}</span>
							</div>
						</div>
					</div>
					<div className='add-on-price'>
						<span>
							{planInfo.toggleState
								? `+$${e.price.yearly}/yr`
								: `+$${e.price.monthly}/mo`}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default AddOns;
