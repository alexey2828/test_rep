import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { MainTitles } from '../../const/titles-main';
import { request } from './const/requests';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';

export const MixingApproveForUse: React.FC = (props: any) => {
  const { route } = props;
  const { dataMixing } = route.params;
  const approveForUse = request.APPROVE_FOR_USE;
  const [approveComment, setComment] = useState('');

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: {dataMixing.name}</Text>
        <TextInput placeholderTextColor = "#a1a1a1"  onChangeText = {(val): void => setComment(val)} style={CNstyles.CNtextInputc} placeholder="Коментар"></TextInput>
        <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, approveForUse, approveComment}}/>
        <View style={{height: 10}}></View>
        <GoBackMixing/>
      </View>
    </View>
  );
}
