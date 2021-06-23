import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { PaginationList } from './pagination-list';
import { IHydraGet } from '../../api-platform';
import { Loader } from '../../../component-ui/loader/Loader';
import { Cstyles } from '../../../component-ui/screen/screens-styles/screenStyle.styles';
import { ModalMain } from '../../../component-ui/modal/modal-main';
import { choicePopupDetail } from '../../utils/choose-popup-detail';
import { IListItem, IScreenListRoute } from '..';
import { UseHttpLatest } from '../../../hooks/useHttp';
import { API_MIXING_TYPE_SHORT_URL } from '../../const/urls';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DataPickerMonth } from '../../../component-ui/data-picker/data-picker-month';
import { DataPickerDay } from '../../../component-ui/data-picker/data-picker-day';
import { DataPickerHour } from '../../../component-ui/data-picker/data-picker-hour';
import { DataPickerMinute } from '../../../component-ui/data-picker/data-picker-minute';
import { styles } from '../list-screen.styles';
import { ServerErr } from '../../../component-ui/viewError/server-error';
import { SearchErr } from '../../../component-ui/viewError/search-error';
import Modal from 'react-native-modal';
import Swipeable from 'react-native-swipeable'; 
import { useNavigation } from '@react-navigation/native';


interface IScreenList<T> extends IScreenListRoute {
  children: React.FC<IListItem<T>>;
}

export function ScreenList<T>({ children, route }: IScreenList<T>): ReactElement {

  const { data, error, isLoading, updateResponse } = UseHttpLatest<IHydraGet<T>>();
  const changeUrl = route.name;
  const ListItem = children;

  const [url, setUrl] = useState(changeUrl);
  const [page, setPage] = useState('1');
  const [dataEntity, setDataEntity] = useState<any>(null);

  const [sortBy, setsortBy] = useState('?createAt%5Bstrictly_after%5D=');
  const [sortDetails, setsortDetails] = useState(false);

  const [sortByState, setSortByState] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByMixer, setSortByMixer] = useState(false);
  const [sortByCreatedAt, setSortByCreatedAt] = useState(false);
  const [sortByND, setSortByND] = useState(false);
  const [sortByAnalysis, setSortByAnalysis] = useState(false);

  const [sortBtnActive1, setsortBtnActive1] = useState('lime');
  const [sortBtnActive2, setsortBtnActive2] = useState('#ffffff');
  const [sortBtnActive3, setsortBtnActive3] = useState('#ffffff');
  const [sortBtnActive4, setsortBtnActive4] = useState('#ffffff');

  const [name1, setName1] = useState(false); //поиск по name

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');

  const [openCalendar, setOpenCalendar] = useState(false);
  
  const openModalDetail = (member: any): void => {
    setDataEntity(member);
  }

  const closeModalDetail = (): void => {
    setDataEntity(null);
  }

  const changePage = (url: string): void => {
    setUrl(url);
    setPage(url.charAt(url.length - 1));
  }

  const navigation = useNavigation();

  const [reloadPageInterval, setreloadPageInterval] = useState(false);

  const reloadPage = (): void => {
    navigation?.navigate('Головна');
    navigation?.navigate(changeUrl);
  }

  const setTime = () => {
    setOpenCalendar(false);
  } 

  const RealoadShow: ReactNode = setTimeout(function dd(){ setreloadPageInterval(true) }, 10000);
  
  useEffect(() => {
    //const url = changeUrl + '?createAt%5Bstrictly_after%5D=' + name1 + '&page=1' ;
    const url = API_MIXING_TYPE_SHORT_URL + sortBy + '2021-' + selectedMonth + '-' + selectedDay + 'T' + selectedHour + '%3A' + selectedMinute + '%3A53%2B00%3A00&page=1'
    setUrl(url)
  }, [selectedDay, selectedMonth, selectedHour, selectedMinute, sortBy]);

  useEffect(() => {
    updateResponse({ url });
    console.log(url)
  }, [url]);

  function byField(field: any) {
    return (a: { [x: string]: number }, b: { [x: string]: number }) => a[field] > b[field] ? 1 : -1;
  }

  return (
    <View style={Cstyles.containerc}>
      <View style={styles.childContainer}>
        {reloadPageInterval && <Swipeable style={{width: 200, heigh: 100}} onSwipeRelease={reloadPage}>
          <View style={{height: 20, marginLeft: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 10}}>               
              <Image
                source={require('../../../../public/images/arrow.gif')}
                style={{width: 40, height: 15, marginTop: 2}}
              />
              <Text style={{color: '#a1a1a1'}}>Оновити</Text>
            </View>
          </View>
        </Swipeable>}
        <View><Text style={{color: '#ffffff', marginTop: 15,  marginLeft: 10}} >Сторінка - {page} / Елементів - {data==null? 0 : data['hydra:totalItems']}</Text></View>
        <View>{data?.['hydra:view'] && <PaginationList onClick={changePage} view={data['hydra:view']}/>}</View>
        <View style={{ marginTop: -410 }}>
          <View style={{ width: 350 }}>
            <Pressable onPress={(): void => {setOpenCalendar(!openCalendar), setsortDetails(true)}}>
              <View style={Cstyles.SectionStyle}>
                <Image
                  source={require('../../../../public/images/sort.png')}
                  style={Cstyles.ImageStyles}
                />
                <View><Text style={styles.titleText}>Відсортирувати</Text></View>
                { /*<TextInput
                  placeholder="Знайти"
                  placeholderTextColor="#a1a1a1"
                  maxLength={100}
                  value={name1}
                  onChangeText={(text): void => setName1(text)}
                  style={Cstyles.inputSort}
                /> */}
              </View>
            </Pressable>
            { sortDetails? 
              <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
                <TouchableHighlight onPress={(): void => {setsortBy('?createAt%5Bstrictly_after%5D='); setsortBtnActive1('lime'); setsortBtnActive3('#ffffff'); setsortBtnActive2('#ffffff'); setsortBtnActive4('#ffffff');}}><Text style={[ styles.sortBtn, {color: sortBtnActive1} ]}>Строго після</Text></TouchableHighlight>
                <TouchableHighlight onPress={(): void => {setsortBy('?createAt%5Bafter%5D='); setsortBtnActive2('lime'); setsortBtnActive3('#ffffff'); setsortBtnActive1('#ffffff'); setsortBtnActive4('#ffffff');}}><Text style={[ styles.sortBtn, {color: sortBtnActive2} ]}>Після</Text></TouchableHighlight>
                <TouchableHighlight onPress={(): void => {setsortBy('?createAt%5Bstrictly_before%5D='); setsortBtnActive3('lime'); setsortBtnActive2('#ffffff'); setsortBtnActive1('#ffffff'); setsortBtnActive4('#ffffff');}}><Text style={[ styles.sortBtn, {color: sortBtnActive3} ]}>Строго перед</Text></TouchableHighlight>
                <TouchableHighlight onPress={(): void => {setsortBy('?createAt%5Bbefore%5D='); setsortBtnActive4('lime'); setsortBtnActive3('#ffffff'); setsortBtnActive1('#ffffff'); setsortBtnActive2('#ffffff');}}><Text style={[ styles.sortBtn, {color: sortBtnActive4} ]}>Перед</Text></TouchableHighlight>
              </View>
              : null}
            <Modal
              animationInTiming={200}
              animationOutTiming={200}
              isVisible={openCalendar}
              onBackdropPress={setTime}>
              <View style={styles.dropDownSort}>
                <View style={{margin: 10}}>
                  <View style={[Cstyles.SectionStyle, {marginTop: 0}]}><Text style={{fontSize: 16, color: '#ffffff'}}>Відсортуватіи по: 2021/<Text style={{ color: '#ffffff', fontSize: 16 }}>{selectedMonth}/{selectedDay}-{selectedHour}:{selectedMinute}</Text></Text></View>
                  <View style={[Cstyles.SectionStyle, {marginTop: 10}]}><Text style={styles.Btn18}>Місяць:</Text> 
                    <DataPickerMonth selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>
                  </View>
                  <View style={[Cstyles.SectionStyle, {marginTop: 0}]}><Text style={styles.Btn18}>День:</Text>
                    <DataPickerDay selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                  </View>
                  <View style={[Cstyles.SectionStyle, {marginTop: 0}]}><Text style={styles.Btn18}>Година:</Text>
                    <DataPickerHour selectedHour={selectedHour} setSelectedHour={setSelectedHour}/>
                  </View>
                  <View style={[Cstyles.SectionStyle, {marginTop: 0}]}><Text style={styles.Btn18}>Хвилина:</Text>
                    <DataPickerMinute selectedMinute={selectedMinute} setSelectedMinute={setSelectedMinute}/>
                  </View>
                </View>
                <View style={{marginRight: 10}}>
                  <Pressable
                    onPress={() => setOpenCalendar(false)}>
                    <Text style={[styles.Btn18, {marginLeft: '78%'}]}>Назад</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          {error!=null? (
            <ServerErr/>
          ) : null}
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 10}}>
            <TouchableHighlight onPress={ (): void => {setSortByState(true), setSortByName(false), setSortByMixer(false), setSortByCreatedAt(false), setSortByND(false), setSortByAnalysis(false)}}><Text style={[ styles.sortBtn ]}>Стан</Text></TouchableHighlight>
            <TouchableHighlight onPress={ (): void => {setSortByName(true), setSortByState(false), setSortByMixer(false), setSortByCreatedAt(false), setSortByND(false), setSortByAnalysis(false)}}><Text style={[ styles.sortBtn ]}>Номер</Text></TouchableHighlight>
            <TouchableHighlight onPress={ (): void => {setSortByMixer(true), setSortByState(false), setSortByName(false), setSortByCreatedAt(false), setSortByND(false), setSortByAnalysis(false)}}><Text style={[ styles.sortBtn ]}>Міксер</Text></TouchableHighlight>
            <TouchableHighlight onPress={ (): void => {setSortByCreatedAt(true), setSortByState(false), setSortByName(false), setSortByMixer(false), setSortByND(false), setSortByAnalysis(false)}}><Text style={[ styles.sortBtn ]}>Час</Text></TouchableHighlight>
            <TouchableHighlight onPress={ (): void => {setSortByND(true), setSortByState(false), setSortByName(false), setSortByMixer(false), setSortByCreatedAt(false), setSortByAnalysis(false)}}><Text style={[ styles.sortBtn ]}>НД</Text></TouchableHighlight>
            <TouchableHighlight onPress={ (): void => {setSortByAnalysis(true), setSortByState(false), setSortByName(false), setSortByMixer(false), setSortByCreatedAt(false), setSortByND(false)}}><Text style={[ styles.sortBtn ]}>Аналізи</Text></TouchableHighlight>
          </View>
          <Text style={{marginLeft: 10}}>{data?.['hydra:member'][0] ? (null) :<><SearchErr/> <TouchableHighlight onPress={() => {setSelectedMonth(''), setSelectedDay(''), setSelectedHour(''), setSelectedMinute('')}}><Text  style={[styles.Btn18, {margin: 10} ]}>Очистити</Text></TouchableHighlight></>}</Text>
          
          {isLoading ? (<Loader />) : (
            <>
              {dataEntity ? (
                <ModalMain onClose={closeModalDetail}>
                  {choicePopupDetail(dataEntity)}
                </ModalMain>
              )
                : null}
              <View style={{height: 350}}>
                <ScrollView>
                  {data?.['hydra:member'].sort(byField(sortByName?'name':'id' || sortByState?'state':'id' || sortByMixer? 'mixer.name':'id' || sortByCreatedAt? 'createAt':'id' || sortByND? 'normativeDocument.name':'id' || sortByAnalysis? 'laboratoryAnalyzes.name':'id')).map((member) => {
                    return <ListItem key={member.id} data={member} onPress={(): void => openModalDetail(member)} />
                  })}
                  
                </ScrollView>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}


