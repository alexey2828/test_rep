import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableHighlight, Text, Image} from 'react-native';
import { Lstyles } from './screens-styles/screenStyle.styles';

export const OperationConfirm: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={Lstyles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image style={{width:30, height: 15, marginTop: 10, margin: 5}} source={require('../../../public/images/success.png')} />
          <Text style={{color: 'white', fontSize: 18, margin: 5}}>Операція успішно виконана</Text>
        </View>
        <View style={{height: 20}}></View>
        <TouchableHighlight onPress={(): void => { navigation?.navigate('Головна')}}>
          <View style={{backgroundColor: '#333334', width: '100%', borderRadius: 10, alignItems: 'center'}}> 
            <Text style={{color: 'white', margin: 15, fontSize: 16}}>Назад до головного меню</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

 
