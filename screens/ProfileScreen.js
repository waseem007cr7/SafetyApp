import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
// import * as firebase from 'firebase';

const ProfileScreen = () => {

  const {user, logout} = useContext(AuthContext);
    
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/user.png')}
                style={styles.logo}
            />
            <Text style={styles.textlogo}>Update Profile</Text>
            {/* <Text style={styles.text}>1st Contact</Text> */}
            <FormInput
                placeholderText='Enter Your New Email'
                iconType='user'
                keyboardType='email-address'
                autoCapitalize='none'
                
            />
            {/* <Text style={styles.text}>2nd Contact</Text> */}
            <FormInput
                placeholderText='Enter Your Current Password'
                iconType='lock'
                secureTextEntry={true}
                // value={this.state.newPassword}
            />
            <FormInput
                placeholderText='Enter Your New Password'
                iconType='lock'
                secureTextEntry={true}
            />
              <View>
                <SocialButton
                        buttonTitle="Update Profile"
                        color='#7209b7'
                        backgroundColor='#bdb2ff'
                        onPress={() => {changeEmail, changePassword}}
                    />
                <SocialButton
                    buttonTitle="Logout"
                    color='#7209b7'
                    backgroundColor='#bdb2ff'
                    onPress={() => logout()}
                />
              </View>
            {/* <FormButton buttonTitle='Logout' onPress={() => logout()} /> */}
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 16,
        marginRight: 260,
        marginBottom: 10,
        color: '#051d5f',
        fontWeight: 'bold',
      },
      textlogo: {
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 28,
          marginBottom: 30,
          color: '#051d5f',
        },
      logo: {
          height: 150,
          width: 150,
          resizeMode: 'stretch',
          marginBottom: 30,
        },
})