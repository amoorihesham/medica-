import { Button } from 'antd';
import { LanguageOutlined } from '@mui/icons-material';

const LanguageBtn = () => {
  return (
    <Button
      type='link'
      icon={<LanguageOutlined />}
      display='flex'
      alignItems='center'
      style={{ color: 'white', fontSize: '16px' }}
    >
      English
    </Button>
  );
};

export default LanguageBtn;
