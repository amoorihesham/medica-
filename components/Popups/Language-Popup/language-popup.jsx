'use client';
import { Box, Modal } from '@mui/material';

export default function LanguagePopup({ open, setOpen }) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 550,
          bgcolor: 'background.paper',
          boxShadow: 24,
          pt: 0,
          px: 2,
          pb: 2,
          borderRadius: '.5rem',
          maxHeight: '90vh',
          overflowY: 'auto',
          whiteSpace: 'nowrap',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        <div
          dir='rtl'
          className='p-3 hover:bg-gray-100 mt-3 transition-colors duration-200 cursor-pointer'>
          العربية
        </div>
        <div className='p-3 hover:bg-gray-100 mt-3 transition-colors duration-200 cursor-pointer'>
          English
        </div>
      </Box>
    </Modal>
  );
}
