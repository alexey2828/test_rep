import React from 'react';
import { ScrollView, View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../infrastructure/screen-list';
import { MixingItem } from '../ui/mixings-items/mixing-item';
import { styles } from '../ui/mixings-items/mixing-item.styles';

type IScreenMixing = IScreenListRoute

export const ScreenMixing: React.FC<IScreenMixing> = ({ route }) => {

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView>
        <ScreenList route={route}>
          {MixingItem}
        </ScreenList>
      </ScrollView>
    </View>
  );
};


