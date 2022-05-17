<template>
  <div class="container mx-auto py-5">
    <h3 class="text-center py-1 mb-5">Ticket App</h3>

    <div class="flex justify-center">
      <div class="w-1/2 flex flex-col">
        <div class="grid grid-cols-4 gap-6">
          <span
            @click="handleClick(seat)"
            v-for="seat in getSeats"
            :key="seat.seatNumber"
            class="text-center cursor-pointer bg-blue-100 text-blue-800 text-xs font-semibold mr-2 p-5 rounded"
            :class="
              {
                'dark:bg-green-200 dark:text-red-900':
                  seat.type == 'full' && seat.gender === 'erkek',
              },
              {
                'dark:bg-pink-200 dark:text-pink-900':
                  seat.type == 'full' && seat.gender === 'kadın',
              },
              {
                'dark:bg-yellow-200 dark:text-yellow-900':
                  seat.type == 'selected',
              }
            "
          >
            {{ seat.seatNumber }}
          </span>
        </div>
        <form
          @submit.prevent="sendSeat"
          class="my-5 border-2 p-5"
          v-if="selectedSeats.length === 1"
        >
          <div class="flex justify-between">
            <span class="text-center">
              <strong>Seçilen Koltuk :</strong> {{ seatApprove.seatNumber }}
            </span>
            <div class="flex flex-col">
              <strong>Cinsiyet Seçiniz</strong>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="erkek"
                  v-model="seatApprove.gender"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Erkek
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="kadın"
                  v-model="seatApprove.gender"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Kadın
                </label>
              </div>
            </div>
          </div>
          <button class="w-full mt-3" type="submit">Bilet satın Al</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      seatApprove: {
        seatNumber: "",
        type: "full",
        gender: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getSeats", "clearSelected", "selectedSeats"]),
  },
  methods: {
    handleClick(event) {
      this.seatApprove.seatNumber = event.seatNumber;
      if (event.type == "full") {
        return;
      }
      if (event.type == "empty") {
        this.clearSelected;
      }
      event.type = event.type === "selected" ? "empty" : "selected";
    },

    sendSeat() {
      if (!this.seatApprove.gender || this.seatApprove.seatNumber == "") {
        alert("alanları doldurun");
        return;
      }
      this.$store.dispatch("seatUpdate", { ...this.seatApprove });
    },
  },
};
</script>
