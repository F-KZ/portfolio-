/* GitHub Repository - Exercise */


export const reducer = (state, action) => {
    switch (action.type) {
        case 'pending': {
          // data et error null
          return { status : "pending", data : null, error : null}
        }
        case 'resolved': {
          // data: action.data
          return { status : "resolved", data : action.data, error : null}
        }
        case 'rejected': {
          // error: action.error
          return { status : "rejected", data : null, error : action.error}
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
  }
  
  