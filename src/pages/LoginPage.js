import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	'mail': '',
	  	'password': ''
	  };
	}

	onChangeInput(field, value) {
		this.setState({
			[field]: value
		});
	}

	render() {
		return (
			<View>
				<Image
					style={styles.image}
		        	source={require('../../assets/login.png')}
		        />
				<FormRow>
					<Text>Login:</Text>
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
				<Button
					style={styles.button}
					//onPress={}
				  	title="Acessar"
				  	color="#ff2e63"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		marginTop: 30,
		alignSelf: 'center'
	},
	input: {
		paddingLeft: 5,
		paddingBottom: 5
	}
});