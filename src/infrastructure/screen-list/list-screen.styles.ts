import { TextStyle, ViewStyle, ImageStyle } from 'react-native';

const childContainer: ViewStyle = {
  height: 800, alignItems: 'center',
}

const titleText: TextStyle = {
  color: '#ffffff', fontSize: 16  
}

const Btn16: TextStyle = {
  color: '#ffffff', margin: 5, fontSize: 16
}

const Btn18: TextStyle = {
  color: '#ffffff', fontSize: 18
}

const titleRed: TextStyle = {
  color: 'red' 
}

const dropDownSort: TextStyle = {
  margin: 0, height: 400, backgroundColor: '#181818', borderRadius: 15
}
  
export const styles = {
  childContainer,
  titleText,
  sortBtn: Btn16,
  Btn18,
  titleRed,
  dropDownSort
};

