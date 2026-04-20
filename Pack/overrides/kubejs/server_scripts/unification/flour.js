ServerEvents.recipes(event => { 
    event.replaceInput(
        {input: 'fancydelight:flour'},
        'fancydelight:flour',
        'farm_and_charm:flour'
    );
    event.replaceOutput(
        {output: 'fancydelight:flour'},
        'fancydelight:flour',
        'farm_and_charm:flour'
    );
    event.replaceInput(
        {input: 'create:wheat_flour'},
        'create:wheat_flour',
        'farm_and_charm:flour'
    );
    event.replaceOutput(
        {output: 'create:wheat_flour'},
        'create:wheat_flour',
        'farm_and_charm:flour'
    );

})