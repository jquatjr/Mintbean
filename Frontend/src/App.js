import './App.css';

import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Modal } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';
import UserRoutes from './components/UserRoutes';
import Navbar from './components/Navbar';
function App() {
	const [ isOpenLogin, setIsOpenLogin ] = useState(false);
	const [ isOpenRegister, setIsOpenRegister ] = useState(false);
  const user = useSelector(store => store.userReducer.user)
	const toggleLoginModal = () => {
		setIsOpenLogin((isOpenLogin) => !isOpenLogin);
	};
	const toggleRegisterModal = () => {
		setIsOpenRegister((isOpenRegister) => !isOpenRegister);
	};
  const notifyLoginSuccess = (username) => toast.success(`Welcome Back, ${username}!`, {
    position: toast.POSITION.TOP_CENTER
  })
  const notifyRegisterSuccess = (username) => toast.success(`Welcome, ${username}!`)
	return (
		<div className="App">
      <ToastContainer/>
			<Navbar
				toggleLogin={toggleLoginModal}
				toggleRegister={toggleRegisterModal}
			/>
			<Modal open={isOpenLogin} onClose={toggleLoginModal}>
				<div>
					<LoginForm toggle={toggleLoginModal} />
				</div>
			</Modal>
			<Modal open={isOpenRegister} onClose={toggleRegisterModal}>
				<div>
					<RegistrationForm toggle={toggleRegisterModal} notify={notifyRegisterSuccess} />
				</div>
			</Modal>
			<UserRoutes />
		</div>
	);
}

export default App;
