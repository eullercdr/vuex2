export default {
    template: `
    <div v-else>
        <form class="form-inline">
            <div class="form-group">
                <input type="text" class="form-control" v-model="novojogo.casa.gols">
                <label class="control-label">
                    {{novojogo.casa.time.nome}}
                    <img :src="novojogo.casa.time.escudo" style="height: 30px; width: 30px;">
                </label>
            </div>
            <span><strong> X </strong></span>
            <div class="form-group">
                <label class="control-label">
                    {{novojogo.fora.time.nome}}
                    <img :src="novojogo.fora.time.escudo" style="height: 30px; width: 30px;">
                </label>
                <input type="text" class="form-control" v-model="novojogo.fora.gols">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="fimJogo()">Fim de jogo</button>
        </form>
    </div>`,
    data() {
        return {
            novojogo: {
                casa: {
                    time: null,
                    gols: 0
                },
                fora: {
                    time: null,
                    gols: 0
                }
            }
        }
    },
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time;
            let gols = +this.novoJogo.casa.gols;
            let golsAdversario = +this.novoJogo.fora.gols;
            this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
            this.showView('tabela');
        },
        createNovoJogo() {
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20);

            this.novoJogo.casa.time = this.times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = this.times[indexFora];
            this.novoJogo.fora.gols = 0;
            this.showView('novojogo');
        }
    }

}