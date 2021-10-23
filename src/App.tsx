import Router from './Router';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="top-center"
    >
      <Router />
    </ToastProvider>
  );
};

App.defaultProps = {};

export default App;
