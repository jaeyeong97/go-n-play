import { useRecoilValue } from 'recoil';
import { moviesState } from '../recoil/moviesState';
import Slider from '../components/Slider';
import ThumbnailSlider from '../components/ThumbnailSlider';
import ThumbnailSliderVertical from '../components/ThumbnailSliderVertical';
import Footer from '../components/Footer';

const Kids = () => {

  const mainSlides = [
    {
      id: 1,
      img: '/assets/slide8.webp',
      txt: '/assets/slide8_txt.webp',
      video: '/assets/slide5_video.mp4',
      age: "All",
      title: "드레곤 길들이기: 버크의 수호자",
      rating: "4.84",
      length: "1시간 55분",
      genre: "키즈",
      year: "2023",
      subtitle: "영어, 한국어",
      director: "피터 위어",
      actors: "짐 캐리, 로라 리니, 에드 해리스, 노아 엠머리히, 나타샤 맥켈혼",
      summary: `히컵과 투슬리스, 그리고 드래곤 라이더들은 버크의 수호자라는 새로운 임무를 맡으면서 새로운 모험이 펼쳐진다. 더이상 초보 드래곤 라이더가 아닌 아이들은 무서운 플라이트메어, 열광적인 스크릴, 무례한 스피드 스팅어스와 같은 드래곤을 대적하며 새로운 도전을 시작한다.`
    },
    {
      id: 2,
      img: '/assets/slide9.webp',
      txt: '/assets/slide9_txt.webp',
      video: '/assets/slide6_video.mp4',
      age: "7",
      title: "소피루비",
      rating: "4.49",
      length: "1시간 37분",
      genre: "키즈",
      year: "2022",
      subtitle: "영어, 한국어",
      director: "추광호",
      actors: "김영선",
      summary: `마법의 스케치북에 갇힌 꼬마 왕자에게 걸린 저주를 풀기 위해 다양한 직업으로 변신, 미션을 수행하며 성장해 나가는 루비와 친구들의 이야기.`
    },
    {
      id: 3,
      img: '/assets/slide10.webp',
      txt: '/assets/slide10_txt.webp',
      video: '/assets/slide7_video.mp4',
      age: "All",
      title: "마음이2",
      rating: '4.02',
      length: "1시간 43분",
      genre: "키즈, 드라마",
      year: "2023",
      subtitle: "영어, 한국어",
      director: "이정철",
      actors: "성동일, 김정태",
      summary: `돌아가시기 전 아버지가 동욱에게 마지막 선물로 남겨준 강아지 마음이. 어머니의 반대에도 불구하고 마음이를 헌신적으로 돌본 동욱 덕분에, 마음이는 어느덧 무럭무럭 자라 세 마리의 강아지를 낳는다. 그중, 유난히 약한 몸으로 태어난 막내 장군이에게 동욱은 엄청난 관심과 사랑을 쏟는다. 그런데 어느 날, 보석 탈취범 필브라더스가 범죄에 이용하기 위해 막내 장군이를 납치한다. 마음이는 장군이를 구하기 위해 필브라더스를 뒤쫓게 되는데, 과연 장군이는 마음이의 품으로 돌아올 수 있을까.`
    },
  ];

  const moviesData = useRecoilValue(moviesState);

  const section1Movies = moviesData.slice(33, 51);
  const section2Movies = moviesData.slice(5, 23);
  const section3Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numA - numB; // 오름차순 
  });;
  const section4Movies = moviesData.slice(24, 42);
  const section5Movies = moviesData.slice(0, 18);
  const section6Movies = moviesData.filter(movie => movie.imgVertical).sort((a, b) => {
    // 순서대로 나열
    const numA = parseInt(a.imgVertical.match(/\d+/)); // 숫자 추출
    const numB = parseInt(b.imgVertical.match(/\d+/));
    return numB - numA; // 내림차순 
  });
  const section7Movies = moviesData.slice(43, 51);
  const section8Movies = moviesData.slice(11, 29);

  const sliderTitle1 = '신나는 새 학기';
  const sliderTitle2 = '자유롭게 변하는 변신 로봇';
  const sliderTitle3 = '이번주 TOP 10';
  const sliderTitle4 = '새로운 콘텐츠가 왔어요';
  const sliderTitle5 = '한번 틀면 계속 보게 돼요';
  const sliderTitle6 = '9월 키즈 TOP 10';
  const sliderTitle7 = '어깨가 들썩이는 동요와 율동';
  const sliderTitle8 = '자동차와 비행기';

  const totalSlides = 3;

  return (
    <div className="kids component">
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

export default Kids;
