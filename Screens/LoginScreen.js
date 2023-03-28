import { View, Text, ScrollView, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";

export default function LoginScreen() {

    const [hidepwd, sethidepwd] = useState(true);

    const ShowPWD = () => {
        sethidepwd(!hidepwd);
    }

    return (
        <ScrollView style={styles.main_div}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.upper_div}>
                <Text>Hello World</Text>

            </View>
            <View style={styles.Lower_div}>
                <View style={styles.Text_div}>
                    <Text style={styles.Welcome_txt}>Welcome</Text>
                    <Text style={styles.Dont_have_txt}>Don't Have An Account?</Text>
                </View>
                <View>
                    <View style={styles.Fields_main_div}>
                        <View style={styles.Fields_div}>
                            <Ionicons name="mail-outline" size={40} style={styles.icon} />
                            <TextInput style={styles.Fields_txt} placeholder='Email Address' />
                        </View>
                        <View style={styles.Fields_div}>
                            <Ionicons name="lock-closed-outline" size={40} style={styles.icon} />
                            <TextInput style={styles.Fields_txt} placeholder='Password' secureTextEntry={hidepwd} />
                            <TouchableOpacity onPress={ShowPWD}>
                                {hidepwd ? <Ionicons name="eye-off-outline" size={30} style={styles.icon} /> : <Ionicons name="eye-outline" size={30} style={styles.icon} />}
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.Forgot_pwd_txt}>Forgot Password?</Text>
                        <View style={styles.LoginBTN_div}>
                            <TouchableOpacity style={styles.LoginBTN}>
                                <Text style={styles.LoginBTN_txt}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.Or_txt}>Or Login With</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_div: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#3669C9'
    },
    upper_div: {
        height: Dimensions.get('window').height / 3.2,
    },
    Lower_div: {
        backgroundColor: '#fff',
        height: (Dimensions.get('window').height / 3.2) * 2.347,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    Text_div: {
        marginTop: 30,
        marginLeft: 20
    },
    Welcome_txt: {
        fontSize: 35,
        color: "#3669C9",
        fontWeight: '800',
        fontFamily: "Roboto"
    },
    Dont_have_txt: {
        fontSize: 15,
        opacity: .75,
        marginLeft: 25,
        marginTop: 10,
    },
    Fields_main_div: {
        marginTop: 50,
    },
    Fields_div: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#3669C9',
        paddingBottom: 5,
        marginBottom: 20,
        marginLeft: 30,
        width: 330,
    },
    Fields_txt: {
        fontSize: 18,
        marginLeft: 20,
        width: 250,

    },
    icon: {
        color: '#3669C9'
    },
    LoginBTN_div: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginBTN: {
        backgroundColor: '#3669C9',
        width: 200,
        height: 50,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginBTN_txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'

    },
    Forgot_pwd_txt: {
        color: '#3669C9',
        fontSize: 15,
        fontWeight: '500',
        marginRight: 20,
        marginTop: 6,
        textAlign: 'right',
    },
    Or_txt: {
        color: '#3669C9',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center',
    }

})