import { useEffect, useRef } from 'react';
import './App.css';
import Rocket5 from "../src/image/rocket1.png"

const Cursor = () => {


  const delay = 1;

  const dot = useRef(null);
  // const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  // const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    // document.addEventListener('mousedown', mouseOverEvent);
    // document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    // animateDotOutline();

    return () => {
      // document.removeEventListener('mousedown', mouseOverEvent);
      // document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      // dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      // dotOutline.current.style.opacity = 0;
    }
  };


  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  return (
    <>
      {/* <div ref={dotOutline} className="cursor-dot-outline" id="cursor">
        
      </div> */}
      <div ref={dot} className="cursor-dot" id="cursor">
      <img src={Rocket5} style={{width:"100px",height:"100px"}} />

      </div>
    </>
  );
};

export default Cursor;