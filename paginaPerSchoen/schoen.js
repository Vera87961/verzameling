var colors = [
	{
		hex: '#00759A',
	  name: 'Blue'
  },
	{
		hex: '#F7941D',
	  name: 'Orange'
  },
	{
		hex: '#A71930',
	  name: 'Red'
  },
	{
		hex: '#679146',
	  name: 'Green'
  }
];
new Vue({
	el: '#color-picker',
	data: {
		active: false,
		selectedColor: '',
		selectedColorName: '',
		colors: colors
	},
	computed: {
		selector: function() {
			if(!this.selectedColor) {
				return 'Color';
			}
			else {
				return '<span style="background: ' + this.selectedColor + '"></span> ' + this.selectedColorName;
			}
		}
	},
	methods: {
		setColor: function(color, colorName) {
			this.selectedColor = color;
			this.selectedColorName = colorName;
			this.active = false;
		},
		toggleDropdown: function() {
			this.active = !this.active;
		},
	}
});

function maatKlik(element, maat){
    divs = document.getElementsByClassName("grid-item");
    for (var i = 0; i < divs.length; i++) { 
        divs[i].style.backgroundColor = "#FFFFFF";

    }
    element.style.backgroundColor = "#808080";
}

