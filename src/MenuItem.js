/*
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubMenu = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index} button>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
);

const MenuItem = ({ label, subMenuItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemText primary={label} />
      </AccordionSummary>
      <AccordionDetails>
        <SubMenu items={subMenuItems} />
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItem;

*/
/*
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubMenu = ({ items }) => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuExpanded(!isSubMenuExpanded);
  };

  return (
    <List>
      <ListItem button onClick={handleSubMenuToggle}>
        <ListItemText primary="Submenu" />
        {isSubMenuExpanded ? <ExpandMoreIcon /> : null}
      </ListItem>
      <Accordion expanded={isSubMenuExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemText primary="Submenu" />
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} button>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </List>
  );
};

const MenuItem = ({ label, subMenuItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemText primary={label} />
      </AccordionSummary>
      <AccordionDetails>
        <SubMenu items={subMenuItems} />
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItem;
*/

/*
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubMenu = ({ items }) => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuExpanded(!isSubMenuExpanded);
  };

  return (
    <List>
      <ListItem button onClick={handleSubMenuToggle}>
        <ListItemText primary="Submenu" />
        {isSubMenuExpanded ? <ExpandMoreIcon /> : null}
      </ListItem>
      <Accordion expanded={isSubMenuExpanded}>
            {items.map((item, index) => (
              <ListItem key={index} button>
                <ListItemText primary={item} />
              </ListItem>
            ))}
      </Accordion>
    </List>
  );
};

const MenuItem = ({ label, subMenuItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleToggle}>
      <AccordionSummary>
        <ListItemText primary={label} />
      </AccordionSummary>
      <AccordionDetails>
        {isExpanded && <SubMenu items={subMenuItems} />}
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuItem;
*/

// MenuItem.js
// MenuItem.js

//ESTE SIRVEEEEEEEEEEEE

 
 
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Componente para el submenú
const SubMenu = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Componente del elemento del menú
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

 