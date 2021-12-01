//lien de vie de l'oracle, chaque personnage possédant un Buff "Lien de vie" se vera accorder les points de vie, et l'oracle sélectionner en perdrant autant


main()
async function main(){
const oracle = game.actors.get(ChatMessage.getSpeaker().actor) ?? game.user.character ?? canvas.tokens.controlled[0];
let healingSum = 0;
const updateData = canvas.scene.tokens
  .filter((t) => t.isLinked === true)
  .map((t) => t.actor)
  .filter((a) => a.type === "character" && a.id !== oracle.id)
  .filter((a) => a.items.some((i) => i.type === "buff" && i.name === "Lien de vie" && i.isActive))
  .reduce((updateData, actor) => {
    const { value, max } = actor.data.data.attributes.hp;
    if (max - value >= 5) {
      healingSum += 5;
      updateData.push({ _id: actor.id, "data.attributes.hp.value": value + 5 });
    }
    return updateData;
  }, []);
if (updateData.length) {
  const hp = oracle.data.data.attributes.hp.value;
  updateData.push({ _id: oracle.id, "data.attributes.hp.value": hp - healingSum });
  Actor.updateDocuments(updateData);
  }
let messageTable = "<h2>les liens de vie s'activent</h2>"
let chatData = {
    user: game.user._id,
    content: messageTable,
};
ChatMessage.create(chatData, {});
}
