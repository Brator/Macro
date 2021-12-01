main()

async function main(){
    //défini le token selectionner, doit être 1 seul
    let selected = canvas.tokens.controlled;
    if(selected.lengh == 0 || selected.lengh > 1){
        ui.notification.error("mais bon sang selectionne qu'un token")
    }

    //défini le token ciblé, doit être 1 seul
    let targets = Array.from(game.user.targets);
    if(targets.lengh == 0 || targets.lengh > 1){
        ui.notification.error("mais bon sang selectionne qu'une cible")
    }

    let currentActor = selected[0].actor; //le token selectionné devient currentActor
    let currentTarget = targets[0].actor; //le token ciblé devient currentTarget
    
    let newHealth = currentActor.data.data.attributes.hp.value - 5 //newhealth représente -5 point de vie

  //mets à jour les point de vie du token selectionner
  await currentActor.update({"data.attributes.hp.value": newHealth});
  ui.notifications.info(${currentActor.data.name} subit 5 dégats du lien de vie)

let newHealthtarget = currentTarget.data.data.attributes.hp.value + 5

  //mets à jour les point de vie de la cible
  await currentTarget.update({"data.attributes.hp.value": newHealthtarget});
  ui.notifications.info(${currentTarget.data.name} reçoit 5 soins du lien de vie)
}
