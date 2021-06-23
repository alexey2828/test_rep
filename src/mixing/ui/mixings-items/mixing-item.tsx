import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './mixing-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../infrastructure/screen-list';
import { IMixing } from '../..';
import { StateUk } from '../../form-comand/const/stateMachine';

export const MixingItem: React.FC<IListItem<IMixing>> = ({ data, onPress }) => {
  //const StateUkStr = data.state.replace(data.state, StateUk[data.state] || 'невизначено') 
  const StateUkStr = StateUk[data.state] || StateUk.UNKNOWN;
  return ( 
    <View style={styles.cardContainer}>
      <View style={{margin: 10, marginTop: -5}}>
        <Image source={require('../../../../public/images/mixingIco.png')}
          style={styles.Ico}/>
        <View>
          <Pressable
            onPress={onPress}
          >
            <Text style={styles.listTitle}>{data.name}</Text>
          </Pressable>
        </View>
        <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
          <Text style={styles.stateItem}>{ETitleFields.STATE}: {StateUkStr}</Text>
        </View>
      </View>
    </View>
  )
}
