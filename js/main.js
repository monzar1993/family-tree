function createNewUserContainer() {
    var userInfoContainer = document.createElement('div')
    userInfoContainer.className = 'user_container generation-1_user-1'
    var surname = '<p class="surname">Фамилия</p>'
    var name = '<p class="name">Имя</p>'
    var patronymic = '<p class="patronymic">Отчество</p>'
    var lifeYears = '<div class="life_years"><p class="mt-10">Дата Рождения</p><p class="birth_date">22.08 .1993</p><p class="mt-10 still_alive">Дата Смерти</p><p class="death_date still_alive">--.--.----</p></div>'
    userInfoContainer.innerHTML = surname + name + patronymic + lifeYears
    var generationRow = document.getElementsByClassName('row');
    generationRow[0].appendChild(userInfoContainer);

}

function activateEditMode() {
    var createNewUserButton = document.getElementsByClassName('create_new_user_btn')
    for (i = 0; i <= Array.length; i++) {
        createNewUserButton[i].classList.toggle('active_editor_mode')
    }
}