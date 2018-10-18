import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
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
					/>
				</FormRow>
				<FormRow>
					<Text>Senha:</Text>
					<TextInput 
						style={styles.input}
						placeholder="********"
						secureTextEntry
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