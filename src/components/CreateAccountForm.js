import React from 'react';
import './CreateAccountForm.css';

export default function CreateAccountForm(props) {
	return (
		<div className="user-form">
			<form action="workshops.html" method="get">
				<div>
					<label>email</label>
					<input type="email" />
				</div>
				<div>
					<label>password</label>
					<input type="password" />
				</div>
				<div>
					<button>
						sign up!
					</button>
				</div>
			</form>
		</div>
	);
}