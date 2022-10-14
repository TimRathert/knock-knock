# Knock-Knock

### Who's there?

Knock-Knock is here to guess who might be at the door. Knock-Knock takes user input and attempts to interject the answer to the knock-knock jokes before you can. How rude.

## Table of Contents
-[Technology](#technology)  
-[Screenshots](#screenshots)  
-[Planning Docs](#planning-docs)  
-[User Stories](#user-stories)  
-[Goals](#goals)  
-[Closing Thoughts](#closing-thoughts)  

## Technology

#### Front End
* NextJS  
* TailwindCSS  
* HeadlessUI  
* React-Scroll  
* Deployed with Vercel  

#### Back End
* Python
* Flask
* HuggingFace Sentence Transformers (<a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">all-Mini-L6-v2</a>)
* MongoDB via PyMongo
* Deployed with Heroku

## Screenshots

<details>
<summary> Main Screen </summary>
<img src='./knock-knock/public/knock-knock/public/ss01.jpg' alt ='Main Screen' width="100%">
</details>

<details>
<summary> In Progress </summary>
<img src='./knock-knock/public/knock-knock/public/ss02.jpg' alt ='In Progress' width="100%">
</details>

<details>
<summary> Functions to add text to chat window </summary>
<img src='./knock-knock/public/knock-knock/public/ss03.jpg' alt ='Functions to add text to chat window' width="100%">
</details>

<details>
<summary> Chat window base code </summary>
<img src='./knock-knock/public/knock-knock/public/ss04.jpg' alt ='Chat window code' width="100%">
</details>

## Planning Docs

<details>
  <summary>
    Site Flow
  </summary>
<img src="./planning-docs/flowchart01.png" alt="Spaghetti" width="100%" />
</details>

<details>
  <summary>ERD</summary>
  <img src="./planning-docs/wireframe01.png" alt="Sick flow with more jokes than Bazooka Joe"  width="100%" />
</details>

<details>
  <summary>Wireframe</summary>
  <img src="./planning-docs/actualwireframe01.png" alt="rip DOOM" width="100%" />
</details>


## User Stories
* User opens the page and clicks on a 'Knock-Knock' button to intiate interaction: "Knock, Knock", "Who's there?", __________
* User inputs the first response and the site returns a guess as to how the joke might finish.
* If the computer response is incorrect, it will try one additional guess.
* If both are incorrect, the user is prompted to submit the correct answer, which is then added to the knock knock jokes database.
* NOTE: Validating the joke a second time ended up being pretty complex. I'll add it as a future goal.

## Goals
| Goals | When? |
|-------|-------|
| Backend research | Done |
| HuggingFace(hf) research | Done |
| Setup JokeDB | Done |
| Setup HF Interaction | Done |
| Backend Deployment | Done |
| Basic frontend setup | Done |
| front/back interaction | Done |
| Frontend styling | Done |
| Firebase Integration | Done |
| Authentication | Soon |
| Sessions Based on Firebase Login | Soon |
| Input filtering | Stretch |
| Multiple Joke Guesses | Later |


## Closing Thoughts

Could I have done this in React using fuzzy searches and achieved the current state of the application? 

Yes... But my goal is to continue to build this app out to auto complete longer jokes (or add them to the database). If I get to that point and realize that I still could've done so without lifting so much tech, then I'll refactor the app.



