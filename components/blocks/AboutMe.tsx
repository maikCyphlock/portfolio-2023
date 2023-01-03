import SectionGrid from "../SectionGrid";
import Link from "next/link";
import { GitHubIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from '../icons/index'
import SectionImg from "../SectionImg";
import MyImage from '../images/blop.png'
import Experience from "./Experience";


const Profile = {
    title: "Acerca de mí ",
    content:
        "Hola me llamo Henry, soy desarrollador web full stack con experiencia en JavaScript. Si quieres conocer un poco de mis proyectos en la siguiente sección te muestro algunos, aunque te dejo el enlace a mi perfil de GitHub. Si quieres trabajar conmigo al final de la página he dejado un formulario de contacto.",
    urlImage:
        MyImage,
    urlButton: "https://google.com",
    buttonTitle: "Ver página",
}
    ;

export const About = () => {
    return (
        <section id="about">

            <SectionGrid >
                <div className="gap-8 m-5 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold">{Profile.title}</h1>
                    <p className="text-justify text-gray-700 dark:text-gray-300">{Profile.content}</p>
                    <div className="flex gap-4 justify-center md:justify-end">
                        <Link target='_blank' aria-label="GitHub profile" href={"https://github.com/maikCyphlock"}> <GitHubIcon /></Link>
                        <Link target='_blank' aria-label="facebook profile" href={"https://www.facebook.com/profile.php?id=100009187002467"}>
                            <FacebookIcon />
                        </Link>
                        <Link target='_blank' aria-label="instagram profile" href={"https://www.instagram.com/__maikol_aguilar__/"}>
                            <InstagramIcon />
                        </Link>
                        <Link target='_blank' aria-label="linkedin profile" href={"https://www.linkedin.com/in/maikol-aguilar/"}>
                            <LinkedinIcon />
                        </Link>



                    </div>
                </div>

                <SectionImg title="maikol aguilar" width={400} ratio="square" urlImg={Profile.urlImage} />
            </SectionGrid>

            <Experience />

        </section>
    );
};





export default About
