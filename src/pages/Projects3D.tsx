import Projects from "../components/BlogList";

interface Projects3D__Props {
    width: number;
}

const Projects3D = (props: Projects3D__Props) => {
    return (
        <Projects width={props.width} />
    )
}

export default Projects3D;