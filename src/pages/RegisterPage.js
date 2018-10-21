import React from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	ActivityIndicator
} from 'react-native';

import firebase from 'firebase';

import FirebaseConfig from '../components/FirebaseConfig';

import FormRow from '../components/FormRow';

export default class RegisterPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
	  		mail: '',
	  		password: '',
				confirmPassword: '',
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

	tryRegister() {

	}

	getMessageErrorCode(errorCode) {

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

				<Text style={styles.title}>Cadastro</Text>

				<FormRow first>
					<Text>E-mail:</Text>
					<TextInput
						style={styles.input}
						placeholder="exemplo@mail.com"
						value={this.state.mail}
						onChangeText={value => this.onChangeInput('mail', value)}
					/>
				</FormRow>

				<FormRow>
					<Text>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.onChangeInput('password', value)}
					/>
				</FormRow>

				<FormRow last>
					<Text>Confirmar senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.confirmPassword}
						onChangeText={value => this.onChangeInput('confirmPassword', value)}
					/>
				</FormRow>

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
	input: {
		paddingLeft: 5,
		paddingBottom: 5
	},
	title: {
		alignSelf: 'center',
		color: '#252a34',
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
	},
	erro: {
		color: 'red',
		alignSelf: 'center',
		paddingBottom: 5,
		paddingTop: 5,
	}
});
