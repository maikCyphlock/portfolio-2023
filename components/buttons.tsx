import Link from "next/link"
import { GitHubIcon } from './icons'
export type Button = {
  block?: boolean,
  url: string,
  buttonTitle: string,
  target?: string
}

export const PrimaryBtn = ({ block, url, buttonTitle, target }: Button) => {
  return (
    <Link className={`p-2 rounded-md inline-flex ${!block ? 'w-28' : ''} bg-blue-400 font-semibold items-center text-black justify-center`} href={url} target={target}>
      {buttonTitle}
    </Link>
  )
}

export const SecodaryBtn = ({ block, url, buttonTitle, target }: Button) => {
  return (
    <Link target={target} className={`p-2 rounded-md  inline-flex ${!block ? 'w-22' : ''} hover:border-blue-400  border-2 font-semibold border-transparent text-black  hover:text-blue-400 justify-center dark:text-white dark:hover:text-blue-400`} href={url}>

      {buttonTitle}
    </Link>
  )
}

export const GithubBtn = ({ block, url, buttonTitle, target }: Button) => {
  return (
    <Link target={target} className={`p-2 rounded-md  inline-flex gap-1 ${!block ? 'w-22' : ''} hover:border-blue-400  border-2 font-semibold border-transparent text-black  hover:text-blue-400 justify-center dark:text-white dark:hover:text-blue-400`} href={url} >
      <span className=""><GitHubIcon /></span>
      {buttonTitle}
    </Link>
  )
}


