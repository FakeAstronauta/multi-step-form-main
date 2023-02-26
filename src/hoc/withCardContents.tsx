import React from 'react';
import Form from '../UI/Components/Form';
import Plans from '../UI/Components/Plans';
import AddOns from '../UI/Components/AddOns';
import type { hocType } from '../models/propTypes';
import Finishing from '../UI/Components/Finishing';

const withCardContents = (
	stepNumber: number
): (({ clicked, handleCompleted, handleReturn }: hocType) => JSX.Element) => {
	return function f({
		clicked,
		handleCompleted,
		handleReturn,
	}: hocType): JSX.Element {
		if (stepNumber === 1) {
			return <Plans />;
		} else if (stepNumber === 2) {
			return <AddOns />;
		} else if (stepNumber === 3) {
			return <Finishing handleReturn={handleReturn} />;
		}
		return <Form clicked={clicked} handleCompleted={handleCompleted} />;
	};
};

export default withCardContents;
