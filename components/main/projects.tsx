import { ProjectCard } from '@/components/sub/project-card';
import { PROJECTS } from '@/constants';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 sm:py-20 px-6 sm:px-8"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 sm:py-16">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 px-2 sm:px-4 lg:px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
