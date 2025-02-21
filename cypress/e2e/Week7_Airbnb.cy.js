import airbnbsignup from "./PageObject/airbnb";
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
  describe('Airbnb', ()=>{
    it('Login,navigate through diff options, filters', ()=>{
      const login = new airbnbsignup()
      login.visit()
      login.clickSignUp()
      cy.wait(5000)
      login.fillDetails()   
   
         //Check in/check 
         cy.get('[data-testid="structured-search-input-field-query"]').click({ force: true })
         cy.get('[data-testid="little-search-location"] > .f16sug5q').click() //anywhere
        //cy.get('[data-testid="little-search-location"] > .f16sug5q').type("paris")
        cy.get('.ihcg2em').type("paris", { force: true })
        cy.get('[data-testid="structured-search-input-field-split-dates-0"] > .cz9siyu').click({ force: true })
         cy.wait(9000)
         cy.get('button[data-state--date-string="2025-02-27"]').click({ force: true })
         cy.get('button[data-state--date-string="2025-02-28"]').click({ force: true })

    //it('navigate to all the options', ()=>{
      cy.wait(6000)
      cy.get('div.t192ua0c') // Target the parent div
      .find('span.ti7yjx') // Find the span inside
      .contains('Farms').click() // Ensure it contains the text
      
      cy.get('div.t192ua0c') // Target the parent div
      .find('span.ti7yjx') // Find the span inside
      .contains('Amazing pools') // Ensure it contains the text

      cy.get('div.t192ua0c')
      .find('span.ti7yjx')
      .contains('National parks')

      //filters
      cy.get('button[data-testid="category-bar-filter-button"]').click()
      cy.wait(3000)
      cy.get('[role="radio"][aria-describedby="room-filter-description-Room"]').click() //select room
      cy.get('#price_filter_max').clear()
      cy.get('#price_filter_max').type("3000") //select range
      cy.get(".stiimno.atm_l1_1wugsn5.atm_e2_1osqo2v.dir.dir-ltr").scrollTo('bottom')
      cy.get("button[data-testid='stepper-filter-item-min_bedrooms-stepper-increase-button'] span[class='i98ho2o atm_e2_qslrf5 atm_vy_qslrf5 atm_l8_14y27yu dir dir-ltr'] svg").click() //click on plus
      //cy.get("button[id='filter-item-amenities-4'] span[class='m12i7xxa atm_9s_1ulexfb dir dir-ltr']").click()
      cy.get("#filter-item-amenities-51").click()
      cy.get("button[id='filter-item-amenities-51'] div svg").click
      cy.get("h2[id='filter-section-heading-id-FILTER_SECTION_CONTAINER:PROPERTY_TYPES_WITH_SUBCATEGORY']").click()
      cy.get("button[id='filter-item-l2_property_type_ids-1'] span[class='m12i7xxa atm_9s_1ulexfb dir dir-ltr']").click()
      cy.get("h2[id='filter-section-heading-id-FILTER_SECTION_CONTAINER:ACCESSIBILITY']").click() //accessibility drop down
      cy.get("#filter-item-amenities-114-row-checkbox").click() //disable spot
      cy.get(".l1ovpqvx.atm_1he2i46_1k8pnbi_10saat9.atm_yxpdqi_1pv6nv4_10saat9.atm_1a0hdzc_w1h1e8_10saat9.atm_2bu6ew_929bqk_10saat9.atm_12oyo1u_73u7pn_10saat9.atm_fiaz40_1etamxe_10saat9.bmx2gr4.atm_9j_tlke0l.atm_9s_1o8liyq.atm_gi_idpfg4.atm_mk_h2mmj6.atm_r3_1h6ojuz.atm_rd_glywfm.atm_70_5j5alw.atm_vy_1wugsn5.atm_tl_1gw4zv3.atm_9j_13gfvf7_1o5j5ji.c1ih3c6.atm_bx_48h72j.atm_c8_2x1prs.atm_g3_1jbyh58.atm_fr_11a07z3.atm_cs_10d11i2.atm_5j_t09oo2.atm_kd_glywfm.atm_l8_srw7uq.atm_uc_1lizyuv.atm_r2_1j28jx2.atm_jb_1fkumsa.atm_3f_glywfm.atm_26_18sdevw.atm_7l_1v2u014.atm_8w_1t7jgwy.atm_uc_glywfm__1rrf6b5.atm_kd_glywfm_1w3cfyq.atm_uc_aaiy6o_1w3cfyq.atm_70_1b8lkes_1w3cfyq.atm_3f_glywfm_e4a3ld.atm_l8_idpfg4_e4a3ld.atm_gi_idpfg4_e4a3ld.atm_3f_glywfm_1r4qscq.atm_kd_glywfm_6y7yyg.atm_uc_glywfm_1w3cfyq_1rrf6b5.atm_kd_glywfm_pfnrn2_1oszvuo.atm_uc_aaiy6o_pfnrn2_1oszvuo.atm_70_1b8lkes_pfnrn2_1oszvuo.atm_3f_glywfm_1icshfk_1oszvuo.atm_l8_idpfg4_1icshfk_1oszvuo.atm_gi_idpfg4_1icshfk_1oszvuo.atm_3f_glywfm_b5gff8_1oszvuo.atm_kd_glywfm_2by9w9_1oszvuo.atm_uc_glywfm_pfnrn2_1o31aam.atm_tr_18md41p_csw3t1.atm_k4_kb7nvz_1o5j5ji.atm_3f_glywfm_1nos8r_uv4tnr.atm_26_wcf0q_1nos8r_uv4tnr.atm_7l_1v2u014_1nos8r_uv4tnr.atm_3f_glywfm_4fughm_uv4tnr.atm_26_4ccpr2_4fughm_uv4tnr.atm_7l_1v2u014_4fughm_uv4tnr.atm_3f_glywfm_csw3t1.atm_26_wcf0q_csw3t1.atm_7l_1v2u014_csw3t1.atm_7l_1v2u014_pfnrn2.atm_3f_glywfm_1o5j5ji.atm_26_4ccpr2_1o5j5ji.atm_7l_1v2u014_1o5j5ji.dir.dir-ltr").click() //show rooms
      // Type "Paris" in the search box
//cy.get("input[placeholder='Search destinations']").click({ force: true }).type("Paris");
// Wait for the dropdown to appear and select "Paris, France"
//cy.contains("div", "Paris, France").click();
      cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > picture:nth-child(1) > img:nth-child(2)").click()
      .parents('a') // Get the parent <a> element
        .invoke('prop', 'href') // Extract the 'href' property directly
        .then((href) => {
        cy.visit(href).scrollTo(0, '25%');
        ;
       // cy.on('window:confirm', () => true);  // Always clicks "OK"
       /*cy.get('div._tekaj0[data-testid="change-dates-checkIn"]').should('be.visible').scrollIntoView();
      
       cy.get("div[data-testid='change-dates-checkIn']").click()
        cy.get("td[aria-label='7, Friday, March 2025. Available. Select as check-in date. '] div[class='_697u988 notranslate']").click()
        cy.get("._1jdp9tm2.notranslate[data-testid='calendar-day-17/03/2025']").click()*/

        //Logout
        cy.get('button[data-testid="cypress-headernav-profile"]')
  .should('be.visible')
  .click();
  cy.get("button[type='submit']").click()


        })



    })

  })