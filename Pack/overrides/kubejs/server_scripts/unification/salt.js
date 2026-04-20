ServerEvents.recipes(event => { 
    event.replaceInput(
        {input: 'vegandelight:salt'},
        'vegandelight:salt',
        '#c:salt'
    );
    event.replaceInput(
        {input:'createfood:salt'},
        'createfood:salt',
        '#c:salt'
    );
    event.replaceInput(
        {input:'expandeddelight:ground_salt'},
        'expandeddelight:ground_salt',
        '#c:salt'
    );

})