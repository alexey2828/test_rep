import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { MainTitles } from '../../const/titles-main';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';
import { request } from './const/requests';

export const MixingPause: React.FC = (props: any) => {
  const { route } = props;
  const { dataMixing } = route.params;
  const mixingPause = request.MIXER_PAUSE;

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: {dataMixing.name}</Text>
        <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, mixingPause}}/>
        <View style={{height: 10}}></View>
        <GoBackMixing/>
      </View>
    </View>
  );
}