import { dataEffects } from './effects';
import { dataReducer } from './reducer';
import { authReducer } from './reducer-auth';

export const store = {
  auth: authReducer,
  data: dataReducer,
};
export const effects = [dataEffects];
