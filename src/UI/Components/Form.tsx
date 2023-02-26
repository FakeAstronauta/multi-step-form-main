import React, { useEffect } from 'react';
import '../../style/Form.css';
import type { Store } from '../../models/stateTypes';
import type { FormProps } from '../../models/propTypes';
import { useSelector, useDispatch } from 'react-redux';
import { modifyUser } from '../../redux/state/form';

export default function Form({
	clicked,
	handleCompleted,
}: FormProps): JSX.Element {
	const form = useSelector((store: Store) => store.user);
	const dispatch = useDispatch();
	const borderStyle = ['normal-border', 'warning-border'];
	const inputWarning: string = 'This field is required';

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(modifyUser({ [event.target.id]: event.target.value }));
	};

	useEffect(() => {
		if (form.name !== '' && form.email !== '' && form.phoneNumber !== '') {
			handleCompleted(true);
		} else {
			handleCompleted(false);
		}
	}, [form]);

	return (
		<>
			<form>
				<div>
					<div className='label-wrapper'>
						<label htmlFor='name'>Name</label>
						{clicked && form.name === '' && (
							<span className='input-warning'>{inputWarning}</span>
						)}
					</div>
					<input
						id='name'
						className={`${borderStyle[clicked && form.name === '' ? 1 : 0]}`}
						type='text'
						autoComplete='off'
						value={form.name}
						onChange={handleChange}
						placeholder='e.g. Stephen King'
					/>
				</div>
				<div>
					<div className='label-wrapper'>
						<label htmlFor='email'>Email Address</label>
						{clicked && form.email === '' && (
							<span className='input-warning'>{inputWarning}</span>
						)}
					</div>
					<input
						id='email'
						className={`${borderStyle[clicked && form.email === '' ? 1 : 0]}`}
						type='email'
						autoComplete='off'
						value={form.email}
						onChange={handleChange}
						placeholder='e.g. stephenking@lorem.com'
					/>
				</div>
				<div>
					<div className='label-wrapper'>
						<label htmlFor='phoneNumber'>Phone Number</label>
						{clicked && form.phoneNumber === '' && (
							<span className='input-warning'>{inputWarning}</span>
						)}
					</div>
					<input
						id='phoneNumber'
						className={`${
							borderStyle[clicked && form.phoneNumber === '' ? 1 : 0]
						}`}
						type='text'
						autoComplete='off'
						value={form.phoneNumber}
						onChange={handleChange}
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</form>
		</>
	);
}
