'use client'
import style from "../styles/style.module.css";

export default function Navbar() {
    return (
        <>
        <header className="w-full bg-white py-4">
            <nav className="container mx-auto flex justify-between items-center px-2 py-5">
                <div>
                    <img src="/images/logo.svg" alt="logo_huddle" className=" w-32 sm:w-20 md:w-24 lg:w-full cursor-pointer" />
                </div>
                <div>
                    <a href="#" aria-label="Try For Free" className={`${style.btn} px-8 py-2 rounded-3xl shadow-custom-pink text-sm sm:text-base md:text-lg lg:text-xl`}>Try it free</a>
                </div>
            </nav>
        </header>
        
        <section className="px-6 sm:px-10 py-20 md:py-36 mx-auto flex flex-col justify-center items-center text-center">
  <h1 className={`${style.family_headline} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 md:mb-10`}>
    Build The Community Your Fans Will Love
  </h1>
  <p className={`${style.family_p} w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-6 sm:mb-8 md:mb-10`}>
    Huddle re-imagines the way we build communities. You have a voice, but so does 
    your audience. Create connections with your users as you engage in genuine discussion.
  </p>
  <a href="#" className={`${style.btn_p} w-4/6 sm:w-3/4 md:w-1/2 lg:w-1/4 px-8 py-2 sm:px-8 sm:py-3 rounded-3xl text-sm sm:text-base md:text-lg`}>
    Get Started For Free
  </a>
</section>

     </>
    );
}
