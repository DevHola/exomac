<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="" backgroundUrl= "/images/bg/breadcrumb-bg1.jpg" />

        <AboutTwo class="" />
         <hr>
        <AboutFour/>
        <div class="container p-3 mt-5">
        <TeamOne />
        </div>

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
            TeamOne: () => import('@/components/TeamOne'),
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


