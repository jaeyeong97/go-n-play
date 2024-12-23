import { useEffect, useRef, useState } from 'react';
import '../scss/Slider.scss';
import { useNavigate } from 'react-router-dom';

const Slider = ({ mainSlides, totalSlides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const [isMuted, setIsMuted] = useState(Array(totalSlides).fill(true)); // 슬라이드 개수만큼 음소거 상태관리
  const navigate = useNavigate();

  const leftClick = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const rightClick = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    // 현재 슬라이드의 비디오만 재생
    if (videoRefs.current[currentIndex]) {
      const videoElement = videoRefs.current[currentIndex];

      // 2초뒤에 영상 재생
      const timer = setTimeout(() => {
        videoElement.play();
        videoElement.style.opacity = 1;
      }, 1000);

      // 비디오 시간 끝날때 함수
      const handleVideoEnd = () => {
        videoElement.style.opacity = 0;
        videoElement.currentTime = 0; // 비디오를 처음으로 되돌리기
      };

      videoElement.addEventListener('ended', handleVideoEnd); // 비디오 끝날때

      return () => {
        clearTimeout(timer);
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.style.opacity = 0;
        videoElement.addEventListener('ended', handleVideoEnd);
      }
    }
  }, [currentIndex]);

  // 음소거 토글 함수
  const toggleMute = (index) => {
    const muteStatus = [...isMuted];
    muteStatus[index] = !muteStatus[index]; // 현재 상태를 토글
    setIsMuted(muteStatus); // 상태 업데이트

    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = muteStatus[index]; // 비디오 엘리먼트의 muted 속성 변경
    }
  };

  const handleToModalClick = (movie) => {
    navigate('/Modal', { state: { movie } }); // state로 영화 정보 전달
  };

  return (
    <div className="slider-wrap">
      <div
        className="slide-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%) `,
        }}
      >
        {mainSlides.map((slide, index) => (
          <div className="slide" key={index}>
            <img className='img' src={slide.img} alt='' />
            <img className='txt' src={slide.txt} alt='' />
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className='video'
              muted={isMuted[index]} // 상태에 따라 muted 속성 설정
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className='mute-btn'
              onClick={() => toggleMute(index)}>
              {isMuted[index] ?
                <img src='/assets/volume-up.svg' alt='볼륨 업' className='mute' />
                :
                <img src='/assets/volume-down.svg' alt='볼륨 다운' className='unmute' />
              }
            </button>
            <div
              className={slide.price ? 'more-btn price' : 'more-btn no-price'}
              onClick={() => handleToModalClick(slide)}
            >
              <span>
                {slide.price ? `${slide.price}원에 구매하기` : '알아보기'}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className='btn-wrap'>
        <div className='btn btn-left' onClick={leftClick}>
          <img src='/assets/left-icon.svg' alt='왼쪽 화살표' />
        </div>
        <div className='current-page'><span className='now'>{currentIndex + 1}</span> / {totalSlides}</div>
        <div className='btn btn-right' onClick={rightClick}>
          <img src='/assets/right-icon.svg' alt='오른쪽 화살표' />
        </div>
      </div>
    </div>
  );
};

export default Slider;
