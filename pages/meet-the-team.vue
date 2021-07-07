<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="" backgroundUrl= "/images/bg/breadcrumb-bg-five.jpg" />
         
         <TeamOne :style="{backgroundColor: '#f8faff'}" />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            TeamOne: () => import('@/components/TeamOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Meet The Team',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


