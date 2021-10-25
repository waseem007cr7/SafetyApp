import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
// import { useEffect } from 'react/cjs/react.development';
// import HomeScreen from '../screens/HomeScreen';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

// import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login, googleLogin} = useContext(AuthContext);

    // const {login} = useContext(AuthContext);

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(user => {
    //     if(user){
    //       navigation.navigate('HomeScreen')
    //     }
    //   })
    //   return unsubscribe;
    // }, [])

    // const handleLogin = () => {
    //   auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Logged in with: ',user.email);
    //   })
    //   .catch(error => alert(error.message))
    // }
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/safety-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Saftey App</Text>
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

            <FormButton
                buttonTitle="Sign In"
                onPress={()=> login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=> {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

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
                    buttonTitle="Sign In With Google"
                    btnType='google'
                    color='#de4d41'
                    backgroundColor='#f5e7ea'
                    onPress={()=> googleLogin()}
                />
              </View>
            ) : null}


            <TouchableOpacity style={styles.forgotButton} onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't Have An Account? Creat Here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

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
    forgotButton: {
      marginVertical: 18,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
  