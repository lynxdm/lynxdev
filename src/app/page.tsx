import Image from "next/image";
import profileImage from "../assets/images/profile pic.jpg";

export default function Home() {
  return (
    <main className='px-12'>
      <section className=' grid place-items-center relative h-[100vh]'>
        <h2 className='font-bebas_neue text-[10rem] text-secondary text-center -mt-[40%]'>
          LYNXDEV
        </h2>
        <Image
          alt='A picture of Ayobami'
          src={profileImage}
          className='
          absolute size-[550px] -z-10 left-1/2 -translate-x-1/2 brightness-[60%] shadow-2xl shadow-[#111]'
        />
        <div className=' overflow-hidden absolute bottom-0 left-0 w-full'>
          <div className=' max-w-max '>
            <h2 className='font-bebas_neue text-[300px] text-nowrap text-center leading-none text-secondary'>
              FRONT-END DEVELOPER
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
