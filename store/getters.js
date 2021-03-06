export const getters = {
  TOKEN (state) {
    return state.TOKEN
  },
  selectedSingleSeatList: state => state.selectedSingleSeatList,//选中的单个座位列表
  selectedCoupleSeatList: state => state.selectedCoupleSeatList,//选中的情侣座位列表
  //计算座位总价
  totalPrice: (state) => {
    let totalSingle = 0, totalCouple = 0, total = 0;
    state.selectedSingleSeatList.forEach((item, index) => {
      totalSingle = state.seatInfo.price * (index+1);
    });
    state.selectedCoupleSeatList.forEach((item, index) => {
      totalCouple = state.seatInfo.price * (index+1);
    });
    total = totalSingle + totalCouple;
    return total;
  }
}
export default getters

