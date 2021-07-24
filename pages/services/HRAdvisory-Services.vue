<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/slider-3.jpeg" />

        <!-- Start Work Details -->
        <div class="section-padding">
            <div class="container">
                <!-- Start Thumbnail -->
               

                <!-- Start Digital Marketion Area -->
                <div class="row mt-60">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="digital-marketing" >
                            <h3 class="heading heading-h3">HRAdvisory Services</h3>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div class="digital-marketing" >
                            <div class="inner">
                                <p>HR Transformation: This service offers a robust service that focuses on building and developing HR systems, practices and processes that are fit for purpose and are more perfectly aligned to the overall strategic objectives of the organisation.</p>
                                  <p>Talent Management: This solution focuses on equipping the workforce with efficient tools to ensure optimal productivity. Our approach ensures we tap and develop the potential of your employees from beginning to the end of their employment life cycle</p>
                                  <b>Solutions we offer:</b>
                                  <li >HRAnalytics & Diagnostics</li>
                                  <li>HR Systems &Technologies</li>
                                  <li>Change Management &Communication</li>
                                  <li>Human Resources Strategy Formulation</li>
                                  <li>Organisation Design & Development</li>
                                  <li>Workforce Strategy & Planning</li>
                                  <li>Performance Management</li>
                                  <li>Career Progression & Management</li>
                                  <li>Talent Profiling,Job Analysis & Evaluation</li>
                                  <li>Succession Planning and Talent Mapping</li>
                                  
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Digital Marketion Area -->
                 <hr>
                <!-- Start Gallery Area -->
               
                <!-- End Gallery Area -->
            </div>
        </div>
        <!-- Start Work Details -->
          <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a class="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
            </section>
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
                        text: 'Service Details',
                        active: true
                    }
                ],
                
            }
        },
       

        head() {
            return {
                title: 'Project Details'
            }
        },
    };
</script>


