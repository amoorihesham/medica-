'use client';
import { ArrowDropDown, MedicalInformation, StarBorder } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

export default function FilterList() {
  const [open, setOpen] = useState(false);
  const [brand, setBrand] = useState(false);

  return (
    <List
      sx={{ width: '100%', minWidth: 200, bgcolor: '#fffff' }}
      className='border shadow-md border-gray-100'
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <ListItemButton onClick={() => setBrand(!brand)}>
        <ListItemIcon>
          <ArrowDropDown />
        </ListItemIcon>
        <ListItemText primary='Brand' />
      </ListItemButton>
      <Collapse
        in={brand}
        timeout='auto'
        unmountOnExit
      >
        <List
          component='div'
          disablePadding
        >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MedicalInformation />
            </ListItemIcon>
            <ListItemText primary='Medicin' />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ArrowDropDown />
        </ListItemIcon>
        <ListItemText primary='Categories' />
      </ListItemButton>
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
      >
        <List
          component='div'
          disablePadding
        >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MedicalInformation />
            </ListItemIcon>
            <ListItemText primary='Medicin' />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
