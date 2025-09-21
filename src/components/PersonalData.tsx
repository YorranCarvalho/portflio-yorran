import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaUser } from 'react-icons/fa';


interface PersonalDataProps {
  expand?: boolean;
}

const PersonalData: React.FC<PersonalDataProps> = ({ expand }) => (
  <Box
    display="flex"
    flexDirection={expand ? 'row' : 'column'}
    alignItems={expand ? 'flex-start' : 'center'}
    gap={expand ? 6 : 2}
    width={expand ? '100%' : 'auto'}
    maxWidth={expand ? 900 : undefined}
    sx={{ px: expand ? 2 : 0 }}
  >
    <Box display="flex" flexDirection="column" alignItems="center" minWidth={180}>
      <FaUser size={64} color="#22487A" />
      <Typography variant="h4" color="primary" fontWeight={700}>Yorran Carvalho</Typography>
      <Typography variant="body1" color="textSecondary">Desenvolvedor Frontend</Typography>
      <Typography variant="body2" color="textSecondary">1 ano de experiência</Typography>
    </Box>
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography variant="h6" color="primary">Sobre mim</Typography>
      <Typography variant="body1" color="textSecondary">
        Sou apaixonado por tecnologia, focado em criar interfaces modernas, responsivas e acessíveis. Busco sempre aprender novas ferramentas e entregar soluções de alto impacto.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <b>Formação:</b><br/>
        Ciência da Computação — UNAMA - Universidade da Amazônia (2023)<br/>
        Pós-graduação em Teste e Qualidade de Software — UNAMA (2024)
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Localização: Belém - PA<br/>
        Email: yorrancarvalho18@gmail.com<br/>
        LinkedIn: <a href='https://www.linkedin.com/in/yorran-carvalho-1593512a9/'>linkedin.com/in/yorran-carvalho-1593512a9/</a>
      </Typography>
    </Box>
  </Box>
);

export default PersonalData;
