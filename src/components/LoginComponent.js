import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from './common/Container';
import Input from './common/Input';
import CustomButton from './common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../constants/routeNames';
import colors from '../assets/theme/colors';

const LoginComponent = ({
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
}) => {

    const {navigate} = useNavigation();

    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>
            <Image height={70} width={70} source={require('../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        value={form.userName || null}
                        onChangeText={(value) => {
                        onChange({name: 'userName', value});
                        }}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                        <TouchableOpacity
                            onPress={() => {
                            setIsSecureEntry((prev) => !prev);
                            }}>
                            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                        }
                        iconPosition="right"
                        onChangeText={(value) => {
                        onChange({name: 'password', value});
                        }}
                    />

                    <CustomButton
                        disabled={loading}
                        onPress={onSubmit}
                        loading={loading}
                        primary
                        title="Submit"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => {navigate(REGISTER)}}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
      },
    
      title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
      },
    
      subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
      },
    
      form: {
        paddingTop: 20,
      },
    
      createSection: {
        flexDirection: 'row',
      },
      linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16,
      },
    
      infoText: {
        fontSize: 17,
      },
})
export default LoginComponent;