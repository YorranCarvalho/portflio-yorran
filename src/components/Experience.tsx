import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaBriefcase } from 'react-icons/fa';


interface ExperienceProps {
  expand?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ expand }) => (
  <Box width={expand ? '100%' : 'auto'} maxWidth={expand ? 900 : undefined} sx={{ px: expand ? 2 : 0 }}>
    <Typography variant="h5" color="primary" gutterBottom fontWeight={700}>Experiência Profissional</Typography>
    <List>
      <ListItem alignItems="flex-start">
        <ListItemIcon><FaBriefcase color="#22487A" size={32} /></ListItemIcon>
        <ListItemText
          primary={<><b>Desenvolvedor Frontend</b> — Tallk.me</>}
          secondary={<>
            <Typography component="span" variant="body2" color="textSecondary">mar/2025 - atual | React, TypeScript, Tailwind, Styled-components, Vite, Next</Typography><br/>
            <Typography component="span" variant="body2" color="textSecondary">
              Desenvolvimento e manutenção de aplicações web modernas utilizando React, TypeScript, Tailwind, Styled-components, Vite e Next. Criação de componentes reutilizáveis, consumo de APIs REST e foco em performance, acessibilidade e experiência do usuário.
            </Typography>
          </>}
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemIcon><FaBriefcase color="#22487A" size={32} /></ListItemIcon>
        <ListItemText
          primary={<><b>Estagiário Frontend</b> — Tallk.me</>}
          secondary={<>
            <Typography component="span" variant="body2" color="textSecondary">set/2024 - mar/2025 | React, TypeScript, Tailwind, Styled-components, Vite, Next, Figma</Typography><br/>
            <Typography component="span" variant="body2" color="textSecondary">
              Atuação desde o início com React, TypeScript, Tailwind, Styled-components, Vite e Next. Prototipação de telas, implementação de novas features, consumo de APIs REST e apoio ao time de desenvolvimento em ambiente ágil.
            </Typography>
          </>}
        />
      </ListItem>
    </List>
  </Box>
);

export default Experience;
