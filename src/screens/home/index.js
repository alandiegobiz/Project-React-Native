import React from 'react'
import {View, Text, StatusBar, ImageBackground } from 'react-native';

import styles from './style';

import Fundo from '../../../assets/fundo.jpg'

function Home() {
  return (
    <View>
      <ImageBackground source={Fundo} style={styles.fundo}>
        <StatusBar />
        <Text style={styles.intro}>Seja bem vindo(a)!</Text>
        <Text>Aqui devs tem desconto em todos os produtos!</Text>
      </ImageBackground>
      
    </View>
  )
}

export default Home;