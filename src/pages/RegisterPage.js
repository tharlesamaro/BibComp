import React from 'react';

import {
	View,Text,TextInput,StyleSheet, Button, ActivityIndicator, Alert
} from 'react-native';

import FormRow from '../components/FormRow';

import ServerUrl from '../service/Api';

export default class RegisterPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			Nome: '', Email: '', Senha: '', ConfirmarSenha: '', IsLoading: false, Mensagem: ''
  	};
	}

	alterarValorIput(campo, valor) {
		this.setState({
			[campo]: valor
		});
	}

	registrar() {
		this.setState({ IsLoading: true, Mensagem: '' });

		const { Nome, Email, Senha, ConfirmarSenha } = this.state;
		const { api } = ServerUrl;

		console.log(Nome, Email, Senha, ConfirmarSenha, api + 'registrar');

		fetch(api + 'registrar', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
    		'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: Nome,
				email: Email,
				password: Senha,
				password_confirmation: ConfirmarSenha
			})
		})
		.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				if (responseJson.access_token) {
					Alert.alert('Usuário ' + Nome + ' cadastrado com sucesso!');
					this.props.navigation.navigate('Login')
				}
			})
		.catch(error => {
			this.setState({ Mensagem: 'Erro: ' + error })
		})
		.then(() => this.setState({ IsLoading: false }));
	}

	mostrarBotaoRegistrar() {
		if (this.state.IsLoading)
			return <ActivityIndicator />;

		return(
			<Button
				onPress={() => this.registrar()}
			  title="Registrar-se"
			  color="#ff2e63"
			/>
		);
	}

	mostrarMensagem() {
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
						onChangeText={value => this.alterarValorIput('Nome', value)}
					/>
				</FormRow>

				<FormRow>
					<Text>E-mail:</Text>
					<TextInput
						style={styles.input}
						placeholder="exemplo@mail.com"
						value={this.state.Email}
						onChangeText={value => this.alterarValorIput('Email', value)}
					/>
				</FormRow>

				<FormRow>
					<Text>Senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.Senha}
						onChangeText={value => this.alterarValorIput('Senha', value)}
					/>
				</FormRow>

				<FormRow last>
					<Text>Confirmar senha:</Text>
					<TextInput
						style={styles.input}
						placeholder="********"
						secureTextEntry
						value={this.state.ConfirmarSenha}
						onChangeText={value => this.alterarValorIput('ConfirmarSenha', value)}
					/>
				</FormRow>

				{ this.mostrarMensagem() }

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
