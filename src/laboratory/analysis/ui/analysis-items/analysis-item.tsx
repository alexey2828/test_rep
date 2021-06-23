import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './analysis-item.styles';

export const AnalysisItem: React.FC = (props: any) => {
  const AnalysisItem = props.data 
  console.log(AnalysisItem);
  return ( 
    <View style={{margin: 20, marginTop: -15, width: 340}}>
      <Image source={require('../../../../../public/images/analysis.png')}
        style={styles.Ico}/>
      <View>
        <Pressable>
          <Text style={styles.listTitle}>{AnalysisItem?.name? AnalysisItem?.name : <Text style={styles.listTitle}>Немає даних</Text>}</Text>
        </Pressable>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#a1a1a1'}}>Номер: {AnalysisItem.name? AnalysisItem.name : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>
        <Text style={{color: '#a1a1a1'}}>Номер: {AnalysisItem.comment!=null? AnalysisItem.comment : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>
        <Text style={{color: '#a1a1a1'}}>Створено: {AnalysisItem.createdAt? AnalysisItem.createdAt : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        
      </View>
    </View>
  )
}
