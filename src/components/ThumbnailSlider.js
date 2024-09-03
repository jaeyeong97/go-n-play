import { useEffect, useState } from 'react';
import '../scss/ThumbnailSlider.scss';
import { useNavigate } from 'react-router-dom';

const ThumbnailSlider = ({ sliderTitle, selectedMovies }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        // Window resize 시 width 업데이트
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 사용자 화면 넓이 변경 시 currentIndex 업데이트, 아니면 끝 index에서 이미지 안나옴
    useEffect(() => {
        setCurrentIndex(0);
    }, [windowWidth]);

    const handleClickLeft = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const handleClickRight = () => {
        if (windowWidth < 768) {
            setCurrentIndex((prev) => (prev >= 5 ? 5 : prev + 1));
        } else if (windowWidth < 1024) {
            setCurrentIndex((prev) => (prev >= 4 ? 4 : prev + 1));
        } else {
            setCurrentIndex((prev) => (prev >= 2 ? 2 : prev + 1));
        }
    };

    // 이미지 클릭 시 /Modal로 이동하고 영화 데이터를 state로 전달
    const handleImageClick = (movie) => {
        navigate('/Modal', { state: { movie } }); // state로 영화 정보 전달
    };

    return (
        <div className="thumbnail-slider-wrap">
            <h2 className='thumbnail-slider-title'>
                {sliderTitle}
            </h2>
            <div className='thumbnail-slider'>
                <div
                    className='slider'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {selectedMovies.map((movie) => (
                        <img className='horizon-img'
                            key={movie.id}
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => handleImageClick(movie)}
                        />
                    ))}
                </div>
                <span className="material-symbols-outlined thumbnail-slider-arrow-left arrow" onClick={handleClickLeft}>
                    arrow_left_alt
                </span>
                <span className="material-symbols-outlined thumbnail-slider-arrow-right arrow" onClick={handleClickRight}>
                    arrow_right_alt
                </span>
            </div>
        </div>
    );
};

export default ThumbnailSlider;