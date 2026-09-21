# Arbeitsauftrag WID 1

## Hinweise / Tipps:

Arbeite mit der App.js Datei. Zudem solltest du das "Vorschau"-Fenster offen haben, um die Auswirkungen deine Änderungen nachvollziehen zu können.

- HTML: https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Aufgaben:

### Aufgabe 1: Einem Element Stile zuweisen

1.1) Das generische Button-Element hat keinen zugeordneten Stil-Anweisungen und wird mit Standardwerten dargestellt. Lege eine neue Datei "style.css" im Ordner src an und importiere diese in App.js. Wähle einen passenden Selektor für den Button und weise die folgende Stile dem Button zu:

- Der Button soll 30 Pixel hoch und 100 Pixel breit sein. (-> height, width)
- Er soll eine Umrandung haben, welche 1 Pixel breit ist und eine gestrichelte Linie in blauer Farbe hat. (-> border)
- Die Hintergrundfarbe soll weiss sein. (-> background)
- Für die Schrift verwende den Schrifttyp "Arial", Fettschrift und eine beliebige Farbe (Hex-Code), welche du mit einem "Color Picker" aus dem Internet definierst. (-> font)
- Um die Schaltfläche des Buttons für Nutzer:innen als "klickbar" anzuzeigen, soll sich der Mauszeiger verändern, wenn er über dem Button ist. Finde die Eigenschaft mit der sich der Zeiger ändern lässt und wähle einen passenden Wert. Warum hast du dich für diesen entschieden? Verändert sich der Mauszeiger, wenn er über den Button bewegt wird? (-> cursor)

  1.2) Ändere den Text des Buttons, sodass dieser "Button 1" als Inhalt hat.

  1.3) Dupliziere mit copy & paste deinen Button. Ändere den Button-Text auf "Button 2". Ergänze den duplizierten Button dann um ein style-Attribut:

```
// Inline-Stile werden im style-Attribut des HTML-Elements geschrieben:
<button style={{....deine Stile}}>
Beachte die doppelte geschweifte Klammer!
```

```
**Achtung**
Im React/ JSX-Kontext werden Stil-Anweisungen in Javascript-Syntax geschrieben:
- Eigenschaften / Werte werden in "camelCase", anstatt mit Bindestrich getrennt (z.B. marginTop statt margin-top),
- Werte benötigen Anführungszeichen (z.B. "#ffffff" statt #ffffff), ausser es sind Zahlen.
- Deklarationen werden mit Kommas anstatt Semikolon getrennt (z.B. {color: "red", backgroundColor: "#fff"}
```

1.4) Füge im Style-Attribut des zweiten Buttons nun folgende Deklarationen hinzu:

- Eine Schriftgrösse von 20px
- Rote Hintergrundfarbe

  1.5) Überprüfe ob der Button zugleich von deinem Selektor (siehe 1.1) erfasst wird. Falls ja: Welche Schriftgrösse und Farbe setzt sich durch (wird vom Browser angewandt). Warum?

## Aufgabe 2: Block und Inline Elemente

2.1) Lege **drei** div-Elemente ("Kinder") innerhalb des divs mit der id="Elternelement" an. Die drei Elemente sollten auf der gleichen Hierarchie-Ebene liegen (Geschwister) und nicht untereinander verschachtelt sein.

2.2) Jedes der drei Kind-Elemente soll 40px hoch und 60px breit sein sowie eine schwarze Umrandung (1px, durchgezogene Linie) haben.

2.3) Das erste Kind soll eine rote, das zweite eine blaue, das dritte eine grüne Hintergrundfarbe haben. Füge der CSS-Datei aus Aufgabe 1 entsprechende Selektoren und Deklarationen hinzu. Welche Selektoren eignen sich?

2.3) Füge als ein weiteres Kind (gleiche Hierarchie-Ebene wie die drei divs) noch ein span-Element hinzu. Gib dem Span als Inhalt den Text "Span". Wähle einen Selektor und weise die gleichen Stile dem Span-Element zu, welche du in 2.2 verwendet hast.
Welche Stile werden angewendet? Welche nicht und warum? Was passiert, wenn du den Text aus dem Span entfernst, sodass es ein leeres Element ist?

## Aufgabe 3: Flexbox

3.1) Die vier Kinder aus Aufgabe 2 sollen auf einer Zeile dargestellt werden. Ergänze das div mit der id="Elternelement" um den folgenden Inline-Stil:

```
<div id="Elternelement" style={{display: "flex", flexDirection: "row"}}>
```

Erklärung: display: "flex" aktiviert Flexbox-Regeln für die Kind-Elemente. "Row" (horizontal) oder "column" (vertikal) gibt die Richtung an.

3.2) Füge der gleichen Inline-Stil-Anweisung noch die Eigenschaft `width: "500px"` sowie `border: 2px dashed grey` hinzu. Ergänze die Anweisung um `justifyContent` und probiere die folgenden Werte (mit Anführungszeichen geschrieben) aus:

- left
- right
- center
- space-around
- space-between

Wie verändert sich die Positionierung?

**Achtung!**: <br>
"justifyContent" sowie "alignItems" sind von der gewählten "flexDirection" (row oder column) abhängig. justifyContent positioniert entlang der Hauptachse (horizontal bei row, vertikal bei column), "alignItems" jeweils im 90°-Winkel dazu.

Eine gute Referenz und Erklärung:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
