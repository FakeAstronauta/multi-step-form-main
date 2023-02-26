import React from 'react';
import '../../style/Greetings.css';

const Greetings = (): JSX.Element => {
	return (
		<div className='greetings-wrapper'>
			<img src='images/icon-thank-you.svg' alt='' />
			<h1>Thank you!</h1>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
};

export default Greetings;
