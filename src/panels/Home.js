import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, user }) => (
	<Panel id={id}>
		<PanelHeader>Конкурс на активность</PanelHeader>
		{fetchedUser &&
		<Group title="Общая информация">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} size={80}/> : null}
				description={'Участник конкурса'}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name} ${user.user_id}`}
			</ListItem>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
