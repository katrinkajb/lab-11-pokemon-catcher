## HTML setup
    1) 3 clickable pokemon images (div with id to add list under)
    2) Instructions div
    3) Hard code some poke-data with name, id, img
 
Create results page:
    1) Generate 'caught' and 'encountered' counts for each pokemon
    2) Display pokemon that were encountered, but never caught
    3) Button to play again (clear local storage so user can play again)


## Plan
    1) Load 3 pokemon on page
        - run it 3 times in constants (Can make a for loop to run it 3 times without having to type it out 3 times) import pics from pokemon-data.js
        a) Generate 3 random pokemon - (FUNCTION 1) -use math.random and rounding
        b) Check that they are unique - logic within function
        c) If they aren't, generate 3 more, repeat until they are unique (while loop)

    2) On load:
        a) IF they've seen each pokemon before, grab from cart (local storage  getItem) and increment 'seen' count. FUNCTION 2  (use a getItemById (FUNCTION 3) - copy from last project)
        b) ELSE if they have not seen it, initialize new cart (setItem) (FUNCTION 4) with 'encountered'(1) and 'caught'(0) counts
            - create arrays for each pokemon (id, seen, caught)

    3) On click (When a user clicks on a pokemon image):
        a) Increment caught (FUNCTION 5) count for clicked pokemon
        b) IF user has done this 10 times, redirect to results page
            - window.location to redirect
        c) ELSE clear textContent and load 3 more pokemon and REPEAT
    4) Clear cart button on results page