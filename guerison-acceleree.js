//// New Health is going to be grater the max health
  ////// If so, we want the new health to max 
main()

async function main(){
  let newHealth = actor.data.data.attributes.hp.temp + 1
  
    //If token is max health if so, don't do anything
  if(actor.data.data.attributes.hp.temp == 116){
    ui.notifications.error(`${actor.data.name} a déjà le max de pv temporaire`);
    return;
  }

  //update the actor health
  await actor.update({"data.attributes.hp.temp": newHealth});
  ui.notifications.info(`${actor.data.name} guérit 1 pts de vie temporaire`)

let controlledToken = canvas.tokens.controlled[0];
const content = `<p>${controlledToken.name} guérit de 1 pv temporaire</p>`;

ChatMessage.create({
  speaker: ChatMessage.getSpeaker(controlledToken),
  content: content,
  type: CONST.CHAT_MESSAGE_TYPES.OTHER
});

}
