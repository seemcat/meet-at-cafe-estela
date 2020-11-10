const initialState = {
  invites: [],
  jwtToken: ""
};

const JWT_TOKEN_RETRIEVED = "JWT_TOKEN_RETRIEVED";
// re-name get to set cause it's setting token into Redux
// action creator
const getJwtToken = (jwtToken) => ({
  type: JWT_TOKEN_RETRIEVED,
  payload: jwtToken
});

const INVITES_RETRIEVED = "INVITES_RETRIEVED";
const getInvites = (invites) => ({
  type: INVITES_RETRIEVED,
  payload: invites
});

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case JWT_TOKEN_RETRIEVED:
    return {
      ...state,
      jwtToken: payload
    }
    case INVITES_RETRIEVED:
    return {
      ...state,
      invites: payload
    }
    default:
      return state;
  }
};

export { reducer, getJwtToken, getInvites }
