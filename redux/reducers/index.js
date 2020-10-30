import { combineReducers } from 'redux';
import HomeReducer from './homeReducer'
import PlayMusicReudcer from './playmusicReducer'
import searchReducer from './searchReducer'
const rootReducer = combineReducers({
  home: HomeReducer,
  playmusic: PlayMusicReudcer,
  search: searchReducer
});

export default rootReducer;