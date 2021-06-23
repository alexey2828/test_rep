import { TextStyle, ViewStyle, ImageStyle } from 'react-native';

//Profile Screen

const containerP: ViewStyle = {
  flex: 1,
  backgroundColor: '#121212',
  alignItems: 'center',
  justifyContent: 'center',
}


const firstContainer: ViewStyle = {
  width: '100%', height: 200,  backgroundColor: '#242424', borderRadius: 10, marginTop: 10
}

const secondContainer: ViewStyle = {
  borderTopColor: '#333334', borderWidth: 2, width: '100%'
}

const row: ViewStyle = {
  display: 'flex', flexDirection: 'row', margin: 15
}

const listIten: ViewStyle = {
  margin: 0, marginLeft: 10
}

const listItenTextFs14: TextStyle = {
  color: '#a1a1a1', fontSize: 14
}

const listItenTextFs16: TextStyle = {
  color: '#ffffff', fontSize: 16
}

const listItenTextFs16Dark: TextStyle = {
  color: '#a1a1a1', fontSize: 16
}

const ListIco: ImageStyle = {
  width: 18, height: 18, margin: 2
}

const PhoneIco: ImageStyle = {
  width: 20, height: 20, margin: 2
}

const UserAvatar: ImageStyle = {
  width: 98, height: 100, margin: 2
}

const UserNameBlock: ViewStyle = {
  marginTop: 30, marginLeft: 10
}

const PasswordIco: ImageStyle = {
  width: 18, height: 18, margin: 2
}

export const styles = {
  firstContainer,
  secondContainer,
  row,
  listIten,
  listItenTextFs14,
  listItenTextFs16,
  ListIco,
  PhoneIco,
  UserAvatar,
  UserNameBlock,
  listItenTextFs16Dark,
  PasswordIco,
  containerP
};

//Login Screen

const container: ViewStyle = {
  flex: 1,
  backgroundColor: '#121212',
  alignItems: 'center',
  justifyContent: 'center',
}

const logoContainer: ViewStyle =  {
  display: 'flex', flexDirection: 'row', marginTop: -50, marginLeft: -20, marginBottom: 10
}

const logoImg: ImageStyle = {
  width: 30, height: 50
}

const logoText: TextStyle = {
  color: '#ffffff', fontSize: 35, marginLeft: 10, fontWeight: 'bold'
}

const textInputContainer: ViewStyle = {
  alignItems: 'center', marginTop: 10
}

const textInput: TextStyle = {
  backgroundColor: '#323232', color: '#ffffff', borderRadius: 10, width: 300
}

const LoginBtn: ViewStyle = {
  backgroundColor: '#BB86FC', marginTop: 10, width: 300, height: 50, borderRadius: 10,
}

const LoginBtnText: TextStyle = {
  textAlign: 'center', marginTop: 5, fontSize: 25, color: '#ffffff'
}

export const Lstyles = {
  container,
  logoContainer,
  logoImg,
  logoText,
  textInputContainer,
  textInput,
  LoginBtn,
  LoginBtnText
};

//componentsScreen

const textInputc: TextStyle = {
  backgroundColor: '#323232', color: '#ffffff', marginTop: 30, borderRadius: 10, width: '100%'
}

const containerc: ViewStyle = {
  flex: 1,
  backgroundColor: '#121212',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Cmodal: ViewStyle = {
  margin: 0, marginTop: 40, position: 'absolute' 
};

export const SectionStyle: ViewStyle = {
  flexDirection: 'row',
  width: '95%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#242424',
  borderWidth: 0.5,
  borderColor: '#333334',
  height: 55,
  borderRadius: 10,
  marginTop: 30,
  margin: 10,
};
export const ImageStyles: ImageStyle = {
  padding: 10,
  margin: 10,
  height: 25,
  marginLeft: 10,
  width: 25,
  resizeMode: 'stretch',
  alignItems: 'center',
};
export const inputSort: TextStyle = {
  flex: 1, color: '#ffffff', fontSize: 16
};
 

export const Cstyles = {
  textInputc,
  containerc,
  Cmodal,
  inputSort,
  SectionStyle,
  ImageStyles
};


//Create new comp

const mainCNcontainerc: ViewStyle = {
  flex: 1,
  backgroundColor: '#121212',
  alignItems: 'center',
  justifyContent: 'center',
}

const CNcontainerc: ViewStyle = {
  height: '80%',
  width: '90%'
}

const CNtextInputc: TextStyle = {
  backgroundColor: '#323232', color: '#ffffff', marginTop: 10, borderRadius: 10, width: '100%'
}

const FormContainer: ViewStyle = {
  backgroundColor: '#121212', height: '100%'
}

const textWhiteDefault: TextStyle = {
  color: 'white'
}

const textGrayDefault: TextStyle = {
  color: '#a1a1a1',
  margin: 10
}

const dropDawnList: TextStyle = {
  height: 200, width: 320, backgroundColor: '#323232', borderRadius: 10
}

const dropDawnInfoTitle: TextStyle = {
  color: '#ffffff', margin: 10, fontSize: 16
}

const dropDawnInfoDetails: TextStyle = {
  color: '#a1a1a1', marginLeft: 10, fontSize: 12 
}

const BtnContainer: ViewStyle = {
  backgroundColor: '#BB86FC', borderRadius: 10, marginTop: 10, alignItems: 'center' 
}

const BtnTitle: TextStyle = {
  color: 'white', margin: 15, fontSize: 16
}

const BtnTitlepPurple: TextStyle = {
  color: '#BB86FC', margin: 15, fontSize: 16
}

const dropDawnCreate: TextStyle = {
  height: 'auto', width: 325, backgroundColor: '#323232', position: 'absolute'
}

const BtnContainerDetails: ViewStyle = {
  height: 'auto', width: 325, backgroundColor: '#292929', borderColor: '#333334', borderWidth: 2
}

const BtnContainerDetailsWrapper: ViewStyle = {
  marginTop: 20
}



export const CNstyles = {
  CNcontainerc,
  CNtextInputc,
  mainCNcontainerc,

  FormContainer,
  textWhiteDefault,
  dropDawnList,
  dropDawnInfoTitle,
  dropDawnInfoDetails,
  dropDawnCreate,
  textGrayDefault,
  BtnContainerDetails,
  BtnContainerDetailsWrapper,
  BtnTitleLime: BtnTitlepPurple,

  BtnContainer,
  BtnTitle
};