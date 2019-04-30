import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			http_web_site: 'http://pso31.ru/active_pso/vkapp',
			authSign: false,
			spinnerSign: true,
			userData: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });

					fetch(this.state.http_web_site + '/api/method/users.Get.php?user_id=' + this.state.fetchedUser.id)
					.then((res) => res.json())
					.then((data) => (
						this.setState({ userData: data.response })
					))
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} user={this.state.userData} />
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
