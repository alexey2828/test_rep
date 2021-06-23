import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenTzpPressform } from './src/tzp/tzp-pressform/model/screen-tzp-pressform';
import { ScreenTzpPlate } from './src/tzp/tzp-plate/model/screen-tzp-plate';
import { ScreenMixing } from './src/mixing/model/screen-mixing';
import { ListScreen } from './src/component-ui/screen/tmp/ListScreen';
import { ProfileScreen } from './src/component-ui/screen/profile-screen';
import HomeScreen from './src/component-ui/screen/home-screen/home-screen';
import { OperationConfirm } from './src/component-ui/screen/loader';
import { Header } from './src/component-ui/Header';
import { ChangeStateScreen } from './src/component-ui/screen/tmp/ChangeState';
import { LoginScreen } from './src/component-ui/screen/login-screen';
import { TestScreen } from './src/component-ui/screen/tmp/TestScreen';
import { CreateComponent } from './src/component-batch-place/model/create-new-component-batch-place';
import { ComponentBatchPlaceItem } from './src/component-batch-place/ui/component-batch-place-items/component-batch-place-item';
import { API_ANALYSIS_SHORT, API_MIXING_SHORT_URL, API_MIXING_TYPE_SHORT_URL, API_NORMATIVE_DOCUMENT_SHORT_URL, API_TZP_DETAIL_SHORT_URL, API_TZP_PLATE_SHORT_URL, API_TZP_PRESS_FORM_SHORT } from './src/infrastructure/const/urls';
import { ScreenTzpDetail } from './src/tzp/tzp-detail/model/screen-tzp-detail';
import { CreateMixing } from './src/mixing/model/create-new-mixing';
import { MixingAddComponent } from './src/mixing/form-comand/mixing-add-component';
import { ChangeStateMixing } from './src/mixing/model/change-state-confirm';
import { MixingApproveForUse } from './src/mixing/form-comand/mixing-approve-for-use';
import { MixingSendToLaboratory } from './src/mixing/form-comand/mixing-send-to-laboratory';
import { MixingRejectForUse } from './src/mixing/form-comand/mixing-reject-for-use';
import { MixingEnd } from './src/mixing/form-comand/mixing-end';
import { MixingPutIntoMixer } from './src/mixing/form-comand/mixing-put-into-mixer';
import { MixingPause } from './src/mixing/form-comand/mixing-pause';
import { MixingTimer } from './src/mixing/form-comand/mixing-add-time';
import { MixingUnPause } from './src/mixing/form-comand/mixing-unpause';
import { OpenModalFromQrCode } from './src/infrastructure/open-modal-from-qr-code/model/open-modal-from-qr-code';
import { ScreenAnalysis } from './src/laboratory/analysis/model/screen-analysis';
import { ScreenND } from './src/normative-document/model/screen-nd';
import { ETransitions } from './src/normative-document/const/transitions';

const Stack = createStackNavigator();
export const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#121212'}}>
      <View style={{ position: 'absolute', marginLeft: 5, marginTop: 100}}>
        <OpenModalFromQrCode/>
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ header: Header }}>
          <Stack.Screen
            name={API_TZP_PRESS_FORM_SHORT}
            component={ComponentBatchPlaceItem}
          />
          <Stack.Screen
            name="Головна"
            component={HomeScreen}
            options={{ title: 'Головна1' }}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
          />
          <Stack.Screen
            name="ChangeStateScreen"
            component={ChangeStateScreen}
          />
          <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Профіль' }}
          />
          <Stack.Screen
            name={API_MIXING_TYPE_SHORT_URL}
            component={ScreenMixing}
          />
          <Stack.Screen
            name={API_TZP_PLATE_SHORT_URL}
            component={ScreenTzpPressform}
          />
          <Stack.Screen
            name={API_TZP_DETAIL_SHORT_URL}
            component={ScreenTzpPlate}
          />
          <Stack.Screen
            name={API_MIXING_SHORT_URL}
            component={ScreenTzpDetail}
          />
          <Stack.Screen
            name={API_ANALYSIS_SHORT}
            component={ScreenAnalysis}
          />
          <Stack.Screen
            name={API_NORMATIVE_DOCUMENT_SHORT_URL}
            component={ScreenND}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
          />
          <Stack.Screen
            name="CreateComponent"
            component={CreateComponent}
          />
          <Stack.Screen
            name="CreateMixing"
            component={CreateMixing}
          />
          <Stack.Screen
            name="Loader"
            component={OperationConfirm}
          />
          <Stack.Screen
            name="ChangeStateMixing"
            component={ChangeStateMixing}
          />
          <Stack.Screen
            name={ETransitions.ADD_COMPONENT}
            component={MixingAddComponent}
          />
          <Stack.Screen
            name={ETransitions.PUT_INTO_MIXER}
            component={MixingPutIntoMixer}
          />
          <Stack.Screen
            name={ETransitions.APPROVE_FOR_USE}
            component={MixingApproveForUse}
          />
          <Stack.Screen
            name={ETransitions.SEND_TO_LABORATORY}
            component={MixingSendToLaboratory}
          />
          <Stack.Screen
            name={ETransitions.REJECT_FOR_USE}
            component={MixingRejectForUse}
          />
          <Stack.Screen
            name={ETransitions.ADD_MIXER_TIME}
            component={MixingTimer}
          />
          <Stack.Screen
            name={ETransitions.MIXER_UNPAUSE}
            component={MixingUnPause}
          />
          <Stack.Screen
            name={ETransitions.MIXER_PAUSE}
            component={MixingPause}
          />
          <Stack.Screen
            name={ETransitions.END}
            component={MixingEnd}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}
