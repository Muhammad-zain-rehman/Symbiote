"use client"
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';

const InfiniteLooper = ({
    speed, direction, children
}) => {

    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    function resetAnimation() {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "false");
    
          setTimeout(() => {
            if (innerRef?.current) {
              innerRef.current.setAttribute("data-animate", "true");
            }
          }, 50);
        }
      }
    

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }

        resetAnimation();

    }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", setupInstances);
    
        return () => {
          window.removeEventListener("resize", setupInstances);
        };
    }, []);
    

    return (
        <div className="looper" ref={outerRef}>
            <div className="looper__innerList" ref={innerRef}>
                {[...Array(looperInstances)].map((_, index) => (
                    <div
                        key={index}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection: direction === "right" ? "reverse" : "normal",
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfiniteLooper