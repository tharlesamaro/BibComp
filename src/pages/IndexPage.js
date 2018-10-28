import React from "react";

import {
	View, Text, TextInput, StyleSheet, Image, Button, Alert, AsyncStorage
} from "react-native";

import FormRow from "../components/FormRow";

import ServerUrl from "../service/Api";

export default class IndexPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
  		mensagem: '',
			access_token: AsyncStorage.getItem('access_token')
		};
	}

	recuperarDados() {
		const { mensagem, access_token } = this.state;
		const { api } = ServerUrl;

		console.log(access_token);

		fetch(api + 'index', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + access_token,
			},
			body: JSON.stringify({})
		})
		.then(response => response.json())
		.then(responseJson => {
			if (responseJson.dados.name) {
				Alert.alert('Bem vindo ' + responseJson.dados.name);
				console.log(responseJson.dados);
			} else {
				Alert.alert(responseJson.message);
				this.props.navigation.navigate('Login')
			}
		})
		.catch(error => {
			Alert.alert("Erro: " + error);
			this.props.navigation.navigate('Login')
		})
	}

	render() {
		return (
			<View style={styles.container}>

				{ this.recuperarDados() }

				<Text>Página inicial</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#eaeaea'
	}
});
