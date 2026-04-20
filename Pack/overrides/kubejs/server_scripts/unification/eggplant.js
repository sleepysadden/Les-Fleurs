ServerEvents.recipes(event => {
    function unifyCrop(targetSeed, targetCrop, targetCrate, desiredSeed, desiredCrop, desiredCrate, cropFromCrateRecipeID) {
    event.replaceOutput({output: targetCrop}, targetCrop, desiredCrop);
    event.replaceOutput({output: targetSeed}, targetSeed, desiredSeed);
    event.replaceInput({input: targetCrop}, targetCrop, desiredCrop);
    event.shapeless(Item.of(desiredCrop), [targetCrop]);
    event.shapeless(Item.of(desiredSeed), [targetSeed]);
    event.shapeless(Item.of(desiredCrate), [targetCrate]);
    event.remove({output: targetCrate});
    event.remove({output: targetCrop});
    }


    unifyCrop('dumplings_delight:eggplant_seeds', 'dumplings_delight:eggplant', 'dumplings_delight:eggplant_crate', 'culturaldelights:eggplant_seeds', 'culturaldelights:eggplant', 'culturaldelights:eggplant_crate', 'dumplings_delight:eggplant_from_crate');
    //event.replaceOutput({output: 'dumplings_delight:eggplant'},'dumplings_delight:eggplant','culturaldelights:eggplant');
    //event.replaceInput({input: 'dumplings_delight:eggplant'},'dumplings_delight:eggplant','culturaldelights:eggplant');
    //event.shapeless(Item.of('culturaldelights:eggplant'), ['dumplings_delight:eggplant']);
    //event.shapeless(Item.of('culturaldelights:eggplant_seeds'), ['dumplings_delight:eggplant_seeds']);
    //event.shapeless(Item.of('culturaldelights:eggplant_crate'), ['dumplings_delight:eggplant_crate']);
    //event.remove({id: 'dumplings_delight:eggplant_crate'})
    //event.remove({id: 'dumplings_delight:eggplant_from_crate'})

});


