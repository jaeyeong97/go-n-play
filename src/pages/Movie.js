import Slider from '../components/Slider';
import ThumbnailSlider from '../components/ThumbnailSlider';
import ThumbnailSliderVertical from '../components/ThumbnailSliderVertical';
import Footer from '../components/Footer';

const Movie = ({ moviesData }) => {

  const mainSlides = [
    {
      id: 1,
      img: '/assets/slide11.png',
      txt: '/assets/slide11_txt.png',
      video: '/assets/slide1_video.mp4',
      age: "All",
      title: "해리 포터와 아즈카반의 죄수",
      rating: "4.79",
      length: "2시간 21분",
      genre: "액션, 어드벤처, SF, 판타지, 드라마",
      year: "2009",
      subtitle: "영어, 한국어",
      director: "알폰소 쿠아론",
      actors: "다니엘 래드클리프, 루퍼트 그린트, 엠마 왓슨, 로비 콜트레인, 마이클 갬본, 앨런 릭먼, 게리 올드만, 매기 스미스, 티모시 스폴, 엠마 톰슨, 제이미 캠벨 바우어",
      summary: `[3편] 해리는 볼드모트를 이끌어 자신의 부모님을 죽게 만든 시리우스 블랙이 아즈카반 감옥을 탈출해 자신을 찾고 있음을 알게 된다. 이에 새로 부임한 어둠의 마법 방어술 교수 루핀은 해리에게 어둠에 대적할 수 있는 패트로누스 마법을 가르쳐준다. 그러던 중 해리는 자신과 시리우스 블랙 사이에 얽혀있는 비밀을 직면한다.`
    },
    {
      id: 2,
      img: '/assets/slide12.png',
      txt: '/assets/slide12_txt.png',
      video: '/assets/slide2_video.mp4',
      age: "All",
      title: "해리 포터와 죽음의 성물 - 2부",
      rating: "4.25",
      length: "2시간 11분",
      genre: "액션, 어드벤처, SF, 판타지, 드라마",
      year: "2007",
      subtitle: "영어, 한국어",
      director: "데이빗 예이츠",
      actors: "다니엘 래드클리프, 루퍼트 그린트, 엠마 왓슨, 로비 콜트레인, 리처드 해리스, 앨런 릭먼, 보니 라이트, 랄프 파인즈, 톰 펠튼, 헬레나 본햄 카터, 빌 나이, 게리 올드만, 제이슨 아이삭스, 마이클 갬본, 이반나 린치, 줄리 월터스, 제이미 캠벨 바우어, 클레멘스 포시, 존 허트, 도널 글리슨, 매기 스미스, 엠마 톰슨, 올리버 펠프스, 매튜 루이스, 헬렌 맥크로리, 데이빗 듈리스, 티모시 스폴",
      summary: `[7편 Part2] 해리는 볼드모트가 그토록 찾아다닌 딱총나무 지팡이로 마지막 퍼즐을 완성한다. 볼드모트는 호크룩스들이 파괴되었음을 느끼고 호그와트로 향한다. 불사조 기사단과 죽음을 먹는 자들 간의 전투로 전쟁터로 변한 호그와트. 해리는 볼드모트를 없앨 마지막 호크룩스에 대한 단서를 찾는다.`
    },
    {
      id: 3,
      img: '/assets/slide13.png',
      txt: '/assets/slide13_txt.png',
      video: '/assets/slide3_video.mp4',
      age: "All",
      title: "해리 포터와 마법사의 돌",
      rating: '4.74',
      length: "2시간 32분",
      genre: "액션, 어드벤처, SF, 판타지, 드라마",
      year: "2004",
      subtitle: "영어, 한국어",
      director: "크리스 콜럼버스",
      actors: "다니엘 래드클리프, 루퍼트 그린트, 엠마 왓슨, 로비 콜트레인, 리처드 해리스, 앨런 릭먼, 이안 하트, 톰 펠튼, 매튜 루이스, 존 허트, 매기 스미스, 랄프 파인즈, 리차드 그리피스, 피오나 쇼우, 해리 멜링, 션 비거스태프, 제이미 캠벨 바우어",
      summary: `이모네 벽장에서 생활하며 구박받던 해리. 11살 생일에 호그와트 마법학교 입학 초대장을 받는다. 거인 해그리드와 함께 떠난 마법 세계에서 론과 헤르미온느를 만나 모험을 시작한다. 부모님을 살해한 볼드모트가 마법사의 돌을 차지하는 것을 막아야 한다.`
    },
    {
      id: 4,
      img: '/assets/slide14.png',
      txt: '/assets/slide14_txt.png',
      video: '/assets/slide4_video.mp4',
      age: "12",
      title: "나는 전설이다",
      rating: "4.64",
      length: "1시간 40분",
      genre: "액션, 어드벤처, SF, 어드벤쳐, 드라마",
      year: "2008",
      subtitle: "영어, 한국어",
      director: "프란시스 로렌스",
      actors: "윌 스미스, 앨리스 브라가, 찰리 타핸, 샐리 리차드슨, 윌로우 스미스",
      summary: `2012년, 전 인류가 멸망한 가운데 과학자 네빌만이 살아남는다. 생존자를 찾기 위해 매일 방송을 송신하던 그는 생존자가 또 있다는 것을 알게 된다. 그러나, 애타게 찾았던 생존자들은 더 이상 인간의 모습이 아닌 이상 바이러스에 감염된 변종 인류였다. 인류의 마지막 생존자와 변종 인류 간의 전쟁이 시작된다.`
    },
  ];

  const section1Movies = moviesData.slice(36, 54);
  const section2Movies = moviesData.slice(0, 18);
  const section3Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numA - numB; // 오름차순 
  });;
  const section4Movies = moviesData.slice(17, 35);
  const section5Movies = moviesData.slice(36, 54);
  const section6Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numB - numA; // 내림차순 
  });
  const section7Movies = moviesData.slice(19, 37);
  const section8Movies = moviesData.slice(0, 18);

  const sliderTitle1 = 'SF & 판타지 영화';
  const sliderTitle2 = '판타지 영화';
  const sliderTitle3 = '대한민국 영화 TOP 10';
  const sliderTitle4 = 'Go n Play에 새로 올라온 콘텐츠';
  const sliderTitle5 = '가볍게 보기 좋은 영화';
  const sliderTitle6 = '이번주 인기 영화 TOP 10';
  const sliderTitle7 = '잠 못 이루는 밤';
  const sliderTitle8 = '회원님을 위한 오늘의 콘텐츠';

  const totalSlides = 4;

  return (
    <div className="movie component">
      <Slider mainSlides={mainSlides} totalSlides={totalSlides} />
      <section className='section'>
        <ThumbnailSliderVertical
          sliderTitle={sliderTitle3}
          selectedMovies={section3Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle1}
          selectedMovies={section1Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle2}
          selectedMovies={section2Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle4}
          selectedMovies={section4Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle5}
          selectedMovies={section5Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSliderVertical
          sliderTitle={sliderTitle6}
          selectedMovies={section6Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle7}
          selectedMovies={section7Movies}
        />
      </section>
      <section className='section'>
        <ThumbnailSlider
          sliderTitle={sliderTitle8}
          selectedMovies={section8Movies}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Movie;
