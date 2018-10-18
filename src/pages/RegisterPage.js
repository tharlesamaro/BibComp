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

	render() {
		return (
			<View >
				<Text>Página de cadastro</Text>
			</View>
		)
	}
}