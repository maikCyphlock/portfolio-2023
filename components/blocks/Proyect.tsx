import SectionGrid from "../SectionGrid";
import React from "react"
import SectionCard from "../SectionCard";
import SectionImg from "../SectionImg";

const Proyects = [
    {
        title: "Página de fvf en portuguesa",
        content:
            "Comisión de árbitros del estado portuguesa",
        urlImage:
            "https://user-images.githubusercontent.com/66704744/210019890-8efab362-b4ce-4100-9619-6d1c2cc328ec.png",
        urlButton: "https://arbitrajeportuguesa.vercel.app/",
        buttonTitle: "Ver página",
        githubUrl: "https://github.com/maikCyphlock/website-vfv"
    },
    {
        title: "Clon de minecraft",
        content:
            "un pequeño clon de minecraft construido con react, vite, threejs, y zustand. usando los threejs hooks incorporados en su librería",
        urlImage:
            "https://user-images.githubusercontent.com/66704744/209981403-61699616-7567-48d8-bcbb-512200e1e6ff.png",
        urlButton: "http://minecraft-react-flax.vercel.app/",
        buttonTitle: "Ver página",
        githubUrl: "https://github.com/maikCyphlock/minecraft-react"
    }, {
        title: "Funko pop search",
        content:
            "esta idea surge de que me gustan los funkos, y decidí crear una api basada en el proyecto funko pop data, entonces opté por usar estos datos y subirlos a algolia, y creé las colecciones de los funkos permitiendo usar el poder de algolia para indexar datos y su herramienta de busqueda con autocompletado",
        urlImage:
            "https://user-images.githubusercontent.com/66704744/202806978-b83a1b79-f51f-48e9-8b2e-6073e295c513.png",
        urlButton: "https://funkinhos.vercel.app/",
        buttonTitle: "Ver página",
        githubUrl: "https://github.com/maikCyphlock/funkinhos"
    },
];

const proyect = () => {
    return (
        <section id="proyect">
            {Proyects.map(({ title, urlButton, buttonTitle, content, urlImage, githubUrl }, index) => (
                <SectionGrid key={index}>
                    <SectionCard
                        content={content}
                        title={title}
                        url={urlButton}
                        buttonTitle={buttonTitle}
                        githubUrl={githubUrl}
                    />

                    <SectionImg title="qtar" width={600} height={400} urlImg={urlImage} />
                </SectionGrid>
            ))}
        </section>
    );
};
export default proyect;

