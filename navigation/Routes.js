import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TabStack from './TabStack';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    }, []);

    if(initializing) return null;

    return(
        <NavigationContainer>
            { user ? <AppStack/> && <TabStack/> : <AuthStack/>}
            {/* <AuthStack/> */}
        </NavigationContainer>
    )
}

export default Routes;