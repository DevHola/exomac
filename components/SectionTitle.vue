<template>
    <div class="section-title text-center" :class="addClassName" data-aos="fade-up">
        <h2 class="title" style="font-size:20px;">{{ title }}</h2>
        <p class="sub-title">{{ subTitle }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SectionTitle',

        props: ["title", "subTitle", "addClassName"]
    };
</script>