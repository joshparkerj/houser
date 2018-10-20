const initState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  imgurl: '',
  mortgage: 0,
  rent: 0
};

export const ABstepOne = (name,address,city,state,zipcode) => {
  return {
    type: "STEP_ONE",
    payload: {
      name: name,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode
    }
  }
}

export const ABstepTwo = imgurl => {
  return {
    type: "STEP_TWO",
    payload: {
      imgurl: imgurl
    }
  }
}

export const ABstepThree = (name,address,city,state,zip,img,mortgage,rent) => {
  return {
    type: "STEP_THREE",
    payload: {
      name: name,
      address: address,
      city: city,
      state: state,
      zipcode: zip,
      imgurl: img,
      mortgage: mortgage,
      rent: rent
    }
  }
}

export const ABcancel = () => {
  return {
    type: "CANCEL",
    payload: initState
  }
}

const reducer = (state=initState, actions) => {
  switch(actions.type){
    case "STEP_ONE":
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode
      }
    case "STEP_TWO":
      return {
        ...state,
        imgurl: actions.payload.imgurl
      }
    case "STEP_THREE":
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode,
        imgurl: actions.payload.imgurl,
        mortgage: actions.payload.mortgage,
        rent: actions.payload.rent
      }
    case "CANCEL":
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode,
        imgurl: actions.payload.imgurl,
        mortgage: actions.payload.mortgage,
        rent: actions.payload.rent
      }
    default:
      return state;
  }
}

export default reducer;
