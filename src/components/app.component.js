import TimeListComponent from './time-list.component'
import TimeJogoComponent from './time-jogo.component'

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent
    },
    template: `
    <div class="container">
             <h3>Campeonato Brasileiro - Séria A 2018</h3>
        <br/>    
        <div class="row" v-if="view=='tabela'">
            <div class="col-md-12">
            <time-list></time-list>
            </div>
        </div>
        <div class="row">
        <div class="col-md-12">
            <time-jogo></time-jogo>
        </div>
        </div>    
    </div>
`,
    data() {
        return {
            view: 'tabela'
        }
    },
    methods: {
        showView(view) {
            this.view = view;
        }
    }

}