import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { IAnalysis } from '..';
import { IModalDetail } from '../../../infrastructure/utils/choose-popup-detail';
import { styles } from '../ui/analysis-items/analysis-item.styles';
import { ChooseBtn } from '../../../infrastructure/change-state/model/choose-btn';
import { transitions } from '../form-comand/const/stateMachine';
import { MainTitles } from '../../../const/titles-main';
import { CNstyles } from '../../../component-ui/screen/screens-styles/screenStyle.styles';
import { useNavigation } from '@react-navigation/native';
import { API_ANALYSIS_SHORT } from '../../../infrastructure/const/urls';

interface IDetailMixing extends IModalDetail {
  entity: IAnalysis;
}

export const DetailAnalysis: React.FC<IDetailMixing> = ({ entity }) => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.itemInfo}>{MainTitles.MIXING_NUMBER}: <Text style={styles.itemInfoa1}>{entity?.name}</Text></Text>
      <Text style={styles.itemInfo}>{MainTitles.MIXING_AT}: <Text style={styles.itemInfoa1}>{entity?.mixer.name}</Text></Text>
      <Text style={styles.itemInfo}>{MainTitles.ANALYSIS}: <Text style={styles.itemInfoa1}>{entity?.laboratoryAnalyzes}</Text></Text>
      <TouchableHighlight onPress={(): void => { navigation?.navigate(API_ANALYSIS_SHORT)}}>
        <View style={CNstyles.BtnContainer}>
          <Text style={CNstyles.BtnTitle}>Аналізи</Text>
        </View>
      </TouchableHighlight>
      <ChooseBtn transitions={transitions} entity={entity}/>
    </>
  );
}