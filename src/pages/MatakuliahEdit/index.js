import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { apiURL, getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyInput, MyPicker } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function MatakuliahEdit({ navigation, route }) {


    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);
    const sendServer = () => {
        setLoading(true);
        console.log(kirim);
        axios.post(apiURL + 'matakuliah_edit', kirim).then(res => {

            setLoading(false);

            if (res.data.status == 200) {
                Alert.alert(MYAPP, res.data.message);
                navigation.goBack();
            }
        })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <MyInput label="Nama Matakuliah" iconname="person" value={kirim.nama_matakuliah} onChangeText={x => setKirim({ ...kirim, nama_matakuliah: x })} />
                <MyGap jarak={20} />
                {loading && <ActivityIndicator color={colors.primary} size="large" />}

                {!loading && <MyButton onPress={sendServer} title="Simpan Perubahan" Icons="download-outline" />}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})