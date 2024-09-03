import Slider from '../components/Slider';
import ThumbnailSlider from '../components/ThumbnailSlider';
import ThumbnailSliderVertical from '../components/ThumbnailSliderVertical';
import Footer from '../components/Footer';

const Home = ({ moviesData }) => {

  const mainSlides = [
    {
      id: 1,
      img: '/assets/slide1.jpeg',
      txt: '/assets/slide1_txt.png',
      video: '/assets/slide1_video.mp4',
      age: "12",
      title: "트루먼쇼",
      rating: "4.79",
      length: "1시간 25분",
      genre: "코미디, 드라마",
      year: "1998",
      subtitle: "영어, 한국어",
      director: "피터 위어",
      actors: "짐 캐리, 로라 리니, 에드 해리스, 노아 엠머리히, 나타샤 맥켈혼",
      summary: `작은 섬에서 평범한 삶을 사는 30세 보험회사원 트루먼 버뱅크 아내와 홀어머니를 모시고 행복한 하루 하루를 보내던 어느 날, 하늘에서 조명이 떨어진다! 의아해하던 트루먼은 길을 걷다 죽은 아버지를 만나고 라디오 주파수를 맞추다 자신의 일거수일투족이 라디오에 생중계되는 기이한 일들을 연이어 겪게 된다. 지난 30년간 일상이라고 믿었던 모든 것들이 어딘가 수상하다고 느낀 트루먼은 모든 것이 ‘쇼’라는 말을 남기고 떠난 첫사랑 ‘실비아’를 찾아 피지 섬으로 떠나기로 결심한다. 가족, 친구, 회사… 하나부터 열까지 모든 것이 가짜인 ‘트루먼 쇼’ 과연 트루먼은 진짜 인생을 찾을 수 있을까?`
    },
    {
      id: 2,
      img: '/assets/slide2.jpeg',
      txt: '/assets/slide2_txt.png',
      video: '/assets/slide2_video.mp4',
      age: "15",
      title: "시카고 P.D",
      rating: "3.97",
      length: "1시간 55분",
      genre: "액션, 어드벤처, SF, 테크노 스릴러, 범죄, 느와르, 드라마, 하이스트",
      year: "2019",
      subtitle: "영어, 한국어",
      director: "롭 마샬",
      actors: "캐서린 제타 존스, 르네 젤위거, 리처드 기어, 리처드 기어, 리처드 기어",
      summary: `화려한 무대 위 스타가 되길 꿈꾸는 ‘록시’는 우발적인 살인으로 교도소에 수감된다. 그곳에서 만난 매혹적인 시카고 최고의 디바 ‘벨마’는 승률 100%의 변호사 ‘빌리’와 무죄 석방을 위한 계획을 짜고 있다. ‘빌리’는 법정을 하나의 무대로 탈바꿈시키는 쇼 비즈니스의 대가로, 자극적인 사건에 불나방처럼 모여드는 언론의 속성을 교묘하게 이용한다. ‘록시’ 또한 ‘빌리’의 흥미를 끌어 자신의 변호를 맡기게 되고, 평범한 가수 지망생에 불과했던 ‘록시’는 신문의 1면을 장식하며 일약 스타덤에 오르게 되는데…`
    },
    {
      id: 3,
      img: '/assets/slide4.jpeg',
      txt: '/assets/slide4_txt.png',
      video: '/assets/slide4_video.mp4',
      age: "15",
      title: "인서전트",
      rating: '4.22',
      length: "2시간 15분",
      genre: "액션, 어드벤처, SF, 테크노 스릴러, 하이스트",
      year: "2021",
      subtitle: "영어, 한국어",
      director: "로베르트 슈벤트케",
      actors: "쉐일리 우들리, 테오 제임스, 케이트 윈슬렛, 나오미 왓츠",
      summary: `지식’ 에러다이트, ‘용기’ 돈트리스, ‘평화’ 애머티, ‘정직’ 캔더, ‘이타심’ 애브니게이션. 다섯 개의 분파로 사람들을 구분해 통제하는 미래사회. 그러나 이 다섯 분파에 모두 속하는 동시에 또한 속하지 않는 ‘다이버전트’가 있었다. 이들 다이버전트들이 정부로부터 사회체제를 와해시킬 위험한 부류로 지목되면서 특별한 운명을 지닌 ‘트리스’(쉐일린 우들리) 역시 도망자의 신세가 된다. 최고 권력자 ‘제닌’(케이트 윈슬렛)의 음모였지만 자신 때문에 엄마와 아빠, 친구를 잃었다는 슬픔에서 분노로 가득한 트리스. 함께 도망친 연인 ‘포’(테오 제임스)와 정부의 정책에 반기를 들고 분파체제를 거부한 무분파들을 만나 반란군 ‘인서전트’를 조직해 전쟁을 시작한다. 한편, 제닌은 그들 세계의 비밀을 품고 있는 상자를 찾는다. 창시자들의 메시지가 담긴 이 상자는 특별한 다이버전트가 다섯 분파를 상징하는 다섯 가지 시뮬레이션 테스트를 통과해야만 열리고, 트리스는 모든 사람들을 위해 위험한 선택을 하는데… 마침내 밝혀지는 거대한 비밀! 자유를 위한 반란, 시스템을 파괴하라!`
    },
    {
      id: 4,
      img: '/assets/slide3.jpeg',
      txt: '/assets/slide3_txt.png',
      video: '/assets/slide3_video.mp4',
      age: "12",
      title: "네모바지 스폰지밥",
      rating: "4.14",
      length: "1시간 29분",
      genre: "키즈",
      year: "2023",
      subtitle: "영어, 한국어",
      director: "팀 힐",
      actors: "톤 캐니, 크롤시 브라운, 빌 스카스가드, 로렌스 피시번, 로저 뱀패스",
      summary: `우리 핑핑이가 어디로 갔을까? 설마, 납치당한 건가? 사랑하는 반려 달팽이를 찾아 떠나는 스폰지밥. 뚱이도 함께 가야지. 비키니 시티를 벗어나 미지의 세계로, 출발이다!`
    },
  ];

  const section1Movies = moviesData.slice(0, 18);
  const section2Movies = moviesData.slice(15, 33);
  const section3Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numA - numB; // 오름차순 
  });;
  const section4Movies = moviesData.slice(31, 49);
  const section5Movies = moviesData.slice(18, 36);
  const section6Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numB - numA; // 내림차순 
  });
  const section7Movies = moviesData.slice(36, 54);
  const section8Movies = moviesData.slice(6, 24);

  const sliderTitle1 = '회원님을 위한 콘텐츠';
  const sliderTitle2 = '팬들을 사로잡은 콘텐츠';
  const sliderTitle3 = '이번주 인기 시리즈 TOP 10';
  const sliderTitle4 = 'Go n Play에 새로 올라온 콘텐츠';
  const sliderTitle5 = '인생을 담은 영화';
  const sliderTitle6 = '이번주 인기 영화 TOP 10';
  const sliderTitle7 = '가볍게 보기 좋은 시리즈, 영화';
  const sliderTitle8 = '회원님을 위한 오늘의 콘텐츠';

  const totalSlides = 4;

  return (
    <div className="home component">
      <Slider mainSlides={mainSlides} totalSlides={totalSlides} />
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
        <ThumbnailSliderVertical
          sliderTitle={sliderTitle3}
          selectedMovies={section3Movies}
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

export default Home;
