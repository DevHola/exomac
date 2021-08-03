<template>
    <div class="bg-white" style="padding-top:40px;">
        <div class="container">
            <div class="section-title text-center mb-30">
                <h2 class="title text-left" style="font-size:30px;margin-left:50px;">Cocre-a Consults </h2>
                <p class="text-left" style="margin-top:20px;margin-left:50px;margin-right:30px;">We are a global strategic Human Capital solutions provider with a team of seasoned individuals with a wide range of backgrounds and industry expertise who work across boards to tackle various HR difficulties. We construct methods that assist organizations in achieving their goals, making a profit, and reducing costs by attracting and developing the right talent, as well as creating an ideal organization that fosters productivity and innovation and collaboration.<b> Cocre-a bridges the gap of need for employers and jobseekers.</b> </p>
            </div> <!-- Section Title Start -->
            <div class="section-title text-center mb-30">
                <h2 class="title text-left" style="font-size:15px;margin-left:50px;">What we do </h2>
                <p class="text-left" style="margin-top:20px;margin-left:50px;margin-right:30px;">Cocre-a provides customized solutions to improve HR and company processes in a variety of industries, both nationally and globally. </p>
            </div> <!-- Section Title Start -->
            <div class="section-title text-center mb-30">
                <h2 class="title text-left mb-5" style="font-size:15px;margin-left:50px;">Meet the team </h2>
                <q class="title text-left p-5" style="font-size:20px;margin-left:50px;">Cocre-a Consultings is made up of experts that have proven experience in all aspects of human resource management.</q>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 mtn-30 ml-5 mr-5 mb-5">
                <div class="col pull-center mt-30" v-for="(team, index) in teamData.slice(0, 3)" :key="index">
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
