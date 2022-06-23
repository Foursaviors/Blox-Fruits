let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = ['Control', 'Light', 'Chop','Chop','Chop', 'Flame','Flame','Flame','Flame', 'Light', 'Spike', 'Bomb','Bomb','Bomb','Bomb', 'Soul', 'Dragon', 'Buddha', 'Ice', 'Dark','Shadow','Dough','Rumble','Paw','Quake', 'Door', 'Sand', 'Gravity'
,'Sand','Sand','Light', 'Diamond', 'Smoke','Spin','Spin','Spin', 'Light','Falcon','Falcon','Falcon','Falcon','Revive','Spring','Love','Barrier','Magma','Venom','Kilo'
,'Sand','Sand','Light', 'Diamond', 'Smoke','Spin','Spin','Spin', 'Light','Falcon','Falcon','Falcon','Falcon','Revive','Spring','Love','Barrier','Magma','Venom','Kilo'
,'Sand','Sand','Light', 'Diamond', 'Smoke','Spin','Spin','Spin', 'Light','Falcon','Falcon','Falcon','Falcon','Revive','Spring','Love','Barrier','Magma','Venom','Kilo'
,'rubber','rubber','rubber'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});