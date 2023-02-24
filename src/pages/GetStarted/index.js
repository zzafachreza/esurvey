import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'
import { Image } from 'react-native'

export default function GetStarted({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
        }}>
            <View style={{
                flex: 2,
                backgroundColor: colors.white,
                borderBottomLeftRadius: 150,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25
                    }}>Masuk Sebagai</Text>


                </View>
                <View style={{
                    paddingHorizontal: 100,
                }}>
                    <MyButton onPress={() => navigation.navigate('AktifitasAdd')} Icons="school" iconColor={colors.primary} warna={colors.white} borderSize={1} borderColor={colors.primary} title="Mahasiswa"
                        colorText={colors.primary} />
                    <MyGap jarak={10} />
                    <MyButton onPress={() => navigation.navigate('Login')} Icons="cog" title="Admin"
                        warna={colors.primary} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Image source={require('../../assets/logo.png')} style={{
                        width: 200,
                        height: 200,
                    }} />


                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 20,
                    color: colors.white
                }}>SISTEM CERDAS E-SURVEY</Text>
                <Text style={{
                    fontFamily: fonts.primary[400],
                    fontSize: windowWidth / 20,
                    color: colors.white
                }}>Dosen Pengampuh Teknik Informatika</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})