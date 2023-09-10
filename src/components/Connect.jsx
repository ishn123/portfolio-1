import React, { useEffect } from 'react';
import "./connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faGithub, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { gsap } from "gsap";
function Connect() {
  const turnOffConnect = () => {
    const connectBoxClose = document.getElementsByClassName("connect-card")[0];
    connectBoxClose.classList.add("connect-box-pop-up-skill");

    setTimeout(()=>{
      connectBoxClose.classList.remove("connect-box-pop-up-skill");
      connectBoxClose.classList.remove("connect-box-animation");
    },400)
    


  }
  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => {

      let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

      button.addEventListener('click', e => {

        if (!button.classList.contains('active')) {

          button.classList.add('active');

          gsap.to(button, {
            keyframes: [{
              '--left-wing-first-x': 50,
              '--left-wing-first-y': 100,
              '--right-wing-second-x': 50,
              '--right-wing-second-y': 100,
              duration: .2,
              onComplete() {
                gsap.set(button, {
                  '--left-wing-first-y': 0,
                  '--left-wing-second-x': 40,
                  '--left-wing-second-y': 100,
                  '--left-wing-third-x': 0,
                  '--left-wing-third-y': 100,
                  '--left-body-third-x': 40,
                  '--right-wing-first-x': 50,
                  '--right-wing-first-y': 0,
                  '--right-wing-second-x': 60,
                  '--right-wing-second-y': 100,
                  '--right-wing-third-x': 100,
                  '--right-wing-third-y': 100,
                  '--right-body-third-x': 60
                })
              }
            }, {
              '--left-wing-third-x': 20,
              '--left-wing-third-y': 90,
              '--left-wing-second-y': 90,
              '--left-body-third-y': 90,
              '--right-wing-third-x': 80,
              '--right-wing-third-y': 90,
              '--right-body-third-y': 90,
              '--right-wing-second-y': 90,
              duration: .2
            }, {
              '--rotate': 50,
              '--left-wing-third-y': 95,
              '--left-wing-third-x': 27,
              '--right-body-third-x': 45,
              '--right-wing-second-x': 45,
              '--right-wing-third-x': 60,
              '--right-wing-third-y': 83,
              duration: .25
            }, {
              '--rotate': 55,
              '--plane-x': -8,
              '--plane-y': 24,
              duration: .2
            }, {
              '--rotate': 40,
              '--plane-x': 45,
              '--plane-y': -180,
              '--plane-opacity': 0,
              duration: .3,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute('style');
                  gsap.fromTo(button, {
                    opacity: 0,
                    y: -8
                  }, {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: .3,
                    onComplete() {
                      button.classList.remove('active');
                    }
                  })
                }, 2000)
              }
            }]
          })

          gsap.to(button, {
            keyframes: [{
              '--text-opacity': 0,
              '--border-radius': 0,
              '--left-wing-background': getVar('--primary-darkest'),
              '--right-wing-background': getVar('--primary-darkest'),
              duration: .1
            }, {
              '--left-wing-background': getVar('--primary'),
              '--right-wing-background': getVar('--primary'),
              duration: .1
            }, {
              '--left-body-background': getVar('--primary-dark'),
              '--right-body-background': getVar('--primary-darkest'),
              duration: .4
            }, {
              '--success-opacity': 1,
              '--success-scale': 1,
              duration: .25,
              delay: .25
            }]
          })

        }

      })

    });
  }, [])
  return (
    <div className="connect-card">
      <div className="close-connect" onClick={() => turnOffConnect()}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </div>
      <div className="connect-options">
        <div className="connect-option-list">
          <FontAwesomeIcon icon={faYoutube} size='3x' />
        </div>
        <div className="connect-option-list">
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </div>
        <div className="connect-option-list">
          <FontAwesomeIcon icon={faXTwitter} size='3x' />
        </div>
        <div className="connect-option-list">
          <FontAwesomeIcon icon={faLinkedinIn} size='3x' />
        </div>
      </div>

      <div className="write-message">

        <div className="input-custom-message-area">
          <input type="text" name="" id="" className='text-area-message' value={"Write your email"} style={{ marginTop: "5px", marginBottom: "5px" }} />
          <textarea rows={10} cols={150} wrap='soft'
            className='text-area-message' value={"Write your own message"}>
          </textarea>
        </div>

        <div className="send-message-button-wrapper">
          <button class="button">
            <span class="default">Send</span>
            <span class="success">Sent</span>
            <div class="left"></div>
            <div class="right"></div>
          </button>
        </div>

      </div>

      <div className="separation-line"></div>
      <div className="subscribe-content">
        <div className="button-subscribe-connect">
          <form>
            <input className="subscribe-input-email" type="email" placeholder="subscribe@here.com" required/>
              <button className="subscribe-button-kafka subscribe-content-text" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Connect;