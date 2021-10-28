import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const ContactInfoScreen = () => {

   
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/address.png')}
                style={styles.logo}
            />
            <Text style={styles.textlogo}>Emerency Contacts</Text>
            <Text style={styles.text}>1st Contact</Text>
            <FormInput
                placeholderText='Enter First Conatct'
                iconType='contacts'
                
            />
            <Text style={styles.text}>2nd Contact</Text>
            <FormInput
                placeholderText='Enter Second Conatct'
                iconType='contacts'
            />
            <Text style={styles.text}>3rd Contact</Text>
            <FormInput
                placeholderText='Enter Third Conatct'
                iconType='contacts'
            />
              <View>
                <SocialButton
                    buttonTitle="Submit Contact Info"
                    color='#7209b7'
                    backgroundColor='#bdb2ff'
                    onPress={()=> {}}
                />
              </View>
        </View>
    )
}

export default ContactInfoScreen;

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
  });
  