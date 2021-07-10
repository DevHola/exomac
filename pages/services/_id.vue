<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg-two.jpg" />

        <!-- Start Work Details -->
        <div class="section-padding">
            <div class="container">
                <!-- Start Thumbnail -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="custom-column-thumbnail mt-60" data-aos="fade-up">
                            <img class="w-100" src="/images/project/work-details-1.jpg" height="250" alt="Agency">
                        </div>
                    </div>
                </div>

                <!-- Start Digital Marketion Area -->
                <div class="row mt-60">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="digital-marketing" data-aos="fade-up">
                            <h3 class="heading heading-h3">{{service.title}}</h3>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div class="digital-marketing" data-aos="fade-up">
                            <div class="inner">
                                <p v-for="(details,index) in service.desc" :key="index">{{details.desc}}.</p>
                                  <b>Solutions we offer:</b>
                                  <li v-for="(select,index) in service.Selection" :key="index">{{select.title}}</li>
                                  
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

        data(context) {
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
                service:[
                          {
                              id:1,
                              url:"Recruitment-and-Selection",
                              title:"Recruitment and Selection",
                              desc:[
                                  {
                                      id:1,
                                      desc:"This solution ensures that we adopt the most effective measures to ensure we attract, shortlist, select and present to our clients the most suitable candidates for all required roles."
                                  }
                              ],
                              image:"",
                              Selection:[
                                  {
                                      id:1,
                                      title:"Talent acquisition"
                                  },
                                   {
                                      id:2,
                                      title:"Talent retention"
                                  }
                              ]
                          },
                          {
                              id:2,
                              url:"HRAdvisory-Services",
                              title:"HRAdvisory Services",
                              desc:[
                                  {
                                      id:1,
                                      desc:"HR Transformation: This service offers a robust service that focuses on building and developing HR systems, practices and processes that are fit for purpose and are more perfectly aligned to the overall strategic objectives of the organisation."
                                  },
                                  {
                                      id:2,
                                      desc:"Talent Management: This solution focuses on equipping the workforce with efficient tools to ensure optimal productivity. Our approach ensures we tap and develop the potential of your employees from beginning to the end of their employment life cycle"
                                  }
                              ],
                              image:"",
                              Selection:[
                                  {
                                      id:1,
                                      title:"HRAnalytics & Diagnostics"
                                  },
                                   {
                                      id:2,
                                      title:"HR Systems &Technologies"
                                  },
                                  {
                                      id:3,
                                      title:"Change Management &Communication"
                                  },
                                   {
                                      id:4,
                                      title:"Human Resources Strategy Formulation"
                                  },
                                  {
                                      id:5,
                                      title:"Organisation Design & Development"
                                  },
                                   {
                                      id:6,
                                      title:"Workforce Strategy & Planning"
                                  },
                                  {
                                      id:7,
                                      title:"Performance Management"
                                  },
                                   {
                                      id:8,
                                      title:"Career Progression & Management"
                                  },
                                  {
                                      id:9,
                                      title:"Talent Profiling,Job Analysis & Evaluation"
                                  },
                                   {
                                      id:10,
                                      title:"Succession Planning and Talent Mapping"
                                  }
                              ]
                          },
                          {
                              id:3,
                              url:"Outsourcing",
                              title:"Outsourcing",
                              desc:[
                                  {
                                      id:1,
                                      desc:"Outsourcing solutions is structured such that our clients time resource is freed up to allow for a focus on strategic operations. It is an all-encompassing solution focused on the following:"
                                  }
                              ],
                              image:"",
                              Selection:[{
                                      id:1,
                                      title:"People Outsourcing "
                                  },
                                  {
                                      id:2,
                                      title:"Project Outsourcing" 
                                  },
                                  {
                                      id:3,
                                      title:"Process Outsourcing "
                                  }
                                  ]
                          },
                          {
                              id:4,
                              url:"Strategy-and-Learning",
                              title:"Strategy and Learning",
                              desc:[{
                                  id:1,
                                  desc:"This service aims at identifying and providing the right training opportunities to employees to improve individual performance by proper development of skills and knowledge."
                              }],
                              image:"",
                              Selection:[
                                  {
                                      id:1,
                                      title:"Personal Development "
                                  },
                                  {
                                      id:2,
                                      title:"Strategic Leadership Development "
                                  },
                                  {
                                      id:1,
                                      title:"Learning and Development "
                                  }
                              ]
                          }
                      ].find(el => el.url === context.params.id)
            }
        },
       

        head() {
            return {
                title: 'Project Details'
            }
        },
    };
</script>


