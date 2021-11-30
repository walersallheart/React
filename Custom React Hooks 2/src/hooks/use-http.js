import { useState, useCallback } from "react";

const useHttp = () => {
    console.log('useHttp');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        console.log('sendRequest');

        setIsLoading(true);
        setError(null);

        console.log(requestConfig);

        try {
            const response = await fetch(
                requestConfig.url, {
                    method:requestConfig.method ? requestConfig.method : '',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    };
}

export default useHttp;