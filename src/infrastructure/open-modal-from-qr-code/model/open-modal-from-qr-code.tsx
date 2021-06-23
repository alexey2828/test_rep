import React, { useEffect, useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import HoneywellScanner from 'react-native-honeywell-scanner';
import { Loader } from '../../../component-ui/loader/Loader';
import { ModalMain } from '../../../component-ui/modal/modal-main';
import { ViewError } from '../../../component-ui/viewError/viewError';
import { UseHttpLatest } from '../../../hooks/useHttp';
import { TMember } from '../../api-platform';
import { choicePopupDetail } from '../../utils/choose-popup-detail';

type TDataCode = {
  data: string;
}

export const OpenModalFromQrCode: React.FC = () => {
  const [dataEntity, setDataEntity] = useState<TMember | null>(null);
  const [dataCode, setDataCode] = useState<TDataCode | string>('');
  const [scanError, setScanError] = useState('');
  const [url, setUrl] = useState('');

  const { data, updateResponse, isLoading } = UseHttpLatest<TMember>();

  const closeModal = (): void => {
    setDataEntity(null);
    setScanError('');
  }

  HoneywellScanner.startReader().then((claimed) => {
    console.log(claimed ? 'Barcode reader is claimed' : 'Barcode reader is busy');
  });

  HoneywellScanner.on('barcodeReadFail', () => {
    setScanError('Barcode read failed');
    Vibration.vibrate()
  });

  isLoading ? (<Loader />) : (
    HoneywellScanner.on('barcodeReadSuccess', event => {
      setScanError('');
      if (event) {
        setDataCode(event);
      } else {
        setDataCode('');
      }
    }
    ));

  useEffect(() => {
    if (typeof dataCode !== 'string' && dataCode.data) {
      try {
        const url = JSON.parse(dataCode.data)['@id'];
        setUrl(url);
        if (!url) {
          throw new Error('Error url');
        }
      } catch (error) {
        setUrl('');
        setScanError(error.message);
      }
    }
  }, [dataCode]);

  useEffect(() => {
    if (scanError) {
      console.log(scanError);
    }
  }, [scanError]);

  useEffect(() => {
    if (url) {
      updateResponse({ url })
    }
  }, [url]);

  useEffect(() => {
    if (data) {
      if (choicePopupDetail(data)) {
        setDataEntity(data);
      } else {
        setScanError('Error choice modal detail');
      }
    } else {
      setDataEntity(null);
    }
  }, [data]);
  
  return (
    <View>
      <Text>
        {scanError && (
          <ModalMain onClose={closeModal}>
            <ViewError message={scanError} />
          </ModalMain>
        )}
        {dataEntity && (
          <ModalMain onClose={closeModal}>
            {choicePopupDetail(dataEntity)}
          </ModalMain>
        )}
      </Text>
    </View>
  );
}
