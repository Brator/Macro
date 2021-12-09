//// Régen (5)
  ////// avec check si max. est atteint
main()

async function main(){
  let newHealth = actor.data.data.attributes.hp.value + 5
    if(newHealth > actor.data.data.attributes.hp.max){
    newHealth = actor.data.data.attributes.hp.max
  }
  
    //Si le token à déjà autant de pv temp, la guérison ne fonctionne pas
  if(actor.data.data.attributes.hp.value == actor.data.data.attributes.hp.max){
    ui.notifications.error(`${actor.data.name} a déjà le max de pv`);
    return;
  }



  //met à jour la santé du pion
  await actor.update({"data.attributes.hp.value": newHealth});
  ui.notifications.info(`${actor.data.name} se régénère `)
//créée une alerte avec le nom du pion
let controlledToken = canvas.tokens.controlled[0];
const content = `<p>${controlledToken.name} se régénère </p>`;
//créée un message dans le chat avec le nom du pion
ChatMessage.create({
  speaker: ChatMessage.getSpeaker(controlledToken),
  content: content,
  type: CONST.CHAT_MESSAGE_TYPES.OTHER
});

}
