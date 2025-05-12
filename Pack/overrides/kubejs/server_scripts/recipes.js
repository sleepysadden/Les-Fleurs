ServerEvents.recipes(event => {
    // Addition:
    
    
    
    //Modification:
    
    
    //Removal:
    event.remove({ id: 'lolmbv:bookshelf' });
    event.remove({ id: '/createfood:minecraft.*_bucket_from_crafting.*/' });
    event.remove({ id: '/createfood:minecraft.*mix_bucket_from_shaped.*/' });
    event.remove({ id: '/createfood:minecraft.*dessert_block_from_crafting.*/' });
    event.remove({ id: '/createfood:minecraft.*ice_cream_bucket_from_shaped.*/' });
    



    
        console.log('Recipes modified by KubeJS');
    });