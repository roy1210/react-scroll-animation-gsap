import React, { useRef } from "react";
import { useIntersection } from "react-use";
import back from "./left.svg";
import send from "./send.svg";
import gsap from "gsap";
import "./App.scss";

const App = () => {
  const sectionRef = useRef(null);

  const thresholdPoint = 0.3;

  const intersection = useIntersection(sectionRef, {
    root: null,
    // kickoff margin
    rootMargin: "0px",
    // render when scroll to
    threshold: thresholdPoint
  });

  const fadeIn = (element) => {
    gsap.to(element, 2, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      // next animation fadeIn
      stagger: {
        amount: 0.4
      }
    })
  }
  const fadeOut = (element) => {
    gsap.to(element, 2, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    })
  }

  // pass the className
  // pass opacity:0; to the css if do not want to fade out. ( remove fadeOut() )
  intersection && intersection.intersectionRatio < thresholdPoint
    ? fadeOut(".fadeIn") // Not reached
    : fadeIn(".fadeIn") // Reached

  return (
    <>
      <div className='header'>
        <div className='sm-btn'>
          <img src={back} alt='back arrow' />
        </div>
        <h5>About</h5>
        <div className='sm-btn'>
          <img src={send} alt='' />
        </div>
      </div>
      <div className='sectionFirst'>
        <div className='pic'>
          <img
            src='https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png'
            alt=''
          />
        </div>
        <h3>Alara Frank</h3>
        <p>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </p>
      </div>

      {/* pass the reference */}
      <div ref={sectionRef} className='sectionSecond'>
        <div className='inner'>
          {/* fadeIn className */}
          <h3 className='fadeIn'>The talk of what makes a champion.</h3>
          {/* fadeIn className */}
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
          <div className='btn-row fadeIn'>
            <a href='/'>Click here bruh</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
