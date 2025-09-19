import { Link } from "react-router-dom";

interface Project {
    title: string;
    description: string;
    path: string;
}

const projects: Project[] = [
    {
        title: "Blog",
        description:
            "A personal blogging platform where I write and share ideas.",
        path: "blog",
    },
    {
        title: "Lung Talk",
        description: "A proof of concept for Lung Talk.",
        path: "lung-talk",
    },
    {
        title: "Camera Placement Tool",
        description:
            "A 3D visualization tool for optimal camera placement using React Three.js.",
        path: "camera-tool",
    },
];

const Projects = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: Project) => (
                    <div
                        key={project.title}
                        className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {project.description}
                        </p>
                        <Link
                            to={`${project.path}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            View Project →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
