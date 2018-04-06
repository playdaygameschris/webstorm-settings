#set($title = ${StringUtils.capitalizeFirstLetter(${name})})

<script>
    import StaticdataTable from '../staticdata-table.vue';

    export default {
        template: require('../../../template/staticdata-table.html.js'),
        extends: StaticdataTable,
        props:{
            'columns':{
                type: Array,
                default: function(){
                    return [
                        {
                            title: 'id',
                            key: 'id',
                            align: 'center',
                            width: 70,
                            _update_disabled: true,
                            rules: [
                                { required: true,  pattern:/\d{1,2}$/, message: 'wrong id format', trigger: 'change' }
                            ]

                        },
                        {
                            title: ' ',
                            key: 'edit',
                            align: 'right',
                            _input_hidden: true,
                            render: (h, params) => {
                                return h('Button', {
                                    attrs:{
                                        icon: 'edit'
                                    },
                                    on: {
                                        click: (event) => {
                                            bus.$emit('show-update-staticdata-{$namespace}', params.row)
                                        }
                                    }
                                }, 'Edit')
                            }
                        }
                    ].filter(function(obj){ return obj._hidden==undefined})
                }
            },
            'cached': {
                type: Boolean,
                default: true
            },
            'title': {
                type: String,
                default: '${title}'
            },
            'name': {
                type: String,
                default: '${name}'
            },
            'namespace': {
                type: String,
                default: 'staticdata-${namespace}'
            }
        }
    }
</script>
