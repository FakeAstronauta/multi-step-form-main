import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Card from '../Sections/Card';
import '../../style/MainPage.css';

const MainPage = (): JSX.Element => {
	return (
		<main className='main-container'>
			<Provider store={store}>
				<Card />
			</Provider>
		</main>
	);
};

export default MainPage;
