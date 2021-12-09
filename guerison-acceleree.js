//// guérison accelèrée
  ////// avec check si max. est atteint
main()

async function main(){
  let newHealth = actor.data.data.attributes.hp.temp + 1
  
    //Si le token à déjà autant de pv temp, la guérison ne fonctionne pas
  if(actor.data.data.attributes.hp.temp == 116){
    ui.notifications.error(`${actor.data.name} a déjà le max de pv temporaire`);
    return;
  }

  //met à jour la sanét du pion
  await actor.update({"data.attributes.hp.temp": newHealth});
  ui.notifications.info(`${actor.data.name} guérit 1 pts de vie temporaire`)
//créée une alerte avec le nom du pion
let controlledToken = canvas.tokens.controlled[0];
const content = `<p>${controlledToken.name} guérit de 1 pv temporaire</p>`;
//créée un message dans le chat avec le nom du pion
ChatMessage.create({
  speaker: ChatMessage.getSpeaker(controlledToken),
  content: content,
  type: CONST.CHAT_MESSAGE_TYPES.OTHER
});

}
