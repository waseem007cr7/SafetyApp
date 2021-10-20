import React from 'react';
import {View, Text, Button, Image,StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Login')}
            pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Women Saftey',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Parent Control',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'We Bring Security To You!',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})