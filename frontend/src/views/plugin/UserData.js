import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

function UserData() {
  let access_token = Cookie.get('access_token');
  let refresh_token = Cookie.get('refresh_token');

  if (access_token && refresh_token) {
    const token = refresh_token;
    const decoded = jwtDecode(token);

    return decoded
  } else {
    // pass
  }
}

export default UserData