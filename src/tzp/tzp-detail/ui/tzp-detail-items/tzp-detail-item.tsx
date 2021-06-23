import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './tzp-detail-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../../infrastructure/screen-list';
import { ITZPDetail } from '../..';

export const TzpDetailItem: React.FC<IListItem<ITZPDetail>> = ({ data, onPress }) => {

  return ( 
    <View style={styles.cardContainer}>
      <Image source={require('../../../../../public/images/TZPDetailIco.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
          onPress={onPress}
          key={data.id}
        >
          <Text style={styles.listTitle}>{data.name}</Text>
        </Pressable>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        <View><Text style={styles.stateItem}>{ETitleFields.analysis}: {data.batchNumber?data.analysis: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text></View>
        <Text style={styles.stateItem}>{data.state?data.state: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text>
      </View>
    </View>
  )
}



