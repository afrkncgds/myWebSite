export const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
} as const;

export const MEDIA_QUERIES = {
    mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
    desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
} as const;
