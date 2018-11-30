import { FETCH_AGENTS, START_FETCH_AGENTS, FETCH_AGENTS_ERROR, ADD_AGENT } from '../../types'
import { combineReducers } from 'redux';

const initialState = {
  // firstName: '',
  // lastName: '',
  // middleName: '',
  // phone: '',
  // email: '',
  // fax: ''
  agentInfos: [],
  agentInfosLoaded: true,
  agentInfosLoading: false,
  agentInfosError: ''
}

function getAllAgents (state = initialState, action) {
  switch(action.type) {
    case FETCH_AGENTS: 
      return {
        ...state,
        agentInfos: action.payload,
        agentInfosLoaded: true,
        agentInfosLoading: false,
        agentInfosError: ''
      };
    case START_FETCH_AGENTS: 
      return {
        ...state,
        agentInfosLoaded: false,
        agentInfosLoading: true,
        agentInfosError: ''
      };
    case FETCH_AGENTS_ERROR: 
      return {
        ...state,
        agentInfos: [],
        agentInfosLoaded: false,
        agentInfosLoading: false,
        agentInfosError: action.error
      }
    default:
      return state;
  }
}

function addAgent (state = initialState, action) {
  switch(action.type) {
    case ADD_AGENT: 
      return {
        ...state,
        agentInfos: action.payload,
        agentInfosLoaded: true,
        agentInfosLoading: false,
        agentInfosError: ''
      };
    // case START_FETCH_AGENTS: 
    //   return {
    //     ...state,
    //     agentInfosLoaded: false,
    //     agentInfosLoading: true,
    //     agentInfosError: ''
    //   };
    // case FETCH_AGENTS_ERROR: 
    //   return {
    //     ...state,
    //     agentInfos: [],
    //     agentInfosLoaded: false,
    //     agentInfosLoading: false,
    //     agentInfosError: action.error
    //   }
    default:
      return state;
  }
}

export default combineReducers ({
  getAllAgents,
  addAgent
})

