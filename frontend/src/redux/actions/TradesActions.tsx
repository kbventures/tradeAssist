import { Dispatch } from 'redux';
import * as actions from '../constants/TradesConstants';
import axios from 'axios';
import { TCreateTrade } from '../../interfaces/ITrades';





export const addTrade = (tradeData: TCreateTrade) => async (dispatch: Dispatch) => {

    try {
        
        dispatch({ type: actions.CREATE_TRADE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios.post(`/api/trades`, tradeData, config);
        dispatch({ type: actions.CREATE_TRADE_SUCCESS });


    } catch (error: any) {
        dispatch({
        type: actions.CREATE_TRADE_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}










