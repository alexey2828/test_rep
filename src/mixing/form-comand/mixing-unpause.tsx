import React from 'react';
import { View, Text } from 'react-native';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { request } from './const/requests';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';
import { MainTitles } from '../../const/titles-main';

export const MixingUnPause: React.FC = (props: any) => {
  const { route } = props;
  const { dataMixing } = route.params;
  const mixingUnPause = request.MIXER_UNPAUSE;

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: {dataMixing.name}</Text>
        <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, mixingUnPause}}/>
        <View style={{height: 10}}></View>
        <GoBackMixing/>
      </View>
    </View>
  );
}