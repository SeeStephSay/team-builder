import React, { useState } from 'react';

//function declaration instead of assignment
export default function Form(props) {
	const [ member, setMember ] = useState({
		//member key value pairs here, set to empty strings?
		name  : '',
		email : '',
		role  : '',
	});

	const handleChanges = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	const submitForm = (e) => {
		e.preventDefault();
		props.addNewMember(member);
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor='name'>Name: </label>
			<input
				id='name'
				placeholder='First and Last Name'
				type='text'
				name='name'
				onChange={handleChanges}
				value={member.name}
			/>

			<label htmlFor='email'>Email: </label>
			<input
				id='email'
				placeholder='Email Address'
				type='text'
				name='email'
				onChange={handleChanges}
				value={member.email}
			/>

			<label htmlFor='role'>Role: </label>
			<input
				id='role'
				placeholder='Role at Lambda'
				type='text'
				name='role'
				onChange={handleChanges}
				value={member.role}
			/>

			<button type='submit'>Add Team Member</button>
		</form>
	);
}
