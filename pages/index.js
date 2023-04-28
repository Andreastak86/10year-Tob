import Image from "next/image";
import { Inter } from "next/font/google";
import Countdown from "../components/timer";
import Zelda from "../images/zelda.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className=' flex flex-col items-center mx-auto gap-4 my-4 px-4'>
            <h1 className=' text-[25px] text-center'>
                Gratulerer med 10-års dagen Tobias
            </h1>
            <h3>Nå er det bare:</h3>
            <div className=' text-white font-extrabold text-[40px] text-center'>
                <Countdown />
            </div>
            <h3 className='text-[24px]'>Til du kan spille Zelda</h3>
            <p>Spillet får du i bursdagsgave av mamma og pappa</p>
            <Image src={Zelda} alt='Bilde av nye Zelda' width={320} />
            <h3>Den første traileren</h3>
            <iframe
                width='320'
                height='210'
                src='https://www.youtube.com/embed/2SNF4M_v7wc'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
            ></iframe>

            <h3>Trailer nr. 2</h3>
            <iframe
                width='320'
                height='210'
                src='https://www.youtube.com/embed/fYZuiFDQwQw'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
            ></iframe>

            <h3>Trailer nr. 3</h3>
            <iframe
                width='320'
                height='210'
                src='https://www.youtube.com/embed/uHGShqcAHlQ'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
            ></iframe>
        </main>
    );
}
