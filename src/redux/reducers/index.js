import { combineReducers } from 'redux';

import ui from './ui';
import user from './user';
import thread from './thread';

export default combineReducers({ ui, user, thread });
