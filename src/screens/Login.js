import React from 'react';
import {
    View,
    Text,
  } from 'react-native';
import Input from '../components/common/Input';

const Login = () => {

    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View>
            <Text>Login view</Text>
            <Input
                label="Username"
                onChangeText={onChangeText}
                value={text}
                placeholder="useless placeholder"
                keyboardType="numeric"
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
            <Input
                label="Username"
                onChangeText={onChangeText}
                value={text}
                placeholder="useless placeholder"
                keyboardType="numeric"
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
        </View>
    )
}

export default Login;