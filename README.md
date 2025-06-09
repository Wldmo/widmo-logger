# widmo-logger ??

Prosty, kolorowy logger do Node.js oparty o `chalk`.  
Wspiera kolorowanie HEX i nazwane kolory. Idealny do twoich projektów CLI / botów / serwerów.  
Zero zbędnych rzeczy – szybki, czytelny, elastyczny.

---

## ?? Instalacja

```sh
npm install widmo-logger
```

---

## ⚙️ Konfiguracja

```js
// ładowanie modułu
const createLogger = require('widmo-logger');
// definiowanie etykiet i kolorów
const log = createLogger({
  error: 'red',
  custom: 'magenta',
  // inne customowe
});

// użycie
log.error ('Wystąpił błąd');
// [czas] [ERROR] Wystąpił błąd
...
```

---

## ?? API

Dostępne metody:

```js
log.<etykieta>(msg)

Przykłady:

log.error(msg);
log.warning(msg);
log.custom(label, msg);
```
Argumenty:

msg (string) – wiadomość do zalogowania

label (string) – własna etykieta (tylko dla custom)


---

?? Dostępne kolory

Nazwy kolorów (chalk):

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- blackBright (alias: gray, grey)
- redBright
- greenBright
- yellowBright
- blueBright
- magentaBright
- cyanBright
- whiteBright


HEX:

#FF0000 (czerwony)

#00FF00 (zielony)

#0000FF (niebieski)

i dowolny inny kolor HEX np. #FFA500



---

?? Zależności

[chalk](https://github.com/chalk/chalk)
Instalowany automatycznie razem z widmo-logger



---

?? Licencja

MIT
