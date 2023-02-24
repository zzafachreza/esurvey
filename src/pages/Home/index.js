import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";


export default function Home({ navigation }) {


  const [ENTRIES, SETENTITIES] = useState([]);
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  useEffect(() => {

    __getTransaction();
    if (isFocused) {
      axios.post(apiURL + 'slider').then(res => {
        console.log(res.data)
        SETENTITIES(res.data);
      })
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
    })



  }


  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };



  const MyMenu = ({ img, judul, onPress, desc }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{
        width: windowWidth / 3.5,
      }} >
        <View style={{
          width: windowWidth / 3.5,
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          height: windowHeight / 7,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={img} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
        </View>
        <Text style={{
          marginTop: 5,
          fontFamily: fonts.secondary[600],
          color: colors.black,
          textAlign: 'center'

        }}>{judul}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* header */}
      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>

        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>Selamat datang, {user.nama_lengkap}</Text>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>{MYAPP}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30
          }}>
            <Icon type='ionicon' name='person' color={colors.white} />

          </TouchableOpacity>

        </View>


      </View>

      <Image source={require('../../assets/logo2.png')} style={{
        width: windowWidth - 50,
        height: windowWidth / 3,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
      }} />
      <View style={{
        flex: 1,
        justifyContent: 'space-evenly'
      }}>


        <TouchableOpacity onPress={() => navigation.navigate('Survey')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A1.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Cetak dan Lihat Hasil Survey</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Kuesioner')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,

          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A6.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Data Kuesioner</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Kelas')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A2.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Data Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Matakuliah')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A3.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Data Matakuliah</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dosen')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,

          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A4.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Data Dosen Matakuliah</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pengguna')} style={{
          flexDirection: 'row',
          borderWidth: 0,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A5.png')} style={{
            width: windowHeight / 7,
            height: windowHeight / 15,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: windowWidth / 25
          }}>Data Pengguna</Text>
        </TouchableOpacity>





      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: windowHeight,
    height: windowWidth / 2,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});