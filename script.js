const sketchContainer = document.querySelector('.sketchContainer')
const gridSizeBtn = document.querySelector('.gridSizeBtn')

const containerWidth = 800;

function createGrid(num){
    for(let i = 0; i < num*num; i++){
        let grid = document.createElement('div')
        grid.style.border = '1px solid black'
        grid.style.display = 'flex'
        grid.style.flex = '1'
        grid.style.aspectRatio = '1/1'
        grid.style.minWidth = `${containerWidth / num}px`
        sketchContainer.append(grid)
    }
}
createGrid(50)

function hoverEffect(){
    let sketchChildren = Array.from(sketchContainer.children)
    sketchChildren.forEach(element => {
        element.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black'
    })
    }); 
}
hoverEffect()

gridSizeBtn.addEventListener('click', () => {
    let userDefinedGrid = prompt('Enter a single number that will be multipled by itself for the grid')
    while(userDefinedGrid > 100 || userDefinedGrid <= 0){
        userDefinedGrid = prompt('Please dont enter a number over 100 or less than 1 as this can cause issues with the browser crashing')
    }
        sketchContainer.textContent = ''
        createGrid(userDefinedGrid)
        hoverEffect()
})
