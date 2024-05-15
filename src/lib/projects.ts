interface Project {
    title: string;
    description: string;
    url: string;
    banner: string;
}

const getProjects = async (): Promise<Project[]> => {
    const projectPaths: any = import.meta.glob<{ default: Project }>(
        "/src/content/projects/*.json"
    );
    // @ts-ignore
    return (
        await Promise.all(
            Object.keys(projectPaths).map((k) => {
                if (k == "/src/content/projects/base.json") return;
                return projectPaths[k]();
            })
        )
    )
        .map((p) => (p ? (p.default as Project) : null))
        .filter((p) => p !== null);
};

export { getProjects };
