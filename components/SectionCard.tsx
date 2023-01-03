import { PrimaryBtn, GithubBtn } from "./buttons"

export type SectionCard = {
    title: string,
    content: string,
    url: string,
    buttonTitle: string,
    githubUrl: string
}
const SectionCard = ({ title, content, url, buttonTitle, githubUrl }: SectionCard) => {
    return (
        <div className="flex flex-col m-5 gap-5">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
            <div className="flex gap-4">
                <PrimaryBtn url={url} target="_blank" buttonTitle={buttonTitle} ></PrimaryBtn>
                <GithubBtn url={githubUrl} target="_blank" buttonTitle={"repositorio"} ></GithubBtn>
            </div>
        </div>
    )
}


export default SectionCard