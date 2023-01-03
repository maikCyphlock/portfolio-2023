
const SectionGrid = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="grid  m-1 md:m-8 md:grid-cols-2 ">{children}</div>
    )
}


export default SectionGrid