class Renderer{
    renderTeam = (data) => {
        const source = $('#team-template').html();
        const template = Handlebars.compile(source)
        const somehtml = template( {data} );
        $(".team-container").append(somehtml)
    }
}