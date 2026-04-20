ServerEvents.recipes(event => { 

//Try at making silken tofu craftable with common salt tag, fucking atrocious
    event.replaceInput(
        {id: 'vegandelight:integration/create/compacting/silken_tofu_from_compacting'},
        'vegandelight:salt',
        '#c:salt'
    );
//Standard flour unification
    
    
    
    //Removal:
    event.remove({ id: 'lolmbv:bookshelf' });
//    event.remove({ id: '/createfood:minecraft.*_bucket_from_crafting.*/' });
//    event.remove({ id: '/createfood:minecraft.*mix_bucket_from_shaped.*/' });
//    event.remove({ id: '/createfood:minecraft.*dessert_block_from_crafting.*/' });
//    event.remove({ id: '/createfood:minecraft.*ice_cream_bucket_from_shaped.*/' });
    event.remove({ id: 'culturaldelights:pickle'});
    event.remove({ id: 'culturaldelights:pickle_crate'});
//Polymorph conflict resolution list
    event.remove({ id: 'supplementaries:awnings/awning_dark_gray'});
    event.remove({ id: 'minecraft:dye_purple_wool'});
    event.remove({ id: 'friendsandfoes:mangrove_beehive'});
    event.remove({ id: '/everycomp:af.*_table/'});
    event.remove({ id: '/minecraft:dye.*_wool/'});
    event.remove({ id: 'morecompvarsotbwg:beehive'});
//Remove Grappling hooks' ender staff, forcefield items and upgrades among others
    event.remove({ id: 'grapplemod:ender_staff'});
    event.remove({ id: 'grapplemod:ender_staff_upgrade'});
    event.remove({ id: 'grapplemod:motor_upgrade'});
    event.remove({ id: 'grapplemod:forcefield_upgrade'});
    event.remove({ id: 'grapplemod:forcefield'});
    event.remove({ id: 'grapplemod:rocket'});
    event.remove({ id: 'grapplemod:rocket_upgrade'});
//Removes Heph fire res magma bottle
    event.remove({ id: 'tconstruct:smeltery/casting/slime/magma_bottle'});
//Removes pointed dripstone from dripstone milling recipe in favour of clay
    event.remove({ id: 'letsdocompat:create/mincer/pointed_dripstone'});
    
        console.log('Recipes modified by KubeJS');
    });