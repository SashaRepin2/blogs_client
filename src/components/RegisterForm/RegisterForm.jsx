import { TextField, Box } from '@mui/material';
import React, { useEffect } from 'react';
import styles from './RegisterForm.module.css';

const registerFormFields = [
	{
		name: 'login',
		require: true,
		placeholder: 'Введите логин',
	},
];

const RegisterForm = ({ children, ...props }) => {
	const [filedsValue, setFiledsValue] = React.useState({
		login: '',
		email: '',
		last_name: '',
		middle_name: '',
		first_name: '',
		password: '',
		confirm_password: '',
		age: null,
		gender: '',
		agreement: false,
	});

	const onHandleChange = item => {
		setFiledsValue({ ...filedsValue, [item.name]: item.value });
	};

	return (
		<div className={styles.form}>
			<div className={styles.form__header}>{props.title}</div>
			<form className={styles.form__content}>
				<Box
					component='form'
					sx={{
						'& .MuiTextField-root': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete='off'>
					<TextField
						name={'login'}
						placeholder={'Введите логин'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.login}
						required
					/>
					<TextField
						name={'email'}
						placeholder={'Введите почту'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.email}
						required
					/>
					<TextField
						name={'last_name'}
						placeholder={'Введите Фамилию'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.last_name}
						required
					/>
					<TextField
						name={'middle_name'}
						placeholder={'Введите Отчество'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.middle_name}
						required
					/>
					<TextField
						name={'first_name'}
						placeholder={'Введите Имя'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.first_name}
						required
					/>
					<TextField
						name={'password'}
						placeholder={'Введите пароль'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.password}
						required
					/>
					<TextField
						name={'confirm_password'}
						placeholder={'Введите повторно логин'}
						onChange={e => onHandleChange(e.target)}
						value={filedsValue.confirm_password}
						required
					/>
					<TextField
						name={'age'}
						type={'number'}
						placeholder={'Введите возраст'}
						InputProps={{
							inputProps: { min: 0, max: 150 },
							inputMode: 'numeric',
							pattern: '[0-9]*',
						}}
						required
					/>
					<TextField name={'gender'} placeholder={'Введите логин'} required />
					<TextField name={'agreement'} placeholder={'Введите логин'} required />
				</Box>
			</form>
		</div>
	);
};

export default RegisterForm;
