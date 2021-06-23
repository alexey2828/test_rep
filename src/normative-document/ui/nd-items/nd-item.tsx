import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './nd-item.styles';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../infrastructure/screen-list';
import { IND } from '../..';

export const NDItem: React.FC = (props: any) => {
  //const StateUkStr = data.state.replace(data.state, StateUk[data.state] || 'невизначено') 
  const nd = props.data 
  return ( 
    <View key={nd.id} style={{margin: 20, marginTop: -15, width: 340}}>
      <Image source={require('../../../../public/images/ND.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
    
        >
          <Text style={styles.listTitle}>{nd.name}</Text>
        </Pressable>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#a1a1a1'}}>Номер: {nd.id? nd.id : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>
        <Text style={{color: '#a1a1a1'}}>КП: {nd.kp? nd.kp : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>
        <Text style={{color: '#a1a1a1'}}>Норма: {nd.norm? nd.norm : <Text style={{color: '#a1a1a1'}}>Немає даних</Text>}</Text>

      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        
      </View>
    </View>
  )
}
