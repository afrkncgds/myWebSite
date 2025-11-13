// src/components/common/MotionWrapper.tsx
import React, {type ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "top" | "bottom" | "left" | "right";

interface MotionWrapperProps {
    children: ReactNode;
    direction?: Direction;
}

const variantsByDirection: Record<Direction, any> = {
    top: {
        initial: { opacity: 0, y: -40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40 },
    },
    bottom: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -40 },
    },
    left: {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 40 },
    },
    right: {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
    },
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({
                                                         children,
                                                         direction = "top",
                                                     }) => {
    const variants = variantsByDirection[direction];

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{ height: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;