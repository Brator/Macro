// guérison accélérée

main()

async function main(){
  let newHealth = actor.data.data.attributes.hp.temp + 1

  //update the actor health
  await actor.update({"data.attributes.hp.temp": newHealth});
  ui.notifications.info(`${actor.data.name} guérit 1 pts de vie temporaire`)
}
