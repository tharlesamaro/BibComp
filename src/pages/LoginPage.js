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

import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
	  		'mail': '',
	  		'password': '',
	  		isLoading: false,
	  	};
	}

	componentDidMount() {
		const config = {
		    apiKey: "AIzaSyASJ63kwxcYYnU5ottEcMjG6AkqPfGYvgg",
		    authDomain: "bibcomp-5a744.firebaseapp.com",
		    databaseURL: "https://bibcomp-5a744.firebaseio.com",
		    projectId: "bibcomp-5a744",
		    storageBucket: "bibcomp-5a744.appspot.com",
		    messagingSenderId: "202155716246"
		};

		firebase.initializeApp(config);
	}

	onChangeInput(field, value) {
		this.setState({
			[field]: value
		});
	}

	tryLogin() {
		this.setState({ isLoading: true });

		const { mail, password } = this.state

		firebase
			.auth()
			.signInWithEmailAndPassword(mail, password)
			.then(user => {
				console.log('Usuário autenticado!', user);
			})
			.catch(error => {
				console.log('Erro ao logar', error);
			})
			.then(() => this.setState({ isLoading: false }));
	}

	tryRegister() {

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

	render() {
		return (
			<View style={styles.container}>

				<Image
					style={styles.image}
		        	source={require('../../assets/login.png')}
		        />

				<FormRow first>
					<Text>Login:</Text>
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
});