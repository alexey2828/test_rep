/* eslint-disable react/jsx-key */
import React from 'react';
import { Animated, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { THydraView } from '../../api-platform';
import Swipeable from 'react-native-swipeable'; 
import { styles } from '../../../component-ui/screen/componentsScreenItems.styles';
import { useState } from 'react';

type TPaginationList = {
    view: THydraView;
    onClick: (str: string) => void;
    page: string;
    totalItems: any;
}

export const PaginationList: React.FC<TPaginationList> = ({ view, onClick }) => {
  const onPress = (str: string): void => {
    onClick(str);
  }

  const previous = view?.['hydra:previous']

  const [animatePress, setAnimatePress] = useState(new Animated.Value(1))

  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true // Add This line
    }).start();
  }

  const next = view?.['hydra:next']
  return (<>
    <View style={styles.PgContainer}>
      <Text style={{color: '#ffffff', marginTop: 0,  marginLeft: 140}} ></Text>
      {previous && <Swipeable onPanAnimatedValueRef={animateIn} usen style={styles.Prew} onSwipeRelease={() => onPress(previous)}>
      </Swipeable>}
      {previous && <Pressable style={styles.Prew} onPress={() => onPress(previous)}><Text style={{color: '#ffffff', marginTop: 25,  marginLeft: -10}} ></Text></Pressable>}
      {!previous && <View style={styles.PrewNone}>
      </View>}
      {/*необходимо в случае отсутствия previous, что-бы justifyContent отрабатывал корректно*/}
      {next && <Swipeable style={styles.Next} onSwipeRelease={() => onPress(next)}>
      </Swipeable>}
    </View>
  </>);
};





