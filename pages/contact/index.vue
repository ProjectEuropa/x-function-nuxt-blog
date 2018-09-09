<template>
	<section id="contact-form">
		<div id="form-div">
			<h2 >お問い合わせはこちらからお願いします。</h2>
			<p class="name">
        <span class="validation" v-show="validation.name">お名前は必須です</span>
				<input name="name" v-model="contact.name" type="text" class="feedback-input" :placeholder="nameIcon + ' お名前'" id="name" />
			</p>
			
			<p class="email">
        <span class="validation" v-show="validation.email">メールアドレスは必須かつメールアドレスでなければなりません。</span>
				<input name="email" v-model="contact.email"  type="email" class="feedback-input" id="email" :placeholder="emailIcon + ' メールアドレス'" />
			</p>
			
			<p class="text">
        <span class="validation" v-show="validation.comment">お問い合わせ内容は必須です。</span>
				<textarea name="text" v-model="contact.comment" class="feedback-input" id="comment" :placeholder="commnentIcon + 'お問い合わせ内容' "></textarea>
			</p>
			<div class="submit">
				<input type="button" value="確認" id="button-blue" @click="confirm"/>
				<div class="ease"></div>
			</div>
		</div>
		<transition name="modal" v-if="showModal">
			<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

				<div class="modal-header" >
					<slot name="header">
					お問い合わせ内容確認
					</slot>
				</div>
        <loading :active.sync="isLoading" :can-cancel="false"></loading>
				<div class="modal-body" v-if="!complete">
					<slot name="body">
						<p>お名前：{{ contact.name }}</p>
						<p>メールアドレス：{{ contact.email }}</p>
						<p>お問い合わせ内容：{{ contact.comment }}</p>
					</slot>
				</div>

				<div class="modal-footer">
					<slot name="footer" v-if="!complete">
					<button class="modal-default-button cancel-btn" @click="showModal = false">
						<span>キャンセル</span>
					</button>
					<button class="modal-default-button btn" @click="send">
						<span>送信</span>
					</button>
					</slot>
					<slot name="footer" v-else-if="complete">
					<button class="modal-default-button cancel-btn complete-btn" @click="showModal = false; complete = false;">
						<span>お問い合わせが完了しました</span>
					</button>						
					</slot>
				</div>
				</div>
			</div>
			</div>
		</transition>
	</section>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
export default {
  components: {
    Loading
  },
	data() {
		return {
			nameIcon: '\uf007',
			emailIcon: '\uf003',
			commnentIcon: '\uf27b',
			showModal: false,
			complete: false,
      isLoading: false,
      contact: {
        name: '',
        email: '',
        comment: '',
      },
      validation: {
        name: false,
        email: false,
        comment: false,        
      }
		}
	},
  methods: {
    validations() {
      if (this.contact.name === '') {
        this.validation.name = true;
      } else {
        this.validation.name = false;
      }
      if (this.contact.email === '' || !(validator.validate(this.contact.email))) {
        this.validation.email = true;
      } else {
        this.validation.email = false;
      }
      if (this.contact.comment === '') {
        this.validation.comment = true;
      } else {
        this.validation.comment = false;
      }
      return (this.validation.name || this.validation.email || this.validation.comment);
    },
		confirm() {
      if (this.validations()) {
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    },
		send() {
      this.isLoading = true;
			const message = {
				text: 'name: ' + this.contact.name + '\n' + 'email: ' + this.contact.email + '\n' + 'comment: ' + this.contact.comment,
			}
			webhook.send(message, function(err, res) {
				if (err) {
					console.log('Error:', err);
				}
			});
      setTimeout(() => {
        this.contact.name = '';
			  this.contact.email = '';
			  this.contact.comment = '';
        this.isLoading = false;
        this.complete = true;
      },  3 * 1000)
		},
  }
}
const { IncomingWebhook } = require('@slack/client');
const url = 'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(url);
const validator = require("email-validator");
</script>

<style scoped>
h2 {
	color: #ffffff;
	font-size: 1.3em;
	text-align: center;
}
#contact-form {
	margin: 20px 0;
}
#feedback-page{
    text-align:center;
}

#form-div {
    background-color:rgba(72,72,72,0.4);
    padding-left:35px;
    padding-right:35px;
    padding-top:35px;
    padding-bottom:50px;
    width: 500px;
  	-moz-border-radius: 7px;
  	-webkit-border-radius: 7px;
  	margin: auto;
}

.feedback-input {
    color:#3c3c3c;
    /* font-family: Helvetica, Arial, sans-serif; */
  	font-weight:500;
    font-size: 18px;
    border-radius: 0;
    line-height: 22px;
    background-color: #fbfbfb;
    padding: 10px 10px 10px 54px;
    margin-bottom: 10px;
    width:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  	border: 3px solid rgba(0,0,0,0);
	  font-family: "FontAwesome";
}

.feedback-input:focus{
    background: #fff;
    box-shadow: 0;
    border: 3px solid #3498db;
    color: #3498db;
    outline: none;
  	padding: 13px 13px 13px 54px;
}

.focused{
    color:#30aed6;
    border:#30aed6 solid 3px;
}

textarea {
    width: 100%;
    height: 150px;
    line-height: 150%;
    resize:vertical;
}

input:hover, textarea:hover,
input:focus, textarea:focus {
    background-color:white;
}

#button-blue, .modal-default-button{
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    float:left;
    width: 100%;
    border: #fbfbfb solid 4px;
    cursor:pointer;
    background-color: #333333;
    color:white;
    font-size:24px;
    padding-top:22px;
    padding-bottom:22px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    margin-top:-4px;
    font-weight:700;
}

#button-blue:hover{
    background-color: rgba(0,0,0,0);
    color: #0493bd;
}
    
.submit:hover {
    color: #3498db;
}

.validation {
  color: #DC143C;
}
    
.ease {
    width: 0px;
    height: 74px;
    background-color: #fbfbfb;
    -webkit-transition: .3s ease;
    -moz-transition: .3s ease;
    -o-transition: .3s ease;
    -ms-transition: .3s ease;
    transition: .3s ease;
}

.submit:hover .ease{
  width:100%;
  background-color:white;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
	display: flex;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}

.cancel-btn {
  background: #d6d3d6;
  background-image: -webkit-linear-gradient(top, #d6d3d6, #000000);
  background-image: -moz-linear-gradient(top, #d6d3d6, #000000);
  background-image: -ms-linear-gradient(top, #d6d3d6, #000000);
  background-image: -o-linear-gradient(top, #d6d3d6, #000000);
  background-image: linear-gradient(to bottom, #d6d3d6, #000000);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.cancel-btn:hover {
  background: #878c8f;
  background-image: -webkit-linear-gradient(top, #878c8f, #a6a4a6);
  background-image: -moz-linear-gradient(top, #878c8f, #a6a4a6);
  background-image: -ms-linear-gradient(top, #878c8f, #a6a4a6);
  background-image: -o-linear-gradient(top, #878c8f, #a6a4a6);
  background-image: linear-gradient(to bottom, #878c8f, #a6a4a6);
  text-decoration: none;
}
@media only screen and (max-width: 580px) {
    #form-div{
        width: 88%;
    }
    .modal-default-button {
      width: 30%;
    }
    .modal-container {
      width: 300px;
    }
    .btn, .cancel-btn {
      width: 120px;
      padding: 0px 20px 0px 20px;
    }
    .modal-footer {
      justify-content: space-between;
    }
    .complete-btn {
      width: 250px;
    }
}
</style>
