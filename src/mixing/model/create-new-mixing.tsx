
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableHighlight, TextInput } from 'react-native';
import { UseHttpLatest } from '../../hooks/useHttp';
import { IHydraGet } from '../../infrastructure/api-platform';
import { IСomponents } from '../../infrastructure/interface/Сomponents';
import { API_MIXER_SHORT_URL, API_MIXING_SHORT_URL, API_MIXING_TYPE_SHORT_URL, SERVER_URL } from '../../infrastructure/const/urls'
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles'
import { Loader } from '../../component-ui/loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { MainTitles } from '../../const/titles-main';
import { GoBackMixing } from '../../infrastructure/confirm-modal/confirm-operation';

export const CreateMixing: React.FC = () => {

  const navigation = useNavigation();

  const { data, updateResponse, isLoading } = UseHttpLatest<IHydraGet<IСomponents>>();
  const [url, setUrl] = useState(API_MIXING_SHORT_URL);

  const [mixingNumber, setMixingNumber] = useState('');
  const [name, setName] = useState('');
  const [mixer, setMixer] = useState('');

  const [mixingType, setMixingType] = useState('');
  const [mixingTypeVisual, setMixingTypeVisual] = useState('');
  const [mixingName, setMixingName] = useState('');
  const [mixerVisual, setMixerTypeVisual] = useState('');
  
  const [openAutoComplete, setopenAutoComplete] = useState(false);
  const [openAutoComplete2, setopenAutoComplete2] = useState(false);
  
  useEffect(() => {
    const url = API_MIXING_SHORT_URL + '?name=' + name;
    setUrl(url)
  }, [name]);

  useEffect(() => {
    const url = API_MIXER_SHORT_URL + '?name=' + mixer;
    setUrl(url)
  }, [mixer]);

  useEffect(() => {
    updateResponse({ url })
  }, [url]);

  async function componentDidMount(): Promise<void> {
    try {
      await fetch( SERVER_URL + API_MIXING_TYPE_SHORT_URL, {
        method: 'POST',
        headers: {
          'Accet': 'application/ld+json',
          'Content-type': 'application/ld+json'
        },
        body: JSON.stringify({
          name: mixingNumber,
          mixingTypeId: name,
          mixerId: mixer,
          issuerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
        })
        
      });
    } catch(e){
      console.log(e);
    }

    navigation.navigate('Loader')
  } 

  return (
    <View style={CNstyles.mainCNcontainerc}>
      <Text style={CNstyles.textWhiteDefault}>{MainTitles.ADD_MIXING}</Text>
      <View style={{height: 20}}></View>
      <View style={CNstyles.CNcontainerc}>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING_NUMBER}: <Text style={{ color: 'lime' }}>{mixingNumber}</Text></Text>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.MIXING_TYPE}: <Text style={{ color: 'lime' }}>{mixingTypeVisual}</Text></Text>
        <Text style={CNstyles.textWhiteDefault}>{MainTitles.CHOOSE_MIXER}: <Text style={{ color: 'lime' }}>{mixerVisual}</Text></Text>
        <View style={{height: 20}}></View>
        <ScrollView >
          <TextInput placeholderTextColor = "#a1a1a1"  onChangeText = {(val): void => setMixingNumber(val)} style={CNstyles.CNtextInputc} placeholder={MainTitles.MIXING_NUMBER}></TextInput>
          <TextInput 
            placeholder={MainTitles.MIXING_TYPE}
            placeholderTextColor="#a1a1a1"
            maxLength={100}
            onChangeText={(text): void => {setName(text), setopenAutoComplete(true)}}
            style={CNstyles.CNtextInputc}
          />
          <Text>
            {openAutoComplete?       
              (<View style={CNstyles.dropDawnCreate}>
                <ScrollView >
                  {isLoading ? (<Loader/>)
                    : (data?.['hydra:member'] && 
          (data?.['hydra:member'].length) ? (
            data?.['hydra:member'].map(member => {
              return (<>
                <Text key={member.id}>
                  
                  {name &&
                <TouchableHighlight style={{width: 300 }} onPress={(): void => {setName(member.id); setMixingType(member.id); setMixingTypeVisual(member.mixingTypeAbstract?.name); setopenAutoComplete(false)}}>
                  <Text style={CNstyles.textGrayDefault}><Text style={CNstyles.dropDawnInfoTitle}>{member.mixingTypeAbstract?.name}</Text> - {member.normativeDocument?.name}</Text>
                </TouchableHighlight>
                  }
                </Text>
              </>)
            })
                      ) : <Text style={{ color: 'red' }}>{MainTitles.NO_DATA}</Text>
                    )}
                </ScrollView>
              </View>) : null}
          </Text>  
          <TextInput
          
            placeholder={MainTitles.CHOOSE_MIXER}
            placeholderTextColor = "#a1a1a1"
            maxLength={100}
            onChangeText={(text2): void => {setMixer(text2), setopenAutoComplete2(true)}}
            style={CNstyles.CNtextInputc}
          />
          <Text>
            {openAutoComplete2?      
              (<View style={CNstyles.dropDawnCreate}>
                <ScrollView >
                  {isLoading ? (<Loader/>)
                    : (data?.['hydra:member'] && 
          (data?.['hydra:member'].length) ? (
            data?.['hydra:member'].map(member => {
              return (<>
                <Text key={member.id}>
                  {mixer && member?.available?
                    <TouchableHighlight onPress={(): void => {setMixer(member.id); setMixingName(member.id); setopenAutoComplete2(false); setMixerTypeVisual(member?.name)}}>
                      <View><Text style={CNstyles.dropDawnInfoTitle}>{member?.available? member?.name : <Text style={{ color: 'red' }}>{member?.name} - зайнятно</Text>}</Text></View>
                    </TouchableHighlight>
                    : 
                    <TouchableHighlight>
                      <Text style={[CNstyles.dropDawnInfoTitle,{ color: '#a1a1a1' }]}>{member?.name} - зайнятно</Text>
                    </TouchableHighlight>
                  }
                </Text>
              </>)
            })
                      ) : <Text style={{ color: 'red' }}>{MainTitles.NO_DATA}</Text>
                    )}
                </ScrollView>
              </View>) : null}
          </Text>
          <Text>
            {mixingNumber && mixingTypeVisual && mixerVisual &&
          <TouchableHighlight onPress={componentDidMount}>
            <View style={[CNstyles.BtnContainer, {width: 325}]}>
              <Text style={CNstyles.BtnTitle}>{MainTitles.SEND}</Text>
            </View>
          </TouchableHighlight>
            }</Text>
          <View style={{height: 10}}></View>
          <GoBackMixing/>
        </ScrollView>
      </View>
     
    </View>
  );
};

