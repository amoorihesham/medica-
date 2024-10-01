import { Button } from 'antd';
import { LanguageOutlined } from '@mui/icons-material';
import { colors } from '@/styles';
import { ListItem } from '@mui/material';

const LanguageBtn = () => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      <Button
        type='link'
        icon={<LanguageOutlined />}
        style={{
          color: colors.primaryText,
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
        }}
      >
        English
      </Button>
    </ListItem>
  );
};

export default LanguageBtn;
