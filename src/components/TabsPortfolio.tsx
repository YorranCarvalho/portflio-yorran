import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import PersonalData from './PersonalData';
import Experience from './Experience';
import Skills from './Skills';

const tabStyle = {
  color: '#fff',
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: 1.2,
  minWidth: 180,
  transition: 'color 0.2s',
  position: 'relative',
  boxShadow: 'none',
  border: 'none',
  outline: 'none',
  '&:focus': {
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  '&.Mui-focusVisible': {
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  zIndex: 2,
  '&.Mui-selected': {
    color: '#fff',
    textShadow: '0 0 32px #22487A, 0 0 64px #22487A99, 0 0 8px #fff',
    fontSize: 26,
    fontWeight: 600,
    zIndex: 3,
  },
  '&:hover': {
    color: '#3A5C99',
  },
};

const indicatorStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  height: 0,
  '& .MuiTabs-indicatorSpan': {
    width: 120,
    height: 28,
    borderRadius: 18,
    background: 'radial-gradient(ellipse at center, #22487A 0%, #22487A88 70%, transparent 100%)',
    boxShadow: '0 0 64px 24px #22487Acc, 0 0 24px 8px #22487A99',
    marginTop: -10,
    filter: 'blur(2.5px)',
    zIndex: 1,
  },
};

const TabsPortfolio: React.FC = () => {
  const [value, setValue] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [pendingValue, setPendingValue] = useState<number | null>(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === value) return;
    setFade('out');
    setPendingValue(newValue);
  };

  React.useEffect(() => {
    if (fade === 'out' && pendingValue !== null) {
      const timeout = setTimeout(() => {
        setValue(pendingValue);
        setFade('in');
        setPendingValue(null);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [fade, pendingValue]);

  return (
  <div className="w-full max-w-[1200px] mx-auto px-4">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
          style: { height: 0 },
        }}
        sx={indicatorStyle}
        centered
      >
        <Tab label="Dados Pessoais" sx={tabStyle} />
        <Tab label="Experiência" sx={tabStyle} />
        <Tab label="Conhecimentos" sx={tabStyle} />
      </Tabs>
      <div
        className={`min-h-[420px] flex items-start justify-center w-full transition-opacity duration-300 mt-8 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}
      >
        {value === 0 && <PersonalData expand />}
        {value === 1 && <Experience expand />}
        {value === 2 && <Skills expand />}
      </div>
    </div>
  );
};

export default TabsPortfolio;
