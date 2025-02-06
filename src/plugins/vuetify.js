import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#EFF1F3',
                secondary: '#858D71',
                // accent: '',
                error: '#BF3D3D',
                info: '#FFFD82',
                // success: '',
                // warning: '',
            },
        },
        options:{customProperties: true}
    },
});
