import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { MainTitles } from '../../const/titles-main';
import { request } from './const/requests';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';

export const MixingRejectForUse: React.FC = (props: any) => {
  const { route } = props;
  const { dataMixing } = route.params;
  const mixingRejectForUse = request.REJECT_FOR_USE;
  const [rejectComment, setComment] = useState('');

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: {dataMixing.name}</Text>
        <TextInput placeholderTextColor = "#a1a1a1" onChangeText = {(val): void => setComment(val)} style={CNstyles.CNtextInputc} placeholder="Коментар"></TextInput>
        <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, mixingRejectForUse, rejectComment}}/>
        <View style={{height: 10}}></View>
        <GoBackMixing/>
      </View>
    </View>
  );
}