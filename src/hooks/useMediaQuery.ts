import { useState, useEffect } from "react";
import { MEDIA_QUERIES } from "../constants";

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia(query);
        const handler = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        } 
        // Fallback for older browsers
        else {
            mediaQuery.addListener(handler);
            return () => mediaQuery.removeListener(handler);
        }
    }, [query]);

    return matches;
};

export const useIsMobile = () => useMediaQuery(MEDIA_QUERIES.mobile);
export const useIsTablet = () => useMediaQuery(MEDIA_QUERIES.tablet);
