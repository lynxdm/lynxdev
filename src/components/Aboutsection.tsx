import Image from "next/image";
import aboutImage from "../assets/images/about-image.jpg";

const Aboutsection = () => {
  return (
    <section className='px-24 my-[10rem]'>
      <div className='[&_h2]:text-[26vw] w-fit max-w-[100vw] mx-auto [&_h2]:leading-[0] flex items-center [&_h2]:tracking-tight [&_h2]:uppercase'>
        <h2 className='font-bebas_neue'>Hell</h2>
        <Image
          src={aboutImage}
          alt="Ayobami's Image"
          placeholder='blur'
          className='size-[340px] rounded-full'
        />
        <h2 className='font-bebas_neue'>ooo</h2>
      </div>
      <div className='mt-24 w-full flex justify-between'>
        <div className='w-[40%] font-commissioner px-4'>
          <p className='text-secondary text-lg '>
            <span className='text-primary inline-block mr-2 text-sm tracking-wide font-[500]'>
              ABOUT
            </span>
            I&#39;m Ayobami Ajayi, a creative Front-end Developer based in
            Lagos, Nigeria.
          </p>
          <p className='text-secondary text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            blanditiis omnis nihil quae possimus similique ipsam, quam ullam
            est, eligendi quas distinctio odio. Voluptatibus asperiores earum a
            fugit nesciunt.
          </p>
        </div>
        <div className='w-fit'>
          <h3 className='text-sm tracking-wide font-[500] uppercase mb-3'>
            Technologies I&#39;ve worked with
          </h3>
          <ul className='text-secondary text-lg flex flex-col *:border-b-2 *:py-4 *:font-bebas_neue *:text-2xl *:tracking-wide *:border-primary *:*: *:grid *:items-center'>
            <li className='border-t-2'>
              <p>
                <span className='font-bebas_neue text-2xl text-primary tracking-wide'>
                  LANGUAGES:
                </span>{" "}
                JAVASCRIPT, TYPESCRIPT
              </p>
            </li>
            <li>
              <p>
                <span className='font-bebas_neue text-2xl text-primary tracking-wide'>
                  FRAMEWORKS/LIBRARIES:
                </span>{" "}
                REACT.JS/NEXT.JS, REDUX, FIREBASE
              </p>
            </li>
            <li>
              <p>
                <span className='font-bebas_neue text-2xl text-primary tracking-wide'>
                  STYLING:
                </span>{" "}
                TAILWIND CSS, SASS
              </p>
            </li>
            <li>
              <p>
                <span className='font-bebas_neue text-2xl text-primary tracking-wide'>
                  ANIMATION:
                </span>{" "}
                FRAMER MOTION, GSAP
              </p>
            </li>
            <li>
              <p>
                <span className='font-bebas_neue text-2xl text-primary tracking-wide'>
                  VERSION CONTROL:
                </span>{" "}
                GIT, GITHUB
              </p>
            </li>
          </ul>
        </div>
      </div>
      <button className='font-bebas_neue text-3xl underline underline-offset-2 mt-20 ml-auto block text-secondary'>
        DOWNLOAD RESUME
      </button>
    </section>
  );
};
export default Aboutsection;
