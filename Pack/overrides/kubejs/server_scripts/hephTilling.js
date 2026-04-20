BlockEvents.rightClicked('immersive_weathering:loam', event => {
    let item_stack = event.getItem();
    if (item_stack.id === "tconstruct:mattock") {
        event.block.set('immersive_weathering:');
    }
})  