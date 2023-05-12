import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    darkModeOn: false
  }),
  actions: {
    async setDarkModeOn(flag: boolean) {
      this.darkModeOn = flag;
      return this.darkModeOn;
    }
  }
});

// export const useDarkModeStore = defineStore('darkMode', () => {
//     const darkModeOn = ref(false);

//     async function setDarkModeOn(flag: boolean) {
//         darkModeOn.value = flag;
//         return darkModeOn.value;
//     }

//     return { darkModeOn, setDarkModeOn };
// });
