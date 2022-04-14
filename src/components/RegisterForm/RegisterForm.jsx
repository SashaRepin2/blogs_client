import React from 'react';
import styles from './RegisterForm.css';

const RegisterForm = ({ children, ...props }) => {
	return (
		<div className={styles.form}>
			<div className={styles.form__header}>{props.title}</div>
			<form>{}</form>
		</div>
	);
};

export default RegisterForm;
