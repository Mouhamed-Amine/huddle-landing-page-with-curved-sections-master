'use client'
import style from "../styles/style.module.css";

export default function Footer() {
    return (
        <>
 <section className="flex flex-col justify-center items-center mb-28">
    <h1 className={`${style.family_headline} text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mb-6 sm:mb-8 md:mb-10`} >Ready to Build Your Community?</h1>
    <a href="#" className={`${style.btn_p} w-3/6 sm:w-3/4 md:w-1/2 lg:w-1/6 px-8 py-2 sm:px-8 sm:py-3 rounded-3xl text-center text-sm sm:text-base md:text-md font-semibold`}>
    Get Started For Free
  </a>
 </section>

 <footer className="relative bg-slate-800 text-white w-full flex flex-col md:flex-row justify-evenly items-start py-16 md:py-28">
    {/* Wave Background */}
    <img src="/images/bg-section-bottom-desktop-1.svg" alt="footer-wave" className="absolute inset-x-0 top-0 w-full h-15 object-cover" />

    {/* Left Section */}
    <div className="left-footer w-full md:w-1/3 px-4 mt-28">
        <img src="/images/logo.svg" alt="logo_huddle" className="w-60 bg-white rounded-full p-2 sm:w-20 md:w-24 lg:w-1/3 cursor-pointer mb-4" />
        <p className={`${style.family_p} text-md md:text-lg mb-5`}>
        Huddle is a platform designed to bring people together by providing easy and efficient ways to communicate and collaborate. With tools that enhance productivity, we help businesses and communities thrive by connecting members, sharing insights, and fostering growth.
        </p>
        <div className="space-y-2">
            <span className="flex items-center space-x-2">
                <img src="/images/icon-phone.svg" alt="icon-phone" />
                <span>Phone: +1-543-123-4567</span>
            </span>
            <span className="flex items-center space-x-2">
                <img src="/images/icon-email.svg" alt="icon-email" />
                <span>example@huddle.com</span>
            </span>
        </div>
        
    </div>

    {/* Right Section */}
    <div className="right-footer w-full md:w-1/4 px-4 mt-28">
        <h2 className={`${style.family_headline} text-md sm:text-xl md:text-xl lg:text-2xl mb-5`}>Newsletter</h2>
        <p className={`${style.family_p} mb-5`} >
            To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address.
        </p>
        <div className="flex items-center space-x-2">
            <input
                type="email"
                placeholder="Email address"
                className="p-2 rounded text-gray-800 w-full"
            />
            <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded font-bold hover:bg-pink-600">
                Subscribe
            </a>
        </div>
    </div>
</footer>


     </>
    );
}
