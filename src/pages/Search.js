import { useRecoilValue } from 'recoil';
import { moviesState } from '../recoil/moviesState';
import { useLocation, useNavigate } from 'react-router-dom';
import '../scss/Search.scss';

const Search = () => {
    const location = useLocation();
    const query = location.state?.query || ''; // state값 없으면 Error 안뜨고 undefined 뜨게 옵셔널 체이닝 사용
    const navigate = useNavigate();
    const moviesData = useRecoilValue(moviesState);

    const filteredMovies = moviesData.filter((movie) =>
        movie.title.includes(query)
    );

    const handleImageClick = (movie) => {
        navigate('/Modal', { state: { movie } }); // state로 영화 정보 전달
    };

    return (
        <div className="search-results-wrap">
            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                    <div key={movie.id} className="item">
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => handleImageClick(movie)}
                        />
                    </div>
                ))
            ) : (
                <div className='no-result'>
                    <span>검색 결과가 없습니다.</span>
                </div>
            )}
        </div>
    );
};

export default Search;
