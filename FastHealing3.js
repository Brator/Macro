//// guérison accelèrée de 3
main()

async function main()
{
   //je définis la valeur de guérison accélérée que je veux et son contraire pour enlever le buff
    let fh = actor.data.data.traits.fastHealing + 3
    let fh0 = actor.data.data.traits.fastHealing - 3
    // je check si il y a déjà la valeur cible si oui on remets à zéro
    if (actor.data.data.traits.fastHealing == 3){
        ui.notifications.error(`${actor.data.name} a déjà un guérison accélérée`);
        await actor.update({"data.traits.fastHealing": fh0});
        return;
          
      }
      //sinon j'adapte la feuille
      await actor.update({"data.traits.fastHealing": fh});
    
}
