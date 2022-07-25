render = new Renderer()
const  getRoaster = function (){
    $(".team-container").empty()
    const teamName = $("input").val()
    $.get(`http://localhost:3000/teams/${teamName}`, function (data) {
        render.renderTeam(data)
    })
}