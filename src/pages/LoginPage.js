import React from 'react';

import {
	View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, Alert
} from 'react-native';

import FormRow from '../components/FormRow';

import ServerUrl from '../service/Api';

export default class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
  		email: '', password: '', loading: false, mensagem: ''
		};
	}

	alterarValorIput(field, value) {
		this.setState({
			[field]: value
		});
	}

	autenticar() {
		this.setState({ loading: true, mensagem: '' });

		const { email, password, mensagem } = this.state;
		const { api } = ServerUrl;

		fetch(api + 'login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json())
			.then(responseJson => {

				this.setState({ loading: false })

				if (responseJson.access_token)
					this.props.navigation.navigate('Index');

				if (responseJson.error || responseJson.erros)
					this.setState({ mensagem: responseJson.message });
			})
		.catch(error => {
			this.setState({ mensagem: "Erro ao logar" })
		})
		.then(() => this.setState({ loading: false }));
	}

	registrar() {
		this.props.navigation.navigate('Register');
	}

	mostrarBotaoLogin() {
		if (this.state.loading)
			return <ActivityIndicator />;

		return(
			<Button
				onPress={() => this.autenticar()}
			  title="Acessar"
			  color="#252a34"
			/>
		);
	}

	mostrarBotaoRegistrar() {
		return(
			<Button
				onPress={() => this.registrar()}
			  title="Registrar-se"
			  color="#ff2e63"
			/>
		);
	}

	mostrarMensagem() {
		const { mensagem } = this.state;

		if (!mensagem)
			return null;

		return(
			<View>
				<Text style={styles.erro}>{ mensagem }</Text>
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
						value={this.state.email}
						onChangeText={value => this.alterarValorIput('email', value)}
					/>
				</FormRow>

				<FormRow last>
					<Text>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.password}
						onChangeText={value => this.alterarValorIput('password', value)}
					/>
				</FormRow>

				{ this.mostrarMensagem() }

				{ this.mostrarBotaoLogin() }

				<FormRow first></FormRow>

				{ this.mostrarBotaoRegistrar() }

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
