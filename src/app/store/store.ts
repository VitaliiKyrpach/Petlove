import { dataEffects } from "./effects";
import { dataReducer } from "./reducer";

export const store = {
    data: dataReducer
}
export const effects = [dataEffects]