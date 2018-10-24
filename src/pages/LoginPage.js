import React from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	Button,
	ActivityIndicator,
	Alert
} from 'react-native';

import FormRow from '../components/FormRow';

import ServerUrl from '../service/Api';

export default class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
	  		email: '',
	  		password: '',
	  		isLoading: false,
	  		message: '',
				publicKey: 'aNVidrYfCUtRaPDS26riyElh2TuJExEwDqvjDzxX'
	  	};
	}

	onChangeInput(field, value) {
		this.setState({
			[field]: value
		});
	}

	autenticar() {
		this.setState({ isLoading: true, message: '' });

		const { email, password, publicKey } = this.state;
		const { api, web } = ServerUrl;

		fetch(web + 'oauth/token', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'grant_type': 'password',
				'client_id': '2',
				'client_secret': publicKey,
				'username': email,
				'password': password
			})
		})
		.then(response => response.json())
			.then(responseJson => { Alert.alert(responseJson) })
			.catch(error => {
				console.log('Erro no react native: ', error);
				this.setState({ Mensagem: "error" })
			})
			.then(() => this.setState({ IsLoading: false }));
	}

	tryRegister() {
		this.props.navigation.navigate('Register');
	}

	renderButtonLogin() {
		if (this.state.isLoading)
			return <ActivityIndicator />;

		return(
			<Button
				onPress={() => this.autenticar()}
			  title="Acessar"
			  color="#252a34"
			/>
		);
	}

	renderButtonRegister() {
		return(
			<Button
				onPress={() => this.tryRegister()}
			  title="Registrar-se"
			  color="#ff2e63"
			/>
		);
	}

	renderMessage() {
		const { message } = this.state;

		if (!message)
			return null;

		return(
			<View>
				<Text style={styles.erro}>{ message }</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>

				<Image
					style={styles.image}
		      source={require('../../assets/login.png')}
		    />

				<FormRow first>
					<Text>E-mail:</Text>
					<TextInput
						style={styles.input}
						placeholder="exemplo@mail.com"
						value={this.state.mail}
						onChangeText={value => this.onChangeInput('mail', value)}
					/>
				</FormRow>

				<FormRow last>
					<Text>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.onChangeInput('password', value)}
					/>
				</FormRow>

				{ this.renderMessage() }

				{ this.renderButtonLogin() }

				<FormRow first></FormRow>

				{ this.renderButtonRegister() }

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#eaeaea'
	},
	image: {
		width: 100,
		height: 100,
		marginTop: 30,
		alignSelf: 'center'
	},
	input: {
		paddingLeft: 5,
		paddingBottom: 5
	},
	erro: {
		color: 'red',
		alignSelf: 'center',
		paddingBottom: 5,
		paddingTop: 5,
	}
});
