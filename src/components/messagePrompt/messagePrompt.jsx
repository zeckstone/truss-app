import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const MessagePrompt = ({ message }) => (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
);

export default MessagePrompt;