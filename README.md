## PROJECT OVERVIEW

- NAME: ROHAN SINHA
- PROJECT NAME: DID I LIKE THAT?
- GITHUB LINK: https://github.com/rohansinha01/capstone
- DEPLOYED LINK: *ADD LATER*
### Project Description

Media consumption has never been higher in this world. It has never been easier to get involved in media discourse than this moment in time. We all watch, read, or listen to so much that it gets tricky deciphering what you just watched and if you liked it or not. 

What I want to accomplish with this app is give me people clarity on WHY they enjoyed something using 3 key data points marking each point on a 1-5 enjoyment scale. The categories are:

#### Characters:
How did you enjoy the characters in this story? Were they effective in making you feel for them? Did the performances take the project to the next level? 

#### Story:
How did you enjoy the story? There are many ways to define writing, but let's simplify them to three components: Big Picture, Dialogue, Events that took place. Do all of these work together?

#### Vibe: 
Vile characters getting a big reaction of disgust out of you is effective, but did it ruin your mood watching them? A well made movie about a dark subject matter, no matter how well made, will dampen the amount you want to think about it. This category is dedicated to the vibe of the media. The X-Factor that can make a technically bad movie enjoyable.

We will take the score of all 3 categories and attribute each score with the following:

##### Scoring:
3-7: "I didn't like it!"<br>
8-12: "I liked it!"<br>
13-15: "I loved it!"

Of course, things change. People change. Weather change. Opinions change. You can always update your score after time with the piece of media. That is allowed. And encouraged!


## TECHNOLOGIES USED

NextJS: Frontend<br>
Appwrite: Backend<br>
typescript: using it within NextJS<br>
tailwind: styling

## Frontend Route Map
| Route Name | Path  | Action | Description |
|------------|----------|--------|-------------|
| Media Index | ""  | allMedia  |  Renders all of the Media and thoughts on a page |
| Create Media | "/addMedia" | createAction | Creates the new Media from the form |
| Update Media | "/id"  | updateAction | Updates the existing Media from the form  |
| Remove Media | "delete/id" | deleteAction | Deletes the Media selected |



## ERD (Entity Relationship Diagram) and Architecture
ERD<br>
![ERD](https://imgur.com/ahw3Qg3.png)

Architecture<br>
![Architecture](https://imgur.com/KctWBno.png)


## DESKTOP VIEW
![Desktop View](https://imgur.com/bpnhbHZ.png)


