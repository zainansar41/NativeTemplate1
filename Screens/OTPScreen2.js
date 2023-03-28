import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'

export default function OTPScreen2() {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });


    const verifyOPTBTN = () => {
        const otpString = Object.values(otp).join('');
        console.log(otpString);
        setOtp({ 1: '', 2: '', 3: '', 4: '' })
        firstInput.current.focus();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.Verification_div}><Text style={styles.Verification_div_txt}>Verification</Text></View>
            <View>
                <Text style={{ marginLeft: 50, fontSize: 15, marginBottom: 4 }}>We have sent a verification code to</Text>
                <Text style={{ marginLeft: 50, fontSize: 15, marginBottom: 30 }}>zain*****p41@gmail.com</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic' }}>Verification code</Text>
                <TouchableOpacity><Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic', color: '#3669C9' }}>Resend code?</Text></TouchableOpacity>
            </View>
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
                            if (text === '') {
                                firstInput.current.focus();
                            } else {
                                text && thirdInput.current.focus();
                            }
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
                            if (text === '') {
                                secondInput.current.focus();
                            } else {
                                text && fourthInput.current.focus();
                            }
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
                            if (text === '') {
                                thirdInput.current.focus();
                            }
                        }}
                        value={otp[4]}
                    />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={verifyOPTBTN} style={{ backgroundColor: '#000', width: 300, height: 50, borderRadius: 10, marginTop: 20 }}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 10 }}>Verify</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        height: Dimensions.get('window').height,
    },
    Verification_div: {
        marginTop: 200,
        marginLeft: 50,
        marginBottom: 20,
    },
    Verification_div_txt: {
        fontSize: 35,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    otpContainer: {
        marginBottom: 70,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
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

});
