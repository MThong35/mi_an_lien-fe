import React from "react";
import Image1 from "../../assets/ComicPoster/1.jpg";
import Image2 from "../../assets/ComicPoster/2.jpg";
import Image3 from "../../assets/ComicPoster/3.jpg";
import Image4 from "../../assets/ComicPoster/4.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Spiderman",
        description: 
        "Spiderman is a fictional superhero created by writer Stan Lee and artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
    },
    {
        id: 2,
        image: Image2,
        title: "Batman",
        description: 
        "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger.",
    },
    {
        id: 3,
        image: Image3,
        title: "Superman",
        description: 
        "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in the comic book Action Comics #1.",
    },
    {
        id: 4,
        image: Image4,
        title: "Omen",
        description:
        "Scattered across the galaxy, the team of the Omen must find their way back to each other to fight the evil that threatens the universe.",
    },
];

const Slide = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,  
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px]
        sm:min-h-[650px] bg-gray-100 flex justify-center
        items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* Background pattern */}
            <div className="h-[700px] w-[700px] bg-primary/80
            absolute -top-1/2 right-0 rounded-3xl rotate-45
            -z-9">
            </div>
            {/* Slide section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data)=>(
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* Text content section */}
                            <div
                            className="flex flex-col justify-center gap-4
                            pt-12 sm:pt-0 text-center sm:text-left
                            order-2 sm:order-1 relative z-10">
                                <h1
                                className="text-5xl sm:text-6xl lg-text-7xl font-bold"
                                >{data.title}</h1>
                                <p
                                className="text-sm"
                                >{data.description}</p>
                                <div>
                                    <button
                                    className="bg-gradient-to-r from-primary to-secondary
                                    hover:scale-105 duration-200 text-white px-4 py-2 rounded-full"
                                    >Read now</button>
                                </div>
                            </div>
                            {/* Image section */}
                            <div
                            className="order-1 sm:order-2">
                                <div
                                className="relative z-10">
                                    <img src={data.image} alt="" 
                                    className="w-[300px] h-[300px]
                                    sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;