"use client";
import { useCallback, useEffect, useState } from 'react';
import { TAxiosResponse } from '@/api/apiType';
import { AxiosResponse } from 'axios';

type UseFetchReturn = [{
    response: any;
    isLoading: boolean;
    error: any;
},
    (params?: any) => void,
];

type ApiMethod<T, U = any> = (param: U) => TAxiosResponse<T>;

export function useFetch<T, U = any>(
    apiMethod: ApiMethod<T, U>,
): UseFetchReturn {
    const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
    const [isLoading, setLoadingStatus] = useState(false);
    const [error, setError] = useState(null);

    const [params, setParams] = useState<any>(null);

    const doFetch = useCallback((reqParams: any) => {
        setParams(reqParams);
        setLoadingStatus(true);
    }, []);

    useEffect(() => {
        if (!isLoading) return;
        let skipGetResponseAfterDestroy = false;
        setError(null);
        apiMethod(params)
            .then((res) => {
                if (!skipGetResponseAfterDestroy) {
                    setLoadingStatus(false);
                    setResponse(res);
                }
            })
            .catch((err: any) => {
                if (!skipGetResponseAfterDestroy) {
                    setLoadingStatus(false);
                    setError(err);
                }
            });

        return () => {
            skipGetResponseAfterDestroy = true;
        };
    }, [isLoading, apiMethod, params, response]);

    return [{ response, isLoading, error }, doFetch];
}
