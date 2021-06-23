import { TextStyle, ViewStyle, ImageStyle } from 'react-native';


const titleWrapper: ViewStyle = {
  backgroundColor: '#333334', width: '100%', borderRadius: 10, alignItems: 'center'
}
const titleWrapperPurple: ViewStyle = {
  backgroundColor: '#BB86FC', width: '100%', borderRadius: 10, alignItems: 'center'
}

const title: TextStyle = {
  color: 'white', margin: 15, fontSize: 16
}

const modalTitle: TextStyle = {
  color: '#ffffff', fontWeight: 'bold', fontSize: 16, margin: 5
}
const modalText: TextStyle = {
  color: '#a1a1a1', fontSize: 16, margin: 5
}
const goBack: TextStyle = {
  color: 'white', margin: 15, fontSize: 16
}
const btnContainer: TextStyle = {
  backgroundColor: '#333334', width: 170, borderRadius: 10, alignItems: 'center'
}
const btnContainerPurple: TextStyle = {
  backgroundColor: '#BB86FC', width: 170, borderRadius: 10, alignItems: 'center'
}
const btnTitle: TextStyle = {
  color: 'white', margin: 15, fontSize: 16
}
const modalContainer: ViewStyle = {
  marginLeft: '20%', display: 'flex', flexDirection: 'row'
}
const modalBack: ViewStyle = {
  backgroundColor: '#242424', borderRadius: 10
}


export const styles = {
  titleWrapper,
  title,
  modalTitle,
  modalText,
  goBack,
  btnContainer,
  btnTitle,
  modalContainer,
  btnContainerPurple,
  modalBack,
  titleWrapperPurple
};