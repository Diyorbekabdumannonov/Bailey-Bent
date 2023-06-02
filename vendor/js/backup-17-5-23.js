jQuery(function($){

	var tabpanel = function(e){
			e.preventDefault();
			var $parent = $(this).parent();
				$parent.addClass('active').siblings();
				$parent.addClass('current').siblings().removeClass('current');
	
			 var ind = $parent.index();
			$('.tab-body .tab-content').eq(ind).show().siblings().hide();
		};
	$('#tab ul li a').click(tabpanel);
	
	$('#tab ul li').first().find('a').trigger('click');
	
	$('.tab-content').each(function(){
	 $(this).find('.next').click(function(){
		 var getindex = $(this).parents('.tab-content').index()+1;
		if(getindex == 1){
			var petBirthYear = $(this).parents('.inner_tab_content').find('input[bento="birth-year"]').val();
			var petBirthMonth = $(this).parents('.inner_tab_content').find('input[bento="birth-month"]').val();
			var petBirthDate = $(this).parents('.inner_tab_content').find('input[bento="birth-date"]').val();
			if(petBirthYear == ''){
				alert('Please select the birthyear');
			}else if(petBirthYear.length < 4 || petBirthYear.length > 4){
				$('input[bento="birth-year"]').val('');
				alert('invalid year format');
			}else if(petBirthMonth != '' && (petBirthMonth.length < 1 || petBirthMonth.length > 2 || petBirthMonth > 12)){
				$('input[bento="birth-month"]').val('');
				alert('invalid month format');
			}else if(petBirthDate != '' && (petBirthDate.length < 1 || petBirthDate.length > 2 || petBirthDate > 31)){
				$('input[bento="birth-date"]').val('');
				alert('invalid day format');
			}else{
				 $(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
			}
		}
	
		 if(getindex == 2){
			var isChallenges = $(this).parents('.inner_tab_content').find('input[bento="pet-health-challenges"]').is(":checked");
			var challengesVal = $(this).parents('.inner_tab_content').find('input[bento="pet-health-challenges"]:checked').val();
			var allChallengesType = $(this).parents('.inner_tab_content').find('#health_challenges_to_apply input[type="checkbox"]').is(":checked");
			if(isChallenges == false){
				alert('Please select Health Challenges');
			}else if(challengesVal == 'Yes' && allChallengesType == false){
				alert('Please select all health challenges type below');
			}else{
				 $(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');	

				 var allergytypeval=jQuery('body').find('#if_allergies_have input[type="checkbox"]:checked').val();
				 if( allergytypeval != ''){
					var allergyType =[];
					jQuery('body').find('#if_allergies_have input[type="checkbox"]:checked').each(function(i){
							allergyType[i] = jQuery(this).val();
					});
					if(allergyType.includes("chicken") ){
						jQuery('#checkproteins1').prop('checked', false);
						jQuery('#checkproteins1').prop('disabled', true);
					}
					if(allergyType.includes("beef") ){
						jQuery('#checkproteins2').prop('checked', false);
						jQuery('#checkproteins2').prop('disabled', true);
					}
					if(allergyType.includes("pork") ){
						jQuery('#checkproteins3').prop('checked', false);
						jQuery('#checkproteins3').prop('disabled', true);
					}
					if(allergyType.includes("sweet-potato") ){
						jQuery('#checkproteins3').prop('checked', false);
						jQuery('#checkproteins3').prop('disabled', true);
					}
				}
			}
		 }
	
		/* if(getindex == 3){
			var ownerName = $(this).parents('.inner_tab_content').find('input[bento="owner-name"]').val();
			var ownerEmail = $(this).parents('.inner_tab_content').find('input[bento="owner-email"]').val();
			var validatePass = false;
			var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			if (testEmail.test(ownerEmail)){
				validatePass = true;
			}else{
				validatePass = false;
			}
	
			if(ownerName == ''){
				alert('please enter the name');
			}else if(ownerEmail == ''){
				alert('please enter the email');
			}else if(ownerEmail != '' && validatePass == false){
				alert('Not a valid email address');
			}else{
				 $(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');			
			}
		 }*/
		 if(getindex == 4){
			var ofBoxes = $(this).parents('.inner_tab_content').find('input[bento="box-per-day"]').is(":checked");
			if(ofBoxes == false){
				alert('Please select number of boxes');
			}else{
				 $(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
				 $(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');	
			}
		 }
	 });
	
	  $(this).find('.prev').click(function(){
		 var getindex = $(this).parents('.tab-content').index()-1;
		 $(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		 $(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
	 });
	});
	
	
	// =============================================================================================
	var totalSteps1 = $('#inner_tab .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab1').find('.total_inner_step').text(totalSteps1);
	$('#inner_tab .inner_tab_body').find('.inner_tab_content').each(function(){
		$(this).find('.inner_next').click(function(){
			 var getindex = $(this).parents('.inner_tab_content').index()+1;
			 if(getindex == 1){
				var petName = $(this).parents('.inner_tab_content').find('#furkid-name').val();
				$('body').find('input[bento="pet-weight"]').attr("placeholder", petName + "'s weight");
				$('body').find('.pet_name').text(petName);
				if(petName == ""){
					alert('Name is the required field');
				 }else{
					 $('#tab ul li.tab1').find('.current_step').text(getindex+1);
					 if(totalSteps1 == (getindex+1)){
						 $('#tab ul li.tab1').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
				 }
			 }
			 if(getindex == 2){
				var isChecked = $(this).parents('.inner_tab_content').find('input[bento="pet-gender"]').is(":checked");
				var petGender = $(this).parents('.inner_tab_content').find('input[bento="pet-gender"]:checked').val();
				if(petGender == 'boy'){
					radioColor =  '#b6dee7';
					$('body').find('input[type="radio"]').addClass('boy');
					$('body').find('input[type="checkbox"]').addClass('boy');
				}
				if(petGender == 'girl'){
					radioColor = 'pink';
					$('body').find('input[type="radio"]').addClass('girl');
					$('body').find('input[type="checkbox"]').addClass('girl');
				}
				if(isChecked == false){
					alert('Please select gender');
				}else{
					 $('#tab ul li.tab1').find('.current_step').text(getindex+1);
					 if(totalSteps1 == (getindex+1)){
						 $('#tab ul li.tab1').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
				}
			 }
			 if(getindex == 3){
			 	console.log(getindex);
				var isCheckedBreed = $(this).parents('.inner_tab_content').find('input[bento="pet-breed"]').is(":checked");
				var checkedBreedVal = $(this).parents('.inner_tab_content').find('input[bento="pet-breed"]:checked').val();
				var mixBreedSelectbox1 = $('#mix_breed_select1').find(":selected").val();
				var mixBreedSelectbox2 = $('#mix_breed_select2').find(":selected").val();
				var pureBreedSelectbox = $('#pure_breed_selectdropdown').find(":selected").val();
				if(isCheckedBreed == false){
					alert('Please select breed');
				}else if(checkedBreedVal == 'Mix breed' && (mixBreedSelectbox1 == '' || mixBreedSelectbox2 == '')){
					alert("Please select breed from below dropdown");
				}else if(checkedBreedVal == 'Pure breed' && pureBreedSelectbox == ''){
					alert("Please select breed from below dropdown");
				}else{
					 $('#tab ul li.tab1').find('.current_step').text(getindex+1);
					 if(totalSteps1 == (getindex+1)){
						 $('#tab ul li.tab1').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
				}
			 }
		});
	});
	
	// =============================================================================================
	var totalSteps2 = $('#inner_tab2 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab2').find('.total_inner_step').text(totalSteps2);
	$('#inner_tab2 .inner_tab_body').find('.inner_tab_content').each(function(){
		$(this).find('.inner_next').click(function(){
			 var getindex = $(this).parents('.inner_tab_content').index()+1;
			 if(getindex == 1){
				var petWeight = $(this).parents('.inner_tab_content').find('input[bento="pet-weight"]').val();
				if(petWeight == ''){
					alert('Please enter the weight');
				}else if(petWeight<1 || petWeight>60){
					alert('Weight should be Max 60kg and minimum 1kg');
				 }else{
					 $('#tab ul li.tab2').find('.current_step').text(getindex+1);
					 if(totalSteps2 == (getindex+1)){
						 $('#tab ul li.tab2').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');				
				}
			 }
			 if(getindex == 2){
				var isNeutered = $(this).parents('.inner_tab_content').find('input[bento="pet-neutered"]').is(":checked");
				if(isNeutered == false){
					alert('Please select Yes or No');
				}else{
					 $('#tab ul li.tab2').find('.current_step').text(getindex+1);
					 if(totalSteps2 == (getindex+1)){
						 $('#tab ul li.tab2').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');				
				}
			 }
			 if(getindex == 3){
				var isWaistline = $(this).parents('.inner_tab_content').find('input[bento="optradio"]').is(":checked");
				if(isWaistline == false){
					alert('Please select Waistline');
				}else{
					 $('#tab ul li.tab2').find('.current_step').text(getindex+1);
					 if(totalSteps2 == (getindex+1)){
						 $('#tab ul li.tab2').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		 			 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');				
				}
			 }
			 if(getindex == 4){
				var isActive = $(this).parents('.inner_tab_content').find('input[bento="optradio"]').is(":checked");
				if(isActive == false){
					alert('Please select How Active Is?');
				}else{
					 $('#tab ul li.tab2').find('.current_step').text(getindex+1);
					 if(totalSteps2 == (getindex+1)){
						 $('#tab ul li.tab2').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();	
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');			
				}
			 }
			 if(getindex == 5){
				var isAllergie = $(this).parents('.inner_tab_content').find('input[bento="pet-allergie"]').is(":checked");
				var allergieVal = $(this).parents('.inner_tab_content').find('input[bento="pet-allergie"]:checked').val();
				var isAllergieType = $(this).parents('.inner_tab_content').find('#if_allergies_have input[type="checkbox"]').is(":checked");
				var allergytypeval=jQuery('body').find('#if_allergies_have input[type="checkbox"]:checked').val();
				if(isAllergie == false){
					alert('Please select Allergies');
				}else if(allergieVal == 'Yes' && isAllergieType == false){
					alert('Please select allergies type below');
				}else{
					if(allergieVal == 'Yes' && allergytypeval != ''){
						var allergyType =[];
						jQuery('body').find('#if_allergies_have input[type="checkbox"]:checked').each(function(i){
								allergyType[i] = jQuery(this).val();
						});
						if(allergyType.includes("fish oil") || (allergyType.includes("chicken") && allergyType.includes("beef") && allergyType.includes("pork")) || (allergyType.includes("sweet-potato") && allergyType.includes("beef") && allergyType.includes("chicken"))){
							window.location.href = "https://pets.logiclix.com/contact-bento/";
						}else{
							$('#tab ul li.tab2').find('.current_step').text(getindex+1);
							if(totalSteps2 == (getindex+1)){
								$('#tab ul li.tab2').addClass('completed_step');
							}
							$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
							$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');		
						}
					}else{
						$('#tab ul li.tab2').find('.current_step').text(getindex+1);
						if(totalSteps2 == (getindex+1)){
							$('#tab ul li.tab2').addClass('completed_step');
						}
						$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
						$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');		
					}		
				}
			 }
		});
	});
	
	// =============================================================================================
	/*var totalSteps3 = $('#inner_tab3 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab3').find('.total_inner_step').text(totalSteps3);
	$('#inner_tab3 .inner_tab_body').find('.inner_tab_content').each(function(){
		$(this).find('.inner_next').click(function(){
			 var getindex = $(this).parents('.inner_tab_content').index()+1;
			 $('#tab ul li.tab3').find('.current_step').text(getindex);
			 if(totalSteps3 == (getindex)){
				 $('#tab ul li.tab3').addClass('completed_step');
			 }
			 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		});
	});*/
	
	// =============================================================================================
	var totalSteps4 = $('#inner_tab4 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab4').find('.total_inner_step').text(totalSteps4);
	$('#inner_tab4 .inner_tab_body').find('.inner_tab_content').each(function(){
		$(this).find('.inner_next').click(function(){
			 var getindex = $(this).parents('.inner_tab_content').index()+1;
			 if(getindex == 1){
				 var getProteins = $(this).parents('.inner_tab_content').find('input[bento="option1"]').is(":checked");
				 if(getProteins == false){
					 alert('Please Choose The Proteins');
				 }else{
					 $('#tab ul li.tab4').find('.current_step').text(getindex+1);
					 if(totalSteps4 == (getindex+1)){
						 $('#tab ul li.tab4').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
				 }
				 calculate_calory();
			 }
			 if(getindex == 2){
				 var fullBentoBox = $(this).parents('.inner_tab_content').find('input[name="bento-form[full-bento-box]"]').is(":checked");
				 if(fullBentoBox == false){
					 alert('Please select the below option');
				 }else{
					 $('#tab ul li.tab4').find('.current_step').text(getindex+1);
					 if(totalSteps4 == (getindex+1)){
						 $('#tab ul li.tab4').addClass('completed_step');
					 }
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
					 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
				 }
			 }
			 jQuery('input[name="bento-form[full-bento-box]"]').change(function() {
				var selectedportion= jQuery('.selectedportion').text();
				var fourweekprice= jQuery(this).parent().parent().find('.fourweekprice').text();
				var selected_bento=jQuery(this).val();
				var total_boxes=jQuery(this).parent().parent().parent().find('ul li span:first').text();
				
				jQuery('.recomended_box_per_day').text(selectedportion);
				jQuery('.recomended_delivery_per_week').text(selected_bento);
				set_delivery_boxes(selected_bento);
				set_split_boxes(selectedportion);
				jQuery('#box-price').val(fourweekprice.substring(1, fourweekprice.length));
				var total_amount=parseFloat(jQuery('#box-price').val()).toFixed(2);
				
				jQuery('.total_amount').text(total_amount);
				jQuery('.final_total_boxes').val(total_boxes);
				jQuery('.final_total_amount').val(total_amount);
				jQuery('.final_base_price').val(jQuery('#box-price').val());
				jQuery('.final_total_boxes').val(total_boxes);
				jQuery('.final_split_cost').val(0);
				jQuery('.final_delivery_cost').val(0);
				jQuery('.final_portion_size').val(selectedportion);
				jQuery('.final_box_size').val(jQuery('.box_size').text());

			});
			jQuery('input[bento="box-per-day').change(function() {

				var total_boxes=parseInt(jQuery('.final_total_boxes').val());
				var base_price=parseFloat(jQuery('#box-price').val());
				var split_cost=0;
				var delivery_cost=0;
				var total_amount=0;
				if(jQuery('#box-per-day2').is(":checked")){
					if(jQuery(this).val()=='3 box'){
						split_cost=1.25*(total_boxes*3);
					}else{
						split_cost=1.25*total_boxes;
					}
					
				}else{
					split_cost=0;
				}
				if(jQuery('#delivery_frequency2').is(":checked")){
					delivery_cost=10;
				}else{
					delivery_cost=0;
				}
				total_amount=parseFloat(base_price+split_cost+delivery_cost).toFixed(2);
				jQuery('.total_amount').text(total_amount);
				jQuery('.final_total_amount').val(total_amount);
				jQuery('.final_base_price').val(base_price);
				jQuery('.final_total_boxes').val(total_boxes);
				jQuery('.final_split_cost').val(split_cost);
				jQuery('.final_delivery_cost').val(delivery_cost);
				jQuery('.final_portion_size').val(jQuery('.selectedportion').text());
				jQuery('.final_box_size').val(jQuery('.box_size').text());
			});

			$('input[bento="delivery_frequency').change(function() {

				var total_boxes=parseInt(jQuery('.final_total_boxes').val());
				var base_price=parseFloat(jQuery('#box-price').val());
				var split_cost=0;
				var delivery_cost=0;
				var total_amount=0;
				if(jQuery('#box-per-day2').is(":checked")){
					if(jQuery('#box-per-day2').val()=='3 box'){
						split_cost=1.25*(total_boxes*3);
					}else{
						split_cost=1.25*total_boxes;
					}
					
				}else{
					split_cost=0;
				}
				if(jQuery('#delivery_frequency2').is(":checked")){
					delivery_cost=10;
				}else{
					delivery_cost=0;
				}
				total_amount=parseFloat(base_price+split_cost+delivery_cost).toFixed(2);
				jQuery('.total_amount').text(total_amount);
				jQuery('.final_total_amount').val(total_amount);
				jQuery('.final_base_price').val(base_price);
				jQuery('.final_total_boxes').val(total_boxes);
				jQuery('.final_split_cost').val(split_cost);
				jQuery('.final_delivery_cost').val(delivery_cost);
				jQuery('.final_portion_size').val(jQuery('.selectedportion').text());
				jQuery('.final_box_size').val(jQuery('.box_size').text());
			});
			 
		});
	});
	
	
	/*================================ get form data logic ========================*/
	
	$("input[bento='pet-breed']").click(function() {
		var petBreed = $(this).val();
		if(petBreed == 'Mix breed'){
			$('#select_breed').show();
		}else{
			$('#select_breed').hide();
		}
	
		if(petBreed == 'Pure breed'){
			$('#pure_breed_select').show();
		}else{
			$('#pure_breed_select').hide();
		}
	});
	$("input[bento='pet-allergie']").click(function() {
		var petAllergie = $(this).val();
		if(petAllergie == 'Yes'){
			$('#if_allergies_have').show();
		}else{
			$('#if_allergies_have').find('input[type="checkbox"]').prop('checked', false); 
			$('#if_allergies_have').hide();
		}
	});
	$("input[bento='pet-health-challenges']").click(function() {
		var petChallenges = $(this).val();
		if(petChallenges == 'Yes'){
			$('#health_challenges_to_apply').show();
		}else{
			$('#health_challenges_to_apply').find('input[type="checkbox"]').prop('checked', false); 
			$('#health_challenges_to_apply').hide();
		}
	});
	
	$("input[bento='others-allergies']").click(function() {
		if($(this).is(':checked') == true){
			$('body').find('#if_allergies_have input[bento="if-other-allergies"]').show();
		}else{
			$('body').find('#if_allergies_have input[bento="if-other-allergies"]').hide();
		}
	});
	
	$("input[bento='other-challenges']").click(function() {
		if($(this).is(':checked') == true){
			$('body').find('#health_challenges_to_apply input[bento="tell-other-challenges"]').show();
		}else{
			$('body').find('#health_challenges_to_apply input[bento="tell-other-challenges"]').hide();
		}
	});
	
	$('input[bento="birth-year"]').keyup(function(e){
		if (/\D/g.test(this.value)){
			this.value = this.value.replace(/\D/g, '');
		}
	});
	$('input[bento="birth-month"]').keyup(function(e){
		if (/\D/g.test(this.value)){
			this.value = this.value.replace(/\D/g, '');
		}
	});
	$('input[bento="birth-date"]').keyup(function(e){
		if (/\D/g.test(this.value)){
			this.value = this.value.replace(/\D/g, '');
		}
	});
	
	
	/*================================ inner step previous btn ============================*/
	
	$('#inner_tab a.innner_previous_btn').click(function(e){
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index()-1;
		$('#tab ul li.tab1').find('.current_step').text(getindex+1);
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
	});
	$('#inner_tab2 a.main_previous_btn').click(function(){
		var getindex = $(this).parents('.tab-content').index()-1;
		//$('#tab ul li.tab1').find('.current_step').text(getindex+1);
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
		$(this).parents('#tab').find('ul li.tab2').removeClass('active');
		$(this).parents('#tab').find('ul li.tab2').removeClass('completed_step');
	});
	$('#inner_tab2 a.innner_previous_btn').click(function(e){
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index()-1;
		$('#tab ul li.tab2').find('.current_step').text(getindex+1);
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
	});
	/*$('#inner_tab3 a.main_previous_btn').click(function(){
		var getindex = $(this).parents('.tab-content').index()-1;
		//$('#tab ul li.tab2').find('.current_step').text(getindex+1);
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
	
	});*/
	$('#inner_tab4 a.main_previous_btn').click(function(){
		var getindex = $(this).parents('.tab-content').index()-1;
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
		$(this).parents('#tab').find('ul li.tab4').removeClass('active');
		$(this).parents('#tab').find('ul li.tab4').removeClass('completed_step');
	});
	$('#inner_tab4 a.innner_previous_btn').click(function(e){
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index()-1;
		$('#tab ul li.tab4').find('.current_step').text(getindex+1);
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		 $(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).addClass('avtive_inner_tab').siblings().removeClass('avtive_inner_tab');
	});
	$('#inner_tab5 a.main_previous_btn').click(function(){
		var getindex = $(this).parents('.tab-content').index()-1;
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
		$(this).parents('#tab').find('ul li.tab5').removeClass('active');
		$(this).parents('#tab').find('ul li.tab5').removeClass('completed_step');
	});
	
	/*=================================== custom popup ================================*/
	
	$('#mineral_vitamins').click(function(){
		$('body').find('.modal_1').fadeIn();
	});
	$('a.close_btn').click(function(e){
		e.preventDefault();
		$('body').find('.modal_1').fadeOut();
	});
	
	
	$('#transition_kit').click(function(){
		$('body').find('.modal_2').fadeIn();
	});
	$('a.close_btn2').click(function(e){
		e.preventDefault();
		$('body').find('.modal_2').fadeOut();
	});

	jQuery('.reset_bentobox').click(function(e){
		e.preventDefault();
		jQuery('input[name="bento-form[full-bento-box]"]').prop('checked', false);
	});

	jQuery('.reset_proteins').click(function(e){
		e.preventDefault();
		jQuery('#checkproteins1').prop('checked', true);
		jQuery('#checkproteins1').prop('disabled', false);
		jQuery('#checkproteins2').prop('checked', true);
		jQuery('#checkproteins2').prop('disabled', false);
		jQuery('#checkproteins3').prop('checked', true);
		jQuery('#checkproteins3').prop('disabled', false);
	});

function actualCaloryPerDay(total_calory_required){
	var actual_calory_per_day=100;
	if(near_100(140, 210, total_calory_required) == 140){
		actual_calory_per_day=141;
	}else if(near_100(210,281, total_calory_required) == 210){
		actual_calory_per_day=211;
	}else if(near_100(281,351, total_calory_required) == 281){
		actual_calory_per_day=281;
	}else if(near_100(351,421, total_calory_required) == 351){
		actual_calory_per_day=352;
	}else if(near_100(421,492, total_calory_required) == 421){
		actual_calory_per_day=422;
	}else if(near_100(492,562, total_calory_required) == 492){
		actual_calory_per_day=492;
	}else if(near_100(562,703, total_calory_required) == 562){
		actual_calory_per_day=562;
	}else if(near_100(703,843, total_calory_required) == 703){
		actual_calory_per_day=703;
	}else if(near_100(843,984, total_calory_required) == 843){
		actual_calory_per_day=844;
	}else if(near_100(984,1124, total_calory_required) == 984){
		actual_calory_per_day=984;
	}else if(near_100(1124,1406, total_calory_required) == 1124){
		actual_calory_per_day=1125;
	}else if(near_100(1406,1687, total_calory_required) == 1406){
		actual_calory_per_day=1406;
	}else if(near_100(1687,1968, total_calory_required) == 1687){
		actual_calory_per_day=1687;
	}else if(near_100(1968,2000, total_calory_required) == 1968){
		actual_calory_per_day=1968;
	}else if(near_100(2000,2109, total_calory_required) == 2000){
		actual_calory_per_day=1687;
	}else if(near_100(2109,2530, total_calory_required) == 2109){
		actual_calory_per_day=2109;
	}else if(near_100(2530,2952, total_calory_required) == 2530){
		actual_calory_per_day=2531;
	}else if(near_100(2952,3300, total_calory_required) == 2952){
		actual_calory_per_day=2953;
	}	
	return actual_calory_per_day;
}

function calculate_box_and_portion(total_calory_required){
	var box_size='N/A';
	var portion=0;
	var boxandprice= [];
	if(near_100(140, 210, total_calory_required) == 140){
		box_size='X-Small';
		portion=0.333;
		boxandprice.push(portion,box_size);
	}else if(near_100(210,281, total_calory_required) == 210){
		box_size='X-Small';
		portion=0.5;
		boxandprice.push(portion,box_size);
	}else if(near_100(281,351, total_calory_required) == 281){
		box_size='Small';
		portion=0.5;
		boxandprice.push(portion,box_size);
	}else if(near_100(351,421, total_calory_required) == 351){
		box_size='Medium';
		portion=0.5;
		boxandprice.push(portion,box_size);
	}else if(near_100(421,492, total_calory_required) == 421){
		box_size='Large';
		portion=0.5;
		boxandprice.push(portion,box_size);
	}else if(near_100(492,562, total_calory_required) == 492){
		box_size='Xtra large';
		portion=0.5;
		boxandprice.push(portion,box_size);
	}else if(near_100(562,703, total_calory_required) == 562){
		box_size='Small';
		portion=1;
		boxandprice.push(portion,box_size);
	}else if(near_100(703,843, total_calory_required) == 703){
		box_size='Medium';
		portion=1;
		boxandprice.push(portion,box_size);
	}else if(near_100(843,984, total_calory_required) == 843){
		box_size='Large';
		portion=1;
		boxandprice.push(portion,box_size);
	}else if(near_100(984,1124, total_calory_required) == 984){
		box_size='Xtra large';
		portion=1;
		boxandprice.push(portion,box_size);
	}else if(near_100(1124,1406, total_calory_required) == 1124){
		box_size='Small';
		portion=2;
		boxandprice.push(portion,box_size);
	}else if(near_100(1406,1687, total_calory_required) == 1406){
		box_size='Medium';
		portion=2;
		boxandprice.push(portion,box_size);
	}else if(near_100(1687,1968, total_calory_required) == 1687){
		box_size='Large';
		portion=2;
		boxandprice.push(portion,box_size);
	}else if(near_100(1968,2000, total_calory_required) == 1968){
		box_size='Xtra large';
		portion=2;
		boxandprice.push(portion,box_size);
	}else if(near_100(2000,2109, total_calory_required) == 2000){
		box_size='Small';
		portion=3;
		boxandprice.push(portion,box_size);
	}else if(near_100(2109,2530, total_calory_required) == 2109){
		box_size='Medium';
		portion=3;
		boxandprice.push(portion,box_size);
	}else if(near_100(2530,2952, total_calory_required) == 2530){
		box_size='Large';
		portion=3;
		boxandprice.push(portion,box_size);
	}else if(near_100(2952,3300, total_calory_required) == 2952){
		box_size='Xtra large';
		portion=3;
		boxandprice.push(portion,box_size);
	}
	return boxandprice;
}
function get_multiplier(activity_level,neutered){
	var multipliers=1;
	if(activity_level=="Relaxed" && neutered=="Yes"){
		multipliers=85;
	}
	else if(activity_level=="Relaxed" && neutered=="No"){
		multipliers=95;
	}
	else if(activity_level=="Energized"){
		multipliers=110;
	}
	else if(activity_level=="Sporty"){
		multipliers=125;
	}
	return multipliers;
}
function get_bcs_variance(bcs){
	var bcs_variance=1;
	if(bcs=='Skinny'){
		bcs_variance=1.15;
	}else if(bcs=="Chubby"){
		bcs_variance=0.85;
	}else if(bcs=="Just right"){
	    bcs_variance=1;
	}
	return bcs_variance;
}

function set_delivery_boxes(boxes){
	if(boxes=='1 week'){
	    jQuery('#save_dog_dataa').val('4946');
		jQuery('#delivery_frequency1').val('1 week');
		jQuery('#delivery_frequency1').next('label').text('Deliveries every 1 week');
		jQuery('#delivery_frequency2').prop('disabled',true);
		jQuery('#delivery_frequency2').next('label').text('Deliveries every 2 weeks');
	}
	else if(boxes=='2 weeks'){
	    jQuery('#save_dog_dataa').val('4947');
	    jQuery('#delivery_frequency2').prop('disabled',false);
		jQuery('#delivery_frequency1').val('2 weeks');
		jQuery('#delivery_frequency1').next('label').text('Deliveries every 2 weeks');
		jQuery('#delivery_frequency2').val('1 week');
		jQuery('#delivery_frequency2').next('label').text('Deliveries every 1 week');
	}else if(boxes=='4 weeks'){
	    jQuery('#save_dog_dataa').val('4948');
	    jQuery('#delivery_frequency2').prop('disabled',false);
		jQuery('#delivery_frequency1').val('4 week');
		jQuery('#delivery_frequency1').next('label').text('Deliveries every 4 weeks');
		jQuery('#delivery_frequency2').val('2 week');
		jQuery('#delivery_frequency2').next('label').text('Deliveries every 2 weeks');
	}
}
function set_split_boxes(portion){
	if(portion==1 || portion==0.5){
		jQuery('#box-per-day1').val('1 box');
		jQuery('#box-per-day1').next('label').text('1 box per day');
		jQuery('#box-per-day2').val('2 box');
		jQuery('#box-per-day2').next('label').text('Repack daily meals into 2 boxes');
	}else if(portion==2){
		jQuery('#box-per-day1').val('2 boxes');
		jQuery('#box-per-day1').next('label').text('2 boxes per day');
		jQuery('#box-per-day2').val('4 boxes');
		jQuery('#box-per-day2').next('label').text('Repack daily meals into 4 boxes');
	}else if(portion==3){
		jQuery('#box-per-day1').val('3 boxes');
		jQuery('#box-per-day1').next('label').text('3 boxes per day');
		jQuery('#box-per-day2').val('6 boxes');
		jQuery('#box-per-day2').next('label').text('Repack daily meals into 6 boxes');
	}else{
		jQuery('#box-per-day1').val('1 box');
		jQuery('#box-per-day1').next('label').text('1 box per day');
		jQuery('#box-per-day2').val('3 box');
		jQuery('#box-per-day2').next('label').text('Repack daily meals into 3 boxes');
	}
}
function calculate_calory(){

	var weight_of_dog=parseFloat(Math.ceil(jQuery('body').find('input[bento="pet-weight"]').val())).toFixed(2);
	var neutered= jQuery('body').find('input[bento="pet-neutered"]:checked').val();
	var bcs=jQuery('body .waistline-section').find('input[bento="optradio"]:checked').val();
	var activity_level=jQuery('body .activity-section').find('input[bento="optradio"]:checked').val();
	var bcs_variance=get_bcs_variance(bcs);
	var multipliers=get_multiplier(activity_level,neutered);
	var adjusted_weight=weight_of_dog * parseFloat(bcs_variance).toFixed(2);
	var rer=Math.pow(adjusted_weight,0.75).toFixed(2);
	var der=Math.ceil(rer*multipliers);
    var total_calory_required=der;
	var actual_calory_per_day= actualCaloryPerDay(total_calory_required);
	jQuery('.bento_box mark.callory_per_day').text(actual_calory_per_day);
	actual_calory_per_day=total_calory_required;
	var shipping_charge=17.50;
	var transition_charge=55;
	// full bento box calculation
	var box_portion=calculate_box_and_portion(total_calory_required);
	var portion=box_portion[0];
	var box_size=box_portion[1];

	jQuery('.bento_box mark .box_size').text(box_size);
	jQuery('.bento_box mark .portion_size').text(portion);

	var totalboxfull=box_calculation(portion,'full');
	var totalboxhalf=box_calculation(portion,'half');
	var fullweek=week_calculation(portion,'full');
	var halfweek=week_calculation(portion,'half');

	var full_bento_price=parseFloat(full_bento_box_calculation(totalboxfull,portion,box_size,'full'));
	var half_bento_price=parseFloat(full_bento_box_calculation(totalboxhalf,portion,box_size,'half'));

    var half_bento_additional_cost=half_bento_price+(half_bento_price*11.5)/100;
	var cost_with_split_charge_full=parseFloat(full_bento_price).toFixed(2);
	var cost_with_split_charge_half=parseFloat(half_bento_additional_cost).toFixed(2);
	jQuery('.pice_skip_transition').text("$"+ cost_with_split_charge_full);
	jQuery('.pice_skip_transition_half').text("$"+ cost_with_split_charge_half);

	jQuery('.fullplan_boxes').text(totalboxfull);
	jQuery('.halfplan_boxes').text(totalboxhalf);
	jQuery('.fullplan_box_size').text(box_size);
	jQuery('.halfplan_box_size').text(box_size);

	jQuery('.fullweek').text(fullweek[0]);
	jQuery('.halfweek').text(halfweek[0]);
	jQuery('.price_every_week_full').text(fullweek[1]);
	jQuery('.price_every_week_half').text(halfweek[1]);
	jQuery('#full-bento-box2').val(fullweek[2]);
	jQuery('#half-bento-box2').val(halfweek[2]);


}

function box_calculation(recomended_portion,bento_type){
	var total_boxes=0;
	if(bento_type=='full'){
		if(recomended_portion<1){
			total_boxes=recomended_portion*28;
		}else if(recomended_portion==1){
			total_boxes=recomended_portion*14;
		}else if(recomended_portion==2){
			total_boxes=recomended_portion*7;
		}else if(recomended_portion==3){
			total_boxes=recomended_portion*7;
		}
		
	}else if(bento_type=='half'){
		if(recomended_portion<1){
			total_boxes=(recomended_portion/2)*28;
		}else if(recomended_portion==1){
			total_boxes=(recomended_portion/2)*28;
		}else if(recomended_portion==2){
			total_boxes=(recomended_portion/2)*14;
		}else if(recomended_portion==3){
			total_boxes=(recomended_portion/2)*14;
		}
	}
	return Math.ceil(total_boxes);
}
function set_total_boxes(pork_boxes,chicken_boxes,beef_boxes,bento_type){
	if(bento_type=='full'){
		if(pork_boxes>0 && chicken_boxes>0 && beef_boxes>0 ){
			jQuery('.fullboxpcb').text('Includes '+pork_boxes+' Pork, '+chicken_boxes+' Chicken and '+beef_boxes+' Beef');
		}else if(pork_boxes>0 && chicken_boxes>0 ){
			jQuery('.fullboxpcb').text('Includes '+pork_boxes+' Pork and '+chicken_boxes+' Chicken');
		}else if(chicken_boxes>0 && beef_boxes>0){
			jQuery('.fullboxpcb').text('Includes '+chicken_boxes+' Chicken and '+beef_boxes+' Beef');
		}else if(pork_boxes>0 && beef_boxes>0 ){
			jQuery('.fullboxpcb').text('Includes '+pork_boxes+' Pork and '+beef_boxes+' Beef');
		}else if(pork_boxes==0 && chicken_boxes==0 ){
			jQuery('.fullboxpcb').text('Includes '+beef_boxes+' Beef');
		}else if(chicken_boxes==0 && beef_boxes==0){
			jQuery('.fullboxpcb').text('Includes '+pork_boxes+' Pork');
		}else if(pork_boxes==0 && beef_boxes==0 ){
			jQuery('.fullboxpcb').text('Includes '+chicken_boxes+' Chicken');
		}
	}else if(bento_type=='half'){
		if(pork_boxes>0 && chicken_boxes>0 && beef_boxes>0 ){
			jQuery('.halfboxpcb').text('Includes '+pork_boxes+' Pork, '+chicken_boxes+' Chicken and '+beef_boxes+' Beef');
		}else if(pork_boxes>0 && chicken_boxes>0 ){
			jQuery('.halfboxpcb').text('Includes '+pork_boxes+' Pork and '+chicken_boxes+' Chicken');
		}else if(chicken_boxes>0 && beef_boxes>0){
			jQuery('.halfboxpcb').text('Includes '+chicken_boxes+' Chicken and '+beef_boxes+' Beef');
		}else if(pork_boxes>0 && beef_boxes>0 ){
			jQuery('.halfboxpcb').text('Includes '+pork_boxes+' Pork and '+beef_boxes+' Beef');
		}else if(pork_boxes==0 && chicken_boxes==0 ){
			jQuery('.halfboxpcb').text('Includes '+beef_boxes+' Beef');
		}else if(chicken_boxes==0 && beef_boxes==0){
			jQuery('.halfboxpcb').text('Includes '+pork_boxes+' Pork');
		}else if(pork_boxes==0 && beef_boxes==0 ){
			jQuery('.halfboxpcb').text('Includes '+chicken_boxes+' Chicken');
		}
	}
}
function week_calculation(recomended_portion,bento_type){
	var delivery_and_priceweek=[];
	if(bento_type=='full'){
		if(recomended_portion<1){
			delivery_and_priceweek.push('Delivered every 4 weeks','every 4 weeks','4 weeks');
		}else if(recomended_portion==1){
			delivery_and_priceweek.push('Delivered every 2 weeks','every 2 weeks','2 weeks');
		}else if(recomended_portion==2){
			delivery_and_priceweek.push('Delivered every 1 week','every 1 week','1 week');
		}else if(recomended_portion==3){
			delivery_and_priceweek.push('Delivered every 1 week','every 1 week','1 week');
		}
		
	}else if(bento_type=='half'){
		if(recomended_portion<1){
			delivery_and_priceweek.push('Delivered every 4 weeks','every 4 weeks','4 weeks');
		}else if(recomended_portion==1){
			delivery_and_priceweek.push('Delivered every 4 weeks','every 4 weeks','4 weeks');
		}else if(recomended_portion==2){
			delivery_and_priceweek.push('Delivered every 2 weeks','every 2 weeks','2 weeks');
		}else if(recomended_portion==3){
			delivery_and_priceweek.push('Delivered every 2 weeks','every 2 weeks','2 weeks');
		}
	}
	return delivery_and_priceweek;
}

function bento_price_list(portion,box_size){
	var price = [];
	if(box_size=="X-Small" && portion=='0.333'){
		price.push(7.50,8.50,9.50);
	}else if(box_size=="X-Small" && portion=='0.5'){
		price.push(7.50,8.50,9.50);
	}else if(box_size=="Small" && portion=='0.5'){
		price.push( 9.24,10.50,11.97);
	}else if(box_size=="Medium" && portion=='0.5'){
		price.push(10.50,12.08,13.97);
	}else if(box_size=="Large" && portion=='0.5'){
		price.push(11.76,13.76,15.86 );
	}else if(box_size=="Xtra large" && portion=='0.5'){
		price.push(13.13,15.33,17.85 );
	}else if(box_size=="Small" && portion=='1'){
		price.push(8.36,9.50,10.83);
	}else if(box_size=="Medium" && portion=='1'){
		price.push(9.50,10.93,12.64);
	}else if(box_size=="Large" && portion=='1'){
		price.push(10.53,12.31,14.19);
	}else if(box_size=="Xtra large" && portion=='1'){
		price.push(11.75,13.72,15.98);
	}else if(box_size=="Small" && portion=='2'){
		price.push(7.57,8.60,9.80);
	}else if(box_size=="Medium" && portion=='2'){
		price.push(8.50,9.78,11.31);
	}else if(box_size=="Large" && portion=='2'){
		price.push(9.41,11.00,12.68);
	}else if(box_size=="Xtra large" && portion=='2'){
		price.push(11.75,13.72,15.98);
	}else if(box_size=="Small" && portion=='3'){
		price.push( 7.57,8.60,9.80);
	}else if(box_size=="Medium" && portion=='3'){
		price.push(8.50,9.78,11.31);
	}else if(box_size=="Large" && portion=='3'){
		price.push(9.41,11.00,12.68);
	}else if(box_size=="Xtra large" && portion=='3'){
		price.push(11.75,13.72,15.98);
	}
	return price;
}
function full_bento_box_calculation(total_boxes,recomended_portion,recomended_box_size,bento_type){
	var Proteins = [];
	var bento_price = [];
	var pork_boxes=0;
	var chicken_boxes=0;
	var beef_boxes=0;
	var chicken_price=0;
	var beef_price=0;
	var pork_price=0;
	var shipping_cost=10;
	var total_boxes =parseInt(total_boxes);
	jQuery('body').find('input[bento="option1"]:checked').each(function(i){
		Proteins[i] = jQuery(this).val();
    });
	
	if(Proteins.length ==3){
		pork_boxes=Math.ceil(total_boxes/3);
		chicken_boxes=Math.ceil((total_boxes-pork_boxes)/2);
		beef_boxes=total_boxes-pork_boxes-chicken_boxes;
	}
	else if(Proteins.length ==2){
		if(Proteins.includes('Pork Bento') && Proteins.includes('Beef Bento')  ){
			pork_boxes=Math.ceil(total_boxes/2);
			beef_boxes=total_boxes-pork_boxes;
		}else if(Proteins.includes('Pork Bento') && Proteins.includes('Chicken Bento')){
			pork_boxes=Math.ceil(total_boxes/2);
			chicken_boxes=total_boxes-pork_boxes;
		}else if(Proteins.includes('Beef Bento') && Proteins.includes('Chicken Bento')){
			chicken_boxes=Math.ceil(total_boxes/2);
			beef_boxes=total_boxes-chicken_boxes;
		}
	}else if(Proteins.length ==1){
		if(Proteins.includes('Pork Bento') ){
			pork_boxes=total_boxes;
		}else if(Proteins.includes('Chicken Bento')){
			chicken_boxes=total_boxes;
		}else if(Proteins.includes('Beef Bento')){
			beef_boxes=total_boxes;
		}
	}
	set_total_boxes(pork_boxes,chicken_boxes,beef_boxes,bento_type);
	var price_list=bento_price_list(recomended_portion,recomended_box_size);
		pork_price=roundUp(pork_boxes*price_list[0],1);
		chicken_price=roundUp(chicken_boxes*price_list[1],1);
		beef_price=roundUp(beef_boxes*price_list[2],1);
			
	return parseFloat(pork_price+chicken_price+beef_price+shipping_cost).toFixed(2);
}
function roundUp(num, precision) {
	precision = Math.pow(10, precision);
	return Math.ceil(num * precision) / precision;
  }
function near_100(x, y, z) {
	if (x != y)
	{
	x1 = Math.abs(x - z);
	y1 = Math.abs(y - z);
  
	if (x1 < y1)
	{
	  return x;
	}
	if (y1 < x1)
	{
	  return y;
	}
	return 0;
	}
	else
	  return false;
  }

  /*=========Debalina Code==========*/

	$('.custom-select select').each(function(){
	    var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
	    $this.addClass('select-hidden'); 
	    $this.wrap('<div class="select"></div>');
	    $this.after('<div class="select-styled"></div>');

	    var $styledSelect = $this.next('div.select-styled');
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'select-options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	        //if ($this.children('option').eq(i).is(':selected')){
	        //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
	        //}
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.select-styled.active').not(this).each(function(){
	            $(this).removeClass('active').next('ul.select-options').hide();
	        });
	        $(this).toggleClass('active').next('ul.select-options').toggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();
	        $styledSelect.text($(this).text()).removeClass('active');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	        //console.log($this.val());
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('active');
	        $list.hide();
	    });

	});

	$('p.position-relative > a').click(function(e){
		e.preventDefault();
	});
  /*=========Debalina Code==========*/

});