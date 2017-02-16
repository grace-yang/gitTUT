function function_name(argument) {
	// body...
}
function() {
	var a = q;
	if (true) {}
}
(function($){
	$.fn.kwicks=function(n){
		var p={
			isVertical:false,
			sticky:false,
			defaultKwick:0,
			event:'mouseover',
			spacing:0,duration:500
		};
		var o=$.extend(p,n);
		var q=(o.isVertical?'height':'width');
		var r=(o.isVertical?'top':'left');
		return this.each(function(){
			container=$(this);
			var k=container.children('li');
			var l=k.eq(0).css(q).replace(/px/,'');
			if(!o.max){
				o.max=(l*k.size())-(o.min*(k.size()-1))
			}
			else{
				o.min=((l*k.size())-o.max)/(k.size()-1)
			}
			if(o.isVertical){
				container.css({
					width:k.eq(0).css('width'),
					height:(l*k.size())+(o.spacing*(k.size()-1))+'px'
				}
			)}
			else{
				container.css({
					width:(l*k.size())+(o.spacing*(k.size()-1))+'px',
					height:k.eq(0).css('height')
				})
			}
			var m=[];
			for(i=0;i<k.size();i++){
				m[i]=[];
				for(j=1;j<k.size()-1;j++){
					if(i==j){
						m[i][j]=o.isVertical?j*o.min+(j*o.spacing):j*o.min+(j*o.spacing)
					}
					else{
						m[i][j]=(j<=i?(j*o.min):(j-1)*o.min+o.max)+(j*o.spacing)
					}
				}
			}
			k.each(function(i){
				var h=$(this);
				if(i===0){
					h.css(r,'0px')
				}
				else if(i==k.size()-1){
					h.css(o.isVertical?'bottom':'right','0px')
				}
				else{
					if(o.sticky){
						h.css(r,m[o.defaultKwick][i])
					}
					else{
						h.css(r,(i*l)+(i*o.spacing))
					}
				}
				if(o.sticky){
					if(o.defaultKwick==i){
						h.css(q,o.max+'px');h.addClass('active')
					}
					else{
						h.css(q,o.min+'px')
					}
				}
			h.css({margin:0,position:'absolute'});
			h.bind(o.event,function(){
				var c=[];
				var d=[];
			k.stop().removeClass('active');
			for(j=0;j<k.size();j++){
				c[j]=k.eq(j).css(q).replace(/px/,'');
				d[j]=k.eq(j).css(r).replace(/px/,'')
			}
			var e={};
			e[q]=o.max;
			var f=o.max-c[i];
			