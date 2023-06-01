jQuery(function ($) {

	var tabpanel = function (e) {
		e.preventDefault();
		var $parent = $(this).parent();
		$parent.addClass('active').siblings();
		$parent.addClass('current').siblings().removeClass('current');

		var ind = $parent.index();
		$('.tab-body .tab-content').eq(ind).show().siblings().hide();
	};
	$('#tab ul li a').click(tabpanel);

	$('#tab ul li').first().find('a').trigger('click');

	$('.tab-content').each(function () {
		$(this).find('.next').click(function () {
			var getindex = $(this).parents('.tab-content').index() + 1;
			if (getindex == 1) {
				var petBirthYear = $(this).parents('.inner_tab_content').find('input[name="birth-year"]').val();
				var petBirthMonth = $(this).parents('.inner_tab_content').find('input[name="birth-month"]').val();
				var petBirthDate = $(this).parents('.inner_tab_content').find('input[name="birth-date"]').val();
				if (petBirthYear == '') {
					alert('Please select the birthyear');
				} else if (petBirthYear.length < 4 || petBirthYear.length > 4) {
					$('input[name="birth-year"]').val('');
					alert('invalide year formate');
				} else if (petBirthMonth != '' && (petBirthMonth.length < 2 || petBirthMonth.length > 2 || petBirthMonth > 12)) {
					$('input[name="birth-month"]').val('');
					alert('invalide month formate');
				} else if (petBirthDate != '' && (petBirthDate.length < 2 || petBirthDate.length > 2 || petBirthDate > 31)) {
					$('input[name="birth-date"]').val('');
					alert('invalide day formate');
				} else {
					$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
				}
			}

			if (getindex == 2) {
				var isEating = $(this).parents('.inner_tab_content').find('input[name="pet-kibbles"]').is(":checked");
				var eatingVal = $(this).parents('.inner_tab_content').find('input[name="pet-kibbles"]:checked').val();
				var isEatingType = $(this).parents('.inner_tab_content').find('#health_eating input[type="radio"]').is(":checked");
				var brandSelectbox = $('#brand_dropdown').find(":selected").val();
				if (isEating == false) {
					alert('Please select eatings');
				} else if (eatingVal == true && isEatingType == false) {
					alert('Please select eating type below');
				}
				else if (brandSelectbox == '') {
					alert("Please select breed from below dropdown");
				}
				else {
					$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
				}
			}

			if (getindex == 3) {
				var ownerName = $(this).parents('.inner_tab_content').find('input[name="owner-name"]').val();
				var ownerEmail = $(this).parents('.inner_tab_content').find('input[name="owner-email"]').val();
				var validatePass = false;
				var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
				if (testEmail.test(ownerEmail)) {
					validatePass = true;
				} else {
					validatePass = false;
				}

				if (ownerName == '') {
					alert('please enter the name');
				} else if (ownerEmail == '') {
					alert('please enter the email');
				} else if (ownerEmail != '' && validatePass == false) {
					alert('Not a valid email address');
				} else {
					$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
				}
			}
			if (getindex == 4) {
				var ofBoxes = $(this).parents('.inner_tab_content').find('input[name="box-per-day"]').is(":checked");
				if (ofBoxes == false) {
					alert('Please select number of boxes');
				} else {
					$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('active');
					$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
				}
			}
		});

		$(this).find('.prev').click(function () {
			var getindex = $(this).parents('.tab-content').index() - 1;
			$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
			$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
		});
	});


	// =============================================================================================
	var totalSteps1 = $('#inner_tab .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab1').find('.total_inner_step').text(totalSteps1);
	$('#inner_tab .inner_tab_body').find('.inner_tab_content').each(function () {
		$(this).find('.inner_next').click(function () {
			var getindex = $(this).parents('.inner_tab_content').index() + 1;
			if (getindex == 1) {
				var petName = $(this).parents('.inner_tab_content').find('#furkid-name').val();
				$('body').find('input[name="pet-weight"]').attr("placeholder", petName + "'s weight");
				$('body').find('.pet_name').text(petName);
				if (petName == "") {
					alert('Name is the required field');
				} else {
					$('#tab ul li.tab1').find('.current_step').text(getindex + 1);
					if (totalSteps1 == (getindex + 1)) {
						$('#tab ul li.tab1').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 2) {
				var isChecked = $(this).parents('.inner_tab_content').find('input[name="pet-gender"]').is(":checked");
				var petGender = $(this).parents('.inner_tab_content').find('input[name="pet-gender"]:checked').val();
				if (petGender == 'boy') {
					radioColor = '#b6dee7';
					$('body').find('input[type="radio"]').addClass('boy');
					$('body').find('input[type="checkbox"]').addClass('boy');
				}
				if (petGender == 'girl') {
					radioColor = 'pink';
					$('body').find('input[type="radio"]').addClass('girl');
					$('body').find('input[type="checkbox"]').addClass('girl');
				}
				if (isChecked == false) {
					alert('Please select gender');
				} else {
					$('#tab ul li.tab1').find('.current_step').text(getindex + 1);
					if (totalSteps1 == (getindex + 1)) {
						$('#tab ul li.tab1').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 3) {
				var isCheckedBreed = $(this).parents('.inner_tab_content').find('input[name="pet-breed"]').is(":checked");
				var checkedBreedVal = $(this).parents('.inner_tab_content').find('input[name="pet-breed"]:checked').val();
				var mixBreedSelectbox1 = $('#mix_breed_select1').find(":selected").val();
				var mixBreedSelectbox2 = $('#mix_breed_select2').find(":selected").val();
				var pureBreedSelectbox = $('#pure_breed_selectdropdown').find(":selected").val();
				console.log(mixBreedSelectbox1, mixBreedSelectbox2, checkedBreedVal);
				if (isCheckedBreed == false) {
					alert('Please select breed');
				} else if (checkedBreedVal == 'Mix breed' && (mixBreedSelectbox1 == '' || mixBreedSelectbox2 == '')) {
					alert("Please select breed from below dropdown");
				} else if (checkedBreedVal == 'Pure breed' && pureBreedSelectbox == '') {
					alert("Please select breed from below dropdown");
				} else {
					$('#tab ul li.tab1').find('.current_step').text(getindex + 1);
					if (totalSteps1 == (getindex + 1)) {
						$('#tab ul li.tab1').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
		});
	});

	// =============================================================================================
	var totalSteps2 = $('#inner_tab2 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab2').find('.total_inner_step').text(totalSteps2);
	$('#inner_tab2 .inner_tab_body').find('.inner_tab_content').each(function () {
		$(this).find('.inner_next').click(function () {
			var getindex = $(this).parents('.inner_tab_content').index() + 1;
			if (getindex == 1) {
				var petWeight = $(this).parents('.inner_tab_content').find('input[name="pet-weight"]').val();
				if (petWeight == '') {
					alert('Please enter the weight');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 2) {
				var isNeutered = $(this).parents('.inner_tab_content').find('input[name="pet-neutered"]').is(":checked");
				if (isNeutered == false) {
					alert('Please select Yes or No');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 3) {
				var isWaistline = $(this).parents('.inner_tab_content').find('input[name="optradio"]').is(":checked");
				if (isWaistline == false) {
					alert('Please select Waistline');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 4) {
				var isActive = $(this).parents('.inner_tab_content').find('input[name="optradio"]').is(":checked");
				if (isActive == false) {
					alert('Please select How Active Is?');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 5) {
				var isAllergie = $(this).parents('.inner_tab_content').find('input[name="pet-allergie"]').is(":checked");
				var allergieVal = $(this).parents('.inner_tab_content').find('input[name="pet-allergie"]:checked').val();
				var isAllergieType = $(this).parents('.inner_tab_content').find('#if_allergies_have input[type="checkbox"]').is(":checked");
				if (isAllergie == false) {
					alert('Please select Allergies');
				} else if (allergieVal == 'Yes' && isAllergieType == false) {
					alert('Please select allergies type below');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 6) {
				var isChallenge = $(this).parents('.inner_tab_content').find('input[name="pet-health-challenges"]').is(":checked");
				var isChallengeType = $(this).parents('.inner_tab_content').find('input[name="pet-health-challenges"]:checked').val();
				var challengeVal = $(this).parents('.inner_tab_content').find('#health_challenges_to_apply input[type="checkbox"]').is(":checked");
				if (isChallenge == false) {
					alert('Please select challenges');
				} else if (challengeVal == false && isChallengeType == "Yes") {
					alert('Please select challenge type below');
				}
				else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 7) {
				var isFussy = $(this).parents('.inner_tab_content').find('input[name="pet-fussy"]').is(":checked");
				var fussyVal = $(this).parents('.inner_tab_content').find('input[name="pet-fussy"]:checked').val();
				var isFussyType = $(this).parents('.inner_tab_content').find('input[type="radion"]').is(":checked");
				if (isFussy == false) {
					alert('Please select fusyy');
				} else if (fussyVal == true && isFussyType == false) {
					alert('Please select fussy type below');
				}
				else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 8) {
				var isSnack = $(this).parents('.inner_tab_content').find('input[name="snackradio"]').is(":checked");
				if (isSnack == false) {
					alert('Please select Snack');
				} else {
					$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
					if (totalSteps2 == (getindex + 1)) {
						$('#tab ul li.tab2').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
		});
	});

	// =============================================================================================
	var totalSteps3 = $('#inner_tab3 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab3').find('.total_inner_step').text(totalSteps3);
	$('#inner_tab3 .inner_tab_body').find('.inner_tab_content').each(function () {
		$(this).find('.inner_next').click(function () {
			var getindex = $(this).parents('.inner_tab_content').index() + 1;
			$('#tab ul li.tab3').find('.current_step').text(getindex);
			if (totalSteps3 == (getindex)) {
				$('#tab ul li.tab3').addClass('completed_step');
			}
			$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
		});
	});

	// =============================================================================================
	var totalSteps4 = $('#inner_tab4 .inner_tab_body').find('.inner_tab_content').length;
	$('#tab ul li.tab4').find('.total_inner_step').text(totalSteps4);
	$('#inner_tab4 .inner_tab_body').find('.inner_tab_content').each(function () {
		$(this).find('.inner_next').click(function () {
			var getindex = $(this).parents('.inner_tab_content').index() + 1;
			if (getindex == 1) {
				var getProteins = $(this).parents('.inner_tab_content').find('input[name="option1"]').is(":checked");
				if (getProteins == false) {
					alert('Please Choose The Proteins');
				} else {
					$('#tab ul li.tab4').find('.current_step').text(getindex + 1);
					if (totalSteps4 == (getindex + 1)) {
						$('#tab ul li.tab4').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 2) {
				var fullBox = $(this).parents('.inner_tab_content').find('input[name="pet-plan"]').is(":checked");
				if (fullBox == false) {
					alert('Please select the below option');
				} else {
					$('#tab ul li.tab4').find('.current_step').text(getindex + 1);
					if (totalSteps4 == (getindex + 1)) {
						$('#tab ul li.tab4').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
			if (getindex == 3) {
				var fullBentoBox = $(this).parents('.inner_tab_content').find('input[name="full-bento-box"]').is(":checked");
				if (fullBentoBox == false) {
					alert('Please select the below option');
				} else {
					$('#tab ul li.tab4').find('.current_step').text(getindex + 1);
					if (totalSteps4 == (getindex + 1)) {
						$('#tab ul li.tab4').addClass('completed_step');
					}
					$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
				}
			}
		});
	});


	/*================================ get form data logic ========================*/

	$("input[name='pet-breed']").click(function () {
		var petBreed = $(this).val();
		if (petBreed == 'Mix breed') {
			$('#select_breed').show();
		} else {
			$('#select_breed').hide();
		}

		if (petBreed == 'Pure breed') {
			$('#pure_breed_select').show();
		} else {
			$('#pure_breed_select').hide();
		}
	});
	$("input[name='pet-allergie']").click(function () {
		var petAllergie = $(this).val();
		if (petAllergie == 'Yes') {
			$('#if_allergies_have').show();
		} else {
			$('#if_allergies_have').find('input[type="checkbox"]').prop('checked', false);
			$('#if_allergies_have').hide();
		}
	});
	$("input[name='pet-health-challenges']").click(function () {
		var petChallenges = $(this).val();
		if (petChallenges == 'Yes') {
			$('#health_challenges_to_apply').show();
		} else {
			$('#health_challenges_to_apply').find('input[type="checkbox"]').prop('checked', false);
			$('#health_challenges_to_apply').hide();
		}
	});
	$("input[name='others-allergies']").click(function () {
		if ($(this).is(':checked') == true) {
			$('body').find('#if_allergies_have input[name="if-other-allergies"]').show();
		} else {
			$('body').find('#if_allergies_have input[name="if-other-allergies"]').hide();
		}
	});

	$('button.openPaymentDropdown').click(function (e) {
		const dropdown = $(e.target).parents('.all_buttons').find(`#${e.target.name}`)
		console.log(dropdown)
		dropdown.addClass('d-block').siblings().addClass('d-none')
	})

	$("input[name='other-challenges']").click(function () {
		if ($(this).is(':checked') == true) {
			$('body').find('#health_challenges_to_apply input[name="tell-other-challenges"]').show();
		} else {
			$('body').find('#health_challenges_to_apply input[name="tell-other-challenges"]').hide();
		}
	});

	$('input[name="birth-year"]').keyup(function (e) {
		if (/\D/g.test(this.value)) {
			this.value = this.value.replace(/\D/g, '');
		}
	});
	$('input[name="birth-month"]').keyup(function (e) {
		if (/\D/g.test(this.value)) {
			this.value = this.value.replace(/\D/g, '');
		}
	});
	$('input[name="birth-date"]').keyup(function (e) {
		if (/\D/g.test(this.value)) {
			this.value = this.value.replace(/\D/g, '');
		}
	});


	/*================================ inner step previous btn ============================*/

	$('#inner_tab a.innner_previous_btn').click(function (e) {
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index() - 1;
		$('#tab ul li.tab1').find('.current_step').text(getindex + 1);
		$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
	});
	$('#inner_tab2 a.main_previous_btn').click(function () {
		var getindex = $(this).parents('.tab-content').index() - 1;
		//$('#tab ul li.tab1').find('.current_step').text(getindex+1);
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
	});
	$('#inner_tab2 a.innner_previous_btn').click(function (e) {
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index() - 1;
		$('#tab ul li.tab2').find('.current_step').text(getindex + 1);
		$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
	});
	$('#inner_tab3 a.main_previous_btn').click(function () {
		var getindex = $(this).parents('.tab-content').index() - 1;
		//$('#tab ul li.tab2').find('.current_step').text(getindex+1);
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');

	});
	$('#inner_tab4 a.main_previous_btn').click(function () {
		var getindex = $(this).parents('.tab-content').index() - 1;
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
	});
	$('#inner_tab4 a.innner_previous_btn').click(function (e) {
		e.preventDefault();
		var getindex = $(this).parents('.inner_tab_content').index() - 1;
		$('#tab ul li.tab4').find('.current_step').text(getindex + 1);
		$(this).parents('.inner_tab_body').find('.inner_tab_content').eq(getindex).show().siblings().hide();
	});
	$('#inner_tab5 a.main_previous_btn').click(function () {
		var getindex = $(this).parents('.tab-content').index() - 1;
		$(this).parents('.tab-body').find('.tab-content').eq(getindex).show().siblings().hide();
		$(this).parents('#tab').find('ul li').eq(getindex).addClass('current').siblings().removeClass('current');
	});

	/*=================================== custom popup ================================*/

	$('#mineral_vitamins').click(function () {
		$('body').find('.modal_1').fadeIn();
	});
	$('a.close_btn').click(function (e) {
		e.preventDefault();
		$('body').find('.modal_1').fadeOut();
	});


	$('#transition_kit').click(function () {
		$('body').find('.modal_2').fadeIn();
	});
	$('a.close_btn2').click(function (e) {
		e.preventDefault();
		$('body').find('.modal_2').fadeOut();
	});
});