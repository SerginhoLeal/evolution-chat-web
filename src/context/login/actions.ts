import { FormProps } from '@interface';
import { api, socket } from '../../services';

const LoginSubmit = async(evt: FormProps) => {
  evt.preventDefault();

  const response = await api.post('/login-user', {
    name: evt.target['name'].value,
    number: evt.target['number'].value
  })

  if (!response.data) {
    return {
      data: null,
      message: 'User Not Found',
      loading: false
    }
  }

  socket.emit('users_list', response.data);

  return {
    data: response.data,
    message: 'Success',
    loading: false
  }
    // .then(({ data }) => data)
    // .catch(error => ({
    //   message: error.response.data.message,
    //   status: error.response.status,
    //   loading: false
    // }))
    // .finally(() => ({
    //   loading: false
    // }))
};

export {
  LoginSubmit
}