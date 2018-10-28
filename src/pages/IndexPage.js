import React from 'react';

import {
	View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, Alert
} from 'react-native';

import FormRow from '../components/FormRow';

import ServerUrl from '../service/Api';

export default class IndexPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>

        <Text>Página Index</Text>

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
