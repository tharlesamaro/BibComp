import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	'mail': '',
	  	'password': ''
	  };
	}

	componentDidMount() {
		var config = {
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
		console.log(this.state);
	}

	tryRegister() {

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

				<Button
					onPress={() => this.tryLogin()}
				  	title="Acessar"
				  	color="#252a34"
				/>

				<FormRow first></FormRow>

				<Button
					onPress={() => this.tryRegister()}
				  	title="Registrar-se"
				  	color="#ff2e63"
				/>
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