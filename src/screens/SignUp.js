import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const SignUp = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.parentView} >
            <Image
                source={require('../assets/images/RectangleBg.png')} />
            <Image
                source={require('../assets/images/redCaret.png')}
                style={styles.caretImg} />
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.subHeading}>Enter your credentials to continue</Text>

            <TextInput placeholder='User Name' style={styles.inputContainer} />
            <TextInput placeholder='User Name' style={styles.inputContainer} />
            <TextInput placeholder='User Name' style={styles.inputContainer} />



        </View>
    )
}


const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    caretImg: {
        position: "absolute",
        top: 80,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 34,
        fontWeight: 'bold',
        marginStart: 20,
    },
    subHeading: {
        fontSize: 10,
        color: '#7C7C7C',
        fontWeight: '300',
        marginStart: 20,
        marginTop: 10,
    },
    inputContainer: {
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1.5,
        marginTop: 40,
        marginHorizontal: 20,
    }

})
export default SignUp