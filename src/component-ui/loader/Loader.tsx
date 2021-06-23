import React from 'react';
import { View, Image } from 'react-native';

export const Loader: React.FC = () => {
  return (
    <View>
      <Image source={require('../../../public/images/loader.gif')} style={{ width: 100, height: 150, alignItems: 'center', marginLeft: 120 }} />
    </View>
  );
};

 
