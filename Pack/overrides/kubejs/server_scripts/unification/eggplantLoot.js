LootJS.modifiers((event) => {
    event.addBlockLootModifier('dumplings_delight:eggplant_seeds').replaceLoot('dumplings_delight:eggplant', 'culturaldelights:eggplant');
    event.addBlockLootModifier('dumplings_delight:eggplant_seeds').replaceLoot('dumplings_delight:eggplant_seeds', 'culturaldelights:eggplant_seeds');
});