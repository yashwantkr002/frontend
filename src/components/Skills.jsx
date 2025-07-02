import React from 'react';

const skills = {
  'Programming Languages': [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  'Frameworks': [
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  ],
  'Tools': [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  ],
  'Soft Skills': [
    { name: 'Problem-Solving', icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mpOCwGVaqtZtcg9sKaNNjgHaE8%26pid%3DApi&f=1&ipt=8d1b80775accb1d906646b946b83a868dcff6b34bb40894a7330e844e0ab1919&ipo=images' },
    { name: 'Adaptability', icon: 'https://img.icons8.com/ios-filled/50/gear.png' },
    { name: 'Team Collaboration', icon: 'https://img.icons8.com/ios-filled/50/group-foreground-selected.png' },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-gray-50 to-white py-15">
      <div className="w-full px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">{category}</h3>
              <ul className="space-y-4">
                {skillList.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-4">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-8 h-8"
                    />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
