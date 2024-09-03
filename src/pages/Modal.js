import { useLocation } from 'react-router-dom';
import '../scss/Modal.scss';
import { useEffect, useRef, useState } from 'react';

const Modal = () => {
    const location = useLocation();
    const dataId = useRef(0)
    // 전달받은 영화 데이터를 가져오기
    const movie = location.state?.movie;

    const [review, setReview] = useState('');
    const [reviewData, setReviewData] = useState([]);
    const [points, setPoints] = useState('5점');
    const [togglePoints, setTogglePoints] = useState(false);
    const [toggleFav, setToggleFav] = useState(false);
    const [toggleThumb, setToggleThumb] = useState(false);

    const toggleBtn = (type) => {
        if (type === 'points') {
            setTogglePoints(!togglePoints);
        } else if (type === 'fav') {
            setToggleFav(!toggleFav);
        } else if (type === 'thumb') {
            setToggleThumb(!toggleThumb);
        }
    };

    // 로컬 스토리지에서 불러오기
    useEffect(() => {
        if (!movie || !movie.id) return; // movie와 movie.id가 유효한지 체크
        try {
            const rv = JSON.parse(localStorage.getItem(`rv_${movie.id}`)) || [];
            setReviewData(rv);
            dataId.current = rv.length > 0 ? rv[0].id + 1 : 0; // dataId를 다음 id로 조정
        } catch (error) {
            console.error('로컬 스토리지 데이터 파싱 오류:', error);
            setReviewData([]);
            dataId.current = 0;
        }
    }, [movie]);

    // 로컬 스토리지에 리뷰 저장
    useEffect(() => {
        if (!movie || !movie.id) return; // movie와 movie.id가 유효한지 체크
        localStorage.setItem(`rv_${movie.id}`, JSON.stringify(reviewData));
    }, [reviewData, movie]);

    const handleReview = (e) => {
        setReview(e.target.value);
    }

    // 리뷰 작성시 날짜 시간 표시
    const createReview = (content, points) => {
        const createdDate = new Date();

        const year = createdDate.getFullYear();
        const month = String(createdDate.getMonth() + 1).padStart(2, '0');
        const date = String(createdDate.getDate()).padStart(2, '0');
        let hours = createdDate.getHours();
        const minutes = String(createdDate.getMinutes()).padStart(2, '0');

        // 오전/오후 설정
        const period = hours >= 12 ? '오후' : '오전';
        hours = hours % 12 || 12; // 12시간제로 변환, 0시를 12시로

        const formattedDate = `${year}년 ${month}월 ${date}일 ${period} ${hours}시 ${minutes}분`;

        const newReview = {
            id: dataId.current,
            content: content,
            createdDate: formattedDate,
            points: points,
        };

        dataId.current += 1;
        setReviewData([newReview, ...reviewData]);
    };

    const handleSaveReview = () => {
        if (review.length < 5) {
            window.alert('5글자 이상 작성하셔야 등록됩니다.')
            return;
        }
        createReview(review, points);
        setReview('');
        setPoints('5점')
    }
    const checkPoints = point => {
        if (point === '5점') {
            return '⭐⭐⭐⭐⭐';
        } else if (point === '4점') {
            return '⭐⭐⭐⭐';
        } else if (point === '3점') {
            return '⭐⭐⭐';
        } else if (point === '2점') {
            return '⭐⭐';
        } else if (point === '1점') {
            return '⭐';
        }
    }
    const enterKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSaveReview()
        }
    }

    if (!movie) {
        return (
            <div className="modal">
                <div>영화 정보를 불러오지 못했습니다.</div>
            </div>
        );
    }

    return (
        <div className="modal">
            <div className="modal-content-wrap">
                <div className='img-wrap'>
                    <img src={movie.img} alt={movie.title} />
                    <div className='flex'>
                        <div className='left'>
                            <h2 className='title'>{movie.title}</h2>
                            <div className='sub-text-wrap'>
                                <span className="material-symbols-outlined star">
                                    star
                                </span>
                                <div>{movie.rating}</div>
                                <span className='dot'>•</span>
                                <div>{movie.year}</div>
                                <span className='dot'>•</span>
                                <div>{movie.length}</div>
                                <span className='dot'>•</span>
                                <div className='age'>{movie.age}+</div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='icon-wrap'>
                                <span
                                    className={toggleFav ?
                                        "material-symbols-outlined fav active" : "material-symbols-outlined fav"}
                                    onClick={() => { toggleBtn('fav') }}>
                                    favorite
                                </span>
                                <span
                                    className={toggleThumb ?
                                        "material-symbols-outlined thumb  active" : "material-symbols-outlined thumb"}
                                    onClick={() => { toggleBtn('thumb') }}>
                                    thumb_up
                                </span>
                            </div>
                            <button className='play'>
                                <span>재생하기</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='text-section'>
                    <span>줄거리</span>
                    <div className='summary'>
                        {movie.summary}
                    </div>
                </div>
                <div className='text-section'>
                    <span>장르</span>
                    <div className='genre'>
                        {movie.genre}
                    </div>
                </div>
                <div className='text-section'>
                    <span>감독</span>
                    <div className='director'>
                        {movie.director}
                    </div>
                </div>
                <div className='text-section'>
                    <span>출연진</span>
                    <div className='actors'>
                        {movie.actors}
                    </div>
                </div>
                <div className='text-section'>
                    <span>추가 정보</span>
                    <div className='subtitle'>
                        {movie.subtitle}
                    </div>
                </div>
                <div className='review-wrap'>
                    <div className="review">
                        <input
                            type="text"
                            value={review}
                            onChange={handleReview}
                            onKeyDown={enterKeyDown}
                            placeholder="리뷰를 작성하세요."
                        />
                        <div className='points-wrap'>
                            <div className='point-title' onClick={() => { toggleBtn('points') }}>
                                <span>{points}</span>
                                {togglePoints ? (
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_up
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined down">
                                        keyboard_arrow_down
                                    </span>
                                )}
                            </div>
                            <div className={togglePoints ? 'btn-wrap' : 'btn-wrap-none'} >
                                <div className='point-btn' onClick={() => {
                                    setPoints('5점');
                                    setTogglePoints(false);
                                }}>5점</div>
                                <div className='point-btn' onClick={() => {
                                    setPoints('4점');
                                    setTogglePoints(false);
                                }}>4점</div>
                                <div className='point-btn' onClick={() => {
                                    setPoints('3점');
                                    setTogglePoints(false);
                                }}>3점</div>
                                <div className='point-btn' onClick={() => {
                                    setPoints('2점');
                                    setTogglePoints(false);
                                }}>2점</div>
                                <div className='point-btn' onClick={() => {
                                    setPoints('1점');
                                    setTogglePoints(false);
                                }}>1점</div>
                            </div>
                        </div>
                        <button className='save' onClick={handleSaveReview}>등록</button>
                    </div>
                    <ul>
                        {reviewData.map((it) => (
                            <li className="review-text" key={it.id}>
                                <span className="review-points">{checkPoints(it.points)}</span>
                                <div className="review-date">
                                    <span>관람객 리뷰</span>
                                    <span>
                                        {it.createdDate}
                                    </span>
                                </div>
                                <div className="review-content">
                                    {it.content}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
