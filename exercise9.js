function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayGreeting() {
    console.log("Hello");
    await delay(2000); 
    console.log("World");
  }
  
  delayGreeting();