import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { Lstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { MainTitles } from '../../const/titles-main';
import { API_MIXING_TYPE_SHORT_URL, SERVER_URL } from '../../infrastructure/const/urls';

export const ChangeStateMixing: React.FC = (props: any) => {

  const { route } = props;
  const { dataEntityConfirm } = route.params;
  const navigation = useNavigation();
  const [postId, setPostId] = useState('');

  const redirect = () => {
    navigation?.navigate('Головна');
    navigation?.navigate(API_MIXING_TYPE_SHORT_URL);
  }

  useEffect(() => {
    async function updatePost(): Promise<void> {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/ld+json' },
        body: JSON.stringify({
          componentBatchPlaceId: dataEntityConfirm.name, 
          weight: Number(dataEntityConfirm.componentWeight),
          mixingTime: dataEntityConfirm.mixingTime || dataEntityConfirm.mixingAddTimeVal,
          comment: dataEntityConfirm.approveComment || dataEntityConfirm.rejectComment,
        })
      };
      const response = await fetch(SERVER_URL + API_MIXING_TYPE_SHORT_URL + '/' + dataEntityConfirm.dataMixing.id
        + (dataEntityConfirm.addComponent?dataEntityConfirm.addComponent : '') 
        + (dataEntityConfirm.mixingSendToLaboratory?dataEntityConfirm.mixingSendToLaboratory : '')
        + (dataEntityConfirm.mixingRejectForUse?dataEntityConfirm.mixingRejectForUse : '')
        + (dataEntityConfirm.mixingEnd?dataEntityConfirm.mixingEnd : '')
        + (dataEntityConfirm.approveForUse?dataEntityConfirm.approveForUse : '')
        + (dataEntityConfirm.mixingPause?dataEntityConfirm.mixingPause : '')
        + (dataEntityConfirm.mixingUnPause?dataEntityConfirm.mixingUnPause : '')
        + (dataEntityConfirm.mixerStart?dataEntityConfirm.mixerStart : '')
        + (dataEntityConfirm.mixingAddTime?dataEntityConfirm.mixingAddTime : ''), 
      requestOptions);
      const data = await response.json();
      setPostId(data.id);
    }
    updatePost();
  }, []);
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
            <Text style={{color: 'white', margin: 15, fontSize: 14}}>Назад до головного меню</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};


