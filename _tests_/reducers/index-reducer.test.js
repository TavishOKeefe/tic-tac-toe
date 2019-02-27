import rootReducer from './../../src/reducers/index';
// import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
// import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      // masterTicketList: {},
      // selectedTicket: {}
    });
  });



});
