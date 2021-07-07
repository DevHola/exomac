<template>
    <div class="section-padding" data-bg-color="#f8faff">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center mb-60" data-aos="fade-up">
                <h2 class="title pb-3" style="font-size:20px;">Cocre-a Consultings is made up of experts that have proven experience in all aspects of human resource management</h2>
                <p class="text-left m-5">Our multi-functional seasoned consultants devote time and skills to strategically building business operations to ensure maximum productivity.Our Management Team is made up of globally experienced professionals that ensure top-down communication on best practices, industry know-how, and strategically aligned networks, ensuring Cocre-a Consults is at the forefront of offering consulting services.</p>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30 m-5">
                <div class="col mt-30" v-for="(team, index) in teamData.slice(0, 4)" :key="index">
                    <TeamMember :team="team" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import teamData from '~/data/team.json';

    export default {
        components: {
            TeamMember: () => import('@/components/TeamMember'),
        },

        data() {
            return {
                teamData
            }
        },
    };
</script>