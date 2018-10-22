import React from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	ActivityIndicator
} from 'react-native';

import FormRow from '../components/FormRow';

import ApiUrl from '../service/Api';

export default class RegisterPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
				Nome: '',
	  		Email: '',
	  		Senha: '',
				ConfirmarSenha: '',
	  		IsLoading: false,
	  		Mensagem: '',
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
		this.setState({ IsLoading: true, Mensagem: '' });

		const { Nome, Email, Senha, ConfirmarSenha } = this.state;

		if (Senha === ConfirmarSenha) {
			fetch(ApiUrl + 'registrar-usuario', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
	    		'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nome: Nome,
					email: Email,
					senha: Senha
				})
			})
			.then(response => response.json())
				.then(responseJson => {
					console.log('(debug) 01 - responseJson: ', responseJson);

					if (responseJson.status === 'sucesso') {
						console.log(responseJson.mensagem);
					}

					// mostrar mensagem de erro
				})
				.catch(error => {
					console.log('Erro no react native: ', error);
					this.setState({ Mensagem: this.getMessageErrorCode(error.code) })
				})
				.then(() => this.setState({ IsLoading: false }));
		}
		else {
			this.setState({
				IsLoading: false,
				Mensagem: 'As senhas digitadas não são iguais'
			});
		}
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
		const { Mensagem } = this.state;

		if (!Mensagem)
			return null;

		return(
			<View>
				<Text style={styles.erro}>{ Mensagem }</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.title}>Cadastro</Text>

				<FormRow first>
					<Text>Nome:</Text>
					<TextInput
						style={styles.input}
						placeholder="Nome Sobrenome"
						value={this.state.Nome}
						onChangeText={value => this.onChangeInput('Nome', value)}
					/>
				</FormRow>

				<FormRow first>
					<Text>E-mail:</Text>
					<TextInput
						style={styles.input}
						placeholder="exemplo@mail.com"
						value={this.state.Email}
						onChangeText={value => this.onChangeInput('Email', value)}
					/>
				</FormRow>

				<FormRow>
					<Text>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.Senha}
						onChangeText={value => this.onChangeInput('Senha', value)}
					/>
				</FormRow>

				<FormRow last>
					<Text>Confirmar senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.ConfirmarSenha}
						onChangeText={value => this.onChangeInput('ConfirmarSenha', value)}
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
