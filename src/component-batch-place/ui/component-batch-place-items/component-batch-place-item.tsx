import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './component-batch-place-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../infrastructure/screen-list';
import { IDetaiComponentBatchPlace } from '../..';

export const ComponentBatchPlaceItem: React.FC<IListItem<IDetaiComponentBatchPlace>> = ({ data, onPress }) => {

  return ( 
    <View style={styles.cardContainer}>
      <Image source={require('../../../../public/images/componentsIco.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
          onPress={onPress}
        >
          <Text style={styles.listTitle}>{data.name}</Text>
        </Pressable>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        <View><Text style={styles.stateItem}>{ETitleFields.party}: {data.batchNumber?data.batchNumber: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text></View>
        <Text style={styles.stateItem}>{data.state?data.state: <Text style={styles.stateItem}>{ETitleFields.noData}</Text>}</Text>
      </View>
    </View>
  )
}



