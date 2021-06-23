import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableHighlight, Text, Image, TextInput } from 'react-native';
import { Lstyles } from './screens-styles/screenStyle.styles';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={Lstyles.container}>
      <View style={Lstyles.logoContainer}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826045575220559913/unknown.png' }} style={Lstyles.logoImg}/>
        <View style={{alignItems: 'center'}}><Text style={Lstyles.logoText}>AC KK</Text></View>
      </View>
      <View style={Lstyles.textInputContainer}>
        <TextInput placeholderTextColor = "#a1a1a1" style={Lstyles.textInput} placeholder="Введіть логін..."></TextInput>
      </View>
      <View style={Lstyles.textInputContainer}>
        <TextInput placeholderTextColor = "#a1a1a1" style={Lstyles.textInput} placeholder="Введіть пароль..."></TextInput>
      </View>
      <View>
        <TouchableHighlight onPress={(): void => { navigation.navigate('Головна'); }}><View style={Lstyles.LoginBtn}><Text style={Lstyles.LoginBtnText}>Увійти</Text></View></TouchableHighlight>
      </View>
    </View>
  );
};

 
