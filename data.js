const data = {
    plays : {
        'hamlet': { 'name': 'Hamlet', 'type': 'tragedy'},
        'as-like': { 'name': 'As you like it', 'type': 'comedy'},
        'othello': { 'name': 'Othello', 'type': 'tragedy'},
    },

    invoice : {
        'customer': 'BigCo',
        'performances':[
            {
                'playID': 'hamlet',
                'audience': 55
            },
            {
                'playID': 'as-like',
                'audience': 35
            },
            {
                'playID': 'othello',
                'audience': 40
            }
        ]
    }
}

module.exports = data;