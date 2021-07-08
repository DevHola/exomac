<template>
    <div class="bg-white" style="padding-top:40px;">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center mb-30" data-aos="fade-up">
                <h2 class="title text-left" style="font-size:20px;margin-left:50px;">Cocre-a Consultings is made up of experts that have proven experience in all aspects of human resource management</h2>
                <p class="text-left" style="margin-top:20px;margin-left:50px;margin-right:30px;">Our multi-functional seasoned consultants devote time and skills to strategically building business operations to ensure maximum productivity.Our Management Team is made up of globally experienced professionals that ensure top-down communication on best practices, industry know-how, and strategically aligned networks, ensuring Cocre-a Consults is at the forefront of offering consulting services.</p>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30 ml-5 mr-5 mb-5">
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