import React from 'react';
import { View, Text } from 'react-native';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { MainTitles } from '../../const/titles-main';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';
import { request } from './const/requests';

export const MixingSendToLaboratory: React.FC = (props: any) => {
  const { route } = props;
  const { dataMixing } = route.params;
  const mixingSendToLaboratory = request.SEND_TO_LABORATORY;

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: {dataMixing.name}</Text>
        <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, mixingSendToLaboratory}}/>
        <View style={{height: 10}}></View>
        <GoBackMixing/>
      </View>
    </View>
  );
}