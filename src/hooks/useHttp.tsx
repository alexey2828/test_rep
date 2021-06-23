/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */

import { useState, useCallback } from 'react';
import { SERVER_URL } from '../infrastructure/const/urls';


type TFetchParam = {
  url: RequestInfo;
  method?: RequestInit['method'];
  body?: RequestInit['body'];
  headers?: RequestInit['headers'];
};

type UseHttpLatest<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  updateResponse: (fetchParam: TFetchParam) => void;
  resetError: () => void;
};

/**
 * User HTTP HOOK
 * type UseHttp<T> = {
 * data: T | null;
 * error: Error | null;
 * isLoading: boolean;
 * updateResponse: (fetchParam: TFetchParam) => void;
 * resetError: () => void;
 * }
 * 1. Default HTTP method: 'get'
 * 2. Before running we init next states:
 *    - isLoading: true
 * 3. The data state is never reset. It is set only through the updateResponse function.
 */
export function UseHttpLatest<T>(): UseHttpLatest<T> {
  const [data, setData] = useState<UseHttpLatest<T>['data']>(null);
  const [error, setError] = useState<UseHttpLatest<T>['error']>(null);
  const [isLoading, setIsLoading] = useState<UseHttpLatest<T>['isLoading']>(false);

  const resetError: UseHttpLatest<T>['resetError'] = useCallback(() => {
    setError(null);
  }, []);

  const updateResponse: UseHttpLatest<T>['updateResponse'] = useCallback(
    ({ url, method = 'get', body, headers }) => {
      
      const http = async () => {
        resetError();
        setIsLoading(true);
        try {
          if (body) {
            headers = { ...headers, 'Content-Type': 'application/ld+json' };
          }

          const response = await fetch(
            SERVER_URL + url,
            { body, headers, method }
          );
          const fetchedData = await response.json();
          setData(fetchedData);
          if (!response.ok) {
            throw new Error(response.statusText || 'Error Fetch');
          }
          setIsLoading(false);
        } catch (e) {
          setError(e.message);
          setIsLoading(false);
          throw e;
        }
      };
      http();
    },
    []
  );

  return { data, error, isLoading, updateResponse, resetError };
}