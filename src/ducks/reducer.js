const initState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  imgurl: '',
  mortgage: 0,
  rent: 0,
};

export const ABstepOne = ({
  name, address, city, state, zipcode,
}) => ({
  type: 'STEP_ONE',
  payload: {
    name,
    address,
    city,
    state,
    zipcode,
  },
});

export const ABstepTwo = (imgurl) => ({
  type: 'STEP_TWO',
  payload: {
    imgurl,
  },
});

export const ABstepThree = ({
  name, address, city, state, zip, img, mortgage, rent,
}) => ({
  type: 'STEP_THREE',
  payload: {
    name,
    address,
    city,
    state,
    zipcode: zip,
    imgurl: img,
    mortgage,
    rent,
  },
});

export const ABcancel = () => ({
  type: 'CANCEL',
  payload: initState,
});

// eslint-disable-next-line default-param-last
const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'STEP_ONE':
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode,
      };
    case 'STEP_TWO':
      return {
        ...state,
        imgurl: actions.payload.imgurl,
      };
    case 'STEP_THREE':
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode,
        imgurl: actions.payload.imgurl,
        mortgage: actions.payload.mortgage,
        rent: actions.payload.rent,
      };
    case 'CANCEL':
      return {
        ...state,
        name: actions.payload.name,
        address: actions.payload.address,
        city: actions.payload.city,
        state: actions.payload.state,
        zipcode: actions.payload.zipcode,
        imgurl: actions.payload.imgurl,
        mortgage: actions.payload.mortgage,
        rent: actions.payload.rent,
      };
    default:
      return state;
  }
};

export default reducer;
