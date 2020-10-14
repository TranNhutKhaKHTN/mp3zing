import { combineReducers } from 'redux';
import HomeReducer from './homeReducer'
import PlayMusicReudcer from './playmusicReducer'
const rootReducer = combineReducers({
  home: HomeReducer,
  playmusic: PlayMusicReudcer
});

export default rootReducer;