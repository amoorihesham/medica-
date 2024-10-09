import { LanguageOutlined } from '@mui/icons-material';
import { ListItem } from '@mui/material';

const LanguageBtn = () => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
      }}>
      <button className='flex items-center gap-2 text-white'>
        <LanguageOutlined />
        English
      </button>
    </ListItem>
  );
};

export default LanguageBtn;
