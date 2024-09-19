import { useRecoilValue } from 'recoil';
import { moviesState } from '../recoil/moviesState';
import Slider from '../components/Slider';
import ThumbnailSlider from '../components/ThumbnailSlider';
import ThumbnailSliderVertical from '../components/ThumbnailSliderVertical';
import Footer from '../components/Footer';

const Series = () => {

  const mainSlides = [
    {
      id: 1,
      img: '/assets/slide5.png',
      txt: '/assets/slide5_txt.png',
      video: '/assets/slide7_video.mp4',
      age: "15",
      title: "태어난 김에 세계일주",
      rating: "4.91",
      length: "시즌 3개",
      genre: "음식 & 여행 시리즈, 리얼리티 시리즈, 라이프스타일",
      year: "2023",
      subtitle: "영어, 한국어",
      director: "김지우",
      actors: "기안84, 빠니보틀, 덱스, 이시언, 장도연, 쌈디, 이승훈, 송민호",
      summary: `10년간 패턴화된 일상 속에서 쉼 없이 달려온 기안84. 번아웃과 매너리즘에 빠져 타성에 젖은 자신을 발견하고 진짜 ‘나 자신’을 찾기 위해 기안답게 선택한 방법. 태어난 김에 지구 반대편으로 떠나자! 비행기에서 내리는 순간부터 한 치 앞도 예상할 수 없는 대환장 여행기.`
    },
    {
      id: 2,
      img: '/assets/slide6.png',
      txt: '/assets/slide6_txt.png',
      video: '/assets/slide11_video.mp4',
      age: "15",
      title: "새벽 2시의 신데렐라",
      rating: "4.15",
      length: "리미티드 시리즈",
      genre: "드라마, 한국드라마",
      year: "2022",
      subtitle: "영어, 한국어",
      director: "서민정, 배희영",
      actors: "신현빈, 문상민, 윤박, 박소진",
      summary: `[매주 토∙일 오후 9시 공개] 완벽한 재벌남과 헤어지기로 결심한 극 현실주의 능력녀의 고군분투를 그린 오피스 로맨틱 코미디`
    },
    {
      id: 3,
      img: '/assets/slide7.png',
      txt: '/assets/slide7_txt.png',
      video: '/assets/slide12_video.mp4',
      age: "15",
      title: "쌈, 마이웨이",
      rating: '4.23',
      length: "시즌 16화",
      genre: "드라마, 한국드라마, 시리즈",
      year: "2020",
      subtitle: "영어, 한국어",
      director: "이나정, 김동휘",
      actors: "박서준, 김지원, 안재홍, 송하윤",
      summary: `세상이 보기엔 부족한 스펙 때문에 마이너 인생을 강요하는 현실 속에서도, 남들이 뭐라던 '마이웨이'를 가려는 마이너리그 청춘들의 골 때리는 성장로맨스`
    },
  ];

  const moviesData = useRecoilValue(moviesState);

  const section1Movies = moviesData.slice(7, 25);
  const section2Movies = moviesData.slice(26, 44);
  const section3Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numA - numB; // 오름차순 
  });;
  const section4Movies = moviesData.slice(36, 54);
  const section5Movies = moviesData.slice(1, 19);
  const section6Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numB - numA; // 내림차순 
  });
  const section7Movies = moviesData.slice(12, 30);
  const section8Movies = moviesData.slice(31, 49);

  const sliderTitle1 = '한국 시리즈';
  const sliderTitle2 = '찬사를 받은 미국 시리즈';
  const sliderTitle3 = '대한민국 시리즈 TOP 10';
  const sliderTitle4 = 'Go n Play에 새로 올라온 콘텐츠';
  const sliderTitle5 = '인생을 담은 시리즈';
  const sliderTitle6 = '이번주 인기 시리즈 TOP 10';
  const sliderTitle7 = '가볍게 보기 좋은 시리즈';
  const sliderTitle8 = '회원님을 위한 오늘의 콘텐츠';

  const totalSlides = 3;

  return (
    <div className="series component">
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

export default Series;
