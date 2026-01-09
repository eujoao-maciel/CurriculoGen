import { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
   const [isOpen, setIsOpen] = useState(false)

   const templates = [
      {
         id: 'classic',
         name: 'Classic',
         preview:
            'Um currículo em formato tradicional, com tipografia profissional e formatos padrões.',
      },
      {
         id: 'modern',
         name: 'Modern',
         preview:
            'Currículo feito com uso estratégico no uso de cores e escolha moderna de fontes.',
      },
      {
         id: 'minimal-image',
         name: 'Minimal Image',
         preview:
            'Design sofisticado com uma pequena foto e tipografia minimalista.',
      },
      {
         id: 'minimal',
         name: 'Minimal',
         preview:
            'Design minimalista focado em exibir suas informações de forma direta e simples.',
      },
   ]

   return <div></div>
}

export default TemplateSelector
