<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="" backgroundUrl= "/images/bg/breadcrumb-bg1.jpg" />

        <AboutTwo class="" />
         <hr>
        <AboutFour/>

        <Team />

        <BrandLogoCarousel />

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
            AboutTwo: () => import('@/components/AboutTwo'),
            AboutFour: () => import('@/components/AboutFour'),
            Team: () => import('@/components/Team'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
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
                        text: 'About Us',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'About us'
            }
        },
    };
</script>


