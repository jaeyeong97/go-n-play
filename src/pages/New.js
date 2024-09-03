import Slider from '../components/Slider';
import ThumbnailSlider from '../components/ThumbnailSlider';
import ThumbnailSliderVertical from '../components/ThumbnailSliderVertical';
import Footer from '../components/Footer';

const New = ({ moviesData }) => {

  const mainSlides = [
    {
      id: 1,
      img: '/assets/slide15.png',
      txt: '/assets/slide15_txt.png',
      video: '/assets/slide1_video.mp4',
      age: "12",
      title: "스파이더맨: 노 웨이 홈 퍼 버전(자막)",
      rating: "4.34",
      length: "2시간 37분",
      genre: "액션, 어드벤처, SF, 테크노 스릴러, 범죄, 느와르, 드라마",
      year: "2022",
      subtitle: "영어, 한국어",
      director: "존 왓츠",
      actors: "톰 홀랜드, 젠데이아 콜먼, 베네딕트 컴버배치, 제이콥 배덜런, 존 파브로",
      summary: `약 11분 분량의 새로운 장면이 추가 스파이더맨: 노 웨이 홈 펀 버전. 스파이더맨 영화 역사상 처음으로 우리의 친근한 이웃 스파이더맨의 정체가 공개되고, 그의 영웅으로서의 책임감은 평범한 삶과 충돌하게 되면서, 그가 아끼는 사람들이 하나둘씩 위험에 빠지게 된다.`,
      price: 8000
    },
    {
      id: 2,
      img: '/assets/slide16.png',
      txt: '/assets/slide16_txt.png',
      video: '/assets/slide2_video.mp4',
      age: "All",
      title: "스파이더맨: 어크로스 더 유니버스(자막)",
      rating: "4.08",
      length: "2시간 20분",
      genre: "액션, 어드벤처, SF, 테크노 스릴러, 범죄, 느와르, 드라마",
      year: "2021",
      subtitle: "영어, 한국어",
      director: "호아킴 도스 산토스, 켐프 파워스, 저스틴 K. 톰슨",
      actors: "샤메익 무어, 헤일리 스테인펠드, 브라이언 타이리 헨리",
      summary: `성장통을 겪으며 새로운 스파이더맨이 된 마일스 모랄레스. 그 앞에 다른 평행세계의 스파이더우먼 그웬이 다시 나타난다. 모든 차원의 스파이더맨들을 마주한 그 때, 멀티버스와 질서에 대한 신념이 부딪히며 예상치 못한 균열이 생긴다. 상상 그 이상을 넘어서는 멀티버스의 세계가 열린다. 본 영화는 감광성 뇌전증에 영향을 끼칠 수 있는 불빛이 등장하므로, 관련 질환자는 시청에 주의가 필요합니다.`,
      price: 6500
    },
    {
      id: 3,
      img: '/assets/slide17.png',
      txt: '/assets/slide17_txt.png',
      video: '/assets/slide3_video.mp4',
      age: "19",
      title: "데드풀",
      rating: '4.68',
      length: "1시간 48분",
      genre: "액션, 어드벤처, SF, 테크노 스릴러",
      year: "2021",
      subtitle: "영어, 한국어",
      director: "팀 밀러",
      actors: "라이언 레이놀즈, 모레나 바카린, 에드 스크레인, T.J. 밀러",
      summary: `전직 특수부대 출신의 용병 웨이드 윌슨은 암 치료를 위한 비밀 실험에 참여 후, 강력한 힐링팩터를 지닌 슈퍼히어로 데드풀로 거듭난다. 탁월한 무술실력과 거침없는 유머감각을 지녔지만 흉측하게 일그러진 얼굴을 갖게 된 데드풀. 그는 자신의 삶을 완전히 망가뜨린 놈들을 찾아 뒤쫓기 시작한다.`,
      price: 4500
    },
  ];

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
    <div className="new component">
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
        <ThumbnailSlider
          sliderTitle={sliderTitle4}
          selectedMovies={section4Movies}
        />
        <section className='section'>
          <ThumbnailSliderVertical
            sliderTitle={sliderTitle3}
            selectedMovies={section3Movies}
          />
        </section>
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

export default New;
