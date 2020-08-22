let tasker ={
		construct: function(){
			this.variables();
			this.bindEvents();
		},
		variables: function(){
			this.open = true;
			this.click =  document.querySelector('#do');
			this.undo = document.querySelector('#undo');
			this.navbar = document.querySelector('.navbar');
		},
		openClose: function(){
			if(this.open){
				this.navbar.setAttribute('style','left:0');
				this.click.setAttribute('style','display:none');
				this.undo.setAttribute('style','display:block');
				this.open = false;
			}
			else{
				this.navbar.setAttribute('style','left: -100%');
				this.undo.setAttribute('style','display:none');
				this.click.setAttribute('style','display:block');
				this.open = true;
			}
		},
		bindEvents: function(){
			this.click.onclick = this.openClose.bind(this);
			this.undo.onclick = this.openClose.bind(this);
		}
	}