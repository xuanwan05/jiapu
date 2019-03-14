//action types
const LOAD_ALL_AGENTS = 'LOAD_ALL_AGENTS'
const LOAD_ALL_AGENTS_SUCCEED = 'LOAD_ALL_AGENTS_SUCCEED'
const LOAD_ALL_AGENTS_FAILED = 'LOAD_ALL_AGENTS_FAILED'
const LOAD_AGENT = 'LOAD_AGENT'
const LOAD_AGENT_SUCCEED = 'LOAD_AGENT_SUCCEED'
const LOAD_AGENT_FAILED = 'LOAD_AGENT_FAILED'
const ADD_AGENT = 'ADD_AGENT'
const ADD_AGENT_SUCCEED = 'ADD_AGENT_SUCCEED'
const ADD_AGENT_FAILED = 'ADD_AGENT_FAILED'
const DELETE_AGENT = 'DELETE_AGENT'
const DELETE_AGENT_SUCCEED = 'DELETE_AGENT_SUCCEED'
const DELETE_AGENT_FAILED = 'DELETE_AGENT_FAILED'


//actions
export const loadAllAgents = () => ({
    type: LOAD_ALL_AGENTS
})

export const loadAllAgentsSucceed = (agents) => ({
    type: LOAD_ALL_AGENTS_SUCCEED,
    agents: agents
})

export const loadAllAgentsFailed = () => ({
    type: LOAD_ALL_AGENTS_FAILED
})

export const loadAgent = (uuid) => ({
    type: LOAD_AGENT,
    uuid: uuid
})

export const loadAgentSucceed = (agent) => ({
    type: LOAD_AGENT_SUCCEED,
    agents: agent
})

export const loadAgentFailed = (uuid) => ({
    type: LOAD_AGENT_FAILED
})

export const addAgent = (agent, redirectURL) => ({
    type: ADD_AGENT,
    agent: agent,
    redirectURL: redirectURL
})

export const addAgentSucceed = () => ({
    type: ADD_AGENT_SUCCEED
})

export const addAgentFailed = () => ({
    type: ADD_AGENT_FAILED
})

export const deleteAgent = (uuid) => ({
    type: DELETE_AGENT,
    uuid: uuid
})

export const deleteAgentSucceed = () => ({
    type: DELETE_AGENT_SUCCEED
})

export const deleteAgentFailed = () => ({
    type: DELETE_AGENT_FAILED
})

