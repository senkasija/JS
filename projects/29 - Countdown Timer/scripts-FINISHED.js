let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
/**
 * timer pokreće odbrojavanje
 * The Date.now() method returns the number of milliseconds since January 1, 1970 00:00:00 UTC.
 * then uzima vrednost sadašnjeg vremena u milisekundama i dodaje mu vrednost koju smo definisali
 */
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  console.log(then);
  //pokazuje koliko je vremena ostalo - oduzima
  displayEndTime(then);
  //pokazuje vreme do kraja - sabira

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    console.log(secondsLeft);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); //određuje minute
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  console.log(this.dataset);
  /**
   * this je objekat button iz čijeg objekta dataset uzimamo property time koje smo definisali u html-u
   * perseInt pretvara string u broj
   */
  timer(seconds); //Pozivamo funkciju timer();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
console.table(buttons);
/**
 * jedini argument funkcije forEach je anonimna funkcija koja ima jedan argument - button
 * button je objekat on the flay kome se dodeljuje događaj klik koji pokreće funkciju startTimer.
 * anonimmna funkcija se izvršava na svakom elementu niza buttons: tj. na svakom dugmetu.
 * button je objekat
 */
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
