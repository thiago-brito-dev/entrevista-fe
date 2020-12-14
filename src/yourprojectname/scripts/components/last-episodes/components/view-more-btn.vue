<template>
    <div class="viewMore-container">
        <a :href="btnHref">{{btnLabel}}</a>
    </div>
</template>

<script>
export default {
    name: "view-more-button",
    props: {
        btnLabel: {
            type: String,
            required: true
        },
        btnHref: {
            type: String,
            required: true
        }
    }
};
</script>