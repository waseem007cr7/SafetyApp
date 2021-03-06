import React, { useState, useContext } from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet} from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

// import { auth } from '../firebase';

const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();

    const { register } = useContext(AuthContext);

    // const handleSignUp = () => {
    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log(user.email);
    //     })
    //     .catch(error => alert(error.message))
    //   }

    return(
        <View style={styles.container}>
            <Image
                  source={require('../assets/safety-logo.png')}
                  style={styles.logo}
              />
            <Text style={styles.text}>Create An Account</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail)=> setEmail(userEmail)}
                placeholderText='Email'
                iconType='user'
                keyboardType='email-address'
                autoCapitalize='none'
                //autoCorrect='false'
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword)=> setPassword(userPassword)}
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmpassword}
                onChangeText={(userPassword)=> setConfirmPassword(userPassword)}
                placeholderText='Confirm Password'
                iconType='lock'
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={()=> alert('Clicked!!')}>
                    <Text style={styles.color_textPrivate, {color: '#e88832'}}>Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={styles.color_textPrivate, {color: '#e88832'}}>Privacy Policy</Text>
            </View>

            { Platform.OS === 'android' ? (
              <View>
                {/* <SocialButton
                    buttonTitle="Sign In With Facebook"
                    btnType='facebook'
                    color='#4867aa'
                    backgroundColor='#e6eaf4'
                    onPress={()=> {}}
                /> */}
    
                <SocialButton
                    buttonTitle="Sign Up With Google"
                    btnType='google'
                    color='#de4d41'
                    backgroundColor='#f5e7ea'
                    onPress={()=> {}}
                />
              </View>
            ) : null}

            <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have An Account? Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'center',
      marginBottom: 10
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });
  