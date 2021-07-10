<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg1.jpg" />

        <!-- Start Work Details -->
        <div class="section-padding">
            <div class="container">
                <!-- Start Thumbnail -->
          <div class="row">
                    <div class="col">
                        <div class="custom-column-thumbnail" >
                            <img class="img-fluid" src="/images/project/work-details-1.jpg"  alt="Agency">
                        </div>
                    </div>
                     <div class="col">
                        <div class="custom-column-thumbnail" >
                            <img class="img-fluid" src="/images/project/work-details-1.jpg"  alt="Agency">
                        </div>
                    </div>
                </div>


                <!-- Start Digital Marketion Area -->
                <div class="row mt-60">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="digital-marketing" >
                            <h3 class="heading heading-h3">Outsourcing</h3>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div class="digital-marketing">
                            <div class="inner">
                                <p>Outsourcing solutions is structured such that our clients time resource is freed up to allow for a focus on strategic operations. It is an all-encompassing solution focused on the following:</p>
                                  <b>Solutions we offer:</b>
                                  <li>People Outsourcing</li>
                                  <li>Project Outsourcing</li>
                                  <li>Process Outsourcing</li>
                                  
                                  
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
                        text: 'Project Details',
                        active: true
                    }
                ],
                
            }
        },
       

        head() {
            return {
                title: 'Service Details'
            }
        },
    };
</script>


