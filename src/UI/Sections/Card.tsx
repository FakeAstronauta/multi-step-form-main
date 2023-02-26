import React from 'react';
import '../../style/Card.css';
import CardAside from '../Components/CardAside';
import withCardContens from '../../hoc/withCardContents';
import Greetings from '../Components/Greetings';
import { stepsInfo } from '../../utilities/data';
import BackCard from '../MobileComponents/BackCard';
import CardButton from '../SubComponents/CardButton';

const Card = (): JSX.Element => {
	const [clicked, setClicked] = React.useState<boolean>(false);
	const [stepNumber, setStepNumber] = React.useState<number>(0);
	const completedFields = React.useRef(false);
	const Content = withCardContens(stepNumber);

	const handleCompleted = (fieldsCompleted: boolean): void => {
		// avoid recall when the value is not the same
		if (completedFields.current !== fieldsCompleted) {
			completedFields.current = fieldsCompleted;
		}
	};

	const handleNext = (): void => {
		// counter increases only when all fields are completed, otherwise only the click is passed
		if (completedFields.current) {
			setStepNumber(stepNumber + 1);
		} else {
			setClicked(true);
		}
	};

	const handlePrev = (): void => {
		setStepNumber(stepNumber - 1);
	};

	const handleReturn = (): void => {
		setStepNumber(1);
	};

	return (
		<>
			{/* visible only in mobile */}
			<BackCard stepNumber={stepNumber} />
			<section>
				<div className='card-wrapper-mobile'>
					<div className='card'>
						<CardAside stepNumber={stepNumber} />
						{stepNumber < 4 ? (
							<div className='m-auto content-wrapper'>
								<h2>{stepsInfo[stepNumber].title}</h2>
								<p>{stepsInfo[stepNumber].subtile}</p>
								<div className='step-content-wrapper'>
									<Content
										clicked={clicked}
										handleCompleted={handleCompleted}
										handleReturn={handleReturn}
									></Content>
								</div>
								<CardButton
									stepNumber={stepNumber}
									handleNext={handleNext}
									handlePrev={handlePrev}
									mobile={''}
								/>
							</div>
						) : (
							<Greetings />
						)}
					</div>

					{stepNumber !== 4 && (
						<CardButton
							stepNumber={stepNumber}
							handleNext={handleNext}
							handlePrev={handlePrev}
							mobile={'-mobile'}
						/>
					)}
				</div>
			</section>
		</>
	);
};

export default Card;
