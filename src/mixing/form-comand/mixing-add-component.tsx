import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableHighlight, Text, TextInput, Vibration } from 'react-native';
import { IMixing } from '..';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';
import { Loader } from '../../component-ui/loader/Loader';
import { UseHttpLatest } from '../../hooks/useHttp';
import { API_COMPONENT_BATCH_PLACE_SHORT_URL } from '../../infrastructure/const/urls';
import { IHydraGet } from '../../infrastructure/api-platform';
import { MainTitles } from '../../const/titles-main';
import { request } from './const/requests';
import { GoNext } from '../../infrastructure/confirm-modal/confirm-operation-enter';


export const MixingAddComponent = (props: any) => {

  const { data, updateResponse, isLoading } = UseHttpLatest<IHydraGet<IMixing>>();
  const [url, setUrl] = useState(API_COMPONENT_BATCH_PLACE_SHORT_URL);
  const [name, setName] = useState('');
  const [componentWeight, setComponentWeight] = useState('0');

  const [nameVisual, setNameVisual] = useState('');
  
  const addComponent = request.ADD_COMPONENT;

  const [numberValidate, setNumberValidate] = useState(false);

  const { route } = props;
  const { dataMixing } = route.params;

  const [OpenBtn, setOpenBtn] = useState(false);
  const [OpenAutoComplete, setOpenAutoComplete] = useState(false);

  useEffect(() => {
    componentWeight.length == 8 && (setNumberValidate(true), Vibration.vibrate());
    componentWeight.length < 8 && (setNumberValidate(false));
  }, [componentWeight]);
  
  useEffect(() => {
    const url = API_COMPONENT_BATCH_PLACE_SHORT_URL + '?name=' + name;
    setUrl(url)
  }, [name])

  useEffect(() => {
    updateResponse({ url })
  }, [url]);

  return (
    <View style={CNstyles.FormContainer}>
      <View style={{margin: 20}}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING}: <Text style={{color: '#BB86FC'}}>{dataMixing.name}</Text></Text>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.ADD_COMPONENT}: <Text style={{color: 'lime'}}>{nameVisual}</Text></Text>
        <TextInput maxLength={8} autoCompleteType="cc-number" keyboardType="numeric" placeholderTextColor = "#a1a1a1" onChangeText = {(val): void => setComponentWeight(val)} style={CNstyles.CNtextInputc} placeholder={MainTitles.WEIGHT}></TextInput>
        {numberValidate && <Text style={{color: '#ff2400'}}>{MainTitles.VALIDATE_NUMBER}</Text>}
        <TextInput
          placeholder={MainTitles.COMPONENT_NAME}
          placeholderTextColor = "#a1a1a1"
          maxLength={100}
          onChangeText={(text): void => {setName(text), setOpenAutoComplete(true)}}
          style={CNstyles.CNtextInputc}
        />
        <Text>{OpenAutoComplete &&       
        <View style={CNstyles.dropDawnList}>
          <ScrollView >
            {isLoading ? (<Loader/>)
              : (data?.['hydra:member'] && 
          (data?.['hydra:member'].length) ? (
            data?.['hydra:member'].map(member => {
              return (<>
                <TouchableHighlight key={member.id} onPress={(): void => {setName(member.id), setOpenBtn(true), setNameVisual(member.batchPlaceNumber), setOpenAutoComplete(false)}}>
                  <View>
                    <Text style={CNstyles.dropDawnInfoTitle}>{member.batchPlaceNumber}</Text> 
                    <Text style={CNstyles.dropDawnInfoDetails}>{member.locatedAt.name}</Text>
                  </View>
                </TouchableHighlight>
              </>)
            })
                ) : <Text style={{ color: 'red' }}>{MainTitles.NO_DATA}</Text>
              )}
          </ScrollView>
          
        </View>}</Text>
        {OpenBtn? componentWeight? 
          <>

            <GoNext route={'ChangeStateMixing'} dataEntity={{dataMixing: dataMixing, name, addComponent, componentWeight}}/>

          </>
          : null : null}        
        <View style={{height: 10}}></View>
        <GoBackMixing/>
        <View style={{height: 10}}></View>
      </View>
    </View>
  );
}
