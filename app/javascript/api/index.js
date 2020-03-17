import axios from 'axios';
import actions from '../redux/actions';

const user = {
  all: keywords => {
    return dispatch => {
      dispatch(actions.loadUsersBegin());

      return axios.get('api/users.json', { params: { keywords }})
        .then(({ data }) => dispatch(actions.loadUsersSuccess(data)))
        .catch(e => dispatch(actions.loadUsersFailure(e.message)));
    };
  }
};

export default { user };
