Vue.createApp({
    data() {
        return {
            status: 'default',
            answer: 'たまごやき'.split(''),
            line: 0,
            word: '',
            displayWord: '　　　',
            panels: [
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],
                [
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                    {
                        char: '',
                        color: 'default'
                    },
                ],

            ]
        }
    },
    created() {
        this.delayFunc = _.debounce(this.changePanel, 300);
    },
    watch: {
        word(newValue, oldValue) {
            this.delayFunc();
        }
    },
    methods: {
        changePanel() {
            let wordArr = this.word.split('')
            for (var i = 0; i < wordArr.length; i++) {
                if (5 <= i) break;
                this.panels[this.line][i].char = wordArr[i]
            }
        },
        onclickanswer(e) {
            e.preventDefault()
            if (this.panels[this.line][0].char === '') {
                return
            }
            var rightPanelsNum = 0;
            if (5 <= this.line) {
                window.alert('もうできません!!!')
                return
            }
            for (var i = 0; i < 5; i++) {
                var c = this.panels[this.line][i].char
                if (c === this.answer[i]) {
                    this.panels[this.line][i].color = 'right'
                    rightPanelsNum++;
                } else if (this.answer.includes(c)) {
                    this.panels[this.line][i].color = 'near'
                } else {
                    this.panels[this.line][i].color = 'failed'
                }
            }
            this.line++
            if (rightPanelsNum == 5) {
                window.alert('正解です!!!')
            }
        }
    }
}).mount('#app');