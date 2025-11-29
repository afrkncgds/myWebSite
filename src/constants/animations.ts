export const PAGE_VARIANTS = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
} as const;

export const PAGE_TRANSITION = {
    duration: 0.5,
    ease: "easeInOut" as const,
} as const;
