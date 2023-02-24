import { Alert, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput, MyPicker } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { maskJs, maskCurrency } from 'mask-js';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
export default function AktifitasAdd({ navigation, route }) {


    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [kirim, setKirim] = useState({

        nama_mahasiswa: '',
        npm: '',
        fid_kelas: '',
        fid_matakuliah: '',
        fid_dosen: '',


    });


    // setLoading(false);

    const sendServer = () => {
        console.log(kirim);
        // setLoading(true);

        // axios.post(apiURL + 'survey_add', kirim).then(res => {
        //     setLoading(false);

        //     console.log(res.data);
        //     if (res.data == 200) {
        //         Alert.alert(MYAPP, 'Data berhasil di simpan !');
        //         // navigation.goBack();

        //     }
        // })
    }

    const [region, setRegion] = useState([]);

    useEffect(() => {

        getKelas();
        getMatakuliah();
        getDosen();

    }, []);


    const [kelas, setKelas] = useState([]);
    const [matakuliah, setMatakuliah] = useState([]);
    const [dosen, setDosen] = useState([]);


    const getKelas = () => {
        axios.post(apiURL + 'getkelas').then(res => {
            console.log(res.data);
            setKelas(res.data);
            setKirim({
                ...kirim,
                fid_kelas: res.data[0].value
            });
        })
    }


    const getMatakuliah = () => {
        axios.post(apiURL + 'getmatakuliah').then(res => {
            console.log(res.data);
            setMatakuliah(res.data);
            setKirim({
                ...kirim,
                fid_matakuliah: res.data[0].value
            });
        })
    }


    const getDosen = () => {
        axios.post(apiURL + 'getdosen').then(res => {
            console.log(res.data);
            setDosen(res.data);
            setKirim({
                ...kirim,
                fid_dosen: res.data[0].value
            });
        })
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>

            <Image source={require('../../assets/logo2.png')} style={{
                width: windowWidth - 100,
                height: windowWidth / 5,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 10,
            }} />
            <ScrollView showsVerticalScrollIndicator={false}>








                <MyGap jarak={5} />
                <MyInput label="Nama Mahasiswa" placeholder="Masukan nama mahasiswa" value={kirim.nama_mahasiswa} iconname="person" onChangeText={x => setKirim({ ...kirim, nama_mahasiswa: x })} />
                <MyGap jarak={5} />
                <MyInput label="NPM" placeholder="Masukan npm" value={kirim.npm} iconname="card" onChangeText={x => setKirim({ ...kirim, npm: x })} />
                <MyGap jarak={5} />
                <MyPicker label="Kelas" onValueChange={x => setKirim({
                    ...kirim,
                    fid_kelas: x
                })} data={kelas} iconname="home" />
                <MyGap jarak={5} />
                <MyPicker label="Matakuliah" onValueChange={x => setKirim({
                    ...kirim,
                    fid_matakuliah: x
                })} iconname="school" data={matakuliah} />
                <MyGap jarak={5} />
                <MyPicker label="Nama Dosen di Matakuliah" onValueChange={x => setKirim({
                    ...kirim,
                    fid_dosen: x
                })} iconname="people" data={dosen} />
                <MyGap jarak={5} />



            </ScrollView>

            <MyGap jarak={20} />
            {!loading && <MyButton onPress={sendServer} title="LANJUT" warna={colors.primary} Icons="person-add" />}

            {loading && <ActivityIndicator size="large" color={colors.primary} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})