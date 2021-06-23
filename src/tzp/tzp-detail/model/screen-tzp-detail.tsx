import React from 'react';
import { ScrollView, View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../../infrastructure/screen-list';
import { TzpDetailItem } from '../ui/tzp-detail-items/tzp-detail-item';

type ITzpDetail = IScreenListRoute

export const ScreenTzpDetail: React.FC<ITzpDetail> = ({ route }) => {

  return (
    <View style={{backgroundColor: '#121212', marginTop: 0, height: '100%'}}>
      <ScrollView>
        <ScreenList route={route}>
          {TzpDetailItem}
        </ScreenList>
      </ScrollView>
    </View>
  );
};


