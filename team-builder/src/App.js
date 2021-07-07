import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import MemberList from './Components/MemberList';

function App() {
	const [ members, setMembers ] = useState([
		{
			//team member key value pair
			id    : 1,
			name  : 'Stephanie',
			email : 'hello@seestephsay.com',
			role  : 'Web Developer',
		},
	]);

	const addNewMember = (member) => {
		const newMember = {
			id    : Date.now(),
			name  : member.name,
			email : member.email,
			role  : member.role,
		};
		setMembers([ ...members, newMember ]);
	};

	return (
		<div className='App'>
			<Form addNewMember={addNewMember} />
			<MemberList memberlist={members} />
		</div>
	);
}

export default App;
