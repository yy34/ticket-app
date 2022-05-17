import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    seats: [
      {
        seatNumber: "1",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "2",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "3",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "4",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "5",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "6",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "7",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "8",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "9",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "10",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "11",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "12",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "13",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "14",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "15",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "16",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "17",
        type: "empty",
        gender: "",
      },

      {
        seatNumber: "18",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "19",
        type: "empty",
        gender: "",
      },
      {
        seatNumber: "20",
        type: "empty",
        gender: "",
      },
    ],
  },
  mutations: {
    updateSeat(state, seat) {
      let index = state.seats.findIndex((c) => c.seatNumber == seat.seatNumber);
      if (index > -1) {
        state.seats[index] = seat;
      }
    },
  },
  actions: {
    seatUpdate(context, seat) {
      context.commit("updateSeat", seat);
    },
  },
  getters: {
    getSeats(state) {
      return state.seats;
    },
    selectedSeats(state) {
      return state.seats.filter((seat) => seat.type === "selected");
    },
    clearSelected(state) {
      state.seats.forEach((seat) => {
        if (seat.type == "selected") {
          seat.type = "empty";
        }
      });
    },
  },

  plugins: [createPersistedState()],
});

export default store;
