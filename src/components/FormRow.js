import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const FormRow = props => {
	const { children } = props;
	return (
		<View style={styles.container}>
			{children}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 20,
		elevation: 1
	}
})

export default FormRow;