import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { IMixing } from '..';
import { IModalDetail } from '../../infrastructure/utils/choose-popup-detail';
import { styles } from '../ui/mixings-items/mixing-item.styles';
import { ChooseBtn } from '../../infrastructure/change-state/model/choose-btn';
import { transitions } from '../form-comand/const/stateMachine';
import { MainTitles } from '../../const/titles-main';
import { CNstyles } from '../../component-ui/screen/screens-styles/screenStyle.styles';
import { useNavigation } from '@react-navigation/native';
import { API_ANALYSIS_SHORT, API_NORMATIVE_DOCUMENT_SHORT_URL } from '../../infrastructure/const/urls';

interface IDetailMixing extends IModalDetail {
  entity: IMixing;
}

export const DetailMixing: React.FC<IDetailMixing> = ({ entity }, props: any) => {
  //console.log('--->', entity?.laboratoryAnalyzes)
  //const navigation = useNavigation();
  //const navigation: ReturnType<typeof useNavigation> = props?.navigation;

  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.itemInfo}>{MainTitles.MIXING_NUMBER}: <Text style={styles.itemInfoa1}>{entity?.name?entity?.name : <Text style={styles.itemInfoa1}>{MainTitles.NO_DATA}</Text>}</Text></Text>
      <Text style={styles.itemInfo}>{MainTitles.MIXING_AT}: <Text style={styles.itemInfoa1}>{entity?.mixer.name? entity?.mixer.name : <Text style={styles.itemInfoa1}>{MainTitles.NO_DATA}</Text>}</Text></Text>
      <Text style={styles.itemInfo}>{MainTitles.TYPE_NAME}: <Text style={styles.itemInfoa1}>{entity?.mixingType.mixingTypeAbstract.name? entity?.mixingType.mixingTypeAbstract.name : <Text style={styles.itemInfoa1}>{MainTitles.NO_DATA}</Text>}</Text></Text>
      <Text style={styles.itemInfo}>{MainTitles.MIXING_DATE}: <Text style={styles.itemInfoa1}>{entity?.createAt? entity?.createAt : <Text style={styles.itemInfoa1}>{MainTitles.NO_DATA}</Text>}</Text></Text>
      <View style={CNstyles.BtnContainerDetailsWrapper}>
        <TouchableHighlight onPress={(): void => { navigation?.navigate(API_ANALYSIS_SHORT, { mixingAnalysis: entity }) }}>
          <View style={CNstyles.BtnContainerDetails}>
            <Text style={CNstyles.BtnTitle}>{MainTitles.ANALYSIS}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={(): void => { navigation?.navigate(API_NORMATIVE_DOCUMENT_SHORT_URL, { ND: entity }) }}>
          <View style={CNstyles.BtnContainerDetails}>
            <Text style={CNstyles.BtnTitle}>{MainTitles.ND_NUMBER}</Text>
          </View>
        </TouchableHighlight>
        <ChooseBtn  transitions={transitions} entity={entity}/>
      </View>
      
    </>
  );
}