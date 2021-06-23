import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './tzp-pressform-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../../infrastructure/screen-list';
import { ITzpPressform } from '../..';

export const TzpPressformItem: React.FC<IListItem<ITzpPressform>> = ({ data, onPress }) => {

  return ( 
    <View style={styles.cardContainer}>
      <Image source={require('../../../../../public/images/pressFormTZPBodyIco.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
          onPress={onPress}
          key={data.id}
        >
          <Text style={styles.listTitle}>{data.passport}</Text>
        </Pressable>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        <View><Text style={styles.stateItem}>{ETitleFields.detailType}: {data.number?data.number: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text></View>
        <Text style={styles.stateItem}>{data.state?data.state: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text>
      </View>
    </View>
  )
}



