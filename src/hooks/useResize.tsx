import React from 'react';

export const useResize = (): { resized: number } => {
	const [resized, setResized] = React.useState<number>(window.innerWidth);

	window.onresize = () => {
		setResized(window.innerWidth);
	};

	return { resized };
};

export default useResize;
