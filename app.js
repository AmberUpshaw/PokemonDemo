// 
const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
const container = document.querySelector('#container');

for(let i = 1; i <= 200; i++){
    const newDiv = document.createElement('div');

    const label = document.createElement('span');
    label.innerText = `#${i}`;
    
    const newImage = document.createElement('img');
    newImage.src = `${url}${i}.png`;
    
    newDiv.classList.add('pokemon');
    newDiv.appendChild(newImage);
    newDiv.appendChild(label)
    container.append(newDiv);
}