export const wishActionHandleInput = (input) => {
  return {
    type: "UPDATE_INPUT",
    payload: input,
  };
};
export const wishActionFetchWish = (input) => {
  return (dispatch) => {
    fetch("/data")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        // this.setState({
        //   mywishes: res2,
        // });
        dispatch({type:'FETCH_WISH',payload:res2})
      });
  };
};
export const wishActionHandleSubmit = (e) => {
  return (dispatch) => {
    e.preventDefault();
    // const url = "http://localhost:5000/sent";
    var data = new URLSearchParams();
    for (const pair of new FormData(e.target)) {
      data.append(pair[0], pair[1]);
    }
    //localhost:5000/sent
    fetch("/sent", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);

        // this.setState({
        //   mywishes: [...this.state.mywishes, res2],
        // });
        dispatch({type:'ADD_WISH',payload:res2})

      });
  };
};
export const wishActionHandleDelete = (id) => {
  return (dispatch) => {
    fetch("/remove/" + id, { method: "delete" })
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        
        // this.setState({
        //   mywishes: newWishes,
        // });
        dispatch({type:'DELETE_WISH',payload:res2})

      });
  };
};
