import Image from "next/image";
import profileImage from "../assets/images/profile pic.jpg";

export default function Home() {
  return (
    <main className=''>
      <section className='h-[100vh] relative grid items-center'>
        <nav className='flex w-full justify-between items-center p-8 absolute top-0'>
          <div className='w-1/3 flex justify-between items-center'>
            <p className='uppercase  font-bebas_neue text-2xl text-secondary'>lynxdev</p>
              <p className='font-semibold text-secondary'>LAGOS, NG, 10:26 PM</p>
          </div>
          <ul className='font-semibold text-secondary flex gap-6'>
            <li>ABOUT</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className='font-bebas_neue [&_h2]:leading-[0.9] px-8'>
          {/* <h2 className='font-bilbo_swash_caps ml-[10%]'>Creative</h2> */}
          <h2 className='text-[15.7vw] tracking-tighter text-secondary text-nowrap'>
            Front-end Developer
          </h2>
          {/* <h2 className=''>Developer.</h2> */}
        </div>
        <p className="font-bebas_neue text-4xl bottom-8 absolute right-20 underline underline-offset-2">scroll down</p>
      </section>
    </main>
  );
}
