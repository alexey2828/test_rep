import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NDItem } from '../ui/nd-items/nd-item';
import { styles } from '../ui/nd-items/nd-item.styles';

export const ScreenND = (props: any) => {
  const { route } = props
  const { ND } = route.params

  return (
    <View style={styles.ScreenContainer}>
      <View style={{height: 500}}>
        <ScrollView>
          <Text style={{color: '#ffffff'}}>{ND.mixingType.normativeDocument.fields.map((number) =>
            <>  
              <View key={number} style={{margin: 10}}>
                <NDItem data={number}/>
              </View>
            </>
          )}</Text>
        </ScrollView>
      </View>
    </View>

  );
};

