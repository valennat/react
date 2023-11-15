import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubMenu = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const MenuItem = ({ label, subMenuItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Accordion expanded={isExpanded} onChange={handleToggle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {subMenuItems && <SubMenu items={subMenuItems} />}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuItem;

 