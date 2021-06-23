import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './tzp-plate-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../../infrastructure/screen-list';
import { ITzpPlate } from '../..';

export const TzpPlateItem: React.FC<IListItem<ITzpPlate>> = ({ data, onPress }) => {

  return ( 
    <View style={styles.cardContainer}>
      <Image source={require('../../../../../public/images/pressFormTZPBodyIco.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
          onPress={onPress}
          key={data.id}
        >
          <Text style={styles.listTitle}>{data.number}</Text>
        </Pressable>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        <View><Text style={styles.stateItem}>{ETitleFields.analysis}: {data.batchNumber?data.batchNumber: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text></View>
        <Text style={styles.stateItem}>{data.state?data.state: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text>
      </View>
    </View>
  )
}



