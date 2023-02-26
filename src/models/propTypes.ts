export interface FormProps {
	clicked: boolean;
	handleCompleted: (fieldsCompleted: boolean) => void
}

export interface hocType{
	clicked: boolean;
	handleCompleted: (fieldsCompleted: boolean) => void
	handleReturn: () => void
}

export interface toggleType {
	handlePlan: () => void;
	toggleState: boolean;
}

export interface finishingType{
	handleReturn: () => void
}

export interface buttonType{
	stepNumber: number;
	handlePrev: () => void;
	handleNext: () => void;
	mobile: string;
}