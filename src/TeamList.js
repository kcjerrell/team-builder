import { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';

const TeamTable = styled.table`
font-size: normal;

th {
	background-color: #282C34;
	color: white;
}

td {
	padding: 5px 20px;
	background-color: #c3c7d3;
	color: black;
}
`;

const TeamList = (props) => {
	const { team } = props;

	return (
		<div>

			<TeamTable>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>E-mail</th>
						<th>Role</th>
					</tr>
				</thead>

				<tbody>

					{team && team.length > 0 &&
						team.map(t => {
							return (
								<tr key={t.id}>
									<td>{t.id}</td>
									<td>{t.name}</td>
									<td>{t.email}</td>
									<td>{t.role}</td>
								</tr>
							);
						})
					}

				</tbody>
			</TeamTable>
		</div>
	);
};

export default TeamList;