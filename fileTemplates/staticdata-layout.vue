#set($cap_name = ${StringUtils.capitalizeFirstLetter(${name})})
<template>

        <staticdata-${name}-table>
        </staticdata-${name}-table>

</template>

<script>
    import Staticdata${cap_name}Table from '../../tables/staticdata/staticdata-${name}-table.vue'

    export default {
        components: {
            'staticdata-${name}-table': Staticdata${cap_name}Table
        }
    }
</script>
