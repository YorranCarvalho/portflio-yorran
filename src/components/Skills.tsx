import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaMobileAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";


const skills = [
  { icon: <FaReact color="#61dafb" />, label: 'React' },
  { icon: <FaJs color="#f7df1e" />, label: 'JavaScript' },
  { icon: <FaCss3Alt color="#2965f1" />, label: 'CSS3' },
  { icon: <FaHtml5 color="#e34c26" />, label: 'HTML5' },
  { icon: <FaReact color="#22487A" />, label: 'TypeScript' },
  { icon: <TbBrandVite color="#FFB300" />, label: 'Vite' },
  { icon: <SiNextdotjs color="#fff" />, label: 'NextJS' },
  { icon: <SiTailwindcss color="#38bdf8" />, label: 'Tailwind' },
  { icon: <FaMobileAlt color="#22487A" />, label: 'React Native' },
];

interface SkillsProps {
  expand?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ expand }) => (
  <Box width={expand ? '100%' : 'auto'} maxWidth={expand ? 900 : undefined} sx={{ px: expand ? 2 : 0 }}>
    <Typography variant="h5" color="primary" gutterBottom fontWeight={700}>Conhecimentos</Typography>
    <Stack direction={expand ? 'row' : 'column'} spacing={expand ? 3 : 2} flexWrap="wrap" useFlexGap>
      {skills.map((skill, idx) => (
        <Chip
          key={idx}
          icon={skill.icon}
          label={skill.label}
          sx={{ bgcolor: '#181A20', color: '#fff', fontWeight: 500, fontSize: 18, px: 2, py: 2, minWidth: 120, boxShadow: expand ? '0 0 16px #22487A33' : undefined }}
        />
      ))}
    </Stack>
    {expand && (
      <Box mt={4}>
        <Typography variant="h6" color="primary">Soft Skills</Typography>
        <Typography variant="body1" color="textSecondary">
          Trabalho em equipe, comunicação, proatividade, foco em resultados e aprendizado contínuo.
        </Typography>
      </Box>
    )}
  </Box>
);

export default Skills;
