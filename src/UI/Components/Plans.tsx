import React from 'react';
import ToggleBtn from '../SubComponents/ToggleBtn';
import { useDispatch, useSelector } from 'react-redux';
import type { plansState, Store } from '../../models/stateTypes';
import { updatePlan } from '../../redux/state/plan';
import { plansInfo } from '../../utilities/data';
import '../../style/Plans.css';

const Plans = (): JSX.Element => {
	const planInfo: plansState = useSelector((store: Store) => store.plan);
	const dispatch = useDispatch();
	// used to avoid render when change card style
	const cardRef = React.useRef<HTMLDivElement[] | null[]>([]);
	const lastCardRef = React.useRef<HTMLDivElement | null>(null);

	// selects every card
	const styleSavedCard = (i: number): void => {
		const elem = cardRef.current[i];
		elem?.classList.add('card-selected');
		lastCardRef.current = elem;
	};

	// state of every individual card
	const handleTypePlan = (i: number, pl: string = '', pr: number = 0): void => {
		// this should be in another function
		const elem = cardRef.current[i];
		elem?.classList.add('card-selected');
		if (lastCardRef.current !== null) {
			lastCardRef.current?.classList.remove('card-selected');
		}
		lastCardRef.current = elem;

		dispatch(
			updatePlan({
				cardIndex: i,
				plan: pl,
				price: pr,
			})
		);
	};

	// state of the toggle button
	const handlePlan = (): void => {
		dispatch(
			updatePlan({
				toggleState: !planInfo.toggleState,
			})
		);
	};

	React.useEffect(() => {
		// called only in the first render to style the corresponding card
		styleSavedCard(planInfo.cardIndex);
	});

	React.useEffect(() => {
		dispatch(
			updatePlan({
				price: planInfo.toggleState
					? plansInfo[planInfo.cardIndex].subtitle.yearly
					: plansInfo[planInfo.cardIndex].subtitle.monthly,
			})
		);
	}, [planInfo.toggleState]);

	return (
		<>
			<section className='cards-wrapper'>
				{plansInfo.map((e, i) => (
					<div
						key={e.imgTitle}
						className='plans-card'
						ref={el => (cardRef.current[i] = el)}
						onClick={() => {
							handleTypePlan(
								i,
								e.title,
								planInfo.toggleState ? e.subtitle.yearly : e.subtitle.monthly
							);
						}}
					>
						<img src={`images/icon-${e.imgTitle}.svg`} alt='icon' />
						<div>
							<div className='card-title'>
								<span>{e.title}</span>
							</div>
							<div className='card-subtitle'>
								<span>
									{planInfo.toggleState
										? `$${e.subtitle.yearly}/yr`
										: `$${e.subtitle.monthly}/mo`}
								</span>
							</div>
							<div
								className={`card-yearly-offer ${
									planInfo.toggleState ? '' : 'disappear'
								}`}
							>
								<span>2 months free</span>
							</div>
						</div>
					</div>
				))}
			</section>
			<div className='toggle-wrapper'>
				<div className='inner'>
					<div
						className={
							planInfo.toggleState ? 'unactive-toggle' : 'active-toggle'
						}
					>
						<span>Monthly</span>
					</div>
					<ToggleBtn
						handlePlan={handlePlan}
						toggleState={planInfo.toggleState}
					/>
					<div
						className={
							planInfo.toggleState ? 'active-toggle' : 'unactive-toggle'
						}
					>
						<span>Yearly</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Plans;
