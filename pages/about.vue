<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="" backgroundUrl= "/images/bg/slider-3.jpeg" />

        <AboutTwo class="" />
         <hr>
        <AboutFour/>
       <section class="py-5 mb-4 mt-5  box-shadow" style="background:#030E22;">
                <div class="container px-5 my-5">
                    <h2 class="display-4 fw-bolder mb-4" style="color:white;">Let's build something together</h2>
                    <a class="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
            </section>

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


