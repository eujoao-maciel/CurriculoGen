import dummy_profile from '../assets/dummy_profile.png'

export const dummyResumeData = [
   {
      _id: '1234',
      personal_info: {
         full_name: 'Alex Smith',
         email: 'alex@example.com',
         image: dummy_profile,
         phone: '0 123456789',
         location: 'NY, USA',
         linkedin: 'https://www.linkedin.com',
         website: 'https://www.example.com',
      },

      professional_summary:
         'Highly analytical Data Analyst with 6 years of experience transforming complex datasets into actionable insights using SQL, Python, and advanced visualization tools.',

      skills: [
         'JavaScript',
         'React JS',
         'Full Stack Development',
         'Git',
         'GitHub',
         'NextJS',
         'Express',
         'NodeJS',
         'TypeScript',
      ],

      experience: [
         {
            company: 'Example Technologies.',
            position: 'Senior Full Stack Developer',
            start_date: '2023-06',
            end_date: '',
            is_current: true,
            description:
               'Architected, developed, and deployed innovative full-stack applications.\nCreated robust back-end systems and intuitive front-end interfaces.',
         },
         {
            company: 'Example Technologies.',
            position: 'Full Stack Developer',
            start_date: '2019-08',
            end_date: '2023-05',
            is_current: false,
            description:
               'Engineered and deployed scalable full-stack web applications translating complex requirements into robust systems.',
         },
      ],

      education: [
         {
            institution: 'Example Institute of Technology',
            degree: 'B.TECH',
            field: 'CSE',
         },
         {
            institution: 'Example Public School',
            degree: 'HIGHER SECONDARY',
            field: 'PCM',
         },
         {
            institution: 'Example Academy',
            degree: 'SECONDARY SCHOOL',
            field: '',
         },
      ],

      project: [
         {
            name: 'Team Task Management System',
            description:
               'Collaborative task management system for teams to create, assign and track tasks in real time.',
         },
         {
            name: 'EduHub - Online Learning Platform',
            description:
               'Online learning platform with courses, video lessons, quizzes and downloadable resources.',
         },
      ],
   },
]
