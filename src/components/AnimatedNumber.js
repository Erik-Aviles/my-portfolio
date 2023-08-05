import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motioValue = useMotionValue(0);
  const sprinValue = useSpring(motioValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motioValue.set(value);
    }
  }, [isInView, value, motioValue]);

  useEffect(() => {
    sprinValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [sprinValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedNumber;
