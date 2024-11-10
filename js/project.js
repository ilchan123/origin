const categories = document.querySelector('.categories')
const projectsContainer = document.querySelector('.projects')
const projects = document.querySelectorAll('.project')

categories.addEventListener('click', (e)=>{
    const filter = e.target.dataset.category 

    // e element
    // category 라고 쓰면 data-category를 받아서 읽어온다. 
    // console.log(filter) 이건 그걸 받아서 console에 해당 data-category를 보이도록 하는 것
    if(filter == null){
        return;
    }
    activeSelection(e.target)
    filterProjects(filter)
})

function activeSelection(target){
    const active = document.querySelector('.category--selected')
    active.classList.remove('category--selected')
    target.classList.add('category--selected')
    
}


// 요소.target.dataset.type category가 아닌 type으로 접근
function filterProjects(filter){
    projects.forEach((project) =>{
        if(filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block'
        }else{
            project.style.display = 'none'
        }
    })

    projectsContainer.classList.add('anim-out')
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out')
    }, 300)
}