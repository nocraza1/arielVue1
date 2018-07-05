
import Vue from 'vue';


export default {
  init() {
    // JavaScript to be fired on the home page

    var vue_1 = new Vue({
      el: '#arielPogi',
      data: {
       message: 'Ariel Super Pogi',
     },
     delimiters: ['<%', '%>'],
   });


    let vue_2 = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString(),
        },
      });

    let vue_3 = new Vue({
        el: '#app-3',
        data: {
          message: true,
        },
      });

    let vue_4 = new Vue({
        el: '#app-4',
        data: {
          // message: true,
        },
        methods: {
          hideApp3: () => {
            vue_3.message = vue_3.message === true ? false : true;
            $('#app-4').text((vue_3.message === true) ? 'Now you don\'t' : 'Now you see me');
          },
        },
      });
      let vue_5 = new Vue({
        el: '#app-5',
        data: {
          // message: true,
        },
        methods: {
          reverseMessageFunc: () => {
            // console.log($('#reverseMessageInput').val().split('').reverse().join(''));
            $('#reverseMessageOutput').text($('#reverseMessageInput').val().split('').reverse().join(''));
          },
        },
      });
    

      console.log(vue_1);
      console.log(vue_2);
      console.log(vue_3);
      console.log(vue_4);
      console.log(vue_5);
      // console.clear();

    jQuery(($) => {
		$('#asfd').val($('#asfd')[0].previousElementSibling.textContent);

		console.log($('#arielPogi').text());

		$('#edit_vue').val($('#arielPogi').text());

		$('#asfd').on('keyup', (j1) => $('#gg').html(j1.target.value == '' ? 'minimun: at least one character!' : j1.target.value));

		$('#edit_vue').on('keyup', () => {
			$('#arielPogi').text($('#edit_vue').val());

			$('#editedText').css('color', 'red').text('Edited');
			$('#arielPogi, #edit_vue').css('color', 'green');
		});



    });

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
