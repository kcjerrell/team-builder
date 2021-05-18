import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

const StyledForm = styled.form`
	input {
		vertical-align: middle;
		font-size: medium;
	}
`;

const initialFormValues = { name: '', email: '', role: '' };

const Form = (props) => {
	const { addMember } = props;
	const [formValues, setFormValues] = useState(initialFormValues);
	const history = useHistory();

	const inputChanged = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const submit = (e) => {
		e.preventDefault();
		const newMember = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
			role: formValues.role.trim(),
		};
		addMember(newMember);
		history.push("/");
	}

	return (
		<StyledForm onSubmit={submit}>
			<table>
				<tbody>
					<tr>
						<td>Name:</td>
						<td><input name="name" onChange={(e) => inputChanged(e)} value={formValues.name}></input></td>
					</tr>
					<tr>
						<td>E-mail:</td>
						<td><input name="email" onChange={(e) => inputChanged(e,)} value={formValues.email}></input></td>
					</tr>
					<tr>
						<td>Role:</td>
						<td><input name="role" onChange={(e) => inputChanged(e)} value={formValues.role}></input></td>
					</tr>
				</tbody>
			</table>
			<button>Save</button>
		</StyledForm>
	);
}

export default Form;