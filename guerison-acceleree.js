//// Guérison accelérée
  ////// avec message 
main()

async function main(){
  let newHealth = actor.data.data.attributes.hp.temp + 1

//mets à jour la santé temporaire
await actor.update({"data.attributes.hp.temp": newHealth});
ui.notifications.info(`${actor.data.name} guérit 1 pts de vie temporaire`)
  
// annonce dans le chat que le pion sélectionné guérit
let controlledToken = canvas.tokens.controlled[0];
const content = `<p>${controlledToken.name} guérit de 1 pv temporaire</p>`;

ChatMessage.create({
  speaker: ChatMessage.getSpeaker(controlledToken),
  content: content,
  type: CONST.CHAT_MESSAGE_TYPES.OTHER
});

}
