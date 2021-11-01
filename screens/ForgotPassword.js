import React from 'react';
import { Component } from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, Alert} from 'react-native';
import * as firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

export default class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
          emailAddress: ''
        };
      }
      handleEmailChange = (email) => {
        
        this.setState({ email: email });
     };
     submitEmail = () => {
      // let email;
      firebase
        auth().sendPasswordResetEmail(this.state.email)
        .then(function() {
          Alert.alert("email sent");
        })
        .catch(function(error) {
          Alert.alert(error.message);
        });
    };
    render() {
        return(
            <View style={styles.container}>
            <KeyboardAvoidingView
                // style={styles.wrapper}
                behavior="padding"
            >
        <View >
            <Text style={styles.text}>
                Forgot your password?
            </Text >
            <Text style={styles.text2}>
                Enter your email to get the reset Password link
            </Text>
        </View> 
       </KeyboardAvoidingView>
          <FormInput
            // customStyle={{ marginTop: 100 }}
            // textColor={colors.white}
            // labelText="EMAIL ADDRESS"
            // labelTextSize={14}
            // labelColor={colors.white}
            // borderBottomColor={colors.white}
            // inputType="email"
            //-------------------------
            // labelValue={email}
                // onChangeText={(userEmail)=> setEmail(userEmail)}
                placeholderText='Enter Your Email'
                iconType='user'
                keyboardType='email-address'
                autoCapitalize='none'
            onChangeText={(email) => this.handleEmailChange(email)}
          />
          <SocialButton
                    buttonTitle="Send Email"
                    // btnType='google'
                    color='#de4d41'
                    backgroundColor='#f5e7ea'
                    onPress={()=> this.submitEmail()}
                />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
    //   backgroundColor: colors.green01
    },
    container: {
      // justifyContent: 'center',
      // alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    text2: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 18,
      marginBottom: 10,
      color: '#051d5f',
    },
  });