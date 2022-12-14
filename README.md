# Proba IT - Rares Croicia

## Tasks done

### FRONTEND
- [X] Navbar
- [X] Landing page
- [X] Login/Register
- [X] Upload Form
- [X] Footer
- [X] Responsiveness (aproximativ, inca mai are probleme la unele chestii din cauza meme-ului cu salt bae)

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

#### NAVBAR
- [Navbar](frontend/src/components/MyNavbar.jsx)
- Am folosit navbar-ul din bootstrap pentru stilizare
- Avem in el logo-ul cu memeit
- in dreapta avem urmatoarele butoane:
    - fie doua butoane de login si register
    - fie de delogare
    - am folosit un state pentru a vedea daca e logat sau nu, iar in localStorage am salvat access tokenul.

#### LANDING PAGE
- [Aplicatia](frontend/src/App.js)
- Am folosit un container in care am practic primul rand landing page-ul
- Randul are doua coloane, prima coloana care e practic prima jumatate are textul si butonul care te trimite la form-ul de upload, iar a doua jumatate are meme-ul mare cu salt_bae

#### LOGIN & REGISTER POP-UPS
- [Register](frontend/src/components/ModalRegister.jsx)
- [Login](frontend/src/components/ModalLogin.jsx)
- Pop-up-urile apar cand sunt apasate butoanele de login/register
- Ele initial sunt ascunse si folosind state-uri ele devin vizibile cand e apasat butonul respectiv

#### UPLOAD FORM
- [Form](frontend/src/App.js#L70-L95)
- Cand vrei sa uploadezi folosind butonul, te va lasa sa selectezi doar fisiere de tipul acceptat (png, jpg, jpeg, gif)
- Daca dai drag and drop, poti pune ce fisier vrei tu, insa cand apesi butonul de submit, este o verificare care verifica daca fisierul pus e de tipul acceptat.
- In functie de ce fisier ai bagat, poti avea urmatoarele modale dupa submit:
    - [Posted](frontend/src/components/ModalPosted.jsx) : a fost corect tipul fisierului
    - [Wrong](frontend/src/components/ModalWrong.jsx) : a fost gresit tipul fisierului

#### FOOTER
- [Footer](frontend/src/components/Footer.jsx)
- nimic special, pe fiecare poza e pus link-ul respectiv.

#### RESPONSIVENESS
- La un moment dat, cum scade rezolutia, incepe sa crape din responsiveness, meme-ul cu salt-bae trece de dimensiunea ecranului, nu am stiut a rezolva, am lasat asa.

### BACKEND

#### DB SCHEMA
- [user-schema](backend/src/models/user.js)
- [meme-schema](backend/src/models/meme.js)
- fiecare schema contine ceea ce s-a cerut in cerinta, meme-urile avand ca FK id-ul unic al user-ului pentru a face legatura intre user si meme

#### CRUD MEMES
- [meme-crud-functions](backend/src/controllers/memes.js)
- [meme-crud-routes](backend/src/routes/memes.router.js)
- functia ```listMemes``` corespunde GET care ia din DB toate meme-urile - localhost:port/api/memes/
- functia ```createMemes``` corespunde POST care adauga in baza de date meme-ul dat, care primeste si id-ul userului care l-a creat - localhost:port/api/memes/
- functia ```getMeme``` corespunde GET care ia din DB meme-ul cu id-ul dat - localhost:port/api/memes/:id
- functia ```deleteMeme``` corespunde DELETE care sterge din DB meme-ul cu id-ul dat localhost:port/api/memes/:id
- functia ```updateMeme``` corespunde PATCH care modifica meme-ul cu id-ul dat. Functia verifica si daca user-ul logat la momentul acela este user-ul care a creat meme-ul localhost:port/api/memes/:id

#### REGISTER/LOGIN
- [user-register-login-functions](backend/src/controllers/users.js)
- [user-register-login-routes](backend/src/routes/users.router.js)
- functia ```registerUser``` primeste in body emailul, userul si parola si verifica daca mail-ul e valid, daca user-ul nu exista deja si daca lungimea parolei/userului este intre 8-32 caractere, daca totul este ok, atunci adauga user-ul in DB, hashuind parola inainte
- functia ```loginUser``` primeste in body userul si parola, verifica daca exista user-ul, daca exista atunci verifica daca are aceeasi parola. Daca totul e ok, atunci trimite token-ul de autentificare

#### INPUT VALIDATION
- Asa cum am explicat la register/login, am facut verificarile necesare ca inputul sa fie valid. La user este explicat mai sus, iar la meme descrierea sa nu depaseasca 2500 caractere.

#### PROTECTED ENDPOINTS
- functia [authenticateToken](backend/src/controllers/users.js#L84-L99) este cea care verifica daca la momentul requesturilor utilizatorul este autentificat.
- Pentru POST si PATCH a fost nevoie ca inainte de a efectua operatiile, sa verificam daca este autentificat.
- Pentru POST: daca trecem de verificarea de autentificare, ducem mai departe si informatiile despre user-ul logat, pentru a putea adauga meme-ul cu id-ul lui ca si createdBy
- Pentru PATCH: dupa ce am trecut de verificarea token-ului, verificam si daca user-ul autentificat este cel care a creat meme-ul inainte de a-l modifica

#### FILE UPLOAD (BONUS)
- Still not done :)))

### FRONTEND && BACKEND LINKED

Totul a fost implementat prin fetch-uri.

#### REGISTER
- Cand apesi pe butonul de register, se face un POST catre serverul de backend cu datele introduse in campuri.
- In functie de rezultatul requestului, fie se afiseaza un modal nou cu eroarea data de server, fie adauga contul in DB.

#### LOGIN
- Cand apesi pe login, in functie de rezultatul requestului, fie te logheaza, fie se afiseaza cu eroarea data de server

## Probleme intampinate + Fixes

### FRONTEND
- Deci imi punea chestii in spatele navbar-ului, fiindca aveam fixed top, recomandat sa pun sticky top ca sa imi continue cu restul sub navbar, nu din spatele lui.
- Cand folosesc bootstrap, ar trebui sa pun si css-ul, altfel ramane default-ul
- Position relative, ca sa centrez butonul cum trebuie, trebuia doar pus .... **bate tobele** .... translate-middle

### BACKEND
- Cand folosesc variabilele din .env pentru a ma conecta la server, nu pot face operatii for some reason, i will look into it
- [FIX] nu folosi nume clasice din variabilele linux (USERNAME), fa-le cat mai originale si unice (adauga un prefix)

### LINKING
- Bag pula in el de cors, la request nu mergea si imi futea ceva, a trebuit doar un app.use(cors()).
- Scuzati limbajul de mai sus :))

## Funny moments (Orice cod bun e nevoit sa aiba astfel de momente)
- Eu incercand sa imi dau seama de ce nu merge POST si dupa 20 de minute sa vad ca am scris PATCH in loc de POST in router. Am avut un moment de brainfuck masiv
- Cand incerci sa folosesti o variabila din .env, asigura-te ca ai si pus-o acolo (mama ei)
- Orice cod bun e reparat de greseala umana vazuta si constientizata, "da in mortii lui un console.log cand nu merge ceva"
- Nu e problema daca nu faci butonu de meme it sa te trimita pe pagina principala cat timp ai o singura pagina!
- Candva vorbeam cu codrut si a zis ca isi baga ceva in el de cors, azi am aflat si de ce, mama lui.