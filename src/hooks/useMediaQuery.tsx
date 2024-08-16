import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const updateMatches = () => setMatches(mediaQueryList.matches);

        updateMatches(); // Set initial value
        mediaQueryList.addEventListener('change', updateMatches);

        return () => mediaQueryList.removeEventListener('change', updateMatches);
    }, [query]);

    return matches;
};

export default useMediaQuery;
