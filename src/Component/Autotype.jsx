import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Autotype({ strings, typeSpeed = 50, loop = true, backSpeed, className = '' }) {
  // Reference to the DOM element
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed : backSpeed,
      loop: loop,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, [strings, typeSpeed, loop,backSpeed]);

  return <span ref={el} className={className} />;
}

export default Autotype;
