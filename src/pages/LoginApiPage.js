import React from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	Button,
	ActivityIndicator
} from 'react-native';

import FormRow from '../components/FormRow';

import ApiUrl from '../components/Api';

export default class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
	  		email: '',
	  		senha: '',
	  		isLoading: false,
	  		message: '',
	  	};
	}

	componentDidMount() {
	}

	onChangeInput(field, value) {
		this.setState({
			[field]: value
		});
	}

	tryLogin() {
		this.setState({ isLoading: true, message: '' });

		const { email, password } = this.state;

		fetch(ApiUrl + 'usuario', {
			method: 'post',
			header: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json())
			.then(responseJson => {
				console.log('Usuário autenticado!', responseJson);
			})
			.catch(error => {
				console.error(error);
				//this.setState({ message: this.getMessageErrorCode(error.code) })
			})
			.then(() => this.setState({ isLoading: false }));
	}

	// getMessageErrorCode(errorCode) {
	// 	switch(errorCode) {
	// 		case 'auth/wrong-password':
	// 			return 'Senha incorreta';
	// 		case 'auth/user-not-found':
	// 			return 'Usuário não encontrado';
	// 		default:
	// 			return 'Erro desconhecido';
	// 	}
	// }

	tryRegister() {
		this.props.navigation.navigate('Register');
	}

	renderButtonLogin() {
		if (this.state.isLoading)
			return <ActivityIndicator />;

		return(
			<Button
				onPress={() => this.tryLogin()}
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
