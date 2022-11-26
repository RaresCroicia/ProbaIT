# Proba IT - Rares Croicia

## Tasks done

### FRONTEND
- [ ] Navbar
- [ ] Landing page
- [ ] Login/Register
- [ ] Upload Form
- [ ] Footer
- [ ] Responsiveness

### BACKEND

- [X] DB Schema
- [X] CRUD Memes
- [ ] Register/Login
- [ ] Input Validation
- [ ] Protected endpoints
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

## Funny moments (Orice cod bun e nevoit sa aiba astfel de momente)
- Eu incercand sa imi dau seama de ce nu merge POST si dupa 20 de minute sa vad ca am scris PATCH in loc de POST in router. Am avut un moment de brainfuck masiv
