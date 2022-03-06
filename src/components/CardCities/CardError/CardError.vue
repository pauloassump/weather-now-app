<template>
    <div class="view-error" v-show="showTryAgain">
            <div class="card">
                <header class="card-header">
                    <p class="card-title">Ops... Ocorreu um erro :(</p>
                </header>
                <hr class="divider" />
                <section class="card-body">
                    <button class="btn-try-again" @click="tryAgain">
                        TENTAR NOVAMENTE
                    </button>
                </section>
                <footer class="card-footer">
                    <span class="update-footer">
                        Updated at {{ lastUpdate | moment("h:mm:ss a") }}
                    </span>
                </footer>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        lastUpdate: {
            type: Date,
            required: false,
            default: ''
        },
        showTryAgain: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        tryAgain() {
            this.$emit('tryAgain', true)
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>