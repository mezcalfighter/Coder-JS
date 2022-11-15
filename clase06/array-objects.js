const transformers = [
    {
        name: 'Optimus Prime',
        form: 'Feightliner Truck',
        team: 'Autobot'
    },
    {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
    },
    {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Autobot'
    },
    {
        name: 'Megatron',
        form: 'Feightliner Truck',
        team: 'Autobot'
    },
];

//for of: loop o ciclo que opera sobre objetos iterables array
for(const transformer of transformers){
    console.log('Name:',transformer.name,"Team:",transformer.team);
}