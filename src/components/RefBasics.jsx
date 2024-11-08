import { useState, useEffect } from 'react';
import { useRef } from 'react';

/**
 * - Створення та ініціалізація
 * - Життєвий цикл рефа
 * - Відсутність реактивності
 */

export default function RefBasics() {
  // const textRef = useRef();
  // console.log('First render', textRef);

  // useEffect(() => {
  //   console.log('UseEffect', textRef.current);
  // }, []);

  const mountTime = Date.now();
  const mountRef = useRef(Date.now());

  const [clicks, setClicks] = useState(0);

  return (
    <div>
      {/* <p ref={textRef}>Hello</p> */}
      <p onClick={() => setClicks(clicks + 1)}>{clicks}</p>
      <p>mountTime: {mountTime}</p>
      <p>mountRef: {mountRef.current}</p>
    </div>
  );
}
