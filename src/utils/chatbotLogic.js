// This logic was implemented with the help of Gemini

function getRandomReply(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
}

export function getRobotResponse(text) {
  const cleanInput = text.toLowerCase().trim();

  const responses = {
    greetings: [
      "Hello there! Ready to cook smarter?",
      "Hi! How can I help you in the kitchen today?",
      "Hey! What are we cooking today?",
      "Welcome to Cook Smarter! Let's make something delicious."
    ],
    identity: [
      "I'm Chef Smarty, your Cook Smarter assistant!",
      "My name is Chef Smarty. I'm here to help you cook smarter, not harder.",
      "You can call me Chef Smarty. I love talking about food!"
    ],
    howAreYou: [
      "I'm doing great! Simmering with excitement to help you.",
      "I'm a bot, so I don't eat, but I am hungry for some new recipes!",
      "I'm fantastic! Just thinking about all the delicious meals we can make.",
      "Everything is running smoothly in my kitchen. How are you?"
    ],
    chicken: [
      "Chicken is a versatile choice! How about a roasted chicken with herbs?",
      "Grilled chicken breast with veggies is always a healthy win.",
      "You could make a creamy chicken pasta or a spicy curry. Which sounds better?",
      "Fried chicken? Or maybe something lighter like a chicken salad?"
    ],
    meat: [
      "A juicy steak sounds amazing right now.",
      "How about a slow-cooked beef stew for dinner?",
      "You could make burgers, meatballs, or a classic roast beef.",
      "Red meat pairs well with potatoes. Shall we look for a recipe?"
    ],
    seafood: [
      "Seafood is delicious and healthy! Grilled salmon is a favorite.",
      "How about some shrimp scampi or fish tacos?",
      "Baked white fish with lemon and butter is simple and tasty.",
      "Sushi night? Or maybe a nice seafood paella?"
    ],
    drinks: [
      "Thirsty? How about a fresh fruit smoothie?",
      "Don't forget to stay hydrated with water! Or maybe some iced tea?",
      "A hot cup of coffee or herbal tea might be nice.",
      "Freshly squeezed juice is the best way to start the day."
    ],
    hunger: [
      "Sounds like you need a quick recipe! Do you have any specific ingredients?",
      "Don't worry, we can fix that. What kind of food are you craving?",
      "Let's get cooking! Are you looking for breakfast, lunch, or dinner?",
      "I can help with that. Do you want something sweet or savory?"
    ],
    recipes: [
      "I have thousands of recipes. Tell me what ingredients you have!",
      "Sure! Do you want something healthy, or are we treating ourselves today?",
      "Searching for recipes... Just kidding! Tell me what you like to eat.",
      "I can suggest Italian, Mexican, or Asian dishes. What do you prefer?"
    ],
    gratitude: [
      "You're welcome! Happy cooking! 🍳",
      "Anytime! Remember: Cook smarter, not harder.",
      "Glad I could help! Enjoy your meal.",
      "No problem! Let me know if you need more tips."
    ],
    agreement: [
      "Great! Let's keep going.",
      "Awesome.",
      "Okay! What's next on the menu?",
      "Sounds good to me.",
      "Noted!"
    ],
    love: [
      "That's sweet! I love helping you cook.",
      "I love food the most, but you're pretty cool too!",
      "Aw, thanks! You are a star in the kitchen."
    ],
    farewell: [
      "Goodbye! Happy cooking!",
      "See you later! Don't burn the kitchen down!",
      "Bye! Come back when you're hungry.",
      "Have a delicious day!"
    ],
    help: [
      "I'm here to help! You can ask me for recipes, ingredients, or cooking tips.",
      "How can I assist? Tell me what you have in your fridge.",
      "I can help you decide what to eat. Just say 'I am hungry'."
    ],
    fallback: [
      "I'm mostly an expert on cooking. Try asking me for a recipe!",
      "I didn't quite catch that, but remember: Cook smarter, not harder! 🥕",
      "My chef brain is strictly for food. Ask me about ingredients or meals!",
      "I'm still learning! Try asking about chicken, meat, or drinks."
    ]
  };

  if (cleanInput.match(/\b(hello|hi|hey|morning|greetings)\b/)) {
    return getRandomReply(responses.greetings);
  }

  if (cleanInput.match(/(how|what) (are|r) (u|you)/) || cleanInput.includes("how is it going")) {
    return getRandomReply(responses.howAreYou);
  }

  if (cleanInput.includes("name") || cleanInput.includes("who are") || cleanInput.includes("call you")) {
    return getRandomReply(responses.identity);
  }

  if (cleanInput.match(/(help|assist|support)/)) {
    return getRandomReply(responses.help);
  }

  if (cleanInput.match(/(chicken|poultry|wings|breast)/)) {
    return getRandomReply(responses.chicken);
  }

  if (cleanInput.match(/(meat|beef|steak|lamb|burger)/)) {
    return getRandomReply(responses.meat);
  }

  if (cleanInput.match(/(fish|seafood|shrimp|salmon|tuna|crab)/)) {
    return getRandomReply(responses.seafood);
  }

  if (cleanInput.match(/(drink|juice|water|coffee|tea|soda|beverage)/)) {
    return getRandomReply(responses.drinks);
  }

  if (cleanInput.match(/(hungry|starv|eat|food|snack)/)) {
    return getRandomReply(responses.hunger);
  }

  if (cleanInput.includes("recip") || cleanInput.includes("cook") || cleanInput.includes("make") || cleanInput.includes("dish")) {
    return getRandomReply(responses.recipes);
  }

  if (cleanInput.includes("thank") || cleanInput.includes("thx")) {
    return getRandomReply(responses.gratitude);
  }

  if (cleanInput.match(/\b(ok|okay|k|cool|nice|good|fine|alright|done)\b/)) {
    return getRandomReply(responses.agreement);
  }

  if (cleanInput.match(/(love|like|best|amazing)/) && cleanInput.includes("you")) {
    return getRandomReply(responses.love);
  }

  if (cleanInput.match(/(bye|goodbye|see you|later|night)/)) {
    return getRandomReply(responses.farewell);
  }

  return getRandomReply(responses.fallback);
}