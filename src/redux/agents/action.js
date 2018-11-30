import { FETCH_AGENTS, ADD_AGENT } from '../redux/types'

export function getAllAgents() {
  return {
    type: FETCH_AGENTS,
  }
}

export function addAgent(agentId) {
  return {
    type: ADD_AGENT,
    agentId,
  }
}