import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Input from '../components/common/Input';
import CustomButton from '../components/common/CustomButton';
import LoginComponent from '../components/LoginComponent';

const Login = () => {
    const [form, setForm] = useState({});
    const [text, onChangeText] = useState('');

    const onChange = ({name, value}) => {

    };

    const onSubmit = () => {
    };

    return <LoginComponent 
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        // error={error}
        // loading={loading}
        // justSignedUp={justSignedUp}
    />
};

export default Login;