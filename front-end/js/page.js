const CRYSTALIZABLE_STATE = {
    cursor : 'pointer',
    border : '1px dotted yellow',
}

const NOT_CRYSTALIZABLE_STATE = {
    cursor : 'initial',
    border : 'none',
}

function home() {
    document.getElementById('form-login').style.display = 'none';
    console.log("### '" + document.getElementById('data-table').style.display + "'");
    document.getElementById('data-table').style.display = '';
}

function login() {
    document.getElementById('form-login').style.display = 'block';
    console.log("### '" + document.getElementById('data-table').style.display + "'");
    document.getElementById('data-table').style.display = 'none';
}

function selectCard(index) {
    cardSelectedSound.play();
    console.log(client.game.card(index));
    client.game.renderSelectedCard(index);
    client.game.selectCard(index);
    client.game.nextCard();
    if (client.game.remainingCards() == 3) {
        for(let i = 0; i < client.game.cardsCount(); i++) {
            if (!client.game.isCardSelected(i)) {
                selectCard(i);
            }
        }
        client.sourceCards.style.display = 'none';
        if (client.player.turn) {
            client.rollDiceTool.style.display = '';
        }
        else {
            //client.playDiceTool.style.display = '';
            actions.requestDices();
        }
    }
}

function showStatus() {
    if (document.getElementById('data-table').style.display == 'none') {
        document.getElementById('data-table').style.display = '';
        document.getElementById('about').style.display = '';
    }
    else {
        document.getElementById('data-table').style.display = 'none';
        document.getElementById('about').style.display = 'none';
    }
}

function message(msg, color, delay) {
    client.gameMessageTool.style.color = color;
    client.gameMessageTool.innerHTML = msg;
    if (delay != undefined) {
        setTimeout(() => client.gameMessageTool.innerHTML = '', delay);
    }
}

function showDiceInfo(e, id) {
    let x = e.clientX;
    let y = e.clientY;
    console.log('>>> x = ', x, ', y = ', y);
    let d = client.getDice(id);
    let info = getDiceInfo(d.dice.color, d.dice.id, d.side);
    console.log(d);
    console.log(info);

    let tipBox = document.getElementById('tip-box');

    let s = '<table class="dice-info">';
    
    for (let prop in dicesInfo.properties) {
        let val = info[prop];
        if (val == undefined) val = '';
        else if (val === true) val = 'Oui';
        else if (val === false) val = 'Non';

        s += '<tr><td>' + property(prop) + '</td><td>' + val + '</td></tr>';
    }
    s += '<tr><td colspan="2">';
    for (let side = 1; side <= 6; side++) {
        s += '<img src="' + Game.getDiceSource(d.dice.color, d.dice.id, side) + '" class="dice-side" />';
    }
    s += '</td></tr>';
    s += '</table>';
    tipBox.innerHTML = s;

    tipBox.style.left = x + 'px';
    tipBox.style.top = (y + 60) + 'px';
    tipBox.style.display = 'block';
}

function hideTipBox() {
    let tipBox = document.getElementById('tip-box');
    tipBox.style.display = 'none';
}

function setCrystallizable(element, state, action) {
    for (p in state) {
        document.getElementById(element + '-ref').style[p] = state[p];
    }
    document.getElementById(element + '-ref').onclick = action;
}

function refreshResult() {
    document.getElementById('fire').innerHTML = client.game.result.fire;
    document.getElementById('water').innerHTML = client.game.result.water;
    document.getElementById('land').innerHTML = client.game.result.land;
    document.getElementById('air').innerHTML = client.game.result.air;
    document.getElementById('crystals').innerHTML = client.game.result.crystals;
    document.getElementById('invocation').innerHTML = client.game.result.invocation;

    let resultRow = document.getElementById('result-row');
    resultRow.style.fontSize = '22px';
    resultRow.style.color = 'red';
    setTimeout(() => {
        resultRow.style.fontSize = '18px';
        resultRow.style.color = 'green';
    }, 2000);

    client.game.renderDice(client.game.result.diceId, 'selected-dice');

    let elements = ['fire', 'water', 'land', 'air'];
    if (client.game.result.crystallize) {
        document.getElementById('can-crystallize').innerHTML = "Cliquer pour crystaliser les energies";
        for (let element of elements) {
            if (client.game.result[element] > 0) {
                setCrystallizable(element, CRYSTALIZABLE_STATE, () => {
                    crystallizeSound.play();
                    client.game.crystallize(element);
                    refreshResult();
                });
            }
            else {
                setCrystallizable(element, NOT_CRYSTALIZABLE_STATE, null);
            }
        }
    }
    else {
        document.getElementById('can-crystallize').innerHTML = "";
        for (let element of elements) {
            setCrystallizable(element, NOT_CRYSTALIZABLE_STATE, null);
        }
    }
}

function cleanDashboard() {
    let elements = ['fire', 'water', 'land', 'air'];

    document.getElementById('selected-dice').innerHTML = "";
    document.getElementById('can-crystallize').innerHTML = "";

    for (let element of elements) {
        setCrystallizable(element, NOT_CRYSTALIZABLE_STATE, null);
    }
}

function move(element, x, y, step) {
    if (step == undefined) step = 10;

    let x0 = element.x0;
    let y0 = element.y0;

    let dx = Math.floor((x - x0) / step);
    let dy = Math.floor((y - y0) / step);
    let i = 1;
    let timer = setInterval(() => {
        if (i >= step) {
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            element.x0 = x;
            element.y0 = y;
            clearInterval(timer);
        }
        else { 
            x0 += dx;
            y0 += dy;
            element.style.left = x0 + 'px';
            element.style.top = y0 + 'px';
            i++;
        }
    }, 100);
}

function putPawn(info) {
    move(client.pawnSeasons, pawn.x0 + pawn.pos[info.month].x, pawn.y0 + pawn.pos[info.month].y);
    if (info.year <= 3) {
        move(client.pawnSeasonsYear, pawn.x0 + pawn.year[info.year].x, pawn.y0 + pawn.year[info.year].y);
    }
}

/**********************************************************************/
function showCardInfo(e, index) {
    const props = ['fire', 'water', 'land', 'air', 'crystals'];
    let x = e.clientX; if (x > 1100) x = 1100;
    let y = 400; //e.clientY;
    console.log('### (x, y) = (' + x + ', ' + y + ')');
    let card = client.game.handCard(index);
    
    let tipBox = document.getElementById('card-tip-box');

    let infos = getCardInfo(card.id);
    let s = '<table class="card-info">' +
        '<tr><td>' + infos.name + '</td><td>' + infos.id + '</td></tr>';

    for (let prop of props) {
        s += '<tr><td>' + cardsInfo.properties[prop] + '</td><td>' + infos[prop] + '</td></tr>';
    }
    let invoke = client.game.checkInvokeConstraints(card.id);
    if (invoke.status) s += '<tr><td colspan="2" style="color: green">' + invoke.message + '</td></tr>';
    else s += '<tr><td colspan="2" style="color: red">' + invoke.message + '</td></tr>';
    s += '</table>';

    tipBox.innerHTML = s;

    tipBox.style.left = x + 'px';
    tipBox.style.top = (y + 60) + 'px';
    tipBox.style.display = 'block';
}

function hideCardInfo() {
    let tipBox = document.getElementById('card-tip-box');
    tipBox.style.display = 'none';
}
