import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Cstyles } from '../../../component-ui/screen/screens-styles/screenStyle.styles';
import { AnalysisErr } from '../../../component-ui/viewError/analysis-error';

import { AnalysisItem } from '../ui/analysis-items/analysis-item';
import { styles } from '../ui/analysis-items/analysis-item.styles';


export const ScreenAnalysis = (props: any) => {
  const { route } = props
  const { mixingAnalysis } = route.params

  if(mixingAnalysis.laboratoryAnalyzes[0]?.inputs[0]?.id != undefined){
    console.log('ddaaaadddad -', mixingAnalysis.laboratoryAnalyzes[0]?.inputs[0]?.id)
  } else {
    console.log('aaaaaaffa')
  }

  return (
    <View style={styles.ScreenContainer}>
      <View style={{height: 500}}>
        <Text>
          <View>
            {mixingAnalysis.laboratoryAnalyzes[0]?.inputs[0]?.id != undefined? ( null ) : (
              <AnalysisErr/>
            ) }
          </View>
        </Text>
        <ScrollView>
          <Text style={{color: '#ffffff'}}>{mixingAnalysis?.laboratoryAnalyzes?.map((number: any) =>
            <>  
              <View style={{margin: 10}}>
                <AnalysisItem data={number}/>
              </View>
            </>
          )}</Text>
        </ScrollView>
      </View>
    </View>
  );
};



