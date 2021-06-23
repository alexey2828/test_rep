import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CNstyles } from '../../../component-ui/screen/screens-styles/screenStyle.styles';
import { TStateMachineObj } from '..';
import { TMember } from '../../api-platform';

interface ChooseBtn<T> {
  transitions: TStateMachineObj;
  entity: T & TMember;
}

export function ChooseBtn<T>({ transitions, entity }: ChooseBtn<T>): JSX.Element | null {
  const navigation = useNavigation();

  if (!Array.isArray(entity?.enabledTransitions)) {
    return null;
  }

  return (
    <>
      <Text style={{ color: 'white' }}>
        {entity.enabledTransitions.filter(enabledTransition => Object.prototype.hasOwnProperty.call(transitions, enabledTransition.name)).map((enabledTransition) => {
          return (<>
            <TouchableHighlight onPress={(): void => { navigation?.navigate(enabledTransition.name, { dataMixing: entity }) }}>
              <View style={CNstyles.BtnContainerDetails}>
                <Text style={CNstyles.BtnTitleLime}>{transitions[enabledTransition.name]}</Text>
              </View>
            </TouchableHighlight>
          </>);
        })
        }
      </Text>
    </>
  );
}

