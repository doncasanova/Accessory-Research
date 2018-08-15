import axios from "axios";



export default class Fans {
  getFans() {
    try {
      console.log('IN getFans!')
      const storedFans = JSON.parse(localStorage.getItem('fans'));
      return (storedFans) ? storedFans : [];
    } catch (err) {
      return [];
    }
  }

  getProfileByName(name) {
    return this.getFans().find((fan) => fan.name === name);
  }

  saveFan(fan) {
    console.log('IN saveFan!')
    const fans = this.getFans();
    const foundFanIndex = fans.findIndex((existingFan) => existingFan.name === fan.name);
    if (foundFanIndex > -1) {
      fans[foundFanIndex] = fan;
      console.log('FOUND: ')
      console.log(fan)
    } else {
      fans.push(fan);
      console.log('NEW: ')
      console.log(fan)

    }

    axios.post("/api/customers", fan);

    localStorage.setItem('fans', JSON.stringify(fans));
  }
}