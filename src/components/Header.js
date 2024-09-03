import { useNavigate } from 'react-router-dom';
import '../scss/Header.scss';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useState(''); // 검색어 상태 추가
  const [currentMenu, setCurrentMenu] = useState('메뉴');

  const toggleSearch = () => {
    setIsClicked(!isClicked);
  };

  const handleMenuClick = (path, menuName) => {
    setCurrentMenu(menuName);
    navigate(path);
  };

  // 검색어 입력
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Enter 키를 눌렀을 때 검색 실행
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      navigate('/Search', { state: { query: searchValue } }); // 검색값을 Search로 이동
    }
    navigate('/Search', { state: { query: searchValue } });
  };

  return (
    <header id='header'>
      <div className="logo" onClick={() => navigate('/')}>
        <img src='/assets/logo.png' alt="logo" />
      </div>
      <nav>
        <span>{currentMenu}</span>
        <span className="material-symbols-outlined">
          arrow_drop_down
        </span>
        <ul>
          <li onClick={() => handleMenuClick('/', '홈')}>홈</li>
          <li onClick={() => handleMenuClick('/Series', '시리즈')}>시리즈</li>
          <li onClick={() => handleMenuClick('/Movie', '영화')}>영화</li>
          <li onClick={() => handleMenuClick('/New', 'NEW! 새로나온 컨텐츠')}>NEW! 새로나온 컨텐츠</li>
          <li onClick={() => handleMenuClick('/Kids', '키즈')}>키즈</li>
        </ul>
      </nav>
      <div className='menus'>
        <div className='search'>
          <div className={`search-in ${isClicked ? 'active' : ''}`}>
            <span className="material-symbols-outlined back" onClick={() => {
              setIsClicked(false);
              setSearchValue('');
            }}>
              arrow_back
            </span>
            <input
              className='search-input'
              type='text'
              placeholder='검색어를 입력해주세요.'
              value={searchValue} // 검색어 상태 연결
              onChange={handleSearchChange} // 검색어 입력 시 상태 업데이트
              onKeyPress={handleSearchSubmit} // Enter 키 누를 때 검색 실행
            />
            <span className="material-symbols-outlined search-icon-in" onClick={handleSearchSubmit}>
              search
            </span>
          </div>
          <span className="material-symbols-outlined search-icon-out" onClick={toggleSearch}>
            search
          </span>
        </div>
        <img className='profile' src='../assets/profile.png' alt='프로필 이미지' />
      </div>
    </header>
  );
};

export default Header;
