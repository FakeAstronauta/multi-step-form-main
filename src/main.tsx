import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './UI/Pages/MainPage';
import './style/common.css';
import './style/var.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MainPage />
	</React.StrictMode>
);
