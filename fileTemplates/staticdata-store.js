import createCrudModule, { defaultClient } from 'vuex-crud';
import constant from "../const";

export default createCrudModule({
    resource: 'staticdata-${namespace}',
    urlRoot: constant.api_endpoint+'/static-data/${api_name}',
    idAttribute: 'id',
    parseList: (response) => {
        response.data = Object.values(response.data)
        return response
    },
    onReplaceSuccess:(state, response) => {
        state.isFetchingList = true
    }
})

