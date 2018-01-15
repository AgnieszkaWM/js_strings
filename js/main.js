var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = ('triceratops');

var nameUpperCased = dinosaur.toUpperCase();
console.log(nameUpperCased);

var changeNameOfDinosaur = text.replace('Velociraptor', 'Triceratops');
var halfText = changeNameOfDinosaur.length / 2;
var textSlice = changeNameOfDinosaur.slice(0,halfText);

console.log(textSlice);