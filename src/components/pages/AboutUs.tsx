import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImg from '../../assets/about/first.png'
import img1 from '../../assets/about/about1.png'
import img2 from '../../assets/about/about2.png'
import img3 from '../../assets/about/about3.png'
import img4 from '../../assets/about/about4.png'
import good from '../../assets/about/good.png'
import cup from '../../assets/about/cup.png'
import handshake from '../../assets/about/handshake.png'
import person from '../../assets/about/person.png'
import ContactForm from '../ContactForm'


const AboutUs = () => {
  const cardData = [

    {
      image: img1,
      name: "Won Cee",

    },
    {
      image: img2,
      name: "Jenny Wilson",

    },
    {
      image: img3,
      name: "Eleanor Pena",

    },
    {
      image: img4,
      name: "Robert Fox",

    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div >
      <div className="relative z-10 text-center mb-8 about_hero_img px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          About Maxtron.ai.
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Our Mission, Vision, and Values.
        </p>
      </div>

      <div
        className="relative container mx-auto p-0 md:p-8"
      >
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <div

          className={`relative z-10 flex flex-col md:flex-row items-center mb-8 rounded-lg `}
        >

          <div className="w-full md:w-1/2 p-4">
            <img
              src={firstImg}
              alt={"firstImg"}
              className="rounded-lg w-full"
            />
          </div>


          <div className={`w-full md:w-1/2 p-4 `}>
            <h2 className="text-2xl font-bold mb-2">Brief Dummy</h2>
            <p className="text-gray-700 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Soluta fugit voluptas autem perferendis cupiditate. Amet et labore harum doloremque inventore
              excepturi molestiae, commodi dolorum possimus blanditiis nobis rem magnam tempora cum. Beatae,
              aperiam deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt enim modi
              placeat debitis. Officia ea ex in laboriosam harum, beatae obcaecati iusto. Aut reiciendis quisquam
              ostrum nemo quibusdam quos magnam modi vel porro, nesciunt distinctio fugit nihil unde officia
              mollitia debitis minus assumenda? Dolore aperiam, voluptate illum iure alias adipisci velit
              sunt blanditiis? Sunt, provident?</p>

          </div>

        </div>
      </div>


      <h3 className="text-2xl font-extrabold text-center">Meet our Team</h3>


      <div className="container m-auto py-12 px-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="p-4">
              <div className="text-center">
                <img src={card.image} alt={card.name} className="w-full h-auto mb-4 rounded-lg max-h-[425px]" />
                <h3 className="text-2xl font-bold">{card.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='bg-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 p-8 mt-8 py-14'>
        <div className=" rounded-sm p-4  m-4 md:m-0 text-center border-2 border-black">
          <img src={good} alt="img1" className="mx-auto my-4 w-auto h-20" />
          <h3 className="text-xl font-bold mb-2">PROVEN TRACK RECORD</h3>
          <p className="text-gray-700">Our deep-tech, product, software development, marketing teams have successfully brought 50+ projects to life.</p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <img src={handshake} alt="img2" className="mx-auto my-4 w-auto h-20" />
          <h3 className="text-xl font-bold mb-2">BUSINESS MINDSET</h3>
          <p className="text-gray-700">As ex-startup founders with a corporate background, we have experienced many of the struggles on both sides. We know there is more to a successful product than technology, so we will always look at your product from a business standpoint.</p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <img src={cup} alt="img3" className="mx-auto my-4 w-auto h-20" />
          <h3 className="text-xl font-bold mb-2">TOP TALENT</h3>
          <p className="text-gray-700">We work with the best and brightest in tech talent to ensure you get high-quality tech architecture.</p>
        </div>
        <div className=" rounded-sm p-4 m-4 md:m-0 text-center border-2 border-black">
          <img src={person} alt="img4" className="mx-auto my-4 w-auto h-20" />
          <h3 className="text-xl font-bold mb-2">USER-CENTRIC APPROACH</h3>
          <p className="text-gray-700">We value your end-user above specifications. We take the time to understand your client's needs and desires. The result is a product they will actually use.</p>
        </div>
      </div>


      <ContactForm />
    </div>
  )
}

export default AboutUs