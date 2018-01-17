
//Create Questions
var questions = [
    new Question("Pana la ce inaltime pot zbura avioanele F16 Falcon?", [ "500 m inaltime", "peste 2 000m inaltime" ], "peste 2 000m inaltime"),
    new Question("Cine a achizitionat primul avion de acest fel?", ["Romania","Rusia"], "Romania"),
    new Question("Unde sunt cele doua baze aeriene unde vor ajunge avioanele F16 si care vor fi modernizate acum??", ["Campia Turzii si Fetesti","Cluj si Timisoara"], "Campia Turzii si Fetesti"),

    new Question("De ce nu poate fi tinut avionul in aer liber?", ["conditiile meteo ii afecteaza sistemul electronic","avionul pierde din stralucire"], "conditiile meteo ii afecteaza sistemul electronic"),


];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();