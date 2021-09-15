window.addEventListener('DOMContentLoaded',
    () => {
        markbtn = document.getElementById("mark")
        markbtn.addEventListener("click", () => {
            let grade = document.getElementsByClassName("grade_choices")
            for (let i = 0; i < grade.length; i++) {
                grade[i].style.display = "none"
            }
            let spaces = document.getElementsByClassName("mark_input")
            for (let i = 0; i < spaces.length; i++) {
                spaces[i].style.display = "block"
            }
        })
        gradebtn = document.getElementById("grade")
        gradebtn.addEventListener("click", () => {
            let spaces = document.getElementsByClassName("mark_input")
            for (let i = 0; i < spaces.length; i++) {
                
                spaces[i].style.display = "none"
            }
            let grade = document.getElementsByClassName("grade_choices")
            for (let i = 0; i < grade.length; i++) {
                
                grade[i].style.display = "block"
            }
        })
    })