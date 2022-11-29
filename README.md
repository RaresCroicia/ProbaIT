# Proba IT - Rares Croicia

## Tasks done

### FRONTEND
- [X] Navbar
- [ ] Landing page
- [X] Login/Register
- [ ] Upload Form
- [ ] Footer
- [ ] Responsiveness

### BACKEND

- [X] DB Schema
- [X] CRUD Memes
- [X] Register/Login
- [X] Input Validation
- [X] Protected endpoints
- [ ] Bonus: File Upload

## Setup and Run

Pas #1: Se cloneaza repo-ul

```bash
git clone https://github.com/RaresCroicia/ProbaIT && cd ProbaIT # Acum ne aflam in directorul cu implementarea
```

Pas #2: Se instaleaza pachetele ```nodejs``` si ```npm``` (depinde de sistemul de operare comenzile de install)

Pas #3: Se initiaza proiectul descarcand pachetele necesare

```bash
# O sa presupun ca suntem in directorul ProbaIT
npm install
cd frontend && npm install # Asteptam
cd ../backend && npm install # Asteptam 
```

Pas #4: Se porneste proiectul
- Pentru a porni si backend-ul si frontend-ul, in the same time, folosim
```bash
npm run dev
```
- Pentru a porni doar frontend-ul folosim
```bash
npm run frontend
```
- Pentru a porni doar backend-ul folosim
```bash
npm run backend
```

## Tehnologii folosite

### FRONTEND
- React
- Bootstrap

### BACKEND
- Node.js - express
- MongoDB

## Detalii de implementare

### FRONTEND

### BACKEND

## Probleme intampinate + Fixes

### FRONTEND

### BACKEND
- Cand folosesc variabilele din .env pentru a ma conecta la server, nu pot face operatii for some reason, i will look into it
- [FIX] nu folosi nume clasice din variabilele linux (USERNAME), fa-le cat mai originale si unice (adauga un prefix)

## Funny moments (Orice cod bun e nevoit sa aiba astfel de momente)
- Eu incercand sa imi dau seama de ce nu merge POST si dupa 20 de minute sa vad ca am scris PATCH in loc de POST in router. Am avut un moment de brainfuck masiv
- Cand incerci sa folosesti o variabila din .env, asigura-te ca ai si pus-o acolo (mama ei)
- Orice cod bun e reparat de greseala umana vazuta si constientizata, "da in mortii lui un console.log cand nu merge ceva"
- Nu e problema daca nu faci butonu de meme it sa te trimita pe pagina principala cat timp ai o singura pagina!