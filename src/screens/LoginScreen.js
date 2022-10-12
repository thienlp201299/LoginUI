// import libary
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';



const LoginScreen = () => {
  return (

    <View style={styles.container}>

      {/* Title */}
      <View style={styles.frameLargeTitle}>
        <Text style={styles.largeTitle}>Aimee</Text>
      </View>
      <View style={styles.frameSmallTitle}>
        <Text style={styles.smallTitle}>trợ lý sức khoẻ sinh sản của bạn</Text>
      </View>

      {/*  Title Login*/}
      <View style={styles.frameMediumTitle}>
        <Text style={styles.mediumTitle}>Đăng Nhập Tài Khoản</Text>
      </View>

      {/* Form Login */}
      <View style={styles.formUserName}>
        <Icon name='user' style={{ paddingLeft: 20 }} size={30} />
        <TextInput style={{ paddingLeft: 20 }}
          placeholder='meobiettuot@gmail.com'
        />
      </View>
      <View style={styles.formPassWord}>
        <Icon name='mail' style={{ paddingLeft: 20 }} size={30} c />
        <TextInput style={{ paddingLeft: 20 }}
          placeholder='********'
        />
      </View>

      {/*  OR font montserrat */}
      <View style={styles.OR}>
        <Text style={styles.textOR}>Hoặc</Text>
      </View>

      {/* group logo */}
      <View style={styles.groupLogo}>
        <TouchableOpacity style={styles.formLogoGoogle} >
          {/* < Image style={styles.logoGoogle} source={require('../../assets/images/google.png')} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.formLogoApple} >
          {/* < Image style={styles.logoApple} source={require('../../assets/images/google.png')} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.formLogoFacebook} >
          {/*  < Image style={styles.logoFacebook} source={require('../../assets/images/google.png')} /> */}
        </TouchableOpacity>
      </View>

      {/* questionRegister */}
      <View style={styles.questionRegister}>
        <Text style={styles.questionRegisterText}> Bạn chưa có tài khoản?</Text>
        <Text style={{
          color: '#000000',
          textAlign: 'center',
          fontSize: 16,
          marginLeft: -20
        }}>Đăng ký</Text>
      </View>

      {/* Button Login */}
      <View >
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}> Đăng nhập </Text>
        </TouchableOpacity>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 428,
    height: 926,
    backgroundColor: '#FFFFFF',
  },
  frameLargeTitle: {
    position: 'absolute',
    width: 224,
    height: 109,
    left: 92,
    top: 40 //91 
  },
  largeTitle: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 109,
    color: '#9468DE',
    fontSize: 70.8435,
    textAlign: 'center'
  },
  frameSmallTitle: {
    position: 'absolute',
    width: 265,
    height: 26,
    left: 82,
    top: 130, //200.06,
    marginLeft: 10
  },
  smallTitle: {
    font: 'Nunito-Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
    color: '#9468DE'
  },
  frameMediumTitle: {
    position: 'absolute',
    width: 290,
    height: 38,
    left: 63,
    top: 200, //283,
  },
  mediumTitle: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 25,
    lineHeight: 38,
    color: '#161829',
    textAlign: 'center'
  },
  formUserName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 17,
    position: 'absolute',
    width: 302,
    height: 63,
    left: 63,
    top: 280,//369,
    backgroundColor: '#EEEEEE',
    borderRadius: 23,

  },
  formPassWord: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 17,
    position: 'absolute',
    width: 302,
    height: 63,
    left: 63,
    top: 380, //463,
    backgroundColor: '#EEEEEE',
    borderRadius: 23,
  },
  OR: {
    position: 'absolute',
    width: 185.66,
    height: 16,
    left: 121,
    top: 480, //564,
    textAlign: 'center'
  },
  textOR: {
    fontFamily: 'Nunito-Nold',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#000000'
  },
  /*  groupLogo: {
     position: 'absolute',
     width: 222.46,
     height: 57.25,
     left: 105,
     top: 611.14,
     backgroundColor: 'pink'
   }, */
  formLogoGoogle: {
    position: 'absolute',
    width: 56.95,
    height: 56.95,
    left: 105,
    top: 540, //611.44,
    backgroundColor: 'red'
  },
  formLogoApple: {
    position: 'absolute',
    width: 56.95,
    height: 57.25,
    left: 187.75,
    top: 540, //611.14,
    backgroundColor: 'yellow'
  },
  formLogoFacebook: {
    position: 'absolute',
    width: 56.95,
    height: 56.95,
    left: 270.5,
    top: 540, //611.44,
    backgroundColor: 'blue'
  },
  /*   logoGoogle: {
      position: 'absolute',
      width: 38,
      height: 38,
      left: 114.96,
      top: 621.86,
      backgroundColor: 'yellow'
    } */

  textLogin: {
    width: 77,
    height: 23,
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 80
  },
  questionRegister: {
    width: 265,
    height: 23,
    top: 640, //738,
    left: 82,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  questionRegisterText: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },

  buttonLogin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 19,
    gap: 10,
    borderRadius: 22,
    backgroundColor: '#9468DE',
    height: 69,
    width: 293,
    left: 68,
    top: 670, //705,
  },

})

export default LoginScreen