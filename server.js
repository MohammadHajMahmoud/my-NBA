const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', (req, res) => urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json',
 function (err, data) {
    if (err) {
        throw err;
    }
    let teamName = req.params.teamName
    let neededData = JSON.parse(data).league.standard
    let teamArray = neededData.filter(team => team.teamId === teamToIDs[teamName])
    teamArray = teamArray.map(player => {
        return {firstName: player.firstName,
             lastName: player.lastName,
              jersey: player.jersey,
               pos: player.pos}
    })
    res.send(teamArray)
    
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
