// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement,such as You really like bananas!

const favoritefruits: string []=["Banana", "mango", "Cherry"];

if(favoritefruits.includes("Banana")){
    console.log("You really like Bananas!")
}
if(favoritefruits.includes("Mango")){
    console.log("You really like Mango!")
}
if(favoritefruits.includes("Orange")){
    console.log("You really like Orange!")
} else {
    console.log("Orange are not in your favriot fruits list.");
}
if(favoritefruits.includes("Cherry")){
    console.log("You really like Cherries!")
}
if(favoritefruits.includes("Grapes")){
    console.log("You really like Grapes!")
}else{
    console.log("Grapes are not in your favriot list." )
}



