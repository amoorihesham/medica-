import { Button } from '@mui/material';
import { SupervisedUserCircleOutlined } from '@mui/icons-material';

const RegisterLoginBtn = () => {
  return (
    <Button
      variant='outlined'
      startIcon={<SupervisedUserCircleOutlined />}
      sx={{ color: 'white', borderColor: 'white' }}
    >
      Sign up / Log in
    </Button>
  );
};

export default RegisterLoginBtn;
