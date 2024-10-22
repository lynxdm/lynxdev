import Aboutsection from "@/components/Aboutsection";

export default function Home() {
  return (
    <main className=''>
      <section className='h-[100vh] relative grid place-items-center'>
        <nav className='flex w-full justify-between items-center p-8 absolute top-0'>
          <div className='w-1/3 flex justify-between items-center'>
            <p className='uppercase text-lg font-semibold'>lynxdev</p>
              <p className='text-primary font-semibold'>LAGOS, NG, 10<span className="font-commissioner animate-pulse text-[#899]">:</span>26 PM</p>
          </div>
          <ul className='font-semibold text-secondary flex gap-6'>
            <li>ABOUT</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className='font-bebas_neue [&_h2]:leading-[0.9]'>
          <h2 className='text-[15.7vw] tracking-tighter text-secondary uppercase text-nowrap'>
            Front-end Developer
          </h2>
        </div>
        <p className="font-bebas_neue text-4xl bottom-8 absolute right-20 underline underline-offset-2 uppercase">scroll down</p>
      </section>
      <Aboutsection/>
    </main>
  );
}
