import { Resume } from '../../models/Resume.js'

export const createResume = async (resumeName, userId) => {
    const resume = await Resume.create({
        title: resumeName,
        userId,
        public: true 
    })

    return resume
}


