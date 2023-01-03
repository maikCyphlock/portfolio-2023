import Image from "next/image";
import SectionGrid from "../SectionGrid";

type ExperienceCard = {
    title: string;
    logo?: string;
    content: string;
};

export const Experience = () => {
    return (
        <SectionGrid>
            <section className="m-5 col-span-full flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <ExperienceCard title='Google' content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo earum mollitia. Aliquam doloremque culpa ad eum facilis totam animi inventore! Quis nesciunt quidem sequi perferendis necessitatibus autem consequuntur facere!" logo="https://visionnoventa.com/wp-content/uploads/2020/02/Logo-FVF.jpg" />
                    <ExperienceCard title='Facebook' content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo earum mollitia. Aliquam doloremque culpa ad eum facilis totam animi inventore! Quis nesciunt quidem sequi perferendis necessitatibus autem consequuntur facere!" />
                </div>
            </section>
        </SectionGrid>
    );
}


export const ExperienceCard = ({ title, logo, content }: ExperienceCard) => {
    return (
        <article className="border dark:border-gray-300">
            <div className="flex items-center gap-4 m-4">
                {logo && <Image width='16' height="16" src={logo} alt={title}></Image>}
                <h3>{title}</h3>
            </div>
            <div className="border-t dark:border-gray-300 p-4  text-gray-700 dark:text-gray-300">
                {content}
            </div>
        </article>
    );
};
export default Experience;
