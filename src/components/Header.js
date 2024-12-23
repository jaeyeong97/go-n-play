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

  // 검색 실행
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      navigate('/Search', { state: { query: searchValue } }); // 검색값을 Search로 이동
    }
    navigate('/Search', { state: { query: searchValue } });
  };

  return (
    <header id='header'>
      <div className="logo" onClick={() => navigate('/')}>
        <img src='/assets/logo.webp' alt="logo" />
      </div>
      <nav>
        <div className='menu-title'>
          <span>{currentMenu}</span>
          <img src='/assets/arrow_down.svg' alt='아래 화살표' />
        </div>
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
            <img src='/assets/arrow-back.svg' alt='왼쪽 화살표' className='back' onClick={() => {
              setIsClicked(false);
              setSearchValue('');
            }} />
            <input
              className='search-input'
              type='text'
              placeholder='검색어를 입력해주세요.'
              value={searchValue} // 검색어 상태 연결
              onChange={handleSearchChange} // 검색어 입력 시 상태 업데이트
              onKeyPress={handleSearchSubmit} // Enter 키 누를 때 검색 실행
            />
            <img src='/assets/search-icon.svg' alt='검색 아이콘' className='search-icon-in' onClick={handleSearchSubmit} />
          </div>
          <img src='/assets/search-icon.svg' alt='검색 아이콘' className='search-icon-out' onClick={toggleSearch} />
        </div>
        <img className='profile' src='../assets/profile.webp' alt='프로필 이미지' />
      </div>
    </header>
  );
};

export default Header;
