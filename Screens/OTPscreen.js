import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";

export default function OTPscreen() {

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });


    const verifyOPTBTN = ()=>{
        const otpString = Object.values(otp).join('');
        console.log(otpString);
        setOtp({ 1: '', 2: '', 3: '', 4: '' })
        firstInput.current.focus();
    }


    

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.upper_div}>
                <Ionicons style={styles.Icon_style} name="mail-unread" size={80} />
                <View style={styles.upper_div_text_div}>
                    <Text style={styles.upper_div_text}>We have sent an OTP at</Text>
                    <Text style={styles.upper_div_text}>your Email Address</Text>
                </View>
            </View>
            <View style={styles.OTP_div}>
                <View>
                    <View style={styles.otpContainer}>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={firstInput}
                                onChangeText={text => {
                                    setOtp({ ...otp, 1: text });
                                    text && secondInput.current.focus();
                                }}
                                value={otp[1]}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={secondInput}
                                onChangeText={text => {
                                    setOtp({ ...otp, 2: text });
                                    text ? thirdInput.current.focus() : firstInput.current.focus();
                                }}
                                value={otp[2]}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={thirdInput}
                                onChangeText={text => {
                                    setOtp({ ...otp, 3: text });
                                    text ? fourthInput.current.focus() : secondInput.current.focus();
                                }}
                                value={otp[3]}
                            />
                        </View>
                        <View style={styles.otpBox}>
                            <TextInput
                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={1}
                                ref={fourthInput}
                                onChangeText={text => {
                                    setOtp({ ...otp, 4: text });
                                    !text && thirdInput.current.focus();
                                }}
                                value={otp[4]}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 20, marginBottom: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 20, textDecorationStyle: 'solid', textDecorationColor: '#fff', textDecorationLine: 'underline' }}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.VerifyOTPBTN}
                        onPress={verifyOPTBTN}
                    >
                        <Text style={{ color: '#fff', fontSize: 20, color: '#472183' }}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    upper_div: {
        flex: .4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300
    },
    Icon_style: {
        color: '#472183'
    },
    upper_div_text_div: {
        marginTop: 20
    },
    upper_div_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4B56D2',
        textAlign: 'center'
    },
    OTP_div: {
        flex: .6,
        backgroundColor: '#472183',
        borderTopRightRadius: 30
    },
    otpContainer: {
        marginBottom: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 60
    },
    otpBox: {
        borderRadius: 5,
        borderColor: "#000",
        borderWidth: 0.5,
        backgroundColor: "#fff",
    },
    otpText: {
        fontSize: 25,
        color: "#000",
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    VerifyOTPBTN: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        width: 107,
        height: 36,
        justifyContent: 'center',
        borderRadius: 5
    }
});