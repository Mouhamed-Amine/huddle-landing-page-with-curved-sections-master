'use client';

import style from '../styles/style.module.css';

export default function Community() {
    return (
        <>
            <section className="flex flex-col items-center px-4 lg:px-0 mb-10">
                <div className="w-full max-w-4xl">
                    <img src="/images/screen-mockups.svg" alt="screen-mockup" className="w-full object-cover" />
                </div>
                
                <div className="w-full flex flex-col md:flex-row justify-evenly items-center my-12 md:my-28 space-y-10 md:space-y-0">
                    <div className="text-center">
                        <img src="/images/icon-communities.svg" alt="icon_comm" className="w-12 h-12 mx-auto mb-3" />
                        <h4 className={`${style.family_headline} text-4xl md:text-5xl lg:text-6xl font-bold`}>1.4k+</h4>
                        <span className={`${style.family_p} text-base md:text-lg font-light`}>Communities Formed</span>
                    </div>
                    
                    <div className="text-center">
                        <img src="/images/icon-messages.svg" alt="icon_mess" className="w-12 h-12 mx-auto mb-3" />
                        <h4 className={`${style.family_headline} text-4xl md:text-5xl lg:text-6xl font-bold`}>2.7m+</h4>
                        <span className={`${style.family_p} text-base md:text-lg font-light`}>Messages Sent</span>
                    </div>
                </div>
            </section>


            <section className="relative bg-lightBlue mb-10 flex flex-col lg:flex-row justify-center items-center mt-16 py-32 px-5 space-y-10 lg:space-y-0">
    {/* Wavy Top Background */}
   
    <img src="/images/bg-section-top-desktop-1.svg" alt="top-wave" className="absolute inset-x-0 top-0 bg-white h-25 w-full object-cover" />

    {/* Content */}
    <div className="lg:w-1/2 text-center lg:text-left z-10 mt-10"> {/* Add margin to prevent overlap */}
        <h3 className={`${style.family_headline} text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>Grow Together</h3>
        <p className={`${style.family_p} text-sm md:text-base lg:text-lg w-full lg:w-4/5`}>
            Generate meaningful discussions with your audience and build a strong, loyal community.
            Think of the insightful conversations you miss out on with a feedback form.
        </p>
    </div>
    <img src="/images/illustration-grow-together.svg" className="w-3/4 lg:w-1/4 z-10" alt="illustration-grow-together" /> 
    <img src="/images/bg-section-bottom-desktop-1.svg" alt="top-wave" className="absolute inset-x-0 bottom-0 bg-white h-25 w-full object-cover" />
</section>



            <section className={`mb-10 flex flex-col lg:flex-row justify-center items-center mt-16 px-5 space-y-10 lg:space-y-0`}>

            <img src="/images/illustration-flowing-conversation.svg" className="w-3/4 lg:w-1/4" alt="illustration-grow-together" />
                <div className="lg:w-1/2 text-center lg:text-right lg:ml-10">
                    <h3 className={`${style.family_headline} text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>Flowing Conversations</h3>
                    <p className={`${style.family_p} text-sm md:text-base lg:text-lg w-full lg:w-4/5`}>
                    You wouldn&apos;t paginate a conversation in real life, so why do it online? Our threads have 
                    just-in-time loading for a more natural flow.
                    </p>
                </div>
            </section>

            <section className={`relative bg-lightBlue flex flex-col lg:flex-row justify-center items-center mt-16 py-32 px-5 space-y-10 lg:space-y-0 mb-16 md:mb-32`}>
                <img src="/images/bg-section-top-desktop-1.svg" alt="top-wave" className="absolute inset-x-0 top-0 bg-white h-15 w-full object-cover" />
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className={`${style.family_headline} text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>Your Users</h3>
                    <p className={`${style.family_p} text-sm md:text-base lg:text-lg w-full lg:w-4/5`}>
                    It takes no time at all to integrate Huddle with your app&apos;s authentication solution. This means, 
                    once signed in to your app, your users can start chatting immediately.
                    </p>
                </div>
                <img src="/images/illustration-your-users.svg" className="w-3/4 lg:w-1/4 z-10" alt="illustration-grow-together" />

                
                <img src="/images/bg-section-bottom-desktop-1.svg" alt="top-wave" className="absolute inset-x-0 bottom-0 bg-white h-15 w-full object-cover" />

            </section>
        </>
    );
}

