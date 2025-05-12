//F&C and FD comp

LootJS.modifiers((event) => {
    event.addBlockLootModifier("farmersdelight:tomatoes")
        .replaceLoot("farmersdelight:tomato", "farm_and_charm:tomato")
    event.addBlockLootModifier("farmersdelight:wild_tomatoes")
        .replaceLoot("farmersdelight:tomato", "farm_and_charm:tomato")
});
